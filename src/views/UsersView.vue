<template>
  <v-main><div>Users</div></v-main>
</template>
<script>
export default {
  beforeMount() {
    if (!this.$store.state.isLogin) {
      this.$router.push("/login");
    }
    if (!this.$store.state.isAdmin) {
      this.$router.push("/");
    }
  },
};
</script>
<style></style>
