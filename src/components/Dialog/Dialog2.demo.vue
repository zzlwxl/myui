<template>
  <Button @click="showDialog">打开</Button>
</template>

<script>
import { openDialog } from '../../lib/openDialog.js'
import Button from '../../lib/Button.vue'
export default {
  components: {
    Button,
  },
  setup() {
    function showDialog() {
      openDialog({
        title: '标题',
        content: '您好',
        ok() {
          console.log('我是ok')
        },
        cancel() {
          console.log('我是cancel')
        },
      })
    }
    return { showDialog }
  },
}
</script>

<style></style>
