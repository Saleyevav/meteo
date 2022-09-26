<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

function logout() {
  store.commit("logout");
  store.commit("setIsAdminFalse");
  router.push("/login");
}
</script>

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

    <v-btn
      @click="$router.push('/')"
      v-if="$store.state.isLogin && $store.state.isAdmin"
    >
      На главную
    </v-btn>

    <v-btn
      @click="$router.push('/users')"
      v-if="$store.state.isAdmin && $store.state.isLogin"
    >
      Пользователи
    </v-btn>

    <v-btn class="ml-3" @click="logout" v-if="$store.state.isLogin">
      Выйти
    </v-btn>
  </v-app-bar>
</template>
