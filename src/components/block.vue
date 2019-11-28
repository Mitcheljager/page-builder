<template>
  <section class="block" @click="swapActiveBlock()">
    <shape :content_key="block_id + '_shape'" v-if="isBackgroundEnabled" position="top"></shape>

    <div v-bind:is="type" :type="type"></div>

    <background content_key="1" v-if="isBackgroundEnabled"></background>

    <shape :content_key="block_id + '_shape'" v-if="isBackgroundEnabled" position="bottom"></shape>

    <div class="block__active-marker" v-if="active"></div>
  </section>
</template>

<script>
  import { EventBus } from "./event_bus"
  import Background from "./blocks/content_type/background"
  import Shape from "./blocks/content_type/shape"
  import Navigation from "./blocks/navigation/base"
  import Features from "./blocks/features/base"
  import Pricing from "./blocks/pricing/base"

  export default {
    components: {
      Navigation,
      Features,
      Pricing,
      Background,
      Shape
    },
    props: {
      block_id: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      isBackgroundEnabled() {
        return this.$root.blockSettings[this.block_id + '_enable_background'] || false
      }
    },
    mounted() {

    },
    methods: {
      swapActiveBlock() {
        this.$root.currentlyActiveBlock = this.block_id
        this.$root.currentlyActiveBlockType = this.type

        const blocks = this.$root.$children[0].$refs["block"] // Can this be nicer?
        blocks.forEach(block => block.active = false)

        this.active = true

        const sidebar = this.$root.$children[0].$refs["sidebar"]
        sidebar.activeMenu = 'block'
      }
    }
  }
</script>

<style lang="scss">
  .block {
    position: relative;
  }

  .block__active-marker {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 3px SkyBlue;
    pointer-events: none;
    z-index: 10;
  }
</style>
