<template>
  <div class="top-menu">
    <div class="top-menu-item" :class="{active: $index === curIndex}" v-for="(route, $index) in menus" :key="$index" @click="changeMenu(route)">
      <router-link class="router-link" :to="{ path: route.redirect }">{{
        (route.meta && route.meta.title) || ''
      }}</router-link>
    </div>
    {{ curIndex }}
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, nextTick } from 'vue';
  import { onBeforeRouteUpdate, useRouter } from 'vue-router';
  import { usePermissionStore } from '/@current_project/store/modules/permission';


  const permissionStore = usePermissionStore();
  let activeRoute = reactive({});
  const menuTree = permissionStore.getTopMenuTree;

  export default defineComponent({
    setup() {

      const { currentRoute } = useRouter();

      console.log('进入时')
      console.log(currentRoute)
      let curIndex = ref(0)

      const initActiveRoute = () => {
        const matchedRoute = currentRoute.value.matched
        let activeIndex = 0; let activePath = ''
        if (matchedRoute.length > 0) {
          activePath = matchedRoute[0].path
          activeIndex = menuTree.findIndex(item => {
            return item.path === activePath
          })
          curIndex.value = activeIndex
        }
        permissionStore.setActiveMenuItemList(menuTree[+activeIndex])
      }

      const changeMenu = (routeItem) => {
        permissionStore.setActiveMenuItemList(routeItem);
        activeRoute = routeItem;

        nextTick(initActiveRoute)
      };

      onBeforeRouteUpdate(initActiveRoute)

      nextTick(initActiveRoute)

      return {
        curIndex,
        activeRoute,
        changeMenu,
        menus: menuTree,
      };
    },
  });
</script>
<style lang="less" scoped>
  .top-menu {
    display: flex;
    color: #525966;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 22px;

    .top-menu-item {
      padding: 17px 24px;
      cursor: pointer;

      &:hover {
        color: #242933;
        font-family: PingFangSC-Medium;
      }

      &.active{
        color: #0080ff;
        font-weight: bold;
      }
    }
  }
</style>
