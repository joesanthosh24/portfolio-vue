<template>
  <div class="project">
    <img :src="'/images/' + project.imageUrl" />
    <h3>{{ project.name }}</h3>
    <div class="project__contents">
      <p>{{ project.description }}</p>
      <div class="project__links">
        <icon
          v-if="project.githubUrl"
          :link="{
            icon: 'github-square',
            url: project.githubUrl,
          }"
        ></icon>
      </div>
      <a v-if="project.deploy" :href="project.deploy.url" target="_blank"
        >Link to App</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Project from "../types/Project";

import Icon from "./Icon.vue";

export default defineComponent({
  name: "Project",
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
  components: {
    icon: Icon,
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

.project__contents {
  margin-top: 10px;
}

.project__links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
