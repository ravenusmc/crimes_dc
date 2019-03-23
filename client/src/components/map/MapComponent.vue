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
  computed: {
    ...mapGetters([
      'crimeData'
    ])
  },
  methods: {
    ...mapActions([
      'fetchCrimeData',
    ]),
    addMarkers() {
      //clearing out the markers
      this.markers = [];

      for (var i = 0; i < this.crimeData.length; i++){
          var marker = {position: {lat: 0, lng: 0}};
          //const [name, lat, lon] = airports[this.crimeData[i]]
          marker.position.lat = this.crimeData[i].lat;
          marker.position.lng = this.crimeData[i].long;
          this.markers.push(marker)
        }

        //set bounds of the map for markers
        if (this.markers.length === 1){
          this.center = { lat: marker.position.lat, lng: marker.position.lng }
        }else {
          this.$refs.gmap.$mapPromise.then((map) => {
            const bounds = new google.maps.LatLngBounds()
            for (let m of this.markers) {
              bounds.extend(m.position)
            }
           map.fitBounds(bounds);
          });
        }
      // this.markers.push({ position: marker });
    },
  },
  created() {
    eventBus.$on('dataSubmitted', (queryData) =>{
      this.fetchCrimeData(queryData)
      this.addMarkers();
    })
  },
  mounted() {
    // this.addMarker();
  },
};
</script>

<style scoped>
</style>
