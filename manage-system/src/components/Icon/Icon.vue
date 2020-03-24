<template>
  <i class="icon" :class="iconClass"></i>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      iconClass: {
        type: String,
      },
      className: {
        type: String,
        default: ''
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  .icon {
    width: 20px;
    color: rgb(191, 203, 217);
    overflow: hidden;
  }
</style>
