<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" loading="true">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Вход в "Библиогород"</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon large target="_blank" @click="$router.push('/')">
                  <v-icon>mdi-arrow-left-circle</v-icon>
                </v-btn>
              </template>
              <span>На главную</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form  v-model="valid" ref="form">
              <v-text-field
                label="Ваш e-mail"
                name="email"
                prepend-icon="mdi-account-outline"
                type="text"
                :rules="emailRules"
                v-model="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock-outline"
                :rules="passwordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                v-model="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions pt-3 pb-3>
            <v-card-subtitle
              >Нет аккауната?
              <router-link to="/registration"
                >Зарегистрируйтесь</router-link
              ></v-card-subtitle
            >
            <v-spacer></v-spacer>

            <v-btn color="primary" @click="submit">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar"  color="red">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="grey lighten-5" text small v-bind="attrs" @click="snackbar = false">
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "login",
  metaInfo() {
    return {
      title: this.$title("Login"),
    };
  },
  data: () => ({
    valid: false,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail не указан",
      (v) => /.+@.+/.test(v) || "Введите корректный E-mail ",
    ],
    showPassword: false,
    passwordRules: [(v) => !!v || "Пароль не указан",
                    (v) => !(v.length < 8) || "Введите пароль, не менее 8 символов"],
    multiLine: true,
    snackbar: false,
    text: `Ошибка. Имя пользователя либо пароль не верен`,
  }),
  mounted() {},
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {
        this.text = 'Что то пошло не так'
        this.snackbar = true
      }
    },
    submit() {                  
      this.$refs.form.validate();
      if (!this.valid) return
      this.submitHandler()
    }
  },
};
</script>>
