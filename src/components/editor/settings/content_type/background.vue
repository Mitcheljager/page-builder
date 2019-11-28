<template>
  <div>
    Background Settings

    <div>
      <label>
        Enable Background
        <input type="checkbox" ref="enable-switch" @change="toggleBackground()" :checked="state">
      </label>
    </div>

    <div v-if="state">
      <custom-select label="Shape">
        <template #selected>
          <inline-svg
            :src="require(`../../../../assets/block_style/${ selectedShape }_top.svg`)"
            width="100%"
            height="40px"></inline-svg>
        </template>

        <template #content>
          <div v-for="(shape, index) in shapes" :key="index" class="custom-select__item" @click="selectShape(index)">
            <inline-svg
              :src="require(`../../../../assets/block_style/${ shape }_top.svg`)"
              width="100%"
              height="40px"></inline-svg>
          </div>
        </template>
      </custom-select>

      <div>
        Shape height
        <input type="range" name="points" min="40" max="200" value="40" @input="changeShapeSize()">
      </div>
    </div>
  </div>
</template>

<script>
  import CustomSelect from "../../inputs/custom_select"
  import InlineSvg from "vue-inline-svg"

  export default {
    components: {
      CustomSelect,
      InlineSvg
    },
    props: [],
    data() {
      return {
        shapes: ["slant", "layered", "playful"],
        selectedShape: "slant"
      }
    },
    computed: {
      state() {
        return this.$root.blockSettings[this.$root.currentlyActiveBlock + '_enable_background']
      }
    },
    mounted() {
    },
    methods: {
      toggleBackground() {
        const key = this.$root.currentlyActiveBlock + "_enable_background"
        const state = this.$root.blockSettings[key]

        this.$set(this.$root.blockSettings, key, !state)
      },
      changeShapeSize() {
        const key = this.$root.currentlyActiveBlock + "_shape_size"
        const size = event.target.value

        this.$set(this.$root.blockSettings, key, size)
      },
      selectShape(index) {
        const key = this.$root.currentlyActiveBlock + "_shape"
        const selected = this.shapes[index]

        this.$set(this.$root.blockSettings, key, selected)
        this.selectedShape = selected
      }
    }
  }
</script>

<style lang="scss">

</style>
