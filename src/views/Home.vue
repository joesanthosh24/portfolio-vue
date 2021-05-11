<template>
  <div class="home">
    <img src="../assets/logo.svg" alt="Logo" />
    <div>
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let name = ref("JOE SANTHOSH");

    return { name };
  },
});
</script>

<style scoped>
.home {
  margin-top: 170px;
}

img {
  height: 60px;
  width: 60px;
}

h1 {
  /* display: inline-block; */
  letter-spacing: 0.75em;
  overflow: hidden;
  animation: appear 2s linear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 700px) {
  .home {
    margin-top: 70px;
  }
  h1 {
    letter-spacing: 0.35em;
  }
}
</style>
