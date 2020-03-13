<template>
  <section class="block" :class="`block--${ type }`" @click="swapActiveBlock()">
    <shape :content_key="block_id + '_shape'" v-if="isBackgroundEnabled" position="top"></shape>

    <div v-bind:is="type" :type="type" :block_id="block_id" :style="`color: var(--${textColor})`"></div>

    <background :content_key="block_id + '_background'" v-if="isBackgroundEnabled"></background>

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
  import PaymentForm from "./blocks/payment_form/base"

  export default {
    components: {
      Navigation,
      Features,
      Pricing,
      PaymentForm,
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
        return this.getBlockSetting(this.block_id + "_enable_background", false)
      },
      textColor() {
        return this.getBlockSetting(this.block_id + "_text_color", "dark")
      }
    },
    mounted() {

    },
    methods: {
      swapActiveBlock() {
        this.$root.currentlyActiveBlock = this.block_id
        this.$root.currentlyActiveBlockType = this.type
        this.resetSelected()

        const blocks = this.getRootElements("block")
        blocks.forEach(block => block.active = false)

        this.active = true

        const sidebar = this.getRootElements("sidebar")
        sidebar.activeMenu = "block"
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
    top: -3px;
    left: 0;
    width: 100%;
    height: calc(100% + 6px);
    box-shadow: inset 0 0 0 3px SkyBlue;
    pointer-events: none;
    z-index: 10;
  }
</style>
