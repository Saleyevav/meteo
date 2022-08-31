<template>
  <v-app app>
    <!-- <v-card max-width="1200" class="mx-auto" color="grey-lighten-3"> -->
    <v-layout>
      <navbar />
      <router-view></router-view>
    </v-layout>
    <!-- </v-card> -->
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
