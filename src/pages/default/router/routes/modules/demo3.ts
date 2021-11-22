import type { AppRouteModule } from '/@current_project/router/types';

import { LAYOUT } from '/@current_project/router/constant';
import { t } from '/@/hooks/web/useI18n';

const demo3: AppRouteModule = {
  path: '/demo3',
  name: 'demo3',
  component: LAYOUT,
  redirect: 'dashboard',
  meta: {
    orderNo: 12,
    icon: 'ion:grid-outline',
    title: '测试2',
  },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: LAYOUT,
      redirect: 'analysis',
      meta: {
        icon: 'ion:grid-outline',
        title: t('routes.dashboard.dashboard'),
      },
      children: [
        {
          path: 'analysis',
          name: 'Analysis',
          component: () => import('/@current_project/views/dashboard/analysis/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.dashboard.analysis'),
          },
        },
        {
          path: 'workbench',
          name: 'Workbench',
          component: () => import('/@current_project/views/dashboard/workbench/index.vue'),
          meta: {
            title: t('routes.dashboard.workbench'),
          },
        },
      ],
    },
  ],
};

export default demo3;
