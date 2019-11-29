<template>
  <div>
    <div v-for="(item, index) in parseInt(getBlockSetting(this.content_key || this.default))" v-bind:key="item + index" :class="wrapper_class">
      <slot></slot>
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
      default: {
        type: String,
        required: true
      },
      wrapper_class: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
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
