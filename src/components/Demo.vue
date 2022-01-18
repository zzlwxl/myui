<template>
  <div class="demo">
    <h2>{{component.title}}</h2>
    <div class="demo-component">
      <component :is="component.ui"></component>
    </div>
    <div class="demo-actions">
      <Button v-if="!codeVisible" @click="showCode">查看代码</Button>
      <Button v-else @click="hideCode">隐藏代码</Button>
    </div>
    <div class="demo-code markdown-body" v-if="codeVisible">
      <pre>{{component.code}}</pre>
    </div>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1.demo.vue'
import  Button1Demo from './Button1.demo.vue'
import  Button2Demo from './Button2.demo.vue'
import  Button3Demo from './Button3.demo.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import { ref } from 'vue'
export default {
  components: {
    Button,Switch1Demo,Button1Demo,Button2Demo,Button3Demo,Dialog1Demo,Dialog2Demo,Tabs1Demo
  },
  props: {
    component: Object,
  },
  setup() {
    const codeVisible = ref(false)
    function showCode() {
      codeVisible.value = true
    }
    function hideCode() {
      codeVisible.value = false
    }
    return {
      codeVisible,
      showCode,
      hideCode,
      Switch1Demo,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Dialog1Demo,
      Dialog2Demo,
      Tabs1Demo
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
