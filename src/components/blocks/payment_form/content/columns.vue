<template>
  <div>
    <div class="container offset">
      <div class="columns">
        <div class="block">
          <h3><editable-text :content_key="`${ block_id }_title`" default_label="Enter your personal details to continue"></editable-text></h3>
          <input-form :block_id="`${ block_id }_form`"></input-form>
        </div>

        <div>
          <div class="block">
            <h3><editable-text :content_key="`${ block_id }_title`" default_label="Order Summary"></editable-text></h3>
          </div>

          <div class="block gap">
            <h3><editable-text :content_key="`${ block_id }_block_2`" default_label="Je bent er bijna"></editable-text></h3>

            <editable-text :content_key="`${ block_id }_block_2_content`" default_label="Vul je gegevens in om je aan te melden bij de club en direct je eerste product te bestellen. Behalve de bestelling van je eerste product, zit je helemaal nergens aan vast."></editable-text>
          </div>
        </div>
      </div>
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
  h3 {
    font-size: 18px;
    font-weight: lighter;
    margin: 0 0 1.75rem;
    color: black;
  }

  .columns {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1.5rem;
  }

  .block {
    padding: 1.75rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: white;
    font-size: 13px;
  }

  .gap {
    margin-top: 1.5rem;
  }
</style>
