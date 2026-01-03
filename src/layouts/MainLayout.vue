<template>
  <div class="layout">
    <aside class="sidebar">
      <UserProfile />
    </aside>

    <main class="content">
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import UserProfile from '../components/UserProfile.vue';
import Home from '../pages/Home.vue';
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: #121212;
  color: #fff;
}

.sidebar {
  background: #181818;
  padding: 8px;
}

.content {
  padding: 16px;
  overflow: hidden;
}
</style>
