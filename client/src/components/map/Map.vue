<template>
  <div>
    <Selection />
    <google-map />
  </div>
</template>

<script>
import GoogleMap from '@/components/map/MapComponent.vue';
import Selection from '@/components/map/Selection';

export default {
  name: "App",
  components: {
    GoogleMap,
    Selection,
  }
};
</script>

<style scoped>
</style>
