<template>
  <v-row dense>
    <v-col v-for="city in cityList" :key="city.id" cols="12">
      <weather-card-lite cityName="{{city.name}}" />
    </v-col>
  </v-row>
</template>
<script>
import WeatherCardLite from "@/components/WeatherCardLite.vue";
export default {
  props: {
    cityList: {
      type: Array,
      default: [],
    },
  },
  components: {
    WeatherCardLite,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
