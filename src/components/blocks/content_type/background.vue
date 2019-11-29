<template>
  <div>
    <div class="background" :style="`background: var(--${color})`"></div>
  </div>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
      color() {
        return this.getBlockSetting(this.content_key + "_color", "light")
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f8f8f8;
    z-index: -1;
  }
</style>
