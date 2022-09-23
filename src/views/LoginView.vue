<script>
import { usersService } from "@/API/usersService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const password = ref("");
    const showAlert = ref(false);
    const store = useStore();
    const router = useRouter();

    function login() {
      if (name.value) {
        const user = usersService.getUserData(name.value);
        if (user) {
          if (user.name == name.value && user.password == password.value) {
            //Успешная авторизация
            store.commit("login", user.name);
            router.push("/");
            if (user.isAdmin) {
              store.commit("setIsAdminTrue");
            }
          } else {
            showAlert.value = true;
          }
        } else {
          showAlert.value = true;
        }
      }
    }

    return { name, password, showAlert, login };
  },
};
</script>

<template>
  <v-main>
    <v-sheet class="d-flex justify-center pt-10" @keyup.enter="login">
      <v-sheet elevation="18" width="368" class="pa-4">
        <v-alert prominent type="error" variant="outlined" v-if="showAlert">
          Неверное имя или пароль
        </v-alert>

        <v-form>
          <v-text-field
            v-model="name"
            label="Name"
            required
            @update:modelValue="showAlert = false"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            @update:modelValue="showAlert = false"
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="login"> Login </v-btn>
        </v-form>
      </v-sheet>
    </v-sheet>
  </v-main>
</template>
