<template>
  <h1>Projects</h1>
  <div class="projects">
    <project
      v-for="project of projects"
      :key="project.name"
      :project="project"
    ></project>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Project from "../types/Project";

import ProjectComponent from "../components/Project.vue";

export default defineComponent({
  name: "Projects",
  components: {
    project: ProjectComponent,
  },
  setup() {
    const projects = ref<Project[]>([
      {
        name: "Electronic Marketplace",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
      },
      {
        name: "Electronic Marketplac",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
      },
      {
        name: "Electronic Marketpla",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
      },
      {
        name: "Electronic Marketpl",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
      },
      {
        name: "Electronic Marketp",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
      },
    ]);

    return { projects };
  },
});
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
