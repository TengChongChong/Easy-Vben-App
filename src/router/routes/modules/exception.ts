import type { RouteRecordRaw } from 'vue-router';
import { EXCEPTION_COMPONENT } from '@/router/constant';
import { ExceptionEnum } from '@/enums/exceptionEnum';

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/exception/403',
    name: 'PageNotAccess',
    component: EXCEPTION_COMPONENT,
    props: {
      status: ExceptionEnum.PAGE_NOT_ACCESS,
    },
    meta: {
      title: '403',
      ignoreAuth: true,
    },
  },
  {
    path: '/exception/404',
    name: 'AssetsNotFound',
    component: EXCEPTION_COMPONENT,
    props: {
      status: ExceptionEnum.PAGE_NOT_FOUND,
    },
    meta: {
      title: '404',
      ignoreAuth: true,
    },
  },
  {
    path: '/exception/500',
    name: 'ServiceError',
    component: EXCEPTION_COMPONENT,
    props: {
      status: ExceptionEnum.ERROR,
    },
    meta: {
      title: '500',
      ignoreAuth: true,
    },
  },
  {
    path: '/exception/net-work-error',
    name: 'NetWorkError',
    component: EXCEPTION_COMPONENT,
    props: {
      status: ExceptionEnum.NET_WORK_ERROR,
    },
    meta: {
      title: '网络错误',
      ignoreAuth: true,
    },
  },
  {
    path: '/exception/not-data',
    name: 'NotData',
    component: EXCEPTION_COMPONENT,
    props: {
      status: ExceptionEnum.PAGE_NOT_DATA,
    },
    meta: {
      title: '无数据',
      ignoreAuth: true,
    },
  },
];

export default routes;
