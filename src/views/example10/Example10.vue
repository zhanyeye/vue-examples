<template>
  <div>
    <headerbar />
    <br />
    <homeworktable />
  </div>
</template>
<script>
import { getMain } from "@/api/Main";
export default {
  components: {
    headerbar: () => import("@/views/example10/Header"),
    homeworktable: () => import("@/views/example10/HomeworkTable")
  },
  created() {
    getMain();
  }
};
</script>
