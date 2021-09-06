<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" loading="true">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title
              >Регистрация в проекте "Библиогород"</v-toolbar-title
            >
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
          <v-card-text class="mb-0 pb-0">
            <v-form v-model="valid" ref="form">
              <v-text-field
                label="Ваше имя"
                name="user_name"
                prepend-icon="mdi-account-outline"
                type="text"
                v-model="userName"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                label="Ваш e-mail"
                name="email"
                v-model="email"
                prepend-icon="mdi-email-outline"
                type="text"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock-outline"
                v-model="userPassword"
                :rules="passwordRules"
                required
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-text-field
                id="passwordCheck"
                label="Подтвердите пароль"
                name="passwordCheck"
                prepend-icon="mdi-lock-check-outline"
                v-model="userPasswordCheck"
                :rules="passwordRulesCheck"
                required
                :append-icon="showPasswordCheck ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPasswordCheck ? 'text' : 'password'"
                @click:append="showPasswordCheck = !showPasswordCheck"
              ></v-text-field>
            </v-form>
            <v-checkbox
              v-model="checkbox"
              required
              :rules="[
                (v) =>
                  !!v || 'Необходимо согласится с условиями для регистрации',
              ]"
            >
              <template v-slot:label>
                <div>
                  Я принимаю
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="https://cbs-uu.ru"
                        @click.stop
                        v-on="on"
                      >
                        условия пользования
                      </a>
                    </template>
                    Ознакомится с условиями использования
                  </v-tooltip>
                  сервисом
                </div>
              </template>
            </v-checkbox>
          </v-card-text>

          <v-card-actions pt-3 pb-3>
            <v-card-subtitle
              >Уже есть аккаунат?
              <router-link to="/login">Войти</router-link></v-card-subtitle
            >
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!checkbox" @click="submit"
              >Зарегистрироватся</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      checkbox: false,
      valid: false,
      userName: "",
      nameRules: [
        (v) => !!v || "Имя не указано",
        (v) => v.trim().length >= 3 || "Имя должно быть не меньше 3 сиволов",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail не указан",
        (v) => /.+@.+/.test(v) || "Введите корректный E-mail ",
      ],
      userPassword: "",
      showPassword: false,
      passwordRules: [
        (v) => !!v || "Пароль не указан",
        (v) =>
          (v.length > 7 && v.length < 21) ||
          "Длина пароля должна быть больше от 8 до 20 символов",
      ],
      userPasswordCheck: "",
      showPasswordCheck: false,
      passwordRulesCheck: [
        (v) => !!v || "Пароль не указан",
        (v) =>
          (v.length > 7 && v.length < 21) ||
          "Длина пароля должна быть больше от 8 до 20 символов",
        (v) =>
          this.userPassword === this.userPasswordCheck || "Пароли не совпадают",
      ],
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate()
    },
  },
computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.rePassword) || 'Password must match'
    }
}
};
</script>>
