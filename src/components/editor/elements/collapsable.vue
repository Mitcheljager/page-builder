<template>
  <div class="collapsable">
    <div @click="collapse()" class="collapsable__title">
      {{ title }}

      <span v-html="active ? '-' : '+'"></span>
    </div>

    <div v-if="active" class="collapsable__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title"],
    data() {
      return {
        active: false
      }
    },
    mounted() {

    },
    methods: {
      collapse() {
        this.active = !this.active
      }
    }
  }
</script>

<style lang="scss">
  .collapsable {
    border-bottom: 1px solid gray;
  }

  .collapsable__title {
    display: flex;
    justify-content: space-between;
    padding: .75rem 0;
    cursor: pointer;
  }

  .collapsable__content {
    margin: 0 0 .75rem 0;
  }
</style>
