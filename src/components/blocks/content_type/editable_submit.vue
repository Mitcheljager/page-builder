<template>
  <div @click="toggleSettings()" :class="active ? 'is-highlighted' : ''" class="form-group">
    <div
      :class="active ? 'is-highlighted' : ''"
      v-html="getBlockSetting(content_key + '_label', default_label)"></div>
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
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
      toggleSettings() {
        if (this.active) return

        this.setSelected(this.content_key, "submit")
        this.hightlightMe()
      },
      hightlightMe() {
        this.active = true
      }
    }
  }
</script>

<style lang="scss">
  .is-highlighted {
    position: relative;
    z-index: 500;
  }
</style>
