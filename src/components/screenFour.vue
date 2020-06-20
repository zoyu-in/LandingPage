<template>
  <v-app
    ><div class="screen-1 ">
      <div class="screen-1-text ma-auto pa-auto">
        <p class="center">
          <span class="bottom"> Resolve all your doubts</span>
        </p>

        <h2 class=" center">
          <span class="quotes">
            <span class="top-title"
              ><span class="symbols">“</span>Can I handle this Myself?</span
            ><br />
            Do I really need help?<br />
            I don't know what to do.</span
          >
        </h2>
        <br /><br />
        <div class="center">
          <v-btn @click="show()" class="contact-button center" outlined >
            Contact Advisors</v-btn
          >
        </div>
      </div>
      <div class="screen-1-img">
        
        <image-loop></image-loop>
      </div>
    </div>
  </v-app>
</template>

<script>
import imageLoop from "./imageLoop.vue";
export default {
  name: "screenFour",
  components:{imageLoop}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&family=Raleway:wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@700&display=swap");
@media (min-width: 700px) {
  .screen-1 {
    display: flex;
    width: 100%;
    flex-basis: 0;
    background-color: #ffffff;
    color: #000000;
  }
  .screen-1-text {
    flex: 1;
    color: #000000;
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
.symbols {
  font-family: "Noto Sans HK", sans-serif;
  font-size: 3rem;
}
.top-title {
  position: relative;
  left: -20px;
}
.quotes {
  font-family: "Raleway", sans-serif;
  font-weight: 100;
}
.screen-1 {
  background-color: #ffffff;
  margin-top: auto;
  color: #000000;
}
.screen-1-text {
  padding-top: 15vh;
  padding-bottom: 10px;
}
body {
  padding: 0%;
  margin: 0%;
  color: #000000;
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
