<template>
  <div>
    <h3>I am a title</h3>
    <p>Duo Reges: constructio interrete. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Illum mallem levares, quo optimum atque humanissimum virum, Cn. Praeclare hoc quidem. Ergo hoc quidem apparet, nos ad agendum esse natos.</p>
    <editable-button
      class="button button--inline"
      :content_key="`${ block_id }_${ repeatable_id }_button`"
      default_label="Button"></editable-button>
  </div>
</template>

<script>
  import EditableButton from "../../content_type/editable_button"

  export default {
    components: {
      EditableButton
    },
    props: ["block_id", "repeatable_id"],
    data() {
      return {

      }
    },
    mounted() {
      console.log(this.block_id)
    },
    methods: {

    }
  }
</script>

<style lang="scss">
</style>
