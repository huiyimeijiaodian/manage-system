const helpRouter = [
  {
    path: '/adminauth/wait-audit',
    component: () => import('@/views/error-page/WaitAudit'),
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default helpRouter