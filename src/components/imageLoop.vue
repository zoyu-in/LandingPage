<template>
  <div class="fadein">
          <img id="f3" class="image" style="height:100vh;" src="../assets/anxi.svg" />
          <img id="f2" class="image" style="height:100vh;" src="../assets/angry.svg" />
          <img id="f1" class="image" style="height:100vh;" src="../assets/sad.svg" />
        </div>
</template>

<script>
export default {
name: "imageLoop"
}
</script>

<style>
    .fadein {
    height:100vh;
    margin:auto;
}
.fadein img {
    position:absolute;
    
    -webkit-animation-name: fade;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 6s;
    animation-name: fade;
    animation-iteration-count: infinite;
    animation-duration: 6s;
}

@-webkit-keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}
@keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}

.image {
    max-height:100vh;
}
#f2 {
    -webkit-animation-delay: -4s;
    
}
#f3 {
    -webkit-animation-delay: -2s;
    
}
</style>