<template>

      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12" loading="true">
              <v-toolbar
                color="primary"
                dark
                flat              
              >
                <v-toolbar-title>Вход в "Библиогород"</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      @click="$router.push('/')"
                    >
                      <v-icon>mdi-arrow-left-circle</v-icon>
                     
                    </v-btn>
                  </template>
                  <span>На главную</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Ваш e-mail"
                    name="email"
                    prepend-icon="mdi-account-outline"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock-outline"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions pt-3 pb-3>
                <v-card-subtitle>Нет аккауната? <router-link to="/registration">Зарегистрируйтесь</router-link></v-card-subtitle>
               <v-spacer></v-spacer>
  
                <v-btn color="primary" >Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

</template>
<script>
export default {

}
</script>>
