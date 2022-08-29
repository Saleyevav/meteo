<template>
  <v-app-bar
    color="teal-darken-4"
    image="https://phonoteka.org/uploads/posts/2022-01/1643268970_75-phonoteka-org-p-pogoda-fon-87.jpg"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-app-bar-title class="text-h4">METEO</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn> Logout </v-btn>
    <v-btn class="ml-3"> Users </v-btn>
  </v-app-bar>
</template>
<script>
export default {};
</script>
<style></style>
