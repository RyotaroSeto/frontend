<template>
  <div class="mt-3">
    <v-card class="mt-5 mx-auto" max-width="600">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row justify="center">
            <p cols="12" class="mt-3 display-1 grey--text">
              ログイン
            </p>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10" sm="10">
              <v-text-field v-model="email" label="Eメールアドレス"/>
              <p class="caption mb-0" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10" sm="10">
              <v-text-field v-model="password" type="password" label="パスワード"/>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10" sm="10">
              <v-btn block class="mr-4 blue white--text" @click="loginWithAuthModule">
                  ログイン
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      email: '',
      valid: ''
    }
  },
  methods: {
    async loginWithAuthModule () {
      await this.$auth.loginWith('http://localhost:3000/', {
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          return response
        },
        (error) => {
          console.log('失敗しました')
          return error
        })
    }
  }
}
</script>
