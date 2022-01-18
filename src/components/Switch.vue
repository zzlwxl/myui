<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="{title:'常规用法',code:switch1,ui:'Switch1Demo'}"></Demo>
     <Attributes :columns="columns" :data="data"></Attributes>
   </div>
   
</template>

<script>
import Switch from '../lib/Switch.vue'
import Switch1Demo from './Switch1.demo.vue'
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import {switch1} from '../code/code.js'
import { columns } from '../code/columns.js'
import Attributes from './Attributes.vue'
import { ref } from 'vue'
export default {
  components: {
    Switch,
    Button,
    Switch1Demo,
    Demo,
    Attributes
  },

  setup() {
    const bool = ref(false)
    const data = ref([
      {
        params: 'value',
        desc: '是否选中',
        type: 'Boolean',
        select: 'false / true ',
        default: 'false',
      }
    ])
    return {
      bool,Switch1Demo,switch1,columns,data
    }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
