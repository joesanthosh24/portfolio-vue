<template>
  <h1>Projects</h1>
  <div class="projects">
    <project
      v-for="project of projects"
      :key="project.id"
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
        id: 1,
        name: "Electronic Marketplace",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem a alias aut ab atque veritatis aperiam, corrupti labore minus? Error suscipit ea ipsam voluptatibus, facilis excepturi magni voluptate illo!",
        imageUrl: "/electronic-marketplace.jpeg",
        githubUrl: "https://github.com/joesanthosh24/electronic-marketplace",
        deploy: {
          site: "heroku",
          url: "https://my-market-place-app-12.herokuapp.com/",
        },
      },
      {
        id: 2,
        name: "Smart Brain App",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
        deploy: {
          site: "heroku",
          url: "https://face-recognition-smart-brain.herokuapp.com/",
        },
      },
      {
        id: 3,
        name: "Duolingo Clone",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
        githubUrl: "https://github.com/joesanthosh24/duolingo-clone",
        deploy: {
          site: "netlify",
          url: "https://duoling-clone.netlify.app/",
        },
      },
      {
        id: 4,
        name: "Line Clone",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
        githubUrl: "https://github.com/joesanthosh24/line-clone",
        deploy: {
          site: "netlify",
          url: "https://line-react-clone.netlify.app/",
        },
      },
      {
        id: 5,
        name: "Electronic Marketplace",
        description: "lorem ipsum",
        imageUrl: "/electronic-marketplace.jpeg",
        githubUrl: "https://github.com/joesanthosh24/Anilist-clone",
        deploy: {
          site: "netlify",
          url: "https://anilist-clone.netlify.app/",
        },
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
