<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <v-app app>
    <v-layout>
      <navbar />
      <router-view></router-view>
    </v-layout>
  </v-app>
</template>
