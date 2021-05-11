<template>
  <div class="project">
    <img :src="'/images/' + project.imageUrl" />
    <h3>{{ project.name }}</h3>
    <div class="project__contents">
      <p>{{ shorten() }}</p>
      <div class="project__links">
        <div class="project__iconContainer">
          <icon
            size="35px"
            v-if="project.githubUrl"
            :link="{
              icon: 'github-square',
              url: project.githubUrl,
            }"
          ></icon>
        </div>
        <button class="project__deploy" v-if="project.deploy">
          <a
            style="display: flex; align-items: center"
            :href="project.deploy.url"
            ><img :src="'/' + project.deploy.site + '-icon.svg'" />Link to
            App</a
          >
        </button>
      </div>
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
  methods: {
    shorten() {
      const { description } = this.project;

      return description.length > 120
        ? description.substring(0, 120)
        : description;
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

.project__contents {
  margin-top: 10px;
}

.project__links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project__iconContainer {
  margin-right: 20px;
}

.project__deploy {
  border-radius: 10px;
  width: 120px;
  background-color: #5dcfad;
  border: 1px solid #5dcfad;
  padding: 5px;
  display: flex;
  height: 100%;
  align-items: center;
}

.project__deploy a {
  text-decoration: none;
  color: white;
  background-color: #5dcfad;
}

.project__deploy img {
  height: 15px;
  width: 15px;
  margin-right: 10px;
  background-color: #5dcfad;
}
</style>
