<template>
  <div class="tree">
    <SkillNode
      v-for="skill in store.unlockedSkills"
      :key="skill.id"
      :skill="skill"
      @click="store.gainXp(skill.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from '../stores/skillStore';
import SkillNode from './SkillNode.vue';

const store = useSkillStore()

</script>

<style scoped>
.tree {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
