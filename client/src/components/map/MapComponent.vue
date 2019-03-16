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
      style="width:100%;  height: 700px;">
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
import { eventBus } from '../../main';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 38.907, lng: -77.0369 },
      markers: [],
      queryData: {},
    };
  },
  methods: {
    ...mapActions([
      'fetchCrimeData',
    ]),
    // receives a place object via the autocomplete component
    addMarker() {
      const marker = {
        lat: 38.9074,
        lng: -77.0502,
      };
      this.markers.push({ position: marker });
    },
  },
  created() {
    eventBus.$on('dataSubmitted', (queryData) =>{
      console.log(queryData)
      this.fetchCrimeData()
      //this.addMarker();
    })
  },
  mounted() {
    // this.addMarker();
  },
};
</script>

<style scoped>
</style>
