<template>
<div>Dialog示例</div>
<h1>示例1</h1>
<Button @click="toggle">打开</Button>
  <Dialog 
  v-model:visible="x" 
  :closeOnClickOverlay="false"
  :ok="f1" 
  :cancel="f2">
  <template v-slot:title>
     <strong>提示</strong>
  </template>
  <template v-slot:content>
  <div>你好</div>
  <div>你好</div>
  </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">打开</Button>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import {openDialog} from '../lib/openDialog.js'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components:{
    Dialog,Button
  },
  setup(){
    const x = ref(false)
    function  toggle(){
      x.value = !x.value
    }
    function f1(){
      return false
    }
    function f2(){

    }
    function showDialog(){
      openDialog({
          title:'标题',
          content:'您好',
          ok(){
            console.log('我是ok')
          },
          cancel(){
            console.log('我是cancel')
          }
        })
    }
    return{x,toggle,f1,f2,showDialog}
  }
}
</script>

<style>

</style>