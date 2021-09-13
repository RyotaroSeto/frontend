<template>
  <v-app>
    <HeaderSticky />
    <v-container>
      <v-content>
        <v-layout justify-center align-center class="mx-auto" elevation="2" max-width="510">
          <v-flex xs12 sm10 md8 lg6 xl4>
            <v-card  v-for="post in posts" :key="post.id">
              <v-card-title class="headline">
                <n-link :to="`/${post.craftsman_search_id}`">
                  {{ post.craftsman_search_title }} - {{ post.name }}
                </n-link>
              </v-card-title>
              <v-card-text>
                {{ post.craftsman_search_body }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- <v-list>
          <v-list-item v-for="list in displayLists" :key="list.index">
            <v-list-item-content>
              <v-list-item-title>{{ list.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
        <v-pagination v-model="page" :length="6" @input = "pageChange"></v-pagination>
      </v-content>
    </v-container>
    <FutterSticky />
  </v-app>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const url = process.client ? 'http://localhost:80/api/test' : 'http://web:80/api/test'
    const response = await $axios.$get(url);
    return {
      posts: response
    }
  },
  data () {
    return {
      page: 1,
      lists: [],
      displayLists: [],
      pageSize: 10,
    }
  },
  // methods: {
  //   pageChange (pageNumber) {
  //     this.displayLists = this.lists.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
  //   },
  // },
  // mounted () {
  //   this.lists = new Array(99).fill().map((v,i)=> {
  //     return { id : i,title : 'Title' + i };
  //   });
  //   this.length = Math.ceil(this.lists.length/this.pageSize);

  //   this.displayLists = this.lists.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));
  // }
  // data () {
  //   return {
  //     model: 'tab-1',
  //     active: 'tabA', // アクティブなタブ名
  //     // 各タブのスクロール位置
  //     position: {
  //         tabA: null,
  //         tabB: null,
  //         tabC: null,
  //     },
  //     variant: 'fixed',
  //     mounted() {
  //         // イベントリスナの追加
  //         window.addEventListener('scroll', this.handleScroll);
  //     },
  //     destroyed() {
  //         // イベントリスナの削除
  //         window.removeEventListener('scroll', this.handleScroll);
  //     },
  //     methods: {
  //         handleScroll() {
  //             // 現在アクティブなタブのスクロール位置を保持
  //             this.position[this.active] = window.scrollY;
  //         }
  //     },
  //     watch: {
  //         // activeの変更を検知
  //         active() {
  //             // 切り替え後のタブですでに保持されたスクロール位置があればその位置を取得
  //             const y = this.position[this.active] || 0;

  //             // 即時スクロールすると、切り替え前のタブの長さ ＜ 切り替え後のタブの長さである場合に、切り替え前のタブの最大値までしかスクロールされないことがある（切り替え後のタブの内容が描画される前にスクロールしようとする）ので、setTimeoutでタイミングを少しずらす
  //             setTimeout(() => {
  //                 window.scroll(0, y);
  //             }, 200);
  //         },
  //     },
  //   }
  // }
}
</script>
