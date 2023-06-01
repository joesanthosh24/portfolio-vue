<template>
  <div class="footer">
    <div class="footer-content">
      <h3>Joe Santhosh</h3>
      <ul class="socials-and-links">
        <footer-link
          v-for="link of links"
          :key="link.id"
          :link="link"
        ></footer-link>
      </ul>
    </div>
    <div class="footer-bottom">
      <p>Copyright &copy;2021 Joe Santhosh</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import IconLink from "../types/IconLink";

import FooterLinkComponent from "../components/FooterLink.vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const links = ref<IconLink[]>([
      {
        id: 1,
        icon: "linkedin",
        url: "https://www.linkedin.com/in/joe-santhosh-183770123/",
      },
      {
        id: 2,
        icon: "github-square",
        url: "https://github.com/joesanthosh24",
      },
      {
        id: 3,
        icon: "instagram",
        url: "https://www.instagram.com/joesanthosh96/",
      },
      {
        id: 4,
        icon: "facebook-square",
        url: "https://www.facebook.com/joe.santhosh.9/",
      },
    ]);

    return { links };
  },
  components: {
    footerLink: FooterLinkComponent,
  },
});
</script>

<style scoped>
.footer {
  background: black;
  padding-top: 40px;
  color: white;
  text-align: center;
  width: 100vw;
}

.footer-content {
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-content h3 {
  background-color: black;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
}

.socials-and-links {
  background-color: black;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.footer-bottom {
  margin-top: 10px;
  margin-bottom: 20px;
}

.footer-bottom p {
  background-color: black;
}
</style>
