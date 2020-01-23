<script>
  /*eslint-disable*/
  export default {
    name: 'MapboxLayer',
    props: {
      events: {
        type: Array,
        default: () => []
      },
      layer: {
        type: Object,
        default: () => ({})
      },
      id: {
        type: String,
        required: true
        //  for now it's required field, but later we should generate unique id
      },
      type: {
        type: String,
        default: 'geojson'
      },
    },
    render() {},
    beforeMount() {
      if (!this.$parent.id) {
        console.error('Error:MapboxLayer component can\'t find source.\nIt should be nested inside MapboxSource component')
      }
      if (!this.layer.id) {
        console.error('Error rendering MapboxLayer component');
        return
      }
      this.$store.dispatch('addLayer', Object.assign({source: this.$parent.id}, this.layer));
      /*this.events.forEach(event => {
        this.$store.state.map.on(event, 'maine', e => this.$emit(event, e))
      })*/
      Object.getOwnPropertyNames(this.$listeners).forEach(event => {
        this.$store.state.map.on(event, this.layer.id, this.$listeners[event])
      });
      const self = this;
      /*setInterval(function(){
        debugger
        self
        var layer = self.$store.state.map.getLayer(self.layer.id)
        if (layer.getLayoutProperty('visibility') === 'none')
          layer.setLayoutProperty('visibility', 'visible')
        else layer.setLayoutProperty('visibility', 'none')
      }, 1000)*/
    },
    beforeDestroy() {
      this.$store.dispatch('removeLayer', this.layer.id)
    }
  }
</script>
