<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  xp: number;
  maxXp: number;
}>();

const progress = computed(() => Math.min((props.xp / props.maxXp) * 100, 100));
</script>

<template>
  <div class="xp-bar">
    <div class="xp-fill" :style="{ width: progress + '%' }" />
  </div>
</template>

<style scoped>
.xp-bar {
  width: 100%;
  height: 10px;
  background: #333;
  border-radius: 6px;
  overflow: hidden;
}

.xp-fill {
  height: 100%;
  background: linear-gradient(90deg, #7c7cff, #4ade80);
  transition: width 0.3s ease;
}
</style>
