<template>
  <v-app app>
    <v-layout class="layout">
      <navbar />
      <router-view></router-view>
    </v-layout>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.layout {
  background-color: rgba(24, 22, 22, 0.048);
}
</style>
