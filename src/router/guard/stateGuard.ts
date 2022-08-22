import type { Router } from 'vue-router';
import { useAppStore } from '@/store/modules/app';
import { useUserStore } from '@/store/modules/user';
import { usePermissionStore } from '@/store/modules/permission';
import { PageEnum } from '@/enums/pageEnum';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // 转到登录页面清空一些缓存
    if (to.path === PageEnum.BASE_LOGIN) {
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      // 路由、本地缓存
      appStore.resetAllState();
      // 权限、菜单
      permissionStore.resetState();
      // 用户
      userStore.resetState();
    }
  });
}
