<template>
  <div>
    <div class="grid-columns__item">
      <p>I am text</p>
    </div>

    <div class="grid-columns__item">
      <img src="https://placehold.it/300x150" />
    </div>
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

<style lang="scss" scoped>
  .grid-columns {
    grid-template-columns: 3fr 2fr;
    grid-gap: 3rem;

    &:nth-child(odd) {
      grid-template: "column-1 column-2";
      grid-template-columns: 2fr 3fr;
    }
  }

  .grid-columns__item {
    .grid-columns:nth-child(odd) & {
      &:first-child {
        grid-area: column-2;
      }

      &:last-child {
        grid-area: column-1;
      }
    }
  }
</style>
