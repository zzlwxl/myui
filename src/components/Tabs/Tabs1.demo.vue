<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="测试导航">内容3</Tab>
  </Tabs>
</template>

<script>
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {ref} from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
      const x = ref('导航1')
    return {
      Tabs,
      Tab,
      x
    }
  },
}
</script>

<style></style>
