<script setup lang="ts">

</script>

<template>
  <div class="w-full min-h-screen relative overflow-hidden">
    <div class="bubble"></div>
    <div class="bubble2"></div>
    <slot>

    </slot>
  </div>
</template>

<style scoped>

.bubble, .bubble2 {
  will-change: transform, opacity;
}

.bubble {
  position: absolute;
  top: 6rem;
  left: 6rem;
  width: 600px; /* Alap méret */
  height: 600px; /* Alap méret */
  background-color: rgba(0, 255, 225, 0.7); /* Halványabb szín, nagyobb átlátszóság */
  border-radius: 50%;
  filter: blur(150px);
  animation: changeShape 30s infinite alternate;
}


@keyframes changeShape {
  0%, 100% {
    transform: translate3d(10%, 10%, 0) scale(1);
    border-radius: 50%;
    opacity: 0.8; /* Nagyobb láthatóság */
  }
  25% {
    transform: translate3d(-10%, -20%, 0) scale(1.3);
    border-radius: 40% 10% 20% 40%;
    opacity: 0.9; /* Nagyobb láthatóság */
  }
  50% {
    transform: translate3d(10%, 100%, 0) scale(1.6);
    border-radius: 35% 65% 65% 35%;
    opacity: 0.5; /* Kisebb láthatóság */
  }
  75% {
    transform: translate3d(80%, 50%, 0) scale(1.1);
    border-radius: 45% 95% 15% 45%;
    opacity: 0.8; /* Nagyobb láthatóság */
  }
}

@keyframes changeShapeBefore {
  0%, 100% {
    transform: translate3d(10%, -50%, 0) scale(0.9);
    border-radius: 50%;
    opacity: 0.6;
    //background-color: rgb(185, 12, 12); /* Halványabb szín */
  }
  25% {
    transform: translate3d(-30%, 100%, 0) scale(0.7);
    border-radius: 10% 40% 10% 60%;
    opacity: 0.8;
    //background-color: rgb(2, 58, 140); /* Halványabb szín */
  }
  50% {
    transform: translate3d(60%, -10%, 0) scale(1.2);
    border-radius: 5% 50% 5% 70%;
    opacity: 0.4;
    //background-color: rgb(0, 166, 61); /* Halványabb szín */
  }
  75% {
    transform: translate3d(-10%, 100%, 0) scale(1.5);
    border-radius: 20% 30% 3% 70%;
    opacity: 0.7;
    //background-color: rgb(0, 166, 61); /* Halványabb szín */
  }
}

@keyframes changeShapeThird {
  0%, 100% {
    transform: translate3d(-50%, -50%, 0) scale(0);
    border-radius: 50%;
    opacity: 0.5;
  }
  25% {
    transform: translate3d(50%, -10%, 0) scale(0.5);
    border-radius: 30% 30% 70% 70%;
    opacity: 0.9;
  }
  50% {
    transform: translate3d(-60%, 30%, 0) scale(1.5);
    border-radius: 70% 70% 30% 30%;
    opacity: 0.6;
  }
  75% {
    transform: translate3d(40%, -20%, 0 ) scale(0.25);
    border-radius: 50% 50% 50% 50%;
    opacity: 0.8;
  }
}

.bubble2 {
  content: '';
  position: absolute;
  top: 12rem;
  right:2rem;
  width: 700px; /* Alap méret */
  height: 600px; /* Alap méret */
  background-color: rgb(52, 124, 231); /* Halványabb szín */
  border-radius: 50%;
  filter: blur(150px);
  animation: changeShapeBefore  40s infinite alternate; /* Hosszabb ciklusidő */
}



/* Új buborékok hozzáadása nagyobb méretekkel és különböző animációkkal */
.bubble::after {
  content: '';
  position: absolute;
  width: 800px; /* 50%-kal nagyobb méret */
  height: 900px; /* 50%-kal nagyobb méret */
  background-color: rgb(65, 196, 113);
  border-radius: 50%;
  filter: blur(150px);
  animation: changeShapeThird 40s infinite alternate;
}


</style>