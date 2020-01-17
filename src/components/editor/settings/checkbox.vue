<template>
  <div>
    <h3>Select settings</h3>

    <label class="sidebar-item">
      Input Label
      <input type="text" ref="input-label" :value="label">
    </label>

    <label class="sidebar-item">
      Input Description
      <input type="text" ref="input-description">
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
        description: this.getBlockSetting(this.content_key + "_placeholder") || ""
      }
    },
    mounted() {
    },
    methods: {
      saveButton() {
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
