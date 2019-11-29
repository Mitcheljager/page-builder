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
    display: block;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    color: var(--dark);
    text-align: center;

    &:nth-child(odd) {
      grid-template: "column-1 column-2";
      grid-template-columns: 3fr 2fr;
    }

    + .grid-columns {
      margin-top: 0;
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
