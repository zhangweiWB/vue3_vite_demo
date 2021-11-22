import type { AppRouteModule } from '/@current_project/router/types';

import { LAYOUT } from '/@current_project/router/constant';
import { t } from '/@/hooks/web/useI18n';

const demo2: AppRouteModule = {
  path: '/demo2',
  name: 'demo2',
  component: LAYOUT,
  redirect: 'dashboard',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: '测试1',
  },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: LAYOUT,
      redirect: 'analysis',
      meta: {
        icon: 'ion:grid-outline',
        title: '面板2',
      },
      children: [
        {
          path: 'analysis',
          name: 'Analysis',
          component: () => import('/@current_project/views/dashboard/analysis/index.vue'),
          meta: {
            // affix: true,
            title: '分析2',
          },
        },
        {
          path: 'workbench',
          name: 'Workbench',
          component: () => import('/@current_project/views/dashboard/workbench/index.vue'),
          meta: {
            title: '结果2',
          },
        },
      ],
    },
  ],
};

export default demo2;
