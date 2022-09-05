<template>
  <v-card>
    <div v-if="status == 200">
      <v-card-text class="py-0">
        <v-row align="center" hide-gutters no-gutters>
          <v-col class="text-h5" cols="5">{{ city }} {{ country }}</v-col>
          <v-spacer></v-spacer>
          <v-col class="text-subtitle-1" cols="4">{{ description }}</v-col>
          <v-col class="text-subtitle-1" cols="2"> {{ temp }}&deg;C </v-col>
          <v-col cols="1">
            <v-img :src="weatherIcon" max-width="50" class="ml-auto"></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>
    </div>

    <div v-else-if="status == 404">
      <v-alert prominent type="error" variant="outlined">
        Не известный город, попробуйте другой.
      </v-alert>
    </div>

    <div v-else>
      <v-alert prominent type="error" variant="outlined">
        Ошибка <strong>{{ status }}:</strong> {{ statusText }}
      </v-alert>
    </div>

    <v-row align="center" class="mt-4" hide-gutters no-gutters>
      <v-col cols="6">
        <my-input
          class="ml-4"
          density="compact"
          label="Изменить город"
          @changeCity="changeCity"
        ></my-input>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-card-actions>
          <v-btn @click="deleteCity" class="mb-4 ml-auto"> Удалить </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { getWeather } from "@/API/getWeather";
import MyInput from "@/components/MyInput.vue";
export default {
  components: { MyInput },
  name: "weather-card-lite",
  emits: ["deleteCity", "changeCity"],
  props: {
    cityName: {
      type: String,
      default: "Киржач",
    },
  },
  data() {
    return {
      city: this.cityName,
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
    deleteCity() {
      this.$emit("deleteCity", { name: this.city, id: this.id });
    },
    async changeCity(newCityName) {
      const weatherData = await getWeather(newCityName);
      this.status = weatherData.status;
      if (weatherData.status == 200) {
        this.$emit(
          "changeCity",
          { name: this.city, id: this.id },
          { name: newCityName, id: weatherData.id },
        );
      } else {
        this.statusText = weatherData.statusText;
      }
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
    async city() {
      await this.setWeather();
    },
  },
  mounted() {
    this.setWeather();
  },
};
</script>
<style></style>
