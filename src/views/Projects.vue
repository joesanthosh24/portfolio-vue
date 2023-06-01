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
          "E-Commerce App. React, Redux and Firebase. Users can sign up with email/google. User can add different products into their shopping cart and wishlist. Fake payment done via stripe API.",
        imageUrl: "/electronic-marketplace.jpeg",
        githubUrl: "https://github.com/joesanthosh24/electronic-marketplace",
        deploy: {
          site: "netlify",
          url: "https://electronic-marketplace.netlify.app/",
        },
        technologies: [
          { name: "Javascript", imageSource: "/javascript.svg" },
          { name: "React", imageSource: "/react.svg" },
          { name: "Redux", imageSource: "/redux.svg" },
          { name: "Firebase", imageSource: "/firebase-icon.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "Sass", imageSource: "/sass.svg" },
        ],
      },
      {
        id: 3,
        name: "Duolingo Clone",
        description:
          "Clone of Duolingo site. Built with React. User can add a language on sign up and can log in.",
        imageUrl: "/duolingo-proj.png",
        githubUrl: "https://github.com/joesanthosh24/duolingo-clone",
        deploy: {
          site: "netlify",
          url: "https://duoling-clone.netlify.app/",
        },
        technologies: [
          { name: "Javascript", imageSource: "/javascript.svg" },
          { name: "React", imageSource: "/react.svg" },
          { name: "Firebase", imageSource: "/firebase-icon.svg" },
          { name: "Redux", imageSource: "/redux.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "CSS3", imageSource: "/css3.svg" },
        ],
      },
      {
        id: 7,
        name: "Linkedin Clone",
        description:
          "Clone of Linkedin site. Built with React, Redux and Firebase. User can login/sign up with google. Add a post with an image or video.",
        imageUrl: "/linkedin-clone.png",
        githubUrl: "https://github.com/joesanthosh24/linkedin-clone",
        deploy: {
          site: "firebase",
          url: "https://linkedin-clone-edb7f.web.app/",
        },
        technologies: [
          { name: "JavaScript", imageSource: "/javascript.svg" },
          { name: "React", imageSource: "/react.svg" },
          { name: "Firebase", imageSource: "/firebase-icon.svg" },
          { name: "Redux", imageSource: "/redux.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "CSS3", imageSource: "/css3.svg" },
        ],
      },
      {
        id: 4,
        name: "Line Clone",
        description:
          "Clone of Japanese social media and phone service named Line. Can change language of display text from dropdown on right of navbar. Responsive for different screen sizes",
        imageUrl: "/line-clone.png",
        githubUrl: "https://github.com/joesanthosh24/line-clone",
        deploy: {
          site: "netlify",
          url: "https://line-react-clone.netlify.app/",
        },
        technologies: [
          { name: "Javascript", imageSource: "/javascript.svg" },
          { name: "React", imageSource: "/react.svg" },
          { name: "Redux", imageSource: "/redux.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "CSS3", imageSource: "/css3.svg" },
        ],
      },
      {
        id: 5,
        name: "Anilist Clone",
        description: "Clone of Anilist website. Built with React",
        imageUrl: "/anilist-clone.png",
        githubUrl: "https://github.com/joesanthosh24/Anilist-clone",
        deploy: {
          site: "netlify",
          url: "https://anilist-clone.netlify.app/",
        },
        technologies: [
          { name: "Javascript", imageSource: "/javascript.svg" },
          { name: "React", imageSource: "/react.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "CSS3", imageSource: "/css3.svg" },
        ],
      },
      {
        id: 6,
        name: "Music Player App",
        description:
          "A music player that allows you to go to next song, previous song and pause and play the song. Built with HTML, CSS and Vanilla JavaScript",
        imageUrl: "/music-player.png",
        githubUrl: "https://github.com/joesanthosh24/music-player-proj",
        deploy: {
          site: "netlify",
          url: "https://joes-music-player.netlify.app/",
        },
        technologies: [
          { name: "Javascript", imageSource: "/javascript.svg" },
          { name: "HTML5", imageSource: "/html5.svg" },
          { name: "CSS3", imageSource: "/css3.svg" },
        ],
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
