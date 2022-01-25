<template>
  <Button @click="toggle">打开</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <p>我是内容</p>
    </template>
  </Dialog>
</template>

<script>
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
import { ref } from 'vue'
export default {
  components: { Button, Dialog },
  setup() {
    const x = ref(false)
    function toggle() {
      x.value = !x.value
    }
    function f1() {}
    function f2() {
      return false
    }

    return { x, toggle, f1, f2 }
  },
}
</script>

<style></style>
