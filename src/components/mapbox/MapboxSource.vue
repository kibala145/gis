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
      },
      tiles: {
        type: Array,
        default: () => []
      },
      tileSize: {
        type: Number,
        default: 256
      }
    },
    beforeMount() {
      debugger
      switch (this.type) {
        case 'geojson':
          this.$store.state.map.addSource(this.id, {
            type: this.type,
            data: this.data,
          });
          break;
        case 'raster':
          this.$store.state.map.addSource(this.id, {
            type: this.type,
            tiles: this.tiles,
            tileSize: this.tileSize
          });
          break;
        default:
          break;
      }
    },
    destroyed() {
      /*
        Using destroyed hook to remove source after layer is removed
        Layer component if using beforeDestroyed hook to remove layer from the map
        TODO if found robust solution provide it
      */
      this.$store.state.map.removeSource(this.id);
    }
  }
</script>
