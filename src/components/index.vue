<template>
  <v-app>
    <v-app-bar class="toolbar" dark flat fixed>
      <v-btn text
        ><strong
          ><h2><span class="title">ZOYU</span></h2></strong
        ></v-btn
      >
    </v-app-bar>

    <screen-one></screen-one>
    <screen-two></screen-two>
    <screen-three></screen-three>
    <screen-four></screen-four>
  </v-app>
</template>

<script>
import screenOne from "./screenOne.vue";
import screenTwo from "./screenTwo";
import screenThree from "./screenThree";
import screenFour from "./screenFour";
export default {
  components: { screenOne, screenTwo, screenThree,screenFour },
  data: () => {},
};
</script>

<style lang="scss">
.title {
  display: inline;
  color: #ffffff;
}

.form {
  width: 100%;
  height: 90%;
  text-align: bottom;
}
</style>
