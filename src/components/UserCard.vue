<template lang>
  <v-card>{{ user }} {{ password }} {{ isAdmin }}</v-card>
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
