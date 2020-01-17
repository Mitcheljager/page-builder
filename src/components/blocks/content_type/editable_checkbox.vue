<template>
  <div @click="toggleSettings()" :class="active ? 'is-highlighted' : ''" class="form-group">
    <small class="form-hint" v-if="default_description || getBlockSetting(content_key + '_description')" v-html="getBlockSetting(content_key + '_description', default_description)"></small>

    <div class="checkbox">
      <input type="checkbox" :name="content_key" :id="content_key" />
      <label :for="content_key" v-html="getBlockSetting(content_key + '_label', default_label)" v-if="default_label || getBlockSetting(content_key + '_label')"></label>
    </div>
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
      default_description: {
        type: String
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

        this.setSelected(this.content_key, "checkbox")
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
