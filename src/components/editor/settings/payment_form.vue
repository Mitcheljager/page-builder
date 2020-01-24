<template>
  <div>
    <h3>Payment Form Settings</h3>

    <collapsable title="Content">
      <layout-changer
        label="Layout"
        :content_key="this.$root.currentlyActiveBlock + '_layout'"
        :options="{ 'Columns': 'columns', 'Basic': 'basic' }"></layout-changer>
    </collapsable>

    <collapsable title="Background">
      <background-settings content_key="background"></background-settings>
    </collapsable>
  </div>
</template>

<script>
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
