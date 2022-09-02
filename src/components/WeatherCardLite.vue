<template>
  <v-card>
    <div v-if="status == 200">
      <v-card-text class="py-0">
        <v-row align="center" hide-gutters no-gutters>
          <v-col class="text-h5" cols="4">{{ city }} {{ country }}</v-col>
          <v-spacer></v-spacer>
          <v-col class="text-h6" cols="3">{{ description }}</v-col>
          <v-col class="text-h6" cols="2"> {{ temp }}&deg;C </v-col>
          <v-col cols="2">
            <v-img :src="weatherIcon" max-width="50" class="ml-auto"></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-row align="center" class="mt-4" hide-gutters no-gutters>
        <v-col cols="6">
          <my-input
            density="compact"
            label="Изменить город"
            @changeCity="changeCity"
          ></my-input>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-card-actions>
            <v-btn @click="" class="mb-4"> Удалить </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
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
  props: {
    city: {
      type: String,
      default: "Киржач",
    },
  },
  data() {
    return {
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
