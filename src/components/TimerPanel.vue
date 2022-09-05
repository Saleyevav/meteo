<template>
  <v-card class="mt-6 pa-6">
    <v-card-title
      >Обновлять данные каждые {{ Math.round(slider) }} минут</v-card-title
    >
    <v-slider
      v-model="slider"
      class="align-center"
      :max="max"
      :min="min"
      hide-details
    >
    </v-slider>
  </v-card>
</template>
<script>
export default {
  name: "timer-panel",
  data() {
    return {
      min: 0,
      max: 60,
      slider: 0,
    };
  },
  watch: {
    slider() {
      this.$emit("changeSlider", slider);
    },
  },
};
</script>
