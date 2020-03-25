<template>
  <div class="content">
    <h4 class="sub_title">添加员工</h4>
    <el-form ref="form" :model="form" label-width="80px" >
      <el-form-item label="名字" :rules="[{ required: true, message: '名字不能为空'}]">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="年龄" :rules="[{ required: true, message: '年龄不能为空'}]">
        <el-input v-model="form.age"  placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-select v-model="form.depart" placeholder="请选择">
          <el-option label="研发部" value="yanfa"></el-option>
          <el-option label="产品部" value="chanpin"></el-option>
          <el-option label="设计部" value="sheji"></el-option>
          <el-option label="行政部" value="xingzheng"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="岗位名称">
        <el-input v-model="form.position"  placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="权限">
        <el-radio-group v-model="form.auth">
          <el-radio label="user">普通员工</el-radio>
          <el-radio label="admin">管理员</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style='text-align: right;'>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        form: {
          name: '',
          age: '',
          sex: 1,
          depart: '',
          position: '',
          auth:'user'
        }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      onSubmit() {
        console.log('submit!');
      }
  }
};
</script>

<style scoped lang='scss'>
.el-form{
    width: 60%;
    .el-select{
        width: 100%;
    }
}
</style>