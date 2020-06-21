<template>
  <!-- <div class="fadein">
          <img id="f4" class="image" style="height:100vh;" src="../assets/info.svg" />
          <img id="f3" class="image" style="height:100vh;" src="../assets/anxi.svg" />
          <img id="f2" class="image" style="height:100vh;" src="../assets/angry.svg" />
          <img id="f1" class="image" style="height:100vh;" src="../assets/sad.svg" />
        </div> -->
  
    <div class="bg-image-fader fadein center ma-auto pa-auto">
      <div class="image ma-auto pa-auto"></div>
      <div class="image ma-auto pa-auto"></div>
      <div class="image ma-auto pa-auto"></div>
      <div class="image ma-auto pa-auto"></div>
    </div>
  
</template>

<script>
export default {
  name: "imageLoop",
};
</script>

<style>
@media (max-width: 700px){
    .center{
        text-align: center;
    }
    .bg-image-fader div{
        width:100%
    }
    .image{
        transform: scale(1.0);
    }
    .bg-image-fader div{
        background-size: 120% !important
    }
}
@media (min-width: 700px){
    .bg-image-fader div{
        width:50%;
        background-size: cover !important;
    }
}
.fadein {
  height: 100vh;
  
}
.bg-image-fader {
  
  height: 100%;
}

.bg-image-fader div {
  position: absolute;
  
  
  height: 100vh;
  
  /* background-size: cover !important; */
  background-repeat: no-repeat !important;
  background-position: center top !important;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 16s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-duration: 16s;
}

.bg-image-fader div:nth-of-type(1) {
  background: url(../assets/anxi.svg) ;
  margin:auto;
  animation-delay: -16s;
  -webkit-animation-delay: -16s;
}

.bg-image-fader div:nth-of-type(2) {
  background: url(../assets/info.svg);
  animation-delay: -12s;
  -webkit-animation-delay: -12s;
}

.bg-image-fader div:nth-of-type(3) {
  background: url(../assets/angry.svg);
  animation-delay: -8s;
  -webkit-animation-delay: -8s;
}

.bg-image-fader div:nth-of-type(4) {
  background: url(../assets/sad.svg);
  animation-delay: -4s;
  -webkit-animation-delay: -4s;
}

@-webkit-keyframes fade {
  0% {
    opacity: 1;
  }

  17% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  92% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  17% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  92% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
