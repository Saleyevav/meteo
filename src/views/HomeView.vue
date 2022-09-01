<template>
  <v-main>
    <v-container>
      <v-row dense>
        <v-col cols="6">
          <my-input @changeCity="changeCity"></my-input>
          <weather-card :city="city" />
        </v-col>
        <v-col cols="6">
          <v-row dense>
            <v-col v-for="n in 3" :key="n" cols="12">
              <v-card
                :title="`Москва`"
                :subtitle="`Столица`"
                text="Температура"
              ></v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import WeatherCard from "@/components/WeatherCard.vue";
import MyInput from "@/components/MyInput.vue";

export default {
  components: {
    WeatherCard,
    MyInput,
  },
  data() {
    return {
      city: "Москва",
    };
  },
  methods: {
    changeCity(city) {
      this.city = city;
    },
  },

  beforeMount() {
    if (!this.$store.state.isLogin) {
      this.$router.push("/login");
    }
  },
};
</script>
<style></style>
