import Layout from '@/views/layout/Layout'
export default [
  {
    path: "/",
    component: Layout,
    redirect: "/home/index",
  },
  {
    path: "/home",
    component: Layout,
    meta: {
      title: "系统首页",
      icon: "el-icon-s-home"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/home/Index"),
        meta: { title: "系统首页" }
      }
    ]
  },
  {
    path: "/staff",
    component: Layout,
    redirect: "/staff/index",
    meta: {
      title: "员工管理",
      icon: "el-icon-user-solid"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/staff-mange/Index"),
        meta: { title: "员工列表" }
      },
      {
        path: "add",
        component: () => import("@/views/staff-mange/Add"),
        meta: { title: "添加员工" }
      }
    ]
  },
  {
    path: "/attendance",
    component: Layout,
    redirect: "/attendance/Clocks",
    meta: {
      title: "考勤管理",
      icon: "el-icon-s-claim"
    },
    children: [
      {
        path: "clocks",
        component: () => import("@/views/attendance-mange/Clocks"),
        meta: { title: "打卡" }
      },
      {
        path: "leave",
        component: () => import("@/views/attendance-mange/Leave"),
        meta: { title: "请假" }
      }
    ]
  },
  {
    path: "/performance",
    component: Layout,
    redirect: "/performance/index",
    meta: {
      title: "绩效管理",
      icon: "el-icon-s-finance"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/performance-mange/Index"),
        meta: { title: "绩效管理" }
      }
    ]
  },
  {
    path: "/notice",
    component: Layout,
    redirect: "/notice/index",
    meta: {
      title: "公告管理",
      icon: "el-icon-s-marketing"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/notice-mange/Index"),
        meta: { title: "公告管理" }
      }
    ]
  },
  {
    path: "/declare",
    component: Layout,
    redirect: "/declare/index",
    meta: {
      title: "申报管理",
      icon: "el-icon-s-order"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/declare-mange/Index"),
        meta: { title: "申报管理" }
      }
    ]
  },
  {
    path: "/auth",
    component: Layout,
    redirect: "/auth/config",
    meta: {
      title: "权限配置",
      icon: "el-icon-s-tools"
    },
    children: [
      {
        path: "config",
        component: () => import("@/views/auth-config/Index"),
        meta: { title: "权限配置" }
      }
    ]
  },
];