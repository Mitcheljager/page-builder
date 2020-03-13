<template>
  <div :style="backgroundStyle == 'flat' ? `background: var(--${ backgroundColor })` : ''" class="form-background">
    <div :class="getBlockSetting(block_id + 'background_style', 'flat') == 'flat' && layout == 'columns' ? 'form-wrapper' : ''">
      <div
        :is="layout"
        :block_id="block_id"></div>
    </div>

    <div v-if="backgroundStyle == 'shape'" class="shape-background">
      <div class="shape-background__offset" :style="`background: var(--${ backgroundColor }); height: ${ getBlockSetting(block_id + '_shape_size', 100) }px`"></div>

      <div class="shape-background__shape" :class="`shape-background__shape--${ backgroundColor }`">
        <shape :content_key="block_id + '_shape'" v-if="backgroundStyle == 'shape'" position="top"></shape>
      </div>

      <div class="shape-background__light" :style="`background: var(--${ backgroundColor })`"></div>
    </div>
  </div>
</template>

<script>
  import Basic from "./content/basic"
  import Columns from "./content/columns"
  import Shape from "../content_type/shape"

  export default {
    components: {
      Basic,
      Columns,
      Shape
    },
    props: ["block_id"],
    data() {
      return {

      }
    },
    computed: {
      layout() {
        return this.getBlockSetting(this.block_id + "_layout") || "columns"
      },
      backgroundColor() {
        return this.getBlockSetting(this.block_id + "_background_color", "accent")
      },
      backgroundStyle() {
        return this.getBlockSetting(this.block_id + "background_style", "flat")
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .block--payment-form {
    min-height: 100vh;
  }

  .form-background {
    min-height: 100vh;
    padding: 1.5rem;
  }

  .form-wrapper {
    width: 100%;
    background: white;
    border-radius: .25rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
  }

  .shape-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .shape-background__offset {
    position: relative;
    height: 10rem;
    z-index: 2;
  }

  .shape-background__shape {
    position: relative;
    z-index: 2;

    &--accent svg path {
      fill: var(--accent);
    }

    &--secondary svg path {
      fill: var(--secondary);
    }
  }

  .shape-background__light {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .15;
    z-index: 1;
  }
</style>
