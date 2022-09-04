<template>
  <v-main>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="6">
          <weather-card @addCityToFavorites="addCityToFavorites" />
        </v-col>
        <v-col cols="12" md="6">
          <weather-list :cityList="cityList" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherList from "@/components/WeatherList.vue";
import { usersService } from "@/API/usersService";
export default {
  components: {
    WeatherCard,
    WeatherList,
  },
  data() {
    return {
      cityList: [],
    };
  },
  methods: {
    addCityToFavorites(city) {
      usersService.addCity(this.$store.state.userName, city);
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
