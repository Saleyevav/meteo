<template>
  <my-input variant="solo" @changeCity="changeCity"></my-input>
  <v-card class="mx-auto" max-width="368">
    <div v-if="isLoading">
      <div v-if="status == 200">
        <v-card-item>
          <v-card-title class="text-h4">{{ city }} {{ country }}</v-card-title>

          <v-card-subtitle>{{ description }}</v-card-subtitle>
        </v-card-item>

        <v-card-text class="py-0">
          <v-row align="center" hide-gutters no-gutters>
            <v-col class="text-h2" cols="6"> {{ temp }}&deg;C </v-col>

            <v-col cols="6" class="text-right">
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
          <v-list-item-title left>
            <v-icon icon="mdi-weather-windy"></v-icon>
          </v-list-item-title>

          <v-list-item-subtitle>{{ wind }} m/s</v-list-item-subtitle>
        </v-list-item>

        <v-list-item density="compact">
          <v-list-item-title left>
            <v-icon icon="mdi-water-percent"></v-icon>
          </v-list-item-title>

          <v-list-item-subtitle>{{ humidity }}%</v-list-item-subtitle>
        </v-list-item>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="addCityToFavorites"> В избранное </v-btn>
        </v-card-actions>
      </div>
      <div v-else-if="status == 404">
        <v-alert prominent type="error" variant="outlined">
          Не известный город <strong>{{ city }}</strong
          >, попробуйте другой.
        </v-alert>
      </div>

      <div v-else>
        <v-alert prominent type="error" variant="outlined">
          Ошибка <strong>{{ status }}:</strong> {{ statusText }}
        </v-alert>
      </div>
    </div>

    <div v-else>
      <v-progress-circular indeterminate color="teal"></v-progress-circular>
    </div>
  </v-card>
</template>

<script>
import { getWeather } from "@/API/getWeather";
import MyInput from "@/components/MyInput.vue";
export default {
  components: { MyInput },
  name: "weather-card",
  emits: ["addCityToFavorites"],

  props: {
    timer: {
      interval: Number,
      default: 0,
    },
  },

  data() {
    return {
      city: "Москва",
      id: "",
      country: "",
      temp: "",
      feels_like: "",
      wind: 0,
      description: "нет данных",
      weatherIcon: "",
      humidity: 0,
      status: 200,
      statusText: "OK",
      timerId: 0,
      isLoading: false,
    };
  },

  methods: {
    addCityToFavorites() {
      this.$emit("addCityToFavorites", { name: this.city, id: this.id });
    },

    changeCity(city) {
      this.city = city;
    },

    async setWeather() {
      this.isLoading = false;
      const weatherData = await getWeather(this.city);
      this.isLoading = true;
      this.status = weatherData.status;
      if (weatherData.status == 200) {
        this.id = weatherData.id;
        this.country = weatherData.country;
        this.temp = weatherData.temp;
        this.wind = weatherData.wind;
        this.description = weatherData.description;
        this.weatherIcon = weatherData.icon;
        this.humidity = weatherData.humidity;
        this.feels_like = weatherData.feels_like;
      } else {
        this.statusText = weatherData.statusText;
      }
    },

    async setTimer(interval) {
      clearInterval(this.timerId);
      if (interval) {
        this.timerId = await setInterval(() => {
          this.setWeather();
        }, interval * 1000 * 60);
      }
    },
  },

  watch: {
    city() {
      this.setWeather();
    },

    timer(value) {
      this.setTimer(value);
    },
  },

  mounted() {
    this.setWeather();
  },
};
</script>
<style></style>
