import type { AppRouteRecordRaw } from '@/router/types';

import {
  // MAIL_VERIFIES,
  PAGE_NOT_FOUND_ROUTE,
  // REDIRECT_ROUTE,
  // SYS_FUNCTION,
} from '@/router/routes/basic';

import { PageEnum } from '@/enums/pageEnum';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// 登录
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/auth/login/Login.vue'),
  meta: {
    title: '登录',
  },
};

// 首页
export const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/auth/home/index.vue'),
  meta: {
    title: '首页',
  },
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  HomeRoute,
  RootRoute,
  // REDIRECT_ROUTE,
  // SYS_FUNCTION,
  // MAIL_VERIFIES,
  PAGE_NOT_FOUND_ROUTE,
];
