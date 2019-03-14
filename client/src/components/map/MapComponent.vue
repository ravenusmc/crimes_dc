<template>
  <div>
    
    <!-- Start of Google maps -->
    <gmap-map
      :center="center"
      :zoom="12"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
      style="width:100%;  height: 500px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :label="{
          color: 'red',
          fontSize: '20px',
          text: 'first',
          color: 'black'
        }"
        @click="center=m.position">
      </gmap-marker>
    </gmap-map>
    <!-- End of Google maps -->

  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 38.907, lng: -77.0369 },
      markers: [],
    };
  },
  methods: {
    // receives a place object via the autocomplete component
    addMarker() {
      const marker = {
        lat: 38.9074,
        lng: -77.0502,
      };
      this.markers.push({ position: marker });
    },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  },
  mounted() {
    this.addMarker();
  },
};
</script>

<style scoped>
</style>
