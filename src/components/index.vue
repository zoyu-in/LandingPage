<template>
  <v-app>
    <v-app-bar class="toolbar" color="black" flat fixed>
      <strong
          ><h2><span class="title">zo<span style="color:red;">yu</span></span></h2></strong
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
  methods: {
    
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap');
.title {
  display: inline;
  color: #ffffff;
  font-family: 'Nanum Gothic', sans-serif;
}

.form {
  width: 100%;
  height: 90%;
  text-align: bottom;
}

</style>
