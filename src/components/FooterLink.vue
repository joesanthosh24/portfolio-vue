<template>
  <li>
    <icon :link="link"></icon>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IconLink from "../types/IconLink";

import Icon from "./Icon.vue";

export default defineComponent({
  props: {
    link: {
      required: true,
      type: Object as PropType<IconLink>,
    },
  },
  components: {
    icon: Icon,
  },
});
</script>

<style scoped>
li {
  margin: 0 10px;
}
</style>
