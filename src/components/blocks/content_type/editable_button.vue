<template>
  <div
    :class="active ? 'is-highlighted' : ''"
    @click="toggleButtonSettings()"
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
      toggleButtonSettings() {
        setTimeout(() => {
          this.$root.selectedKey = this.content_key
          this.$root.selectedType = "button"

          const sidebar = this.getRootElements("sidebar")
          sidebar.activeMenu = "selected"

          this.hightlightMe()
        }, 1)
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
