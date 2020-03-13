<template>
  <div>
    <form>
      <div class="form-columns">
        <editable-input default_placeholder="First Name" :content_key="`${ block_id }_first_name`"></editable-input>
        <editable-input default_placeholder="Last Name" :content_key="`${ block_id }_last_name`"></editable-input>
      </div>

      <editable-input default_placeholder="Emailaddress" :content_key="`${ block_id }_email`" input_type="email"></editable-input>
      <editable-input default_placeholder="Phonenumber" :content_key="`${ block_id }_phone`" input_type="phone"></editable-input>

      <div class="form-columns">
        <editable-input default_placeholder="City" :content_key="`${ block_id }_city`"></editable-input>
        <editable-input default_placeholder="Zip Code" :content_key="`${ block_id }_zip`"></editable-input>
      </div>

      <div class="form-columns form-columns--uneven">
        <editable-input default_placeholder="Street" :content_key="`${ block_id }_street`"></editable-input>
        <editable-input default_placeholder="Number" :content_key="`${ block_id }_number`"></editable-input>
      </div>

      <editable-select default_placeholder="Select a country..." :default_options="{ 'Netherlands': 'nl', 'England': 'en' }" :content_key="`${ block_id }_country`"></editable-select>

      <editable-checkbox
        :content_key="`${ block_id }_accept_terms`"
        default_label="Check me to accept terms"
        data-belongs-to-content-group="Subscription Box Checkboxes"
        data-content-group-label="Accept"></editable-checkbox>

      <editable-submit
        class="button button--block"
        :content_key="`${ block_id }_submit`"
        default_label="Submit"
        data-belongs-to-content-group="Subscription Box Content"
        data-content-group-label="Submit button"></editable-submit>
    </form>

    <em>
      <small>
        <editable-text
          :content_key="`${ block_id }_fineprint`"
          default_label="We will not use your data for naughty stuff."
          data-belongs-to-content-group="Subscription Box Content"
          data-content-group-label="Fine print"></editable-text>
      </small>
    </em>
  </div>
</template>

<script>
  import EditableInput from "../../content_type/editable_input"
  import EditableSubmit from "../../content_type/editable_submit"
  import EditableSelect from "../../content_type/editable_select"
  import EditableCheckbox from "../../content_type/editable_checkbox"

  export default {
    components: {
      EditableInput,
      EditableSubmit,
      EditableSelect,
      EditableCheckbox
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
  hr {
    border: 0;
    height: 1px;
    margin: 1rem 3rem;
    background: lightgray;
  }

  .form-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    &--uneven {
      grid-template-columns: 3fr 1fr;
    }
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .button {
    display: block;
    padding: .75rem;
    background: var(--dark);
    text-align: center;
    border-radius: 0;
    border: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:active {
      background: var(--dark);
      color: white;
    }
  }
</style>
