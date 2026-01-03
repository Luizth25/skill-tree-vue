<template>
  <div class="tree">
    <SkillNode
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    />
  </div>
</template>

<script setup lang="ts">
import SkillNode from './SkillNode.vue';

const skills = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'Vue' }
]
</script>

<style scoped>
.tree {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
