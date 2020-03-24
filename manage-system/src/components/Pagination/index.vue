<template>
    <div class="pagination-container" :class="{'hidden': hidden}">
      <el-pagination
        :background="background"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :layout="layout"
        :total="total"
        v-bind="$attrs"
        @current-change="changeCurrentChange"
      >
      </el-pagination>
    </div>
</template>

<script>
  import {scrollTo} from '@/utils/scrollTo'
  export default {
    name: 'Pagination',
    props: {
      total: {
        type: Number,
        required: true
      },
      page: {
        type: Number,
        required: true
      },
      pageSize: {
        type: Number,
        required: true,
      },
      layout: {
        type: String,
        default: 'prev, pager, next'
      },
      background: {
        type: Boolean,
        default: true
      },
      autoScroll: {
        type: Boolean,
        default: true
      },
      hidden: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentPage:{
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      }
    },
    methods: {
      changeCurrentChange(val) {
        this.$emit('pagination', val)
        if (this.autoScroll) {
          scrollTo(0, 200)
        }
      }
    }
  }
</script>

<style scoped>
.pagination-container{
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>