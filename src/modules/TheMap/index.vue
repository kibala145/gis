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
    data() {
      return {
        map: null
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
      this.map = new Map({
        container: 'map', // container id
        hash,
        style: styles[0],
        center,
        zoom
      });

      this.map.on('moveend', this._onMoveend);
      // const commit = this.$store.commit;
      /*this.map.on('dragend', this._onMoveend);
      this.map.on('zoomend', this._onMoveend);
      this.map.on('rotateend', this._onMoveend);
      this.map.on('pitchend', this._onMoveend);
      this.map.on('boxzoomend', this._onMoveend);*/

      // Add geolocate control to the mapViewport.
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

        this.map.addControl(geoControl);
      }

      this.$store.commit('initMap', this.map);
      this.$store.commit('setViewport', this.getViewport());
    }
  }
</script>

<style>
  #map {
    width: 100vw;
    height: 100vh;
  }
</style>
