<template>
  <div
    v-html="label"
    class="button"
    :class="active ? 'button--active' : ''"
    @click="setBlockSetting(content_key, value)"></div>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      },
      label: {
        type: String
      },
      value: {
        type: String,
        required: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
      active() {
        return this.isBlockSetting(this.content_key, this.value)
      }
    },
    mounted() {

    },
    methods: {
    }
  }
</script>

<style lang="scss">

</style>
