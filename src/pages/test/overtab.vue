<template>
  <v-app>
    <v-app-bar color="white" fixed app>
      <v-tabs v-model="model" grow>
        <v-tab href="#tab-1">取引先</v-tab>
        <v-tab href="#tab-2">現場</v-tab>
        <v-tab href="#tab-3">社員募集</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-container>
      <v-content>
        <v-layout column justify-center align-center>
          <v-flex xs12 sm8 md6>
            <v-card  v-for="post in posts" :key="post.id">
              <v-card-title class="headline">
                <n-link :to="`/posts/${post.craftsman_search_id}`">
                  {{ post.craftsman_search_title }} - {{ post.name }}
                </n-link>
              </v-card-title>
              <v-card-text>
                {{ post.craftsman_search_body }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-pagination v-model="page" :length="6" @input = "getNumber"></v-pagination>
      </v-content>
    </v-container>
    <v-bottom-navigation fixed app dark height="72">
      <v-tabs v-model="tab" centered icons-and-text grow>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">
          見つける
          <v-icon>mdi-heart</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          会話する
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          マイページ
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
      const url = process.client ? 'http://localhost:80/api/test' : 'http://web:80/api/test'
      const response = await $axios.$get(url);
      console.log(response)
      console.log(response[0].craftsman_search_body)
      return {
        posts: response
      }
  },
  data () {
    return {
      model: 'tab-1',
      active: 'tabA', // アクティブなタブ名
      // 各タブのスクロール位置
      position: {
          tabA: null,
          tabB: null,
          tabC: null,
      },
      variant: 'fixed',
      mounted() {
          // イベントリスナの追加
          window.addEventListener('scroll', this.handleScroll);
      },
      destroyed() {
          // イベントリスナの削除
          window.removeEventListener('scroll', this.handleScroll);
      },
      methods: {
          handleScroll() {
              // 現在アクティブなタブのスクロール位置を保持
              this.position[this.active] = window.scrollY;
          }
      },
      watch: {
          // activeの変更を検知
          active() {
              // 切り替え後のタブですでに保持されたスクロール位置があればその位置を取得
              const y = this.position[this.active] || 0;

              // 即時スクロールすると、切り替え前のタブの長さ ＜ 切り替え後のタブの長さである場合に、切り替え前のタブの最大値までしかスクロールされないことがある（切り替え後のタブの内容が描画される前にスクロールしようとする）ので、setTimeoutでタイミングを少しずらす
              setTimeout(() => {
                  window.scroll(0, y);
              }, 200);
          },
      },
    }
  }
}
</script>
