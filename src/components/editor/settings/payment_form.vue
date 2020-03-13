<template>
  <div>
    <h3>Payment Form Settings</h3>

    <collapsable title="Content">
      <layout-changer
        label="Layout"
        :content_key="this.$root.currentlyActiveBlock + '_layout'"
        :options="{ 'Columns': 'columns', 'Basic': 'basic' }"></layout-changer>
    </collapsable>

    <collapsable title="Background">
      <layout-changer
        label="Background style"
        :content_key="this.$root.currentlyActiveBlock + 'background_style'"
        :options="{ 'Flat': 'flat', 'Shape': 'shape' }"></layout-changer>

      <div class="sidebar-item">
        Color

        <div class="button-group">
          <block-setting-button
          v-for="(color, index) in colors"
          :key="index"
          :label="color"
          :content_key="keyForActiveBlock('background_color')"
          :value="color"></block-setting-button>
        </div>
      </div>

      <div v-if="getBlockSetting(this.$root.currentlyActiveBlock + 'background_style') == 'shape'">
        <custom-select label="Shape">
          <template #selected>
            <inline-svg
              :src="require(`../../../assets/block_style/${ getBlockSetting(`${ $root.currentlyActiveBlock }_shape_top`, 'slant') }_top.svg`)"
              width="100%"
              height="40px"></inline-svg>
          </template>

          <template #content>
            <div v-for="(shape, index) in shapes" :key="index" class="custom-select__item" @click="selectShape(index, 'top')">
              <inline-svg
                :src="require(`../../../assets/block_style/${ shape }_top.svg`)"
                width="100%"
                height="40px"></inline-svg>
            </div>
          </template>
        </custom-select>

        <div>
          Shape height

          <input type="range" min="40" max="250"
            :value="getBlockSetting(keyForActiveBlock('shape_size'), 100)"
            @input="setBlockSetting(keyForActiveBlock('shape_size'), $event.target.value)">
        </div>
      </div>
    </collapsable>
  </div>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        shapes: ["slant", "layered", "playful", "flat"],
        colors: ["accent", "secondary"]
      }
    },
    mounted() {

    },
    methods: {
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
