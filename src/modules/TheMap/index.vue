<template>
  <div id="map"></div>
</template>

<script>
  /*eslint-disable*/
  import {Map, GeolocateControl} from 'mapbox-gl';
  /*Obtain data from config*/
  import {styles, center, zoom, hash, geolocation} from './config';

  export default {
    name: 'TheMap',
    /*props: {
      center: {
        type: Array,
        default: () => ([20.4852, 54.7788])
      },
      zoom: {
        type: Number,
        default: 8
      }
    },*/
    mounted() {
      const map = new Map({
        container: 'map', // container id
        hash,
        style: styles[0],
        center,
        zoom
      });
      // Add geolocate control to the map.
      if (geolocation) {
        const geoControl = new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          style: {
            color: 'red'
          }
        });

        map.addControl(geoControl);
      }

      this.$store.commit('initMap', map);
    }
  }
</script>

<style>
  #map {
    width: 100vw;
    height: 100vh;
  }
</style>
