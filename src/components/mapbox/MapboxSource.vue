<script>
  /*eslint-disable*/
  export default {
    name: 'MapboxSource',
    render: function(h, context) {
      if (this.$slots.default)
        return h('div', this.$slots.default)
    },
    props: {
      id: {
        type: String,
        required: true
        //  for now it's required field, but later we should generate unique id
      },
      type: {
        type: String,
        default: 'geojson'
      },
      data: {
        type: Object,
        default: () => ({})
      }
    },
    mounted() {
      this.$store.state.map.addSource(this.id, {
        type: this.type,
// Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
// from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
//         data: res.data,
        data: this.data,
        // cluster: true,
        // clusterMaxZoom: 14, // Max zoom to cluster points on
        // clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });
    },
    destroyed() {
      /*
        Using destroyed hook to remove source after layer is removed
        Layer component if using beforeDestroyed hook to remove layer from the map
        TODO if found robust solution provide it
      */
      debugger
      this.$store.state.map.removeSource(this.id);
    }
  }
</script>
