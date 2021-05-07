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
  margin-top: 200px;
  color: #edf0f1;
  flex: 1;
}
</style>
