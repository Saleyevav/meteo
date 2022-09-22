<template>
  <v-text-field
    v-model="message"
    color="teal-darken-1"
    variant="filled"
    clear-icon="mdi-close-circle"
    clearable
    label="Город"
    type="text"
    @click:clear="clear"
    @keyup.enter="send"
  ></v-text-field>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    const message = ref("");

    function clear() {
      message.value = "";
    }

    function send() {
      emit("changeCity", message.value.trim());
      clear();
    }

    return { message, clear, send };
  },
};
</script>
<style></style>
