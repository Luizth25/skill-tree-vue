<template>
  <div 
  class="node"
  :class="{locked: !skill.unlocked}"
  >
    {{ skill.name }}
    <small>LV {{ skill.level }}</small>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    id: string
    name: string
    level: number
    unlocked: boolean
  }
}>()
</script>

<style scoped>
.node {
  width: 80px;
  height: 80px;
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
  border-color: #32cd32;
  box-shadow: 0 0 12px rgba(50, 205, 50, 0.6);
}

.locked {
  opacity: 0.3;
  pointer-events: none;
}

</style>
