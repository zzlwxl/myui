<template>
  <doc-title>Radio 单选框示例</doc-title>
  <Demo :component="{title:'基础用法',code:radio ,ui:'Radio1Demo'}"></Demo>
  <Demo :component="{title:'提示式单选框',code:radio2 ,ui:'Radio2Demo'}"></Demo>
  <Attributes :columns="columns" :data="data"></Attributes>
</template>

<script>
import Radio1Demo from './Radio1.demo.vue';
import Radio2Demo from './Radio2.demo.vue';
import Attributes from '../Attributes.vue'
import Demo from '../Demo.vue'
import {ref} from 'vue';
import {radio,radio2} from '../../code/code.js'
import { columns } from '../../code/columns.js'

export default {
  name: 'RadioDoc',
    components:{
    Demo,Attributes
  },
  setup() {
    const data = ref([
      {
        params: 'label',
        desc: 'Radio 的 value',
        type: 'string / number / boolean',
        select: '-',
        default: '-',
      },
      {
        params: 'v-model:value',
        desc: '双向绑定',
        type: '绑定值',
        select: '-',
        default: 'labeVal=1',
      },
    ]);
    return {Radio1Demo,Radio2Demo, data, columns,radio,radio2};
  }
};
</script>

<style lang="scss" scoped>

</style>