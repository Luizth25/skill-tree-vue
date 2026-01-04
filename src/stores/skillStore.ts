import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { TSkill, TUser } from "../types";

export const useSkillStore = defineStore("skillStore", () => {
  const skills = ref<TSkill[]>([
    {
      id: "html",
      name: "HTML",
      level: 1,
      maxLevel: 10,
      requires: [],
    },
    {
      id: "css",
      name: "CSS",
      level: 0,
      maxLevel: 10,
      requires: ["html"],
    },
    {
      id: "javascript",
      name: "JavaScript",
      level: 0,
      maxLevel: 10,
      requires: ["html", "css"],
    },
    {
      id: "vue",
      name: "Vue",
      level: 0,
      maxLevel: 10,
      requires: ["javascript"],
    },
  ]);

  const user = ref<TUser>({
    userLevel: 1,
    userXp: 0,
    userMaxXp: 100,
    skillPoints: 20,
  });

  const unlockedSkills = computed(() =>
    skills.value.map((skill) => ({
      ...skill,
      unlocked: skill.requires.every((req) =>
        skills.value.find((s) => s.id === req && s.level > 0)
      ),
    }))
  );

  function canUpgradeSkill(skillId: string): boolean {
    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return false;

    const unlocked =
      skill.requires.length === 0 ||
      skill.requires.every((reqId) => {
        const req = skills.value.find((s) => s.id === reqId);
        return !!req && req.level > 0;
      });

    return (
      unlocked && skill.level < skill.maxLevel && user.value.skillPoints > 0
    );
  }

  function canDowngradeSkill(skillId: string): boolean {
    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return false;

    if (skill.level > 1) return true;

    if (skill.level === 1) {
      return !hasDependentSkills(skillId);
    }

    return false;
  }

  function upgradeSkill(skillId: string) {
    if (!canUpgradeSkill(skillId)) return;

    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return;

    skill.level++;
    user.value.skillPoints--;
  }

  function downgradeSkill(skillId: string) {
    if (!canDowngradeSkill(skillId)) return;

    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return;

    skill.level--;
    user.value.skillPoints++;
  }

  function hasDependentSkills(skillId: string): boolean {
    return skills.value.some(
      (skill) => skill.requires.includes(skillId) && skill.level > 0
    );
  }

  function gainXp(amount = 20) {
    user.value.userXp += amount;

    if (user.value.userXp >= user.value.userMaxXp) {
      user.value.userLevel++;
      user.value.userXp = 0;
      user.value.skillPoints += 5;
    }
  }

  return {
    skills,
    unlockedSkills,
    gainXp,
    upgradeSkill,
    canUpgradeSkill,
    downgradeSkill,
    canDowngradeSkill,
  };
});
