<template>
  <label class="zzl-radio" :class="{'is-checked': label === model}">
    <span class="zzl-radio_input">
      <span class="zzl-radio_inner"></span>
      <input
          class="zzl-radio_initial"
          type="radio"
          :value="label"
          v-model="model"/>
    </span>
    <span class="zzl-radio_label">
      <slot></slot>
    </span>
  </label>
</template>

<script>

import {computed} from 'vue';

export default {
  name: 'Radio',
  props:{
    label:{
      type:[String,Number,Boolean],
      default:''
    },
    value:{
      type:[String,Number,Boolean],
      default:''
    }
  },
  setup(props,context){
    const model = computed({
      get(){
        return props.value
      },
      set(value){
        context.emit('update:value',value)
      }
    })

    return {model}
  }
};
</script>

<style lang="scss" scoped>
$color:#40a9ff;
.zzl-radio {
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 20px;
  & .zzl-radio_input {
    cursor: pointer;
    outline: none;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    .zzl-radio_inner {
      border: 1px solid $color;
      border-radius: 100%;
      width: 15px;
      height: 15px;
      background-color: rgb(255, 255, 255);
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 250ms all;
      }
    }
    .zzl-radio_initial {
      opacity: 0;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  & .zzl-radio_label {
    padding-left: 10px;
  }
  &.is-checked {
    .zzl-radio_input {
      .zzl-radio_inner {
        border-color: $color;
        background: $color;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .zzl-radio_label {
      color: $color;
    }
  }
}
</style>