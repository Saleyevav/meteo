<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col cols="6">
          <!-- <v-text-field
            :append-outer-icon="'mdi-send'"
            clear-icon="mdi-close-circle"
            color="teal"
            label="Город"
            placeholder="Москва"
          ></v-text-field> -->
          <my-input @changeCity="changeCity"></my-input>
          <weather-card />
        </v-col>

        <v-col cols="6">
          <v-row dense>
            <v-col v-for="n in 30" :key="n" cols="12">
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
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
  methods: {
    changeCity(city) {
      alert(city);
    },
  },
};
</script>
<style></style>
