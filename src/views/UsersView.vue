<script>
import UserCard from "@/components/UserCard.vue";
import AddUserForm from "@/components/AddUserForm.vue";
import { usersService } from "@/API/usersService";
import { ref, onMounted } from "vue";

export default {
  components: {
    UserCard,
    AddUserForm,
  },

  setup() {
    const users = ref({});

    function getUsers() {
      users.value = usersService.getUsers();
    }

    onMounted(getUsers);

    return { users, getUsers };
  },
};
</script>
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

    <add-user-form class="mt-4" @addUser="getUsers" />
  </v-main>
</template>
