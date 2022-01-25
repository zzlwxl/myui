<template>
  <Demo :component="{ title: '常规用法', code: button1, ui: 'Button1Demo' }"></Demo>
  <Demo :component="{ title: '尺寸大小', code: button2, ui: 'Button2Demo' }"></Demo>
  <Demo :component="{ title: '加载中', code: button3, ui: 'Button3Demo' }"></Demo>
  <Attributes :columns="columns" :data="data"></Attributes>
</template>

<script>
import Button from '../../lib/Button.vue'
import Demo from '../Demo.vue'
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import { button1, button2, button3 } from '../../code/code.js'
import { columns } from '../../code/columns.js'
import Attributes from '../Attributes.vue'
import { ref } from 'vue'
export default {
  components: { Button, Demo, Attributes },
  setup() {
    function onClick() {
      console.log('ho')
    }
    const data = ref([
      {
        params: 'level',
        desc: '按钮颜色',
        type: 'string',
        select: 'main / warn / danger ',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        select: 'big / small',
        default: 'default',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'Boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'Boolean',
        select: 'false / true',
        default: 'false',
      },
    ])
    return {
      onClick,
      Button1Demo,
      button1,
      Button2Demo,
      button2,
      Button3Demo,
      button3,
      columns,
      data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
