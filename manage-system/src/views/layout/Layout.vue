<template>
  <div>
    <slider-nav class="sidebar-container"></slider-nav>
    <div class="main_container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { SliderNav, Navbar, AppMain } from "./components";
export default {
  name: "",
  data() {
   return {
   };
  },
  computed: {
  },
  components: {
    SliderNav,
    Navbar,
    AppMain
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px!important;
  height: 100%;
  font-size: 0;
  transition: width .28s;
  background-color: #304156;
  z-index: 1001;
  overflow: hidden;
}
.main_container{
  position: relative;
  margin-left: 200px;
}
</style>
