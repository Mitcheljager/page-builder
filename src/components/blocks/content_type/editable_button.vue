<template>
  <div
    :class="active ? 'is-highlighted' : ''"
    @click="toggleSettings()"
    v-html="getBlockSetting(content_key + '_label', default_label)"></div>
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

        this.setSelected(this.content_key, "button")
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
