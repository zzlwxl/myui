<template>
    <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav"></Topnav>
    <div class="content">
      <aside v-if="asideVisble">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/info">介绍</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
          <router-view></router-view>
      </main>
    </div>
    </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import { inject } from 'vue'
export default {
  setup() {
    let asideVisble = inject('asideVisble')

    return {
      asideVisble,
    }
  },
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
$activeColor:#40a9ff;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: #40a9ff;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    color: #fff;
  }
  > ol {
    > li {
      font-size: 14px;
      color: #fff;
      >a{
        display: block;
        padding: 4px 16px ;
      }
      .router-link-active{
        background-color: #fff;
        color: $activeColor;
        border-radius: (0 10% 10% 0);
      }
    }
  }
  main {
  overflow: auto;
}
}
</style>
