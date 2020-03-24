<template>
  <el-row class="navbar">
    <el-col :span="8">
        <breadcrumb class="breadcrumb-container"/>
    </el-col>
    <el-col :span="16" style="text-align:right">
      <div class="right-menu">
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <span>jamie</span>
            <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="handleLogout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>    
  </el-row>
</template>

<script>
import {mapGetters} from "vuex";
import Breadcrumb from '@/components/Breadcrumb';
import Api from "@/utils/api.js";
export default {
  name: "Navbar",
  components: {
    Breadcrumb
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // 或者 userName: this.$store.userName
    ...mapGetters([
      "roleid",
      "rolename",
      "roleimg",
      "workerName",
      "workerImg"
    ])
  },
  data() {
    return {
      avatar: "https://udata.youban.com/webimg/xbl/xbluser.jpg"
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
    handleLogout() {
      Api.setCookie("auth","");
      setTimeout(() => {
        window.location.reload();
      }, 50);
    },
  }
};
</script>

<style lang="scss">
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .el-col{
    height: 50px;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }

  .breadcrumb-container {
    float: left;
  }
  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .role-box{
      display: inline-block;
      height: 50px;
      line-height: 50px;
      vertical-align: top;
      text-align: right;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .role-img{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        padding: 0 5px;
      }
      .role-name{
        margin-right:10px;
      }
    }
  .right-menu {
    .old-entry {
      position: relative;
      top: -14px;
    }

    float: right;
    height: 100%;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }

    .screenfull {
      height: 20px;
    }

    .international {
      vertical-align: top;
    }

    .theme-switch {
      vertical-align: 15px;
    }

    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        span{
          vertical-align: top;
          padding-right: 10px;
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
