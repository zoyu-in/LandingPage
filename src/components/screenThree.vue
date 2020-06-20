<template>
  <v-app>
      <div class="screen">
      <div class="screen-text pa-auto ma-auto">
        <div class="lineContain right" > <span class="lines "
          >We know it's hard to face it.<br/> But we know you can.</span
        ></div>
      </div>
      <div class="screen-img">
        <v-card flat
          ><v-img contain src="../assets/shy.svg"></v-img
        ></v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
    name: "screenThree"

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
@media (min-width: 768px) {
  .screen {
    display: flex;
    width: 100%;
    flex-basis: 0;
    height:100vh;
    color: #000000;
  }
  .screen-text {
    flex: 1;
    order: 1;
    color: #000000;
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
  }
  .screen-img {
    flex: 1;
    order: 2;
    width: 50vw;
  }
  .right{
    text-align: end;
}
  
}
.lineContain{
    padding-left: 5%;
}
.screen {
  height: 100vh;
}

</style>