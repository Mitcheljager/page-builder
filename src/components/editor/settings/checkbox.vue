<template>
  <div :data-content-key="content_key">
    <label class="inline-form-group">
      {{ options["form_label"] || "Label" }} label
      <input type="text" ref="input-label" :value="label" class="inline-input" @input="reflectChange()">
    </label>

    <label class="inline-form-group">
      <span>{{ options["form_label"] || "Description" }} description <em>(Optional)</em></span>
      <input type="text" ref="input-description" class="inline-input" @input="reflectChange()">
    </label>
  </div>
</template>

<script>
  export default {
    props: ["content_key", "options"],
    data() {
      return {
        label: this.getBlockSetting(this.content_key + "_label") || this.options["default_label"],
        description: this.getBlockSetting(this.content_key + "_description") || this.options["default_description"],
      }
    },
    mounted() {
    },
    methods: {
      reflectChange() {
        this.label = this.$refs["input-label"].value
        this.description = this.$refs["input-description"].value

        this.setBlockSetting(this.content_key + "_label", this.label)
        this.setBlockSetting(this.content_key + "_description", this.description)
      }
    }
  }
</script>

<style lang="scss">

</style>
