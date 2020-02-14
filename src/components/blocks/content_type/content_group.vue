<template>
  <div
    class="content-group"
    :class="active ? 'is-highlighted' : ''"
    @click="toggleSettings()"
    :data-content-group="content_key">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      content_key: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {

    },
    mounted() {
      const elements = this.$el.querySelectorAll("[data-belongs-to-content-group]")

      console.log(elements)

      elements.forEach(element => {
        element.addEventListener("mouseover", event => { this.highlightInSettings(event, true) })
        element.addEventListener("mouseout", event => { this.highlightInSettings(event, false) })
      })
    },
    methods: {
      toggleSettings() {
        if (this.active) return

        this.setSelected(this.content_key, "content-group", this.content_key)
        this.hightlightMe()
      },
      hightlightMe() {
        this.active = true
      },
      highlightInSettings(event, state) {
        if (this.$root.selectedGroup == "") return

        const element = event.target
        const vueElement = element.__vue__

        if (!vueElement) return


        const target = document.querySelector(`[data-content-key="${ vueElement.content_key }"]`)
        target.classList.toggle("highlighted", state)
      }
    }
  }
</script>

<style lang="scss">
  .content-group {
    &:hover {
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: -1rem;
        left: -1rem;
        width: calc(100% + 2rem);
        height: calc(100% + 2rem);
        box-shadow: 0 0 0 1px blue;
        pointer-events: none;
      }
    }
  }

  .is-highlighted {
    position: relative;
    z-index: 500;
  }
</style>
