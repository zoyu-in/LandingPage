<template>
  <v-app>
    <div class="screen">
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
        <v-card flat
          ><v-img contain src="../assets/sleeping.svg"></v-img
        ></v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "screenTwo",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
@media (min-width: 700px) {
  .screen {
    display: flex;
    width: 100%;
    flex-basis: 0;

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
  }
}
@media (max-width:700px){
    .screen{
        display:block;
        overflow: hidden;
        margin-top: 110vw;
    }
    .screen-text {
        font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    margin-top:auto ;
    }
}
</style>
