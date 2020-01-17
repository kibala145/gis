<template>
  <div id="app">
    <the-map />
  </div>
</template>

<script>
  /*eslint-ignore*/
  import TheMap from '@/modules/TheMap/index';
  // import {mapState} from 'vuex';

  export default {
    data() {
      return {

      }
    },
    computed: {
      /*...mapState({
        mapInstance: state => state.map.instance
      })*/
    },
    components: {
      TheMap
    },
    mounted() {
      /*
        If getting error here,
        then it should be handled by watching store state property
        after watching once it's not null, remove watch handler to free memory
      */
      const map = this.$store.state.map.instance;

      /* Once map is loaded you can use it fully */
      map.on('load', () => {
        map.on('click', 'building-3d', e => {
          debugger
          e
        })
      });
    }
  }
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
