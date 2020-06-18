<template>
  <div>
    <v-app-bar color="transparent" flat fixed>
      <v-toolbar-title color="transparent"
        ><h3>ZO<span class="title">YU</span></h3></v-toolbar-title
      >
    </v-app-bar>
    <v-container class="container" style="height: 100vh">
      <v-row>
        <v-col cols="6" class="text-box"
          ><h1 class="center">
            Find What's in your mind
          </h1>

          <h2 class="margin-top center">
            <q
              >Can I handle this Myself? <br />
              Do I really need help?<br />
              I don't know what to do.</q
            >
          </h2>
          <h4 class="center margin-top">
            You'll know the answer, if you contact our advisors
          </h4>
          <div class="center">
            <v-btn class="contact-button center" raised dark>
              Contact Advisors</v-btn
            >
          </div>
        </v-col>
        <transition-group name="fade" mode="out-in">
          <v-col cols="6">
            <v-card flat>
              <v-img contain src=  "../assets/bike_panda.jpg" ></v-img>
            </v-card>
          </v-col>
        </transition-group>
        <v-col cols="6"
          ><v-card flat
            ><v-img contain src="../assets/bike_panda.jpg"></v-img></v-card
        ></v-col>
      </v-row>
    </v-container>
    <v-container style="height: 100vh">
      <v-row>
        <v-col cols="6"
          ><v-card flat
            ><v-img
              contain
              src="../assets/bodybuilderpanda.jpg"
            ></v-img></v-card
        ></v-col>
        <v-col cols="6" class="text-box ml-5"
          ><h2>
            <p>There are times when life feels like a battle.</p>
            <p>But all you want to do is .... <br />Be like Zoyu.</p>
          </h2></v-col
        >
      </v-row>
    </v-container>

    <v-container style="height: 100vh">
      <v-row>
        <v-col cols="6" class="text-box ml-5"
          ><h2>
            <p>We know its hard to face it.</p>
            <p>But we know you can.</p>
            <p>Be like Zoyu.</p>
          </h2></v-col
        >
        <v-col cols="6"
          ><v-card flat
            ><v-img contain src="../assets/shy-zoyu-1.jpg"></v-img></v-card
        ></v-col>
      </v-row>
    </v-container>
    <v-container style="height: 100vh">
      <v-row>
        <v-col cols="6"
          ><v-card flat
            ><v-img contain src="../assets/bike_panda.jpg"></v-img></v-card
        ></v-col>
        <v-col cols="6" class="text-box ml-5">
          <h2>
            <p>Its hard for Zoyu but he tries.</p>
            <p>Be like Zoyu.</p>
          </h2>

          <v-btn class="contact-button center" raised dark>
            Contact Advisors</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data:()=> {
    
}
};
</script>

<style lang="scss">
body {
  font-family: "Roboto";
}
.container {
  margin: auto;
}
.row {
  margin-top: 50px;
}
.contact-button {
  margin-top: 1rem;
}
.margin-top {
  margin-top: 3rem;
}

.center {
  text-align: center;
}
.title {
  display: inline;
  color: #d04606;
}

.text-box {
  text-align: left;
  margin-block-start: 5rem;
  margin: auto;
}
</style>
