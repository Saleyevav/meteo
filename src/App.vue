<template>
  <v-app app>
    <v-layout>
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
};
</script>
