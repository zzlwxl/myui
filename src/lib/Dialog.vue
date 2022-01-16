<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="zzl-dialog-overlay" @click="OnClickOverlay"></div>
      <div class="zzl-dialog-wrapper">
        <div class="zzl-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="zzl-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="ok" level="main">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script>
import Button from './Button.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      //默认允许点击遮罩层关闭dialog
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    function close() {
      context.emit('update:visible', false)
    }
    function OnClickOverlay() {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    function ok() {
      if (props.ok && props.ok() !== false) {
        close()
      }
    }
    function cancel() {
      props.cancel && props.cancel()
      close()
    }
    return { close, OnClickOverlay, ok, cancel }
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.zzl-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
