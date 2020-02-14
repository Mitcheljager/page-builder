<template>
  <div
    :class="active ? 'is-active' : ''"
    v-html="getBlockSetting(content_key + '_label', default_label)"></div>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      },
      default_label: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .is-active {
    position: relative;

    &:focus {
      outline: none;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: -11px;
      top: -11px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border: 2px dashed currentColor;
      opacity: .5;
      z-index: 0;
      pointer-events: none;
    }
  }
</style>
