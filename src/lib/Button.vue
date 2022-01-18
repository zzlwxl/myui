<template>
  <!-- 这个rest对象上的所有属性都要绑定(继承）到button上 -->
  <!-- <button v-bind="rest"> -->
  <button class="zzl-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="zzl-loading"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
    },
    level: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  //因为默认所有的属性都绑定到根元素上，使用下面可以取消默认绑定，即元素不允许继承，
  // inheritAttrs: false,
  setup(props, context) {
    //size取出来，然后context.attrs剩余的值取出来放到rest里
    // const { size, ...rest } = context.attrs //获取所有属性

    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`zzl-theme-${theme}`]: theme,
        [`zzl-size-${size}`]: size,
        [`zzl-level-${level}`]: level,
      }
    })
    return { classes }
  },
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$yellow:#FFA000;
.zzl-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.zzl-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.zzl-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.zzl-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.zzl-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.zzl-theme-button {
    &.zzl-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.zzl-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.zzl-level-warn {
      background: $yellow;
      border-color: $yellow;
      color: white;
      &:hover,
      &:focus {
        background: darken($yellow, 10%);
        border-color: darken($yellow, 10%);
      }
    }
  }
  &.zzl-theme-link {
    &.zzl-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.zzl-theme-text {
    &.zzl-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.zzl-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.zzl-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.zzl-theme-link, &.zzl-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .zzl-loading{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>
