<script>
import { getWeather } from "@/API/getWeather";
import MyInput from "@/components/MyInput.vue";
import { ref, watch, onMounted } from "vue";

export default {
  components: { MyInput },
  name: "weather-card",
  emits: ["addCityToFavorites"],

  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const city = ref("Москва");
    const id = ref("");
    const country = ref("");
    const temp = ref("");
    const feels_like = ref("");
    const wind = ref(0);
    const description = ref("нет данных");
    const weatherIcon = ref("");
    const humidity = ref(0);
    const status = ref(200);
    const statusText = ref("OK");
    let timerId = 0;
    const isLoading = ref(false);

    function addCityToFavorites() {
      emit("addCityToFavorites", { name: city.value, id: id.value });
    }

    function changeCity(cityName) {
      city.value = cityName;
    }

    async function setWeather() {
      isLoading.value = false;
      const weatherData = await getWeather(city.value);
      isLoading.value = true;
      status.value = weatherData.status;
      if (weatherData.status == 200) {
        id.value = weatherData.id;
        country.value = weatherData.country;
        temp.value = weatherData.temp;
        wind.value = weatherData.wind;
        description.value = weatherData.description;
        weatherIcon.value = weatherData.icon;
        humidity.value = weatherData.humidity;
        feels_like.value = weatherData.feels_like;
      } else {
        statusText.value = weatherData.statusText;
      }
    }

    async function setTimer(interval) {
      clearInterval(timerId);
      if (interval) {
        timerId = await setInterval(() => {
          setWeather();
        }, interval * 1000 * 60);
      }
    }

    watch(city, () => setWeather());

    watch(
      () => props.timer,
      (value) => setTimer(value),
    );

    onMounted(setWeather);

    return {
      city,
      country,
      temp,
      feels_like,
      wind,
      description,
      weatherIcon,
      humidity,
      status,
      statusText,
      isLoading,
      addCityToFavorites,
      changeCity,
      setWeather,
    };
  },
};
</script>

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
