<template>
  <el-scrollbar wrap-class="scroll-wrapper">
    <el-menu
      :show-timeout="200"
      default-active="/add"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <slider-item
        v-for="(route,index) in sidebarRouter"
        :key="index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import slidebarRouter from "@/router/slidebarRouter";
import Api from "@/utils/api.js";
import SliderItem from "./SliderItem";
export default {
  name: "",
  data() {
    return {
      sidebarRouter: []
    };
  },
  computed: {
    isCollapse() {
      return false;
    }
  },
  components: {
    SliderItem
  },
  created() {
    this.sidebarRouter = slidebarRouter;
  },
  mounted() {},
  methods: {
  }
};
</script>

<style scoped lang='scss'>
.el-menu{
  border-right: 0;
}
</style>
