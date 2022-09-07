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
      this.$emit("changeCity", this.message.trim());
      this.clear();
    },
  },
};
</script>
<style></style>
