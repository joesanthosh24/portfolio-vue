<template>
  <div class="framework-imgs">
    <img
      class="framework-img"
      v-for="item of items"
      :key="item.name"
      :src="item.imageSource"
      alt="framework.imageSource"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import FrameworkLogo from "../types/FrameworkLogo";

export default defineComponent({
  props: {
    items: {
      required: true,
      type: Object as PropType<FrameworkLogo[]>,
    },
  },
});
</script>

<style scoped>
.framework-imgs {
  margin-top: 15px;
}

.framework-img {
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-right: 15px;
}
</style>
