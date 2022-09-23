<script>
import { usersService } from "@/API/usersService";
import { watch, ref } from "vue";

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

  setup(props, { emit }) {
    const changeProps = ref(false);
    const isAdmin = ref(props.isAdmin);

    function save() {
      usersService.changeAccess(props.user, isAdmin.value);
      changeProps.value = !changeProps.value;
    }

    function deleteUser() {
      usersService.deleteUser(props.user);
      emit("deleteUser", props.user);
    }

    watch(isAdmin, () => {
      changeProps.value = !changeProps.value;
    });

    return { changeProps, isAdmin, save, deleteUser };
  },
};
</script>

<template lang>
  <v-card max-width="1200" class="mx-auto mt-4 pa-4">
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
        class="d-flex flex-column align-md-start align-md-end"
        cols="12"
        md="2"
      >
        <v-btn
          width="120"
          color="red"
          class="my-2"
          @click="deleteUser"
          :disabled="$store.state.userName == user"
        >
          Удалить
        </v-btn>

        <v-btn
          width="120"
          color="success"
          class="my-2"
          @click="save"
          :disabled="!changeProps"
        >
          Сохранить
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
