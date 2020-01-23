<script>
  /*eslint-disable*/
  export default {
    name: 'MapboxLayer',
    /*data() {
      return {
        layer: {
          'id': 'maine',
          'type': 'fill',
          'source': {
            'type': 'geojson',
            'data': {
              "type": "FeatureCollection",
              "features": [
                {
                  "type": "Feature",
                  "properties": {},
                  "id": 1,
                  "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        [
                          -67.13734351262877,
                          45.137451890638886
                        ],
                        [
                          -67.79141211614706,
                          45.702585354182816
                        ],
                        [
                          -67.79035274928509,
                          47.066248887716995
                        ],
                        [
                          -68.23430497910454,
                          47.35462921812177
                        ],
                        [
                          -68.90478084987546,
                          47.184794623394396
                        ],
                        [
                          -69.23708614772835,
                          47.44777598732787
                        ],
                        [
                          -70.00014034695016,
                          46.69317088478567
                        ],
                        [
                          -70.30495378282376,
                          45.914794623389355
                        ],
                        [
                          -70.6600225491012,
                          45.46022288673396
                        ],
                        [
                          -71.08482,
                          45.3052400000002
                        ],
                        [
                          -70.94416541205806,
                          43.46633942318431
                        ],
                        [
                          -70.98176001655037,
                          43.36789581966826
                        ],
                        [
                          -70.79761105007827,
                          43.21973948828747
                        ],
                        [
                          -70.75102474636725,
                          43.08003225358635
                        ],
                        [
                          -70.64573401557249,
                          43.090083319667144
                        ],
                        [
                          -70.11617,
                          43.68405
                        ],
                        [
                          -69.06,
                          43.98
                        ],
                        [
                          -68.03252,
                          44.3252
                        ],
                        [
                          -66.96466,
                          44.8097
                        ],
                        [
                          -67.13734351262877,
                          45.137451890638886
                        ]
                      ]
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "id": 2,
                  "properties": {},
                  "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        [
                          -71.8505859375,
                          46.837649560937464
                        ],
                        [
                          -71.707763671875,
                          45.44471679159555
                        ],
                        [
                          -67.24731445312499,
                          45.68315803253308
                        ],
                        [
                          -67.17041015625,
                          46.882723010671945
                        ],
                        [
                          -69.796142578125,
                          47.212105775622426
                        ],
                        [
                          -71.8505859375,
                          46.837649560937464
                        ]
                      ]
                    ]
                  }
                }
              ]
            }
          },
          'layout': {},
          'paint': {
            'fill-color': [
              'case',
              ['boolean',
                ['feature-state', 'hover'],
                false
              ],
              '#066',
              '#088'
            ],
            'fill-opacity': 0.8
          }
        }
      }
    },*/
    props: {
      events: {
        type: Array,
        default: () => []
      },
      layer: {
        type: Object,
        default: () => ({})
      }
    },
    render() {},
    mounted() {
      if (!this.$parent.id) {
        console.error('Error:MapboxLayer component can\'t find source.\nIt should be nested inside MapboxSource component')
      }
      if (!this.layer.id) {
        console.error('Error rendering MapboxLayer component');
        return
      }
      this.$store.dispatch('addLayer', this.layer);
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
