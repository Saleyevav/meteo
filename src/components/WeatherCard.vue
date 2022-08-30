<template>
  <v-card class="mx-auto" max-width="368">
    <v-card-item>
      <v-card-title class="text-h5">{{ city }}</v-card-title>

      <v-card-subtitle>{{ description }}</v-card-subtitle>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" hide-gutters no-gutters>
        <v-col class="text-h1" cols="8"> {{ temp }}&deg;C </v-col>

        <v-col cols="4" class="text-right">
          <v-img :src="weatherIcon"></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list-item density="compact">
      <v-list-item-subtitle
        >Ощущается как {{ feels_like }}&deg;C</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item density="compact">
      <v-list-item-avatar left>
        <v-icon icon="mdi-weather-windy"></v-icon>
      </v-list-item-avatar>
      <v-list-item-subtitle>{{ wind }} m/s</v-list-item-subtitle>
    </v-list-item>

    <v-list-item density="compact">
      <v-list-item-avatar left>
        <v-icon icon="mdi-water-percent"></v-icon>
      </v-list-item-avatar>
      <v-list-item-subtitle>{{ humidity }}%</v-list-item-subtitle>
    </v-list-item>

    <v-expand-transition>
      <div v-if="expand">
        <v-slider
          v-model="time"
          :max="6"
          :step="1"
          :ticks="labels"
          class="mx-4"
          color="primary"
          density="compact"
          hide-details
          show-ticks="always"
          thumb-size="10"
        ></v-slider>

        <v-list class="transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand"> В избранное </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { getWeather } from "@/API/getWeather";
export default {
  name: "weather-card",
  props: {
    city: {
      type: String,
      default: "Moscow",
    },
  },
  data() {
    return {
      temp: 0,
      wind: 0,
      description: "нет данных",
      weatherIcon: "",
      humidity: 0,
      feels_like: 0,
    };
  },
  methods: {
    async setWeather() {
      const weatherData = await getWeather(this.city);
      if (weatherData) {
        console.log(weatherData);
        this.temp = weatherData.temp;
        this.wind = weatherData.wind;
        this.description = weatherData.description;
        this.weatherIcon = weatherData.icon;
        this.humidity = weatherData.humidity;
        this.feels_like = weatherData.feels_like;
      } else {
        console.log("Нет такого города");
      }
    },
  },
  watch: {
    city() {
      this.setWeather();
    },
  },
  mounted() {
    this.setWeather();
  },
};
</script>
<style></style>
