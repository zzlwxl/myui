<template>
  <div class="zzl-tabs">
    <div class="zzl-tabs-nav" ref="container">
      <div 
      @click="select(t)" 
      class="zzl-tabs-nav-item" 
      :class="{ selected: t === selected }" 
      v-for="(t, index) in titles" :key="index"
      :ref="el => {if (t === selected) selectedItem = el}"
      >{{ t }}</div>
      <!-- :ref... 只要t等于selected selectedItem就等于选中的元素 -->
    <div class="zzl-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="zzl-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script>
// 所有写的vue文件最终都会变成一个type对象:context.slots.default()[0].type
import Tab from './Tab.vue'
import {computed,ref,onMounted,onUpdated, watchEffect} from 'vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
      const selectedItem = ref([])
      const indicator = ref(null)
      const container = ref(null)
      onMounted(()=>{
        //因为watchEffect在onMounted挂载之前就运行了，所以写在onMounted里面，就可以保证运行在挂载之后了，即能取到值了
          watchEffect(()=>{
            const {width} = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            //对拿到的left进行重命名，getBoundingClientRect可以拿到元素的宽高和位置
            const {left:left1} = container.value.getBoundingClientRect()
            const {left:left2} = selectedItem.value.getBoundingClientRect()
            const left = left2-left1
            indicator.value.style.left=left+'px'  
      })
      })
      const current = computed(()=>{
          return defaults.filter(tag => tag.props.title  ===  props.selected)[0]
      })
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab')
      }
    })
    function select(title){
        context.emit('update:selected',title)
    }
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current
    }
  },
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.zzl-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    //   transition: left 250ms;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
