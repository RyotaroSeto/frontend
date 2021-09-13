<template>
    <v-bottom-navigation class="mx-auto" elevation="2" max-width="585" fixed app dark height="72" style="right: 0px;">
      <v-tabs v-model="tab" centered icons-and-text grow>
        <v-tabs-slider></v-tabs-slider>
        <v-tab to="../1" nuxt>
          見つける
          <v-icon>mdi-heart</v-icon>
        </v-tab>
        <v-tab to="../chat" nuxt>
          会話する
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        <v-tab to="../default" nuxt>
          マイページ
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>
    </v-bottom-navigation>
</template>
