<template>
  <v-main>
    <v-sheet class="d-flex justify-center pt-10">
      <v-sheet elevation="18" width="368" class="pa-4">
        <v-alert prominent type="error" variant="outlined" v-if="showAlert">
          Имя занято
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
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click=""> Login </v-btn>
        </v-form>
      </v-sheet>
    </v-sheet>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      showAlert: false,
    };
  },
};
</script>
<style></style>
