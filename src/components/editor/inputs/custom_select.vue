<template>
  <div class="sidebar-item">
    <span @click="toggle()" v-html="label"></span>

    <div @click="toggle()" class="custom-select">
      <slot name="selected"></slot>

      <div v-if="active" class="custom-select__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    mounted() {
      
    },
    methods: {
      toggle() {
        this.active = !this.active

        if (this.active) {
          setTimeout(() => { document.addEventListener("click", this.toggle)}, 1)
        } else {
          document.removeEventListener("click", this.toggle)
        }
      }
    },
    events: {

    }
  }
</script>

<style lang="scss">
  .custom-select {
    position: relative;
    margin: .5rem 0;
    padding: .5rem;
    border: 1px solid lightgray;
    background: white;
    cursor: pointer;

    svg {
      path,
      rect {
        fill: lightgray !important;
      }
    }
  }

  .custom-select__content {
    position: absolute;
    top: calc(100% + .5rem);
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    z-index: 10;
  }

  .custom-select__item {
    border-bottom: 1px solid lightgray;
    padding: .5rem;
  }
</style>
