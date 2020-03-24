<template>
  <div class="errPage-container">
    <el-button icon="arrow-left" class="pan-back-btn" @click="back">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="error-text">{{errorMessage}}</h1>
        <h5>如有不满请联系管理员哦</h5>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/home/index">回首页</router-link>
          </li>
          <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img">
    </el-dialog>
  </div>
</template>

<script>
  import errGif from '@/assets/images/401.gif'

  export default {
    props: {
      errorMessage: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        errGif: errGif + '?' + +new Date(),
        ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
        dialogVisible: false
      }
    },
    methods: {
      back () {
        if (this.$route.query.noGoBack) {
          this.$router.push({path: '/home/index'})
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none !important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .error-text{
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
