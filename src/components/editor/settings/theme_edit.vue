<template>
  <div>
    <label class="sidebar-item">
      Theme name

      <input type="text" :value="name" @change="setName($event)" />
    </label>

    <div class="form-columns">
      <label class="sidebar-item">
        Accent color

        <input type="text" :value="colorAccent" @change="setAccentColor($event)" />
      </label>

      <label class="sidebar-item">
        Secondary color

        <input type="text" :value="colorSecondary" @change="setSecondaryColor($event)" />
      </label>
    </div>

    <a class="button button--primary" @click="saveThemeSettings()">Save theme</a>
    <center><a class="text-secondary" @click="cancel()">Cancel</a></center>
  </div>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        name: this.$root.themes[this.$root.activeTheme].name,
        colorAccent: this.$root.themes[this.$root.activeTheme].colorAccent,
        colorSecondary: this.$root.themes[this.$root.activeTheme].colorSecondary
      }
    },
    methods: {
      cancel() {
        this.getRootElements("sidebar").activeMenu = "theme"
      },
      setAccentColor(event) {
        this.colorAccent = event.target.value
      },
      setSecondaryColor(event) {
        this.colorSecondary = event.target.value
      },
      setName(event) {
        this.name = event.target.value
      },
      saveThemeSettings() {
        this.$set(this.$root.themes[this.$root.activeTheme], "name", this.name)
        this.$set(this.$root.themes[this.$root.activeTheme], "colorAccent", this.colorAccent)
        this.$set(this.$root.themes[this.$root.activeTheme], "colorSecondary", this.colorSecondary)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../scss/_variables.scss"; // This sucks

</style>
