<script setup lang="ts">
defineProps<{
  skill: {
    id: string;
    name: string;
    level: number;
    unlocked: boolean;
    maxLevel: number;
  };
  canUpgrade: boolean;
  canDowngrade: boolean;
}>();

const emit = defineEmits<{
  (e: "upgrade"): void;
  (e: "downgrade"): void;
}>();
</script>

<template>
  <div class="node" :class="{ locked: !skill.unlocked }">
    <div style="display: flex; flex-direction: column;">
      <strong>{{ skill.name }}</strong>
      <small>LV {{ skill.level }} / {{ skill.maxLevel }}</small>
    </div>
    <div class="button-container">
      <button
        v-if="canDowngrade"
        class="action-button"
        @click.stop="emit('downgrade')"
      >
        -
      </button>

      <button 
        v-if="canUpgrade" 
        class="action-button"
        @click.stop="emit('upgrade')"
      >+</button>

    </div>
  </div>
</template>

<style scoped>
.node {
  position: relative;
  flex-direction: column;
  gap: 8px;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background: #222;
  border: 2px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
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

.button-container {
  display: flex;
  gap: 4px;
}

.action-button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 4px 12px;
  color: #fff;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

.action-button:hover {
  border-color: #646cff;
}

</style>
