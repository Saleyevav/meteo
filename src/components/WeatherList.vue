<template>
  <v-row dense>
    <v-col v-for="n in 3" :key="n" cols="12">
      <weather-card-lite cityName="Муром" />
    </v-col>
  </v-row>
</template>
<script>
import WeatherCardLite from "@/components/WeatherCardLite.vue";

export default {
  components: {
    WeatherCardLite,
  },
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    getWeatherList() {},
  },
};
</script>
<style></style>
