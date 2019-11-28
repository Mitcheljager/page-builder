<template>
  <div class="layout-changer">
    <label v-html="label"></label>

    <div>
      <select type="number" :value="value" min="1" max="6" @change="changeLayout()" ref="input" class="layout-changer__select">
        <option v-for="(value, option, index) in options" :key="index" v-html="option" :value="value"></option>
      </select>
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
      label: {
        type: String
      },
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        value: this.$root.blockSettings[this.content_key] || Object.values(this.options)[0]
      }
    },
    mounted() {

    },
    methods: {
      changeLayout() {
        this.$set(this.$root.blockSettings, this.content_key, this.$refs.input.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout-changer {
    display: flex;
    justify-content: space-between;
    margin-bottom: .75rem;
  }

  .layout-changer__select {
    width: 100%;
  }
</style>
