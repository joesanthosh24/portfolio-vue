<template>
  <li>
    <a :href="link.url" target="_blank"
      ><i :class="'fab fa-' + link.icon"></i
    ></a>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import FooterLink from "../types/FooterLink";

export default defineComponent({
  props: {
    link: {
      required: true,
      type: Object as PropType<FooterLink>,
    },
  },
});
</script>

<style>
.socials-and-links {
  background-color: black;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials-and-links li {
  margin: 0 10px;
}

.socials-and-links a {
  text-decoration: none;
  transition: color 0.4s ease;
}

.socials-and-links a i:hover {
  color: #5dcfad;
}

.fab {
  color: white;
  font-size: 1.3rem;
}
</style>
