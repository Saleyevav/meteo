<template>
  <v-row dense>
    <v-col v-for="n in 3" :key="n" cols="12">
      <weather-card-lite />
    </v-col>
  </v-row>
</template>
<script>
import WeatherCardLite from "@/components/WeatherCardLite.vue";
export default {
  components: {
    WeatherCardLite,
  },
};
</script>
<style></style>
