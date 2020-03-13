<template>
  <div>
    <div class="container offset">
      <div class="columns">
        <content-group class="block" :class="`block--${ getBlockSetting(block_id + '_background_color', 'accent') }`" :content_key="`${ block_id }_form`">
          <h3 class="form-title"><editable-text :content_key="`${ block_id }_title`" default_label="Enter your personal details to continue" data-belongs-to-content-group="Subscription Box Content" data-content-group-label="Title"></editable-text></h3>
          <input-form :block_id="`${ block_id }_form`"></input-form>
        </content-group>

        <div>
          <content-group class="block" :content_key="`${ block_id }_order_summary`">
            <h3><editable-text :content_key="`${ block_id }_order_summary_title`" default_label="Order Summary" data-belongs-to-content-group="Order Summary"></editable-text></h3>
          </content-group>

          <content-group class="block gap" :content_key="`${ block_id }_extra_description`">
            <h3><editable-text :content_key="`${ block_id }_block_2`" default_label="Je bent er bijna" data-belongs-to-content-group="Description Box"></editable-text></h3>

            <editable-text
              :content_key="`${ block_id }_block_2_content`"
              default_label="Vul je gegevens in om je aan te melden bij de club en direct je eerste product te bestellen. Behalve de bestelling van je eerste product, zit je helemaal nergens aan vast."
              data-belongs-to-content-group="Description Box"></editable-text>
          </content-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputForm from "./form"
  import ContentGroup from "../../content_type/content_group"

  export default {
    components: {
      InputForm,
      ContentGroup
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
  @import "../../../../scss/_variables.scss"; // This sucks

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
    border-radius: .25rem;
    background: white;
    font-size: 13px;
    border: 1px solid $border-color;

    &::before {
      display: block;
      content: "";
      position: absolute;
      left: 1.5rem;
      right: 1.5rem;
      bottom: 0;
      height: 50%;
      opacity: .5;
      z-index: -1;
    }

    &--accent {
      &::before {
        box-shadow: 0 10px 20px var(--accent);
      }
    }

    &--secondary {
      &::before {
        box-shadow: 0 10px 20px var(--secondary);
      }
    }
  }

  .gap {
    margin-top: 1.5rem;
  }

  .form-title {
    font-weight: 600;
  }
</style>
