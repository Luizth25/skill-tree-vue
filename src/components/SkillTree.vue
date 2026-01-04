<script setup lang="ts">
import { useSkillStore } from "../stores/skillStore";
import SkillNode from "./SkillNode.vue";

const store = useSkillStore();
</script>

<template>
  <div class="tree">
    <SkillNode
      v-for="skill in store.unlockedSkills"
      :key="skill.id"
      :skill="skill"
      :can-upgrade="store.canUpgradeSkill(skill.id)"
      :can-downgrade="store.canDowngradeSkill(skill.id)"
      @upgrade="store.upgradeSkill(skill.id)"
      @downgrade="store.downgradeSkill(skill.id)"
    />
  </div>
</template>

<style scoped>
.tree {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
