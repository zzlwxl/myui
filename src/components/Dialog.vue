<template>
<div>Dialog示例</div>
<Demo :component="{title:'基础用法',code:diglog1 ,ui:'Dialog1Demo'}"></Demo>
 <Attributes :columns="columns" :data="data"></Attributes>
 <Slot :columns="slots" :data="data2"></Slot>
</template>

<script>
import { columns } from '../code/columns.js'
import {slots} from '../code/slot.js'
import Attributes from './Attributes.vue'
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import {diglog1} from '../code/code.js'
import Slot from './Slot.vue'
export default {
  components:{
    Dialog,Button,Demo,Attributes,Slot
  },
  setup(){
    const data2 = ref([
      {
        params: 'title',
        desc: '提示标题',
      },
      {
        params: 'content',
        desc: '提示内容',
      }
    ])
     const data = ref([
      {
        params: 'title',
        desc: '是否展示',
        type: 'boolean',
        select: 'false / true  ',
        default: 'default',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '允许点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'false / true  ',
        default: 'true',
      },
      {
        params: 'ok',
        desc: '点击确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '()=>{}',
      },
      {
        params: 'cancel',
        desc: '点击取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '()=>{}',
      },

    ])
    return{Demo,Dialog1Demo,diglog1,Dialog2Demo,data,columns,slots,data2}
  }
}
</script>

<style>

</style>