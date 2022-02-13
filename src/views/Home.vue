<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav></Topnav>
      <div class="banner">
        <h1>zzlUI</h1>
        <h2>一个普通的UI框架</h2>
        <p class="actions">
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="info">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>为了学习vue3而写的一个组件库</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-js"></use>
          </svg>
          <h3>基于 JavaScript</h3>
          <p>还是要学习TypeScript的</p>
        </li>

        <li>
          <svg>
            <use xlink:href="#icon-idea"></use>
          </svg>
          <h3>代码易读</h3>
          <p>代码简单</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scopde>
.topnavAndBanner {
  border-bottom-left-radius: 50% 40px;
  border-bottom-right-radius: 50% 40px;
  background: linear-gradient(124deg, rgba(2, 0, 36, 1) 0%, rgba(255, 15, 109, 1) 35%, rgba(0, 212, 255, 1) 100%);
}
.info {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      width: 390px;
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 300px;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: rgb(255, 255, 255);
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
}
</style>
