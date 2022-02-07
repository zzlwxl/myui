<template>
  <Radio @click="showDialog" label="1" v-model:value="labelVal">二级Office</Radio>
  <Radio @click="showDialog" label="2" v-model:value="labelVal">二级Java</Radio>
</template>

<script>
import Radio from '../../lib/Radio.vue';
import {ref} from 'vue';
import {openDialog} from '../../lib/openDialog.js'

export default {
  components:{Radio},
  setup(){
    const labelVal = ref('1')
    function showDialog(){
        openDialog({
          title:'温馨提示',
          content:'您好，往年office及格率仅为33.33%，java及格率为38%，请斟酌报考！',
          ok(){
          },
        })
    }
    return {labelVal,showDialog}
  }
};
</script>

<style lang="scss" scoped>
</style>