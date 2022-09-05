<template lang>
  <v-card max-width="1200" class="mx-auto pa-4">
    <v-row>
      <v-col class="d-flex align-center" cols="12" md="4"
        >Пользователь: <strong class="pl-2">{{ user }}</strong></v-col
      >
      <v-col class="d-flex align-center" cols="12" md="4"
        >Пароль: <strong class="pl-2">{{ password }}</strong></v-col
      >
      <v-col class="d-flex align-center" cols="12" md="2"
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
        <v-btn color="success" class="" @click="" disabled> Сохранить </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    user: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style></style>
