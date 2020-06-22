<template>
  <v-app id="screen-3" class="display">
    <div class="redcircle-1" data-aos="fade-left"></div>
    <div class="blackcircle-1" data-aos="fade-left"></div>
    <div class="redcircle-2" data-aos="fade-right"></div>
    <div class="blackcircle-2" data-aos="fade-right"></div>

    <div class="screen">
      <div class="screen-text pa-auto ma-auto">
        <div class="lineContain">
          <span class="lines "
            >We know it's hard to face it.<br />
            But we know you can.</span
          >
        </div>
      </div>
      <div class="screen-img">
        <v-img contain src="../assets/shy.svg"></v-img>
      </div>
    </div>
    <img class="seperate" src="../assets/seperator.png">
  </v-app>
</template>

<script>
export default {
  name: "screenThree",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
@media (min-width: 700px) {
  .display {
    height: 90vh;
  }
  .screen {
    display: flex;
    width: 100%;
    flex-basis: 0;
    position: absolute;
    color: #000000;
    height: 70vh;
  }
  .screen-text {
    flex: 1;
    text-align: end;
    order: 1;
    color: #000000;
    font-family: "Nunito", sans-serif;
    font-size: 2rem;
  }
  .screen-img {
    flex: 1;
    order: 2;
    width: 50vw;
  }
  .lineContain {
    padding-left: 5%;
  }
  .screen {
    height: 100vh;
    overflow: hidden;
  }
  .seperate{
    
    display: none;
  }
  /* .redcircle-1{
    position: relative;
    top:12vh;
    left:95vw;
    border-radius:50%;
    height:25vh;
    width: 25vh;
    background-color: #ba1c00;
}
.blackcircle-1{
    position: relative;
    top:0vh;
    left:92vw;
    border-radius: 50%;
    height: 20vh;
    width: 20vh;
    background-color: transparent;
    border-color:black;
    border: 5px solid #000000;
} */
  .redcircle-2 {
    position: relative;
    top: 15vh;
    left: -10vw;
    border-radius: 50%;
    height: 35vh;
    width: 35vh;
    background-color: #ba1c00;
  }
  .blackcircle-2 {
    position: relative;
    border-radius: 50%;
    height: 20vh;
    width: 20vh;
    top: 3vh;
    left: -6vw;
    background-color: transparent;
    border-color: black;
    border: 5px solid #000000;
  }
}
.screen-img {
  /* background-image: url(../assets/sleeping.svg); */
  background-size: cover !important;
}
@media (max-width: 700px) {
  #screen-3 {
    
    display: contents;
    position: absolute;
    top: -50vh;
  }
  .seperate{
    width:100vw;
    padding: auto !important;
  }
  .screen {
    padding-top:20vw;
    display: block;
    overflow: hidden;
    padding-top:;
    width: 100vw;
  }
  .screen-text {
    font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    margin-top: auto;
    display: block;
  }
  .screen-img {
    display: block;
  }
}
</style>
