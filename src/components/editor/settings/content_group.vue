<template>
  <div>
    <h3>Content Group</h3>

    <div v-for="(elements, name, i) in groups" :key="i" class="sidebar-content-group">
      <h4 class="sidebar-content-group__title">{{ name }}</h4>

      <div v-for="(element, j) in elements" :key="j">
        <div :is="element['content_type'].replace('editable-', '') + '-settings'" :content_key="element['content_key']" :options="element">
          {{ element }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { groupBy } from "lodash"
  import ButtonSettings from "./button"
  import InputSettings from "./input"
  import SelectSettings from "./select"
  import CheckboxSettings from "./checkbox"
  import SubmitSettings from "./submit"
  import TextSettings from "./text"

  export default {
    components: {
      ButtonSettings,
      InputSettings,
      CheckboxSettings,
      SelectSettings,
      SubmitSettings,
      TextSettings
    },
    props: [],
    data() {
      return {
        groups: this.getGroups()
      }
    },
    computed: {

    },
    mounted() {
      console.log(this.groups)
    },
    methods: {
      getGroups() {
        const activeGroupElement = document.querySelector(`[data-content-group='${ this.$root.selectedGroup }']`)
        const groupElements = activeGroupElement.querySelectorAll("[data-belongs-to-content-group]")

        const groupedElements = groupBy(groupElements, (element) => { return element.dataset.belongsToContentGroup } )

        Object.values(groupedElements).forEach(elements => {
          Object.values(elements).forEach((element, key) => {
            elements[key] = element.__vue__._props
            elements[key]["content_type"] = element.__vue__.$options._componentTag
            elements[key]["form_label"] = element.dataset.contentGroupLabel
          })
        })

        return groupedElements
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../scss/_variables.scss"; // This sucks

  .sidebar-content-group {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    margin-bottom: 1.5rem;
    padding: 0 0 .75rem;
  }

  .sidebar-content-group__title {
    padding: .5rem 1rem;
    margin: 0 0 .75rem;
    background: lighten($border-color, 7.5%);
    font-size: 12px;
  }
</style>
