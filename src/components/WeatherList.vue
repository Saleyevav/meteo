<script setup>
import WeatherCardLite from "@/components/WeatherCardLite.vue";

const props = defineProps({
  cityList: {
    type: Array,
    default: [],
  },
  timer: {
    interval: Number,
    default: 0,
  },
});

const emit = defineEmits(["deleteCity", "changeCity"]);

function deleteCity(city) {
  emit("deleteCity", city);
}

function changeCity(city, newCity) {
  emit("changeCity", city, newCity);
}
</script>

<template>
  <v-row dense>
    <v-col v-for="city in cityList" :key="city.id" cols="12">
      <weather-card-lite
        :cityName="city.name"
        :timer="timer"
        @deleteCity="deleteCity"
        @changeCity="changeCity"
      />
    </v-col>
  </v-row>
</template>
