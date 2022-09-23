<script>
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherList from "@/components/WeatherList.vue";
import TimerPanel from "@/components/TimerPanel.vue";
import { usersService } from "@/API/usersService";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    WeatherCard,
    WeatherList,
    TimerPanel,
  },

  setup() {
    const cityList = ref([]);
    const timer = ref(0);
    const store = useStore();

    function setTimer(value) {
      timer.value = value;
    }

    function contains(arr, elem) {
      return arr.find((i) => i.id === elem.id);
    }

    function deleteCity(city) {
      cityList.value = cityList.value.filter((c) => {
        return c.id !== city.id;
      });
      usersService.setCityList(store.state.userName, cityList.value);
    }

    function changeCity(city, newCity) {
      if (!contains(cityList.value, newCity)) {
        deleteCity(city);
        addCityToFavorites(newCity);
      } else {
        alert(newCity.name + " уже в избранном!");
      }
    }

    function addCityToFavorites(city) {
      if (!contains(cityList.value, city)) {
        cityList.value.push(city);
        usersService.setCityList(store.state.userName, cityList.value);
        getCityList();
      } else {
        alert(city.name + " уже в избранном!");
      }
    }

    function getCityList() {
      const userData = usersService.getUserData(store.state.userName);
      cityList.value = userData.cityList;
    }

    onMounted(getCityList);

    return {
      cityList,
      timer,
      setTimer,
      deleteCity,
      changeCity,
      addCityToFavorites,
      getCityList,
    };
  },
};
</script>

<template>
  <v-main>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="6">
          <weather-card
            @addCityToFavorites="addCityToFavorites"
            :timer="timer"
          />
          <timer-panel @changeSlider="setTimer" />
        </v-col>

        <v-col cols="12" md="6">
          <weather-list
            :cityList="cityList"
            :timer="timer"
            @deleteCity="deleteCity"
            @changeCity="changeCity"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
