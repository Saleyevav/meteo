<template>
  <v-row dense>
    <v-col v-for="n in 3" :key="n" cols="12">
      <v-card
        :title="`Москва`"
        :subtitle="`Столица`"
        text="Температура"
      ></v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {};
</script>
<style></style>
