<template>
  <label class="inline-form-group" :data-content-key="content_key">
    {{ options["form_label"] || "Text" }}
    <input type="text" ref="input-label" :value="label" class="inline-input" @input="reflectChange()">
  </label>
</template>

<script>
  export default {
    props: ["content_key", "options"],
    data() {
      return {
        label: this.getBlockSetting(this.content_key + "_label") || this.options["default_label"],
      }
    },
    mounted() {
    },
    methods: {
      reflectChange() {
        this.label = this.$refs["input-label"].value

        this.setBlockSetting(this.content_key + "_label", this.label)
      }
    }
  }
</script>

<style lang="scss">

</style>
