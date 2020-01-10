<template>
  <div>
    <h3>Input settings</h3>

    <label class="sidebar-item">
      Input Label
      <input type="text" ref="input-label" :value="label">
    </label>

    <label class="sidebar-item">
      Placeholder Text
      <input type="text" ref="input-placeholder">
    </label>

    <div class="button button--primary" @click="saveButton()">Save</div>

    <div class="button" @click="resetSelected()">Cancel</div>
  </div>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        content_key: this.$root.selectedKey,
        label: this.getBlockSetting(this.content_key + "_label") || "",
        placeholder: this.getBlockSetting(this.content_key + "_placeholder") || ""
      }
    },
    mounted() {
    },
    methods: {
      saveButton() {
        this.label = this.$refs["input-label"].value
        this.placeholder = this.$refs["input-placeholder"].value

        this.setBlockSetting(this.content_key + "_label", this.label)
        this.setBlockSetting(this.content_key + "_placeholder", this.placeholder)
      }
    }
  }
</script>

<style lang="scss">

</style>
