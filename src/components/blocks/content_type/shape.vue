<template>
  <div>
    <inline-svg
      :src="require(`../../../assets/block_style/${ shape }_${ position }.svg`)"
      :height="height"
      width="100%"></inline-svg>
  </div>
</template>

<script>
  import InlineSvg from "vue-inline-svg"

  export default {
    components: {
      InlineSvg
    },
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
      source() {
        return `../../../assets/block_style/slant_${ this.position }.svg`
      },
      height() {
        return this.$root.blockSettings[this.content_key + "_size"] || 40
      },
      shape() {
        return this.$root.blockSettings[this.content_key] || "slant"
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
  }
</style>
