<template>
  <error-page :error-message="message"/>
</template>

<script>
  import ErrorPage from '@/components/ErrorPage/index.vue'
  export default {
    components: {ErrorPage},
    computed: {
      message() {
        return '抱歉！您的权限正在审核中，请耐心等待~'
      }
    }
  }
</script>

<style scoped>

</style>
