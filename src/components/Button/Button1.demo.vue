<template>
  <div>
      <Button level="main">主要按钮</Button>
      <Button level="warn">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
      <Button disabled>禁用按钮</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue'
export default {
  components: { Button },
}
</script>

<style>

</style>