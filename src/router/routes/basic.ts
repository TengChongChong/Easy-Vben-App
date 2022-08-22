import type { AppRouteRecordRaw } from '@/router/types';
import { REDIRECT_NAME, LAYOUT, EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME } from '@/router/constant';

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
      },
    },
  ],
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
};

// 公共路由
export const SYS_FUNCTION: AppRouteRecordRaw = {
  path: '/sys-function',
  name: 'SysFunction',
  component: LAYOUT,
  redirect: '/auth/personal/center/view',
  meta: {
    title: '系统功能',
  },
  children: [
    {
      path: '/auth/personal/center/view',
      name: 'AuthPersonalCenterView',
      component: () => import('@/views/auth/personal/center/View.vue'),
      meta: {
        title: '个人中心',
      },
    },
    {
      path: '/sys/message/view/:key',
      name: 'SysMessageView',
      component: () => import('@/views/sys/message/View.vue'),
      meta: {
        title: '消息',
      },
    },
  ],
};

// 邮箱验证
export const MAIL_VERIFIES: AppRouteRecordRaw = {
  path: '/auth/personal/center/mail-verifies/:code',
  name: 'AuthPersonalSettingMailVerifies',
  component: () => import('@/views/auth/personal/center/MailVerifies.vue'),
  meta: {
    title: '邮箱验证',
    ignoreAuth: true,
  },
};
