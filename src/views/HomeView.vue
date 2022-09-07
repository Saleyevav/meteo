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
<script>
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherList from "@/components/WeatherList.vue";
import TimerPanel from "@/components/TimerPanel.vue";
import { usersService } from "@/API/usersService";

export default {
  components: {
    WeatherCard,
    WeatherList,
    TimerPanel,
  },

  data() {
    return {
      cityList: [],
      timer: 0,
    };
  },

  methods: {
    setTimer(value) {
      this.timer = value;
    },

    contains(arr, elem) {
      return arr.find((i) => i.id === elem.id);
    },

    deleteCity(city) {
      this.cityList = this.cityList.filter((c) => {
        return c.id !== city.id;
      });
      usersService.setCityList(this.$store.state.userName, this.cityList);
    },

    changeCity(city, newCity) {
      if (!this.contains(this.cityList, newCity)) {
        this.deleteCity(city);
        this.addCityToFavorites(newCity);
      } else {
        alert(newCity.name + " уже в избранном!");
      }
    },

    addCityToFavorites(city) {
      if (!this.contains(this.cityList, city)) {
        this.cityList.push(city);
        usersService.setCityList(this.$store.state.userName, this.cityList);
        this.getCityList();
      } else {
        alert(city.name + " уже в избранном!");
      }
    },

    getCityList() {
      const userData = usersService.getUserData(this.$store.state.userName);
      this.cityList = userData.cityList;
    },
  },

  mounted() {
    this.getCityList();
  },
};
</script>
<style></style>
