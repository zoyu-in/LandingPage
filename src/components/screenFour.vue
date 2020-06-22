<template>
  <v-app class="screen-4"
    ><div class="screen-1 ">
      <div class="screen-1-text ma-auto pa-auto">
        <p class="center">
          <span class="bottom"> Resolve all your doubts</span>
        </p>

        <h2 class=" center">
          <span class="quotes">
            <span class="top-title"
              ><span class="symbols">“</span>You maybe able to handle
              yourself.</span
            ><br />
            You may need help.<br />
            Zoyu is on a mission to find out.<br />Be like Zoyu.</span
          >
        </h2>
        <br /><br />
        <div class="center">
          <v-btn @click="show()" class="contact-button center" color="#ba1c00">
            <span style="color:white;">Contact Advisors</span></v-btn
          >
        </div>
      </div>
      <div class="screen-1-img">
        <img class="image"  src="../assets/cycle.svg">
      </div>
    </div>
    <modal name="feedbackForm2" height="80%" width="80%">
      <iframe
        frameborder="0"
        class="form"
        src="https://s.surveyplanet.com/JDBlrYE-S"
      ></iframe>
    </modal>
  </v-app>
</template>

<script>
export default {
  name: "screenFour",
  components: {},
  data: () => {},
  methods: {
    show() {
      this.$modal.show("feedbackForm2");
    },
    hide() {
      this.$modal.hide("feedbackForm2");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&family=Raleway:wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@700&display=swap");

@media (min-width: 700px) {
  .image{
    width:inherit;
  }
  .screen-4{
    margin:auto !important;
  }
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
    /* position: relative;
    top:7vh; */
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
  @media (max-width:700px){
    .image{
      width: 100vw;
    }
    .bottom{
        font-size:2.5rem
    }
    .quotes{
        font-size: 1.2rem;
    }
    .screen-1{
      position: relative;
      top: -20vw;
    }
  }
</style>
