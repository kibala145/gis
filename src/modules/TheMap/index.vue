<template>
  <div
    :id="container"
    class="map"
  >
    <slot v-if="loaded"/>
  </div>
</template>

<script>
  /*eslint-disable*/
  import {Map, GeolocateControl, ScaleControl} from 'mapbox-gl';

  export default {
    name: 'TheMap',
    props: {
      center: {
        type: Array,
        default: () => ([20.4852, 54.7788])
      },
      zoom: {
        type: Number,
        default: 8
      },
      pitch: {
        type: Number,
        default: 0
      },
      mapStyle: {
        type: [Object, String],
        required: true
      },
      container: {
        type: String,
        default: 'map'
      },
      hash: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        map: null,
        loaded: false
      }
    },
    methods: {
      _onMoveend() {
        this.$store.commit('setViewport', this.getViewport());
      },
      getViewport() {
        const { lng, lat } = this.map.getCenter();
        const zoom = this.map.getZoom();
        const pitch = this.map.getPitch();
        const bearing = this.map.getBearing();

        return {
          latitude: lat,
          longitude: lng,
          zoom,
          pitch,
          bearing
        };
      }
    },
    mounted() {
      debugger
      this.map = new Map({
        container: this.container, // container id
        hash: this.hash,
        style: this.mapStyle,
        center: this.center,
        zoom: this.zoom,
        pitch: this.pitch,
        hash: this.hash
      });

      this.map.on('moveend', this._onMoveend);
      // const commit = this.$store.commit;
      /*this.map.on('dragend', this._onMoveend);
      this.map.on('zoomend', this._onMoveend);
      this.map.on('rotateend', this._onMoveend);
      this.map.on('pitchend', this._onMoveend);
      this.map.on('boxzoomend', this._onMoveend);*/

      // Add geolocate control to the mapViewport.
      /*if (geolocation) {
        const geoControl = new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          style: {
            color: 'red'
          }
        });

        this.map.addControl(geoControl);
      }*/

      this.map.on('load', () => {debugger; this.loaded = true});

      this.$store.commit('initMap', this.map);
      this.$store.commit('setViewport', this.getViewport());
    }
  }
</script>

<style>
  .map {
    width: 100vw;
    height: 100vh;
  }
</style>
