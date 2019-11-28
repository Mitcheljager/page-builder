<template>
  <div class="container">
    <h2><center>Features</center></h2>

    <div :class="'features--' + layout">
      <div
        :is="layout"
        v-for="(item, index) in parseInt($root.blockSettings['amount'] || 2)"
        :key="item + index"
        class="grid-columns"></div>
    </div>
  </div>
</template>

<script>
  import Standard from "./content/standard"
  import Reverse from "./content/reverse"
  import TotallyDifferent from "./content/totally-different"

  export default {
    components: {
      Standard,
      Reverse,
      TotallyDifferent
    },
    props: [],
    data() {
      return {

      }
    },
    computed: {
      layout() {
        return this.$root.blockSettings['layout'] || 'standard'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .grid-columns {
    display: grid;

    + .grid-columns {
      margin-top: 3rem;
    }
  }

  .grid-columns__item {
    img {
      width: 100%;
      height: auto;
    }
  }

  .features--totally-different {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 3rem;
  }
</style>
