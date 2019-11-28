<template>
  <div class="amount-changer">
    <label v-html="label"></label>
    <input type="number" :value="value" min="1" max="6" @change="changeAmount()" ref="input">
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
      label: {
        type: String
      }
    },
    data() {
      return {
        value: this.$root.blockSettings[this.content_key] || this.default
      }
    },
    mounted() {

    },
    methods: {
      changeAmount() {
        this.$set(this.$root.blockSettings, this.content_key, this.$refs.input.value)
      }
    }
  }
</script>

<style lang="scss">
  .amount-changer {
    display: flex;
    justify-content: space-between;
  }
</style>
