<template>
  <Radio label="1" v-model:value="labelVal">男</Radio>
  <Radio label="2" v-model:value="labelVal">女</Radio>
</template>

<script>
import Radio from '../../lib/Radio.vue';
import {ref} from 'vue';

export default {
  components:{Radio},
  setup(){
    const labelVal = ref('1')
    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>
</style>