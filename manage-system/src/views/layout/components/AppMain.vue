<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain"
};
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  position: relative;
  padding: 10px;
  min-height: calc(100vh - 50px);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #f0f2f5;
}
</style>
