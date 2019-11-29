<template>
  <div>
    <div class="grid-columns__item">
      <img src="https://placehold.it/300x150" />
    </div>

    <div class="grid-columns__item">
      <text-content :block_id="block_id" :repeatable_id="repeatable_id"></text-content>
    </div>
  </div>
</template>

<script>
  import TextContent from "./text"

  export default {
    components: {
      TextContent
    },
    props: ["block_id", "repeatable_id"],
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
    grid-template-columns: 2fr 3fr;
    grid-gap: 3rem;

    &:nth-child(odd) {
      grid-template: "column-1 column-2";
      grid-template-columns: 3fr 2fr;
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
