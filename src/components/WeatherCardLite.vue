<script>
import { getWeather } from "@/API/getWeather";
import MyInput from "@/components/MyInput.vue";
import { ref, watch, onMounted } from "vue";

export default {
  components: { MyInput },
  name: "weather-card-lite",
  emits: ["deleteCity", "changeCity"],

  props: {
    cityName: {
      type: String,
      default: "Киржач",
    },
    timer: {
      interval: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const city = ref(props.cityName);
    const id = ref("");
    const country = ref("");
    const temp = ref("");
    const description = ref("нет данных");
    const weatherIcon = ref("");
    const status = ref(200);
    const statusText = ref("OK");
    let timerId = 0;
    const isLoading = ref(false);

    function deleteCity() {
      emit("deleteCity", { name: city.value, id: id.value });
    }

    async function changeCity(newCityName) {
      const weatherData = await getWeather(newCityName);
      status.value = weatherData.status;
      if (weatherData.status == 200) {
        emit(
          "changeCity",
          { name: city.value, id: id.value },
          { name: newCityName, id: weatherData.id },
        );
      } else {
        statusText.value = weatherData.statusText;
      }
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
        description.value = weatherData.description;
        weatherIcon.value = weatherData.icon;
      } else {
        statusText.value = weatherData.statusText;
      }
    }

    async function setTimer(interval) {
      clearInterval(timerId);
      if (interval) {
        timerId = await setInterval(setWeather, interval * 1000 * 60);
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
      id,
      country,
      temp,
      description,
      weatherIcon,
      status,
      statusText,
      isLoading,
      deleteCity,
      changeCity,
      setWeather,
    };
  },
};
</script>

<template>
  <v-card>
    <div v-if="isLoading">
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
    </div>

    <div v-else>
      <v-progress-circular indeterminate color="teal"></v-progress-circular>
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
