<template>
  <div class="content">
    <h4 class="sub_title">员工列表</h4>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="age" prop="age"></el-table-column>
      <el-table-column label="sex" prop="sex"></el-table-column>
      <el-table-column label="depart" prop="depart"></el-table-column>
      <el-table-column label="position" prop="position"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type='primary' @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          name: "Tom",
          age: "20",
          sex: "男",
          depart: "研发部",
          position: "前端开发工程师",
        },
        {
          name: "Jamie",
          age: "22",
          sex: "女",
          depart: "设计部",
          position: "Ui设计师",
        },
      ],
      search: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped lang='scss'>
.content {
  min-height: calc(100vh - 70px);
  background: #fff;
}
</style>