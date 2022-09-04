<template>
  <v-row dense>
    <v-col v-for="city in cityList" :key="city.id" cols="12">
      <weather-card-lite
        :cityName="city.name"
        @deleteCity="deleteCity"
        @changeCity="changeCity"
      />
    </v-col>
  </v-row>
</template>
<script>
import WeatherCardLite from "@/components/WeatherCardLite.vue";
export default {
  name: "weather-list",
  emits: ["deleteCity", "changeCity"],
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
  methods: {
    deleteCity(city) {
      this.$emit("deleteCity", city);
    },
    changeCity(city, newCity) {
      this.$emit("changeCity", city, newCity);
    },
  },
};
</script>
<style></style>
