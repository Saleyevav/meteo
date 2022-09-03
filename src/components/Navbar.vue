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

    <v-app-bar-title class="text-h4 d-none d-md-flex">METEO</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/')"> На главную </v-btn>
    <v-btn @click="$router.push('/users')" v-if="$store.state.isAdmin">
      Пользователи
    </v-btn>
    <v-btn class="ml-3" @click="logout"> Выйти </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$store.commit("setIsAdminFalse");
      this.$router.push("/login");
    },
  },
};
</script>
<style></style>
