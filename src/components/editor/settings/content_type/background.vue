<template>
  <div>
    <div class="sidebar-item">
      <label>
        Enable Background

        <input
          type="checkbox"
          ref="enable-switch"
          @change="toggleBackground()"
          :checked="getBlockSetting(keyForActiveBlock('enable_background'), false)">
      </label>
    </div>

    <div v-if="isBlockSetting(keyForActiveBlock('enable_background'), true)">
      <div class="sidebar-item">
        Color

        <block-setting-button
          v-for="(color, index) in colors"
          :key="index"
          :label="color"
          :content_key="keyForActiveBlock('background_color')"
          :value="color"></block-setting-button>
      </div>

      <div class="sidebar-item">
        Text color

        <block-setting-button
          v-for="(color, index) in textColors"
          :key="index"
          :label="color"
          :content_key="keyForActiveBlock('text_color')"
          :value="color"></block-setting-button>
      </div>

      <custom-select v-for="(position, index) in ['top', 'bottom']" :key="index" :label="position + ' shape'">
        <template #selected>
          <inline-svg
            :src="require(`../../../../assets/block_style/${ getBlockSetting(`${ $root.currentlyActiveBlock }_shape_${ position }`, 'flat') }_${ position }.svg`)"
            width="100%"
            height="40px"></inline-svg>
        </template>

        <template #content>
          <div v-for="(shape, index) in shapes" :key="index" class="custom-select__item" @click="selectShape(index, position)">
            <inline-svg
              :src="require(`../../../../assets/block_style/${ shape }_${ position }.svg`)"
              width="100%"
              height="40px"></inline-svg>
          </div>
        </template>
      </custom-select>

      <div>
        Shape height

        <input type="range" min="40" max="200"
          :value="getBlockSetting(keyForActiveBlock('shape_size'), 40)"
          @input="setBlockSetting(keyForActiveBlock('shape_size'), $event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        shapes: ["flat", "slant", "layered", "playful"],
        colors: ["light", "dark", "primary", "accent"],
        textColors: ["dark", "light"]
      }
    },
    mounted() {
    },
    methods: {
      toggleBackground() {
        const key = this.keyForActiveBlock("enable_background")
        const state = this.$root.blockSettings[key]

        this.setBlockSetting(key, !state)

        if (state) this.setBlockSetting(this.keyForActiveBlock('text_color'), "dark")
      },
      selectShape(index, position) {
        const key = this.keyForActiveBlock("shape_" + position)
        const selected = this.shapes[index]

        this.setBlockSetting(key, selected)
        this.selectedShape = selected
      }
    }
  }
</script>

<style lang="scss">

</style>
