<template>
  <div @click="toggleSettings()" :class="active ? 'is-highlighted' : ''" class="form-group">
    <label v-html="getBlockSetting(content_key + '_label', default_label)" v-if="default_label || getBlockSetting(content_key + '_label')"></label>

    <small class="form-hint" v-if="default_description || getBlockSetting(content_key + '_description')" v-html="getBlockSetting(content_key + '_description', default_description)"></small>

    <select>
      <option v-if="default_placeholder || getBlockSetting(content_key + '_placeholder')" v-html="getBlockSetting(content_key + '_placeholder', default_placeholder)" value=""></option>

      <option v-for="(value, option, index) in options"
              :key="index"
              v-html="option"
              :value="value"></option>
    </select>
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
      default_options: {
        type: Object
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      options() {
        if (this.getBlockSetting(this.content_key + '_options')) return JSON.parse(this.getBlockSetting(this.content_key + '_options'))
        return this.default_options
      }
    },
    methods: {
      toggleSettings() {
        if (this.active) return

        this.setSelected(this.content_key, "select")
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
    z-index: 500;
    background-color: white;
  }
</style>
