<template>
  <v-main>
    <v-sheet class="d-flex justify-center pt-10">
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
<script>
import { usersService } from "@/API/usersService";
export default {
  data() {
    return {
      name: "",
      password: "",
      showAlert: false,
    };
  },
  methods: {
    login() {
      if (this.name) {
        const user = usersService.getUser(this.name);
        if (user) {
          if (user.name == this.name && user.password == this.password) {
            console.log("IS LOGIN");
          } else {
            this.showAlert = true;
          }
        } else {
          this.showAlert = true;
        }
      }
    },
  },
};
</script>
<style></style>
