<template>
  <div class="container">
    <h2 class="offset"><center><editable-text :content_key="`${ block_id }_title`" default_label="Payment form"></editable-text></center></h2>

    <input-form :block_id="`${ block_id }_form`"></input-form>

    <div class="offset"></div>
  </div>
</template>

<script>
  import InputForm from "./content/form"

  export default {
    components: {
      InputForm
    },
    props: ["block_id"],
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>
