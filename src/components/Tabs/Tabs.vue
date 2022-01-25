<template>
  <div>Tabs示例</div>
  <Demo :component="{title:'常规用法',code:tabs1 ,ui:'Tabs1Demo'}"></Demo>
  <Attributes :columns="columns" :data="data"></Attributes>
</template>

<script>
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import Demo from '../Demo.vue'
import {tabs1} from '../../code/code.js'
import { columns } from '../../code/columns.js'
import Attributes from '../Attributes.vue'
import { ref } from 'vue'
export default {
  components:{
    Tabs,
    Tab,
    Tabs1Demo,
    Demo,
    Attributes
  },
  setup(){
    const data = ref([
      {
        params: 'title',
        desc: '导航标题',
        type: 'string',
        select: '-',
        default: '-',
      },
      {
        params: 'selected',
        desc: '所选择的导航标签',
        type: 'string',
        select: '-',
        default: '-',
      }
    ])
    return{
      Tabs1Demo,tabs1,columns,data
    }
  }
}
</script>

<style>

</style>