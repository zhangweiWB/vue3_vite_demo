import type { Router } from 'vue-router';
import { useAppStore } from '/@current_project/store/modules/app';
import { useMultipleTabStore } from '/@current_project/store/modules/multipleTab';
import { useUserStore } from '/@current_project/store/modules/user';
import { usePermissionStore } from '/@current_project/store/modules/permission';
import { PageEnum } from '/@/enums/pageEnum';
import { removeTabChangeListener } from '/@/logics/mitt/routeChange';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // Just enter the login page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN) {
      const tabStore = useMultipleTabStore();
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      appStore.resetAllState();
      permissionStore.resetState();
      tabStore.resetState();
      userStore.resetState();
      removeTabChangeListener();
    }
  });
}
