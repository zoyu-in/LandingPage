<template>
  <v-app>
    
    <div class="redcircle-1" data-aos="fade-left"></div>
    <div class="blackcircle-1" data-aos="fade-left"></div>
    <div class="redcircle-2" data-aos="fade-right"></div>
    <div class="blackcircle-2" data-aos="fade-right"></div>
    
    <div class="screen">
      <img class="seperate" src="../assets/seperator.png">
      <div class="screen-text pa-auto ma-auto">
        
        <div class="lineContain">
          
          <span class="lines "
            >There are times when life feels<br />
            like a battle.<br />And all you want to do is be lazy<br />
            and sleep.</span
          >
        </div>
      </div>
      <div class="screen-img">
        <v-img contain src="../assets/sleeping.svg"></v-img>
      </div>
    </div>
    <img class="seperate" src="../assets/seperator.png">
  </v-app>
</template>

<script>
export default {
  name: "screenTwo",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
@media (min-width: 700px) {
  .screen {
    display: flex;
    width: 100%;
    flex-basis: 0;
    position: absolute;
    color: #000000;
  }
  .screen-text {
    flex: 1;
    order: 2;
    color: #000000;
    font-family: "Nunito", sans-serif;
    font-size: 2rem;
  }
  .screen-img {
    flex: 1;
    order: 1;
    width: 50vw;
  }
  .lineContain {
    padding-left: 5%;
  }
  .screen {
    height: 100vh;
    overflow: hidden;
  }
  .redcircle-1 {
    position: relative;
    top: 12vh;
    left: 92vw;
    border-radius: 50%;
    height: 35vh;
    width: 35vh;
    background-color: #ba1c00;
  }
  .seperate{
    display:none;
  }
  .blackcircle-1 {
    position: relative;
    top: 0vh;
    left: 96vw;
    border-radius: 50%;
    height: 20vh;
    width: 20vh;
    background-color: transparent;
    border-color: black;
    border: 5px solid #000000;
  } /*
.redcircle-2{
    position: relative;
    top:1vh;
    left:-9vw;
    border-radius:50%;
    height:40vh;
    width: 40vh;
    background-color: #ba1c00;
}
.blackcircle-2{
    position: relative;
    border-radius: 50%;
    height: 20vh;
    width: 20vh;
    top:-45vh;
    left:-5vw;
    background-color: transparent;
    border-color:black;
    border: 5px solid #000000;
} */
}
.screen-img {
  /* background-image: url(../assets/sleeping.svg); */
  background-size: cover !important;
}

@media (max-width: 700px) {
  .screen {
    display: block;
    overflow: hidden;
    position: relative;
    margin-top: 60vw;
    width: 100vw;
  }
  .seperate{
    padding: auto !important;
    width:100vw;
  }
  .screen-text {
    font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    margin-top: auto;
    display: block;
    padding-top:20vw;
  }
  .screen-img {
    display: block;
  }
  .blackcircle-2 {
    position: relative;
    top: 160vw;
    left:-22vw;
    border-radius: 50%;
    height: 30vw;
    width: 30vw;
    background-color: transparent;
    border-color: black;
    border: 5px solid #000000;
  }
  .redcircle-2 {
    position: absolute;
    top: 140vw;
    left: -20vw;
    border-radius: 50%;
    height: 35vw;
    width: 35vw;
    background-color: #ba1c00;
  }
}
</style>
