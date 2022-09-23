<script>
import { watch, ref } from "vue";

export default {
  name: "timer-panel",

  setup(props, { emit }) {
    const min = 0;
    const max = 60;
    const slider = ref(0);
    watch(slider, () => {
      emit("changeSlider", Math.round(slider.value));
    });

    return { min, max, slider };
  },
};
</script>

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
