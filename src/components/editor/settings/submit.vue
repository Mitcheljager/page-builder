<template>
  <div>
    <h3>Button settings</h3>

    <label class="sidebar-item">
      Button Label
      <input type="text" ref="button-label" :value="label">
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
        label: this.getBlockSetting(this.content_key + "_label") || ""
      }
    },
    mounted() {
    },
    methods: {
      saveButton() {
        this.label = this.$refs["button-label"].value
        this.setBlockSetting(this.content_key + "_label", this.label)
      }
    }
  }
</script>

<style lang="scss">

</style>
