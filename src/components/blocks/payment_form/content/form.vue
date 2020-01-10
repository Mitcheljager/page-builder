<template>
  <div>
    <form>
      <editable-input default_label="Name" default_placeholder="John Wick" :content_key="`${ block_id }_name`"></editable-input>
      <editable-input default_label="Email" default_placeholder="j.wick@continental.com" :content_key="`${ block_id }_email`" input_type="email"></editable-input>
      <editable-input default_placeholder="Input without label" :content_key="`${ block_id }_whatever`"></editable-input>

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
  }
</style>
