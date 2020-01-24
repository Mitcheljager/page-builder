<template>
  <div class="offset">
    <div class="card">
      <input-form :block_id="`${ block_id }_form`"></input-form>
    </div>
  </div>
</template>

<script>
  import InputForm from "./form"

  export default {
    components: {
      InputForm
    },
    props: ["block_id"],
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .card {
    max-width: 400px;
    padding: 3rem;
    margin: 0 auto;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: black;
  }
</style>
