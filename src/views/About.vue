<template>
  <div class="about">
    <img
      class="profile-img"
      src="https://media-exp1.licdn.com/dms/image/C5103AQH5R2rkIYiojA/profile-displayphoto-shrink_200_200/0/1517273245854?e=1626307200&v=beta&t=Z_jSs2au09obEy0_5-Mo7IjcZLqXO-ifSbWwTllN-t8"
      alt="Profile"
    />
    <div class="about__content">
      <h1>Joe Santhosh</h1>
      <p>
        <span class="red">Carleton University 🍁🇨🇦</span> Graduate, class of
        2021. Bachelor of Science in Computer Science with a Minor in Japanese
        Language. Interested in Front End and Full Stack Web development.
        Favorite languages include: Javascript, Java, Python.
      </p>
      <p class="about__frameworks">🖥 Frameworks and Tech Used in Projects:</p>
      <frameworks :items="usedFrameworks"></frameworks>
      <p class="about__frameworks">Technologies learned in Courses:</p>
      <frameworks :items="learnedInClassFrameworks"></frameworks>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FrameworkLogo from "../types/FrameworkLogo";

import Frameworks from "../components/Frameworks.vue";

export default defineComponent({
  name: "About",
  setup() {
    const frameworks = ref<FrameworkLogo[]>([
      { name: "Javascript", imageSource: "/javascript.svg" },
      { name: "Vue", imageSource: "/vue.svg" },
      { name: "React", imageSource: "/react.svg" },
      { name: "Redux", imageSource: "/redux.svg" },
      { name: "Node.js", imageSource: "/nodejs.svg" },
      { name: "Mongo DB", imageSource: "/mongodb.svg" },
      { name: "PostgresQL", imageSource: "/postgresql.svg" },
      { name: "HTML 5", imageSource: "/html5.svg" },
      { name: "CSS 3", imageSource: "/css3.svg" },
      { name: "Sass", imageSource: "/sass.svg" },
      { name: "Firebase", imageSource: "/firebase.svg" },
      { name: "Java", imageSource: "/java.svg" },
      { name: "Socket IO", imageSource: "/socket-io.svg" },
      { name: "GraphQL", imageSource: "/graphql.svg" },
      { name: "Python", imageSource: "/python.svg" },
      { name: "JQuery", imageSource: "/jquery.svg" },
      { name: "C++", imageSource: "/cplusplus.svg" },
    ]);

    const usedFrameworks = frameworks.value.slice(0, 10);
    const learnedInClassFrameworks = frameworks.value.slice(10);

    return { usedFrameworks, learnedInClassFrameworks };
  },
  components: {
    frameworks: Frameworks,
  },
});
</script>

<style scoped>
.about {
  padding: 20px;
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  height: 200px;
  width: 200px;
  border-radius: 200px;
  margin-bottom: 20px;
}

.about__content {
  padding-left: 50px;
  padding-right: 50px;
}

h1 {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 25px;
}

p {
  line-height: 2;
  padding-left: 20px;
  padding-right: 20px;
}

.red {
  color: rgb(173, 45, 45);
}

.about__frameworks {
  display: inline-block;
  margin: 30px auto 10px;
  border-bottom: 5px solid #5dcfad;
}
</style>
