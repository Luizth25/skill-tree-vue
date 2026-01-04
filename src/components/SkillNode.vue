<script setup lang="ts">
  import XPBar from './XPBar.vue';
  
  defineProps<{
    skill: {
      id: string
      name: string
      xp: number;
      maxXp: number;
      level: number
      unlocked: boolean
    }
  }>()
</script>

<template>
  <div 
  class="node"
  :class="{
    locked: !skill.unlocked,
    levelup: skill.xp === 0 && skill.level > 0
  }"
  >
    {{ skill.name }}
    <small>LV {{ skill.level }}</small>
    <XPBar
    v-if="skill.unlocked"
    :xp="skill.xp"
    :max-xp="skill.maxXp"
    />
  </div>
</template>

<style scoped>
.node {
  display: flex;
  flex-direction: column;
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

.levelup {
  animation: pulse 0.4s ease;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 rgba(124,124,255,0.0);
  }
  50% {
    box-shadow: 0 0 16px rgba(124,124,255,0.8);
  }
  100% {
    box-shadow: 0 0 0 rgba(124,124,255,0.0);
  }
}
</style>
