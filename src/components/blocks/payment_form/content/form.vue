<template>
  <div>
    <form>
      <editable-input default_label="Name" default_placeholder="John Wick" :content_key="`${ block_id }_name`"></editable-input>
      <editable-input default_label="Email" default_placeholder="j.wick@continental.com" :content_key="`${ block_id }_email`" input_type="email"></editable-input>
      <editable-input default_label="Phone" default_placeholder="123-456-789" :content_key="`${ block_id }_phone`" input_type="phone"></editable-input>
      <editable-input default_label="Address" default_placeholder="W 43rd Street" default_description="This is a description that can be whatever you want" :content_key="`${ block_id }_address`" input_type="phone"></editable-input>

      <hr>

      <editable-input default_placeholder="Input without label" :content_key="`${ block_id }_whatever`"></editable-input>

      <hr>

      <editable-submit
        :content_key="`${ block_id }_submit`"
        default_label="Submit"></editable-submit>
    </form>
  </div>
</template>

<script>
  import EditableInput from "../../content_type/editable_input"
  import EditableSubmit from "../../content_type/editable_submit"

  export default {
    components: {
      EditableInput,
      EditableSubmit
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
  form {
    max-width: 400px;
    padding: 3rem 0;
    margin: 0 auto;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: black;
  }

  hr {
    border: 0;
    height: 1px;
    margin: 1rem 3rem;
    background: lightgray;
  }
</style>
