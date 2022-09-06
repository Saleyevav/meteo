<template>
  <v-card max-width="1200" class="mx-auto mt-6 pa-4">
    <v-card-title class="pl-0">Добавить нового пользователя</v-card-title>
    <v-row>
      <v-col class="d-flex align-center" cols="12" md="4">
        <v-text-field
          v-model="name"
          :rules="[rules.min]"
          name="input-user-name"
          label="Имя пользователя"
          hint="Минимум 4 символа"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>

      <v-col class="d-flex align-center" cols="12" md="4">
        <v-text-field
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="name"
          :type="show1 ? 'text' : 'password'"
          name="input-password"
          label="Пароль"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>

      <v-col class="d-flex align-center mb-5" cols="12" md="2"
        ><div>Администратор</div>
        <v-switch
          class="pl-2"
          v-model="isAdmin"
          color="red"
          hide-details
        ></v-switch>
      </v-col>

      <v-col
        class="d-flex align-center justify-start justify-md-end"
        cols="12"
        md="2"
      >
        <v-btn width="120" color="success" @click="" class="mb-5">
          Добавить
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      isAdmin: false,
      name: "",
      password: "",
      show1: false,
      show2: true,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 4 || "Min 4 characters",
        // nameIsTaken: () => "Имя занято",
      },
    };
  },
  methods: {
    nameIsTaken() {},
  },
};
</script>
<style></style>
