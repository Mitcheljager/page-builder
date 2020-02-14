<template>
  <div :data-content-key="content_key">
    <label class="inline-form-group">
      {{ options["form_label"] || "Submit" }}
      <input type="text" ref="button-label" :value="label" class="inline-input" @input="reflectChange()">
    </label>
  </div>
</template>

<script>
  export default {
    props: ["content_key", "options"],
    data() {
      return {
        label: this.getBlockSetting(this.content_key + "_label") || this.options["default_label"]
      }
    },
    mounted() {
    },
    methods: {
      reflectChange() {
        this.label = this.$refs["button-label"].value
        this.setBlockSetting(this.content_key + "_label", this.label)
      }
    }
  }
</script>

<style lang="scss">

</style>
