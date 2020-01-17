<template>
  <div>
    <div
      :is="layout"
      :block_id="`${ block_id }_form`"></div>
  </div>
</template>

<script>
  import Basic from "./content/basic"
  import Columns from "./content/columns"

  export default {
    components: {
      Basic,
      Columns
    },
    props: ["block_id"],
    data() {
      return {

      }
    },
    computed: {
      layout() {
        return this.getBlockSetting(this.block_id + "_layout") || "basic"
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>
