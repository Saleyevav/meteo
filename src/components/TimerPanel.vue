<template>
  <v-card class="mt-6 pa-6">
    <v-card-title class="pl-0"
      >Обновлять данные каждые {{ Math.round(slider) }} мин.</v-card-title
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
      this.$emit("changeSlider", Math.round(this.slider));
    },
  },
};
</script>
