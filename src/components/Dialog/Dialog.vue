<template>
<div>Dialog示例</div>
<Demo :component="{title:'基础用法',code:diglog1 ,ui:'Dialog1Demo'}"></Demo>
<Demo :component="{title:'函数式调用',code:diglog2 ,ui:'Dialog2Demo'}"></Demo>
 <Attributes :columns="columns" :data="data"></Attributes>
 <Methods :columns="methods" :data="data3"></Methods>
 <Slot :columns="slots" :data="data2"></Slot>
</template>

<script>
import { columns } from '../../code/columns.js'
import {slots} from '../../code/slot.js'
import {methods} from '../../code/methods.js'
import Attributes from '../Attributes.vue'
import { ref } from 'vue'
import Dialog from '../../lib/Dialog.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Button from '../../lib/Button.vue'
import Demo from '../Demo.vue'
import {diglog1,diglog2} from '../../code/code.js'
import Slot from '../Slot.vue'
import Methods from '../comMethods.vue'
export default {
  components:{
    Dialog,Button,Demo,Attributes,Slot,Methods
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
    const data3 = ref([
      {
        params: 'openDialog',
        desc: '通过调用函数使用',
        value:'无',
        context: 'title：标题 ｜ content：内容 ｜ ok：点击确认调用函数',
      },
    ])
     const data = ref([
      {
        params: 'visible',
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
    return{Demo,Dialog1Demo,diglog1,diglog2,Dialog2Demo,data,columns,slots,data2,data3,methods}
  }
}
</script>

<style>

</style>