<template>
  <div class="offset">
    <div class="card" :class="`card--${ getBlockSetting(block_id + '_background_color', 'accent') }`">
      <input-form :block_id="`${ block_id }_form`"></input-form>
    </div>
  </div>
</template>

<script>
  import InputForm from "./form"

  export default {
    components: {
      InputForm
    },
    props: ["block_id"],
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
  @import "../../../../scss/_variables.scss"; // This sucks

  .card {
    position: relative;
    max-width: 400px;
    padding: 3rem;
    margin: 0 auto;
    background: white;
    color: black;
    border: 1px solid $border-color;

    &::before {
      display: block;
      content: "";
      position: absolute;
      left: 1.5rem;
      right: 1.5rem;
      bottom: 0;
      height: 50%;
      opacity: .5;
      z-index: -1;
    }

    &--accent {
      &::before {
        box-shadow: 0 10px 20px var(--accent);
      }
    }

    &--secondary {
      &::before {
        box-shadow: 0 10px 20px var(--secondary);
      }
    }
  }
</style>
