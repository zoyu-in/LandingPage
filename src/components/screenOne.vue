<template>
  <v-app>
    
    <div class="screen-1 ">
      <div class="screen-1-text ma-auto pa-auto">
        <p class="center">
          <span class="top">The First Step</span><br />
          <span class="middle">towards your</span><br />
          <span class="bottom"> Emotional Wellbeing</span>
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

        <div class="center">
          <v-btn @click="show()" class="contact-button center" color="#ba1c00">
            <span style="color:white;">Contact Advisors</span></v-btn
          >
        </div>
      </div>
      <div class="screen-1-img ">
        <image-loop></image-loop>
      </div>
    </div>
    <modal name="feedbackForm1" height="80%" width="80%">
      <iframe
        frameborder="0"
        class="form"
        src="https://s.surveyplanet.com/JDBlrYE-S"
      ></iframe>
    </modal>
  </v-app>
</template>

<script>
import imageLoop from "./imageLoop.vue";
export default {
  name: "screenOne",
  components: { imageLoop },
  data: () => {},
  methods: {
    show() {
      this.$modal.show("feedbackForm1");
    },
    hide() {
      this.$modal.hide("feedbackForm1");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&family=Raleway:ital,wght@1,200&display=swap");
@media (min-width: 700px) {
  .screen-1 {
    display: flex;
    width: 100%;
    flex-basis: 0;

    color: #000000;
  }
  .screen-1-text {
    flex: 1;
    color: #000000;
  }
  .screen-1-img {
    flex: 1;
    width: 50vw;
    height: 100vh;
  }
  #particle-js {
    height: 100vh;
  }
  .screen-1 {
    position: absolute;
    color: #000000;
    min-height: 80vh;
  }
  .screen-1-text {
    padding-top: 15vh;
    padding-bottom: 10px;
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
}

.top-title {
  position: relative;
  left: -20px;
}
.top {
  font-family: "Hind Madurai", sans-serif;
  font-size: 2.2rem;
}
.middle {
  font-family: "Hind Madurai", sans-serif;
  font-size: 1.4rem;
}
.symbols {
  font-family: "Noto Sans HK", sans-serif;
  font-size: 3rem;
}
.bottom {
  font-family: "Hind Madurai", sans-serif;
  font-weight: 600;
  font-size: 3rem;
}
.quotes {
  font-family: "Raleway", sans-serif;
  font-weight: 100;
}
.contact-button {
  margin-top: 3rem;
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
@media (max-width: 700px) {
  .screen-1 {
    margin-top: 20vh;
    width: 100vw;
    display: block;
    flex-direction: column;
    text-align: center;
  }
  .screen-1-img {
   width:100%;
   display: block;
  }
  
}
</style>
