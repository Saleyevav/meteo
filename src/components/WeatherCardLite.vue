<template>
  <my-input @changeCity="changeCity"></my-input>
  <v-card>
    <div v-if="status == 200">
      <v-card-item>
        <v-card-title class="text-h5">{{ city }} {{ country }}</v-card-title>

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

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click=""> В избранное </v-btn>
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
  </v-card>
</template>

<script>
import { getWeather } from "@/API/getWeather";
import MyInput from "@/components/MyInput.vue";
export default {
  components: { MyInput },
  name: "weather-card-lite",
  data() {
    return {
      city: "Москва",
      id: "",
      country: "",
      temp: "",
      description: "нет данных",
      weatherIcon: "",
      status: 200,
      statusText: "OK",
    };
  },
  methods: {
    changeCity(city) {
      this.city = city;
    },
    async setWeather() {
      const weatherData = await getWeather(this.city);
      this.status = weatherData.status;
      if (weatherData.status == 200) {
        this.id = weatherData.id;
        this.country = weatherData.country;
        this.temp = weatherData.temp;
        this.description = weatherData.description;
        this.weatherIcon = weatherData.icon;
      } else {
        this.statusText = weatherData.statusText;
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
