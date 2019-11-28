<template>
  <div>
    <h3>Features Settings</h3>

    <collapsable title="Content">
      <layout-changer label="Layout" content_key="layout" :options="{ 'Standard': 'standard', 'Reverse': 'reverse', 'Totally different': 'totally-different' }"></layout-changer>
      <amount-changer label="Amount of features" content_key="amount" default="2"></amount-changer>
    </collapsable>

    <collapsable title="Background">
      <background-settings content_key="background"></background-settings>
    </collapsable>
  </div>
</template>

<script>
  import { EventBus } from "../../event_bus"
  import AmountChanger from "../inputs/amount_changer"
  import LayoutChanger from "../inputs/layout_changer"
  import BackgroundSettings from "./content_type/background"
  import Collapsable from "../elements/collapsable"

  export default {
    components: {
      AmountChanger,
      LayoutChanger,
      BackgroundSettings,
      Collapsable
    },
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
