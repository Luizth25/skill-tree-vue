<template>
  <div class="node">
    {{ skill.name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    id: number
    name: string
  }
}>()
</script>

<style scoped>
.node {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #222;
  border: 2px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.node:hover {
  border-color: #7c7cff;
  box-shadow: 0 0 12px rgba(124, 124, 255, 0.6);
}
</style>
