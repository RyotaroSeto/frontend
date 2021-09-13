<template>
  <v-app>
    <v-main>
      <v-container grid-list>
        <v-layout justify-center align-center class="mx-auto" elevation="2" max-width="510">
          <v-flex xs12 sm10 md8 lg6 xl4>
            <v-layout justify-center>
              <v-badge offset-x="20" offset-y="20" overlap color="rgba(0,0,0,0)">
                <v-avatar size="80" class="mb-3 avatar">
                  <img ref="fileInput" src="@/assets/img/sei.png" alt="avatarImage" class="avatar-image"/>
                </v-avatar>
              </v-badge>
            </v-layout>
            <v-card-title class="pa-4 justify-center">{{profile.name}}</v-card-title>
            <v-col>{{profile.body}}</v-col>
            <!-- モーダルウィンドウが出てきて編集できるようにする -->
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed block v-bind="attrs" v-on="on" @click="getProfile">プロフィールを編集する</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{profile.name}}さんのプロフィール</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="苗字*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="名前*" hint="" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="メールアドレス*" required></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6">
                          <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col> -->
                        <v-col cols="12" sm="12">
                          <v-text-field label="年齢*" required></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6">
                          <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple></v-autocomplete>
                        </v-col> -->
                        <v-col cols="12" sm="12">
                          <v-textarea label="自己紹介"></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*は必須項目です。</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">閉じる</v-btn>
                    <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-card-title class="pa-6">プロフィール詳細</v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
      <FutterSticky />
    </v-main>
  </v-app>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const url = process.client ? 'http://localhost:80/api/profile/get' : 'http://web:80/api/profile/get'
    const response = await $axios.$get(url);
    return { profile: response }
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    getProfile () {
      console.log(12)
    },
    save () {
      console.log(123)
      this.dialog = false
    },
  },
};
</script>

<style scoped>
.avatar {
  cursor: pointer;
  background-color: #eee;
}
.avatar-image {
  object-fit: cover;
}
</style>
