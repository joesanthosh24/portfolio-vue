<template>
  <div class="project">
    <img :src="'/images/' + project.imageUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Project from "../types/Project";

export default defineComponent({
  name: "Project",
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
});
</script>

<style scoped>
.project {
  width: 400px;
  height: 400px;
  margin: 50px;
  border: 1px solid #5dcfad;
  border-radius: 25px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 200px;
}

img:hover {
  opacity: 0.5;
}
</style>
