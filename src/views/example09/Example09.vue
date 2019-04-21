<template>
  <div>
    <div>
      <comp1 />
    </div>
    <div>
      <comp2 />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    comp1: () => import("@/views/example09/Example09-01"),
    comp2: () => import("@/views/example09/Example09-02")
  }
};
</script>
