<template>
  <div>
    <!-- 当value为true，button的class就是checked -->
    <button class="zzl-switch" :class="{ 'zzl-checked': value }" @click="toggle"><span></span></button>
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    function toggle() {
      context.emit('update:value', !props.value)
    }
    return {
      toggle,
    }
  },
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.zzl-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: rgb(116, 116, 116);
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
&:focus {
  outline: none;
}
&.zzl-checked {
  background: rgb(0, 229, 255);
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
}
</style>
