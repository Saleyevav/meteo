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
    timer: {
      interval: Number,
      default: 0,
    },
  },

  components: {
    WeatherCardLite,
  },

  setup(props, { emit }) {
    function deleteCity(city) {
      emit("deleteCity", city);
    }

    function changeCity(city, newCity) {
      emit("changeCity", city, newCity);
    }

    return { deleteCity, changeCity };
  },
};
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
