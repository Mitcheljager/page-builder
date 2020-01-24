<template>
  <div>
    <p class="top-offset mt-0">Select a theme for this page</p>

    <div v-for="(theme, index) in $root.themes" :key="index"
      class="theme"
      :class="index == $root.activeTheme ? 'theme--active' : ''"
      @click="setTheme(index)">

      <h3 class="theme__title">{{ theme.name }}</h3>
      <a class="theme__action"><span @click="editTheme()">Edit Theme</span></a>

      <div class="theme__content">
        <div class="theme__color" :style="'background: ' + theme.colorAccent"></div>
        <div class="theme__color"  :style="'background: ' + theme.colorSecondary"></div>

        <span>{{ theme.fontHeadline }}</span>
        <span class="text-secondary">{{ theme.fontBody }}</span>
      </div>
    </div>

    <p>
      <a @click="createTheme()" class="text-primary">+ Create a new theme</a>
    </p>
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
      setTheme(index) {
        this.$root.activeTheme = index
      },
      editTheme() {
        this.getRootElements("sidebar").activeMenu = "theme-edit"
      },
      createTheme() {
        this.$root.themes.push({
          name: "New theme",
          colorAccent: "#FF7675",
          colorSecondary: "#436FF5",
          fontHeadline: "Raleway",
          fontBody: "Merriweather"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../scss/_variables.scss"; // This sucks

  .theme {
    display: grid;
    grid-template:
      "title action"
      "content content";
    grid-template-columns: 2fr 1fr;
    padding: 1.25rem;
    margin-bottom: .5rem;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), inset 0 0 0 1px rgba($border-color, .5);
    border-radius: $border-radius;
    cursor: pointer;

    &:hover,
    &:active {
      box-shadow: 0 4px 6px rgba(0, 0, 0, .2), inset 0 0 0 1px $border-color;
    }

    &--active {
      box-shadow: 0 4px 6px rgba(0, 0, 0, .2), inset 0 0 0 2px $primary-color;

      &:hover,
      &:active {
        box-shadow: 0 4px 6px rgba(0, 0, 0, .2), inset 0 0 0 2px $primary-color;
      }
    }
  }

  .theme__title {
    grid-area: title;
    font-weight: normal;
    font-size: 21px;
    margin: 0 0 .5rem;
  }

  .theme__action {
    font-size: 14px;
    text-align: right;
    cursor: pointer;

    span {
      color: $text-color-light;

      &:hover,
      &:active {
        color: $text-color;
      }
    }
  }

  .theme__content {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1em;

    span {
      margin-left: .5em;
    }
  }

  .theme__color {
    height: 1em;
    width: 1em;
    border-radius: 50%;

    &:last-of-type {
      transform: translateX(-0.33em);
    }
  }
</style>
