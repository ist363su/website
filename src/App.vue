<template>
<div>
  <v-app id="ist-v-app">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      clipped
      app
    >
      <img src="/logo.svg" class="logo">
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/schedule/">
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Course Schedule</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/weeks/">
          <v-list-item-action>
            <v-icon>mdi-briefcase-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Weekly Agenda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/project/">
          <v-list-item-action>
            <v-icon>mdi-briefcase-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Course Project</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/project-checklist/">
          <v-list-item-action>
            <v-icon>mdi-briefcase-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Final Project Checklist</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link @click="navigate('https://drive.google.com/file/d/1JfY5PbIzHPyhQ3n6Nxn-0AKJmqFReKwV/view?usp=sharing')">
          <v-list-item-action>
            <v-icon>mdi-bookmark</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Syllabus</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link to="/about/">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About the Instructor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        color="primary"
      app
      clipped-left
      dark
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>IST 363 - Advanced Web Development</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <router-view />
     </v-content>
    <v-footer
      color="primary"
      app
    >
      <span class="white--text">Nick Lyga - Syracuse University &copy; 2020</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    },
    methods: {
        navigate(to) {
            window.open(to);
        }
    }
}
</script>

<style lang="scss" scoped>
    .logo {
        margin: 20px 5px;
    }
</style>