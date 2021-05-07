<template>
  <div class="home">
    <img src="../assets/logo.svg" alt="Logo" />
    <h1>JOE SANTHOSH</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 150px;
  color: #edf0f1;
}

.home img {
  height: 60px;
  width: 60px;
}
</style>
