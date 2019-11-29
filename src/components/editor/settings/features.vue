<template>
  <div>
    <h3>Features Settings</h3>

    <collapsable title="Content">
      <layout-changer
        label="Layout"
        content_key="layout"
        :options="{ 'Standard': 'standard', 'Reverse': 'reverse', 'Cards': 'cards' }"></layout-changer>

      <amount-changer
        label="Amount of features"
        content_key="amount"
        default="2"></amount-changer>
    </collapsable>

    <collapsable title="Background">
      <background-settings content_key="background"></background-settings>
    </collapsable>
  </div>
</template>

<script>
  import { EventBus } from "../../event_bus"

  export default {
    props: [],
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
