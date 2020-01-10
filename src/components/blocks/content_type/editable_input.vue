<template>
  <div @click="toggleSettings()" :class="active ? 'is-highlighted' : ''" class="form-group">
    <label v-html="getBlockSetting(content_key + '_label', default_label)" v-if="default_label || getBlockSetting(content_key + '_label')"></label>

    <small class="form-hint" v-if="default_description || getBlockSetting(content_key + '_description')" v-html="getBlockSetting(content_key + '_description', default_description)"></small>

    <input
      :class="active ? 'is-highlighted' : ''"
      :type="input_type"
      :placeholder="getBlockSetting(content_key + '_placeholder', default_placeholder)" />
  </div>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      },
      default_label: {
        type: String
      },
      default_placeholder: {
        type: String
      },
      default_description: {
        type: String
      },
      input_type: {
        type: String,
        default: "text"
      }
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      toggleSettings() {
        if (this.active) return

        this.setSelected(this.content_key, "input")
        this.hightlightMe()
      },
      hightlightMe() {
        this.active = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .is-highlighted {
    position: relative;
    background: white;
    z-index: 500;
  }
</style>
