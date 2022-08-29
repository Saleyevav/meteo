<template>
  <v-text-field
    v-model="message"
    color="teal"
    :append-icon="'mdi-send'"
    variant="filled"
    clear-icon="mdi-close-circle"
    clearable
    label="Город"
    placeholder="Москва"
    type="text"
    @click:append="send"
    @click:clear="clear"
  ></v-text-field>
</template>
<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    clear() {
      this.message = "";
    },
    send() {
      this.$emit("changeCity", this.message);
      this.clear();
    },
  },
};
</script>
<style></style>
