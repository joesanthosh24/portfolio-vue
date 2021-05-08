<template>
  <a :href="link.url" target="_blank"><i :class="'fab fa-' + link.icon"></i></a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IconLink from "../types/IconLink";

export default defineComponent({
  name: "Icon",
  props: {
    link: {
      required: true,
      type: Object as PropType<IconLink>,
    },
  },
});
</script>

<style scoped>
a {
  background-color: black;
  text-decoration: none;
  transition: color 0.4s ease;
}

a i:hover {
  color: #5dcfad;
}

i.fab {
  color: white;
  font-size: 1.3rem;
}
</style>e
