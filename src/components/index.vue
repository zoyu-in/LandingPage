<template>
  <v-app>
    <v-app-bar class="toolbar" color="black" flat fixed>
      <v-btn text
        ><strong
          ><h2><span class="title">ZO<span style="color:red;">YU</span></span></h2></strong
        ></v-btn
      >
    </v-app-bar>

    <screen-one></screen-one>
    <screen-two></screen-two>
    <screen-three></screen-three>
    <screen-four></screen-four>
    <modal name="feedbackForm" height="80%" width="80%">
      <iframe
        frameborder="0"
        class="form"
        src="https://s.surveyplanet.com/JDBlrYE-S"
      ></iframe> </modal
  >
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
    show() {
      this.$modal.show("feedbackForm");
    },
    hide() {
      this.$modal.hide("feedbackForm");
    },
  },
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
