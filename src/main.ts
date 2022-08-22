import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from './router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from './store';
import { registerGlobComp } from '@/components/registerGlobComp';
import 'amfe-flexible';

import '@/design/index.less';
/**
 * 定义启动初始化函数
 */
const bootstrap = () => {
  const app = createApp(App);

  // 安装初始化store
  setupStore(app);

  // 安装初始化路由
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // 全局组件
  registerGlobComp(app);

  app.mount('#app');
};

// 启动
bootstrap();
