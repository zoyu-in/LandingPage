<template>
  <v-app
    ><div class="screen-1 ">
      <div class="screen-1-text ma-auto pa-auto">
        <p class="center">
          <span class="bottom"> Resolve all your doubts</span>
        </p>

        <h2 class="margin-top center">
          <q
            ><span class="quotes"
              >You may be able to handle ypurself.<br />
              You may need help.<br />
              Zoyu is on a mission to find out.<br />Be like Zoyu.</span
            >
          </q>
        </h2>
        <br /><br />
        <div class="center">
          <v-btn @click="show()" class="contact-button center" outlined dark>
            Contact Advisors</v-btn
          >
        </div>
      </div>
      <div class="screen-1-img">
        <v-carousel
          height="100vh"
          :transition="fade - transition"
          :hide-delimiters="true"
          :continuous="true"
          :cycle="true"
          :interval="3000"
          :show-arrows="false"
          ><v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
            ><v-card flat>
              <v-img
                contain
                src="../assets/anxi.svg"
              ></v-img> </v-card></v-carousel-item
          ><v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
            ><v-card flat>
              <v-img
                contain
                src="../assets/angry.svg"
              ></v-img> </v-card></v-carousel-item
          ><v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
            ><v-card flat>
              <v-img
                contain
                src="../assets/sad.svg"
              ></v-img> </v-card></v-carousel-item
        ></v-carousel>
      </div>
    </div>
    <modal name="feedbackForm" height="80%" width="80%">
      <iframe
        frameborder="0"
        class="form"
        src="https://s.surveyplanet.com/JDBlrYE-S"
      ></iframe> </modal
  ></v-app>
</template>

<script>
export default {
  name: "screenFour",
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&family=Raleway:wght@1,200&display=swap");
@media (min-width: 768px) {
  .screen-1 {
    display: flex;
    width: 100%;
    flex-basis: 0;
    background-color: #000000;
    color: #ffffff;
  }
  .screen-1-text {
    flex: 1;
    color: #ffffff;
  }
  .screen-1-img {
    flex: 1;
    width: 50vw;
  }
}
.top {
  font-family: "Hind Madurai", sans-serif;
  font-size: 2.2rem;
}
.middle {
  font-family: "Hind Madurai", sans-serif;
  font-size: 1.4rem;
}
.bottom {
  font-family: "Hind Madurai", sans-serif;
  font-weight: 600;
  font-size: 3rem;
}
.quotes {
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size: 1.2rem;
}
.screen-1 {
  background-color: #000000;
  margin-top: auto;
  color: #ffffff;
}
.screen-1-text {
  padding-top: 15vh;
  padding-bottom: 10px;
}
body {
  padding: 0%;
  margin: 0%;
  color: #ffffff;
}
q {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
}
h3 {
  font-family: "Barlow", sans-serif;
}
.contact-button {
  margin-top: 1rem;
}
.margin-top {
  margin-top: 3rem;
}
.text-box {
  text-align: left;
  margin-block-start: 5rem;
  margin: auto;
}
.center {
  text-align: center;
}
</style>
