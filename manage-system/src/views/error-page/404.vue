<template>
  <error-page :error-message="message"/>
</template>

<script>
  import ErrorPage from '@/components/ErrorPage/index.vue'
  export default {
    components: {ErrorPage},
    computed: {
      message() {
        return '抱歉！您访问的这个页面不存在~'
      }
    }
  }
</script>

<style scoped>

</style>
