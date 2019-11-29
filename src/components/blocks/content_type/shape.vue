<template>
  <inline-svg
    :src="require(`../../../assets/block_style/${ shape }_${ position }.svg`)"
    :height="height"
    width="100%"></inline-svg>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
      height() {
        return this.getBlockSetting(this.content_key + "_size", 40)
      },
      shape() {
        return this.getBlockSetting(this.content_key + "_" + this.position, "flat")
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  svg {
    display: block;
  }
</style>
