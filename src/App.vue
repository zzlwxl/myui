<template>
  <router-view></router-view>
</template>

<script>
import { ref,provide } from 'vue'
import router from './router'
export default {
  name: 'App',
  components: {
  },
  setup(props) {
     const width = document.documentElement.clientWidth
     let asideVisible = ref(width <= 500 ? false : true)
     provide('asideVisble',asideVisible)
     router.afterEach(()=>{
       if(width<=500){
         asideVisible.value = false
       }
     })
   }
}
</script>
