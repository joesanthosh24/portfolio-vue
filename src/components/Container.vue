<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Container",
});
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
  color: #edf0f1;
  flex: 1;
}

@media screen and (max-width: 815px) {
  .container {
    margin-top: 50px;
  }
}
</style>
