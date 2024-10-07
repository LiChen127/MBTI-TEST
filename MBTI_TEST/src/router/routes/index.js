const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/HomeView.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User/index.vue'),
  },
  {
    path: '/error',
    component: () => import('@/views/Error/index.vue'),
  },
  {
    path: '/own',
    name: 'Own',
    component: () => import('@/views/Own/index.vue'),
  },
  {
    path: '/question',
    name: 'Test',
    component: () => import('@/views/Test/index.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog/index.vue'),
  },
  // 登录注册模块
  // @wig: 精简到插槽实现
  // {
  //   path: '/user/login',
  //   component: () => import('@/views/User/Login/index.vue'),
  // },
  // {
  //   path: '/user/register',
  //   component: () => import('@/views/User/Register/index.vue'),
  // },
  // 人格信息模块
  {
    path: '/detail/:type',
    component: () => import('@/views/Detail/Personality/index.vue'),
  },
  // 答题模块
  {
    path: '/question/:id',
    component: () => import('@/views/Test/Question/index.vue'),
  },
  {
    path: '/question/result',
    component: () => import('@/views/Test/Result/index.vue'),
  },
  // 个人信息模块
  {
    path: '/own/message',
    component: () => import('@/views/Own/Message/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  // 文章博客模块
  // {
  //   path: '/blog/detail/:id'
  // }
];

export default routes;
