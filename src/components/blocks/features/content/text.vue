<template>
  <div>
    <h3><editable-text :content_key="`${ block_id }_${ repeatable_id }_title`" default_label="I am a title"></editable-text></h3>
    <p><editable-text :content_key="`${ block_id }_${ repeatable_id }_text`" default_label="Duo Reges: constructio interrete. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Illum mallem levares, quo optimum atque humanissimum virum, Cn. Praeclare hoc quidem. Ergo hoc quidem apparet, nos ad agendum esse natos."></editable-text></p>
    <editable-button
      class="button button--inline"
      :content_key="`${ block_id }_${ repeatable_id }_button`"
      default_label="Button"></editable-button>
  </div>
</template>

<script>
  import EditableButton from "../../content_type/editable_button"
  import EditableText from "../../content_type/editable_text"

  export default {
    components: {
      EditableButton,
      EditableText
    },
    props: ["block_id", "repeatable_id"],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
</style>
