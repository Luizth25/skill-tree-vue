import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { TSkill } from "../types/skill";

export const useSkillStore = defineStore("skillStore", () => {
  const skills = ref<TSkill[]>([
    { id: "html", name: "HTML", level: 0, xp: 0, maxXp: 100, requires: [] },
    { id: "css", name: "CSS", level: 0, xp: 0, maxXp: 100, requires: ["html"] },
    {
      id: "javascript",
      name: "JavaScript",
      level: 0,
      xp: 0,
      maxXp: 100,
      requires: ["html", "css"],
    },
    {
      id: "vue",
      name: "Vue",
      level: 0,
      xp: 0,
      maxXp: 100,
      requires: ["javascript"],
    },
  ]);

  const unlockedSkills = computed(() =>
    skills.value.map((skill) => ({
      ...skill,
      unlocked: skill.requires.every((req) =>
        skills.value.find((s) => s.id === req && s.level > 0)
      ),
    }))
  );

  const isUnlocked = (skillId: string) => {
    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return false;
    return skill.requires.every((reqId) => {
      const req = skills.value.find((s) => s.id === reqId);
      return !!req && req.level > 0;
    });
  };

  function gainXp(skillId: string, amount = 20) {
    const skill = skills.value.find((s) => s.id === skillId);
    if (!skill) return;
    if (skill.requires.length && !isUnlocked(skillId)) return;
    console.log(skill);
    skill.xp += amount;

    if (skill.xp >= skill.maxXp) {
      skill.level++;
      skill.xp = 0;
    }
  }

  return {
    skills,
    unlockedSkills,
    gainXp,
  };
});
