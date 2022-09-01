<template>
  <v-main>
    <v-container>
      <v-row dense>
        <v-col cols="6">
          <weather-card :city="city" />
        </v-col>
        <v-col cols="6">
          <weather-list />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherList from "@/components/WeatherList.vue";
export default {
  components: {
    WeatherCard,
    WeatherList,
  },
  data() {
    return {
      city: "Москва",
    };
  },

  beforeMount() {
    if (!this.$store.state.isLogin) {
      this.$router.push("/login");
    }
  },
};
</script>
<style></style>
