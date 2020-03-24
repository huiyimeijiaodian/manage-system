<template>
  <error-page :error-message="message"/>
</template>

<script>
  import ErrorPage from '@/components/ErrorPage/index.vue'
  export default {
    components: {ErrorPage},
    computed: {
      message() {
        return '抱歉！您没有权限访问这个页面~'
      }
    }
  }
</script>

<style scoped>

</style>
