<template>
  <v-main>
    <v-row class="mt-4" dense>
      <v-col v-for="user in Object.keys(users)" :key="user" cols="12">
        <user-card
          :user="user"
          :password="users[user].password"
          :isAdmin="users[user].isAdmin"
          @deleteUser="getUsers"
        />
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import UserCard from "@/components/UserCard.vue";
import { usersService } from "@/API/usersService";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: {},
    };
  },
  methods: {
    getUsers() {
      this.users = usersService.getUsers();
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
<style></style>
