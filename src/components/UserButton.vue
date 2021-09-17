<template>
  <div>
    <v-menu
      offset-y
      rounded="1"
      transition="slide-y-transition"
      nudge-bottom="5"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-icon class="pr-2">mdi-account-circle-outline</v-icon>
          {{ user }}
          <v-icon class="pl-2">mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list dense class="text-left">
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i"  @click="menuClick(item.name)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"               
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: "Иван Иванов",
    selectedItem: 1,
    items: [
      { text: "Профиль", icon: "mdi-account-cog-outline", name: "userProfile" },
      { text: "Выход из системы", icon: "mdi-logout-variant", name: "logout" },
    ],
  }),
  methods: {
    menuClick(name) {
        if (name == 'logout') this.logout()
    },
    async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/login?message=logout')
    }
  },
};
</script>

<style>
</style>