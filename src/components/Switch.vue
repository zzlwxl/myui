<template>
  <div>switch</div>
  <Switch v-model:value="checked"></Switch>
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components:{
    Switch
  },
  setup(){
    const checked = ref(true)

    return{
      checked
    }
  }
}
</script>

<style>

</style>