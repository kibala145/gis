<template>
  <div id="app">
    <mapbox-map
      :container="container"
      :mapStyle="mapStyle"
      :hash="hash"
      :center="center"
      :zoom="zoom"
      :pitch="pitch"
    >
      <mapbox-source
        id="2"
        type="raster"
        :tiles="['https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015']"
        :tileSize="256"
      >
        <mapbox-layer
          :layer="{id: 'rasterlayer', type: 'raster'}"
        />
      </mapbox-source>
      <mapbox-source
        v-if="data"
        id="1"
        :data="data"
        type="geojson"
      >
        <mapbox-layer
          v-for="layer in layers"
          :key="layer.id"
          :layer="layer"
          @click="clickHandler"
          @mousemove="mousemoveHandler"
          @mouseleave="mouseleaveHandler"
        />
      </mapbox-source>
    </mapbox-map>
    <layers-control />
  </div>
</template>

<script>
  /*eslint-disable*/
  import MapboxMap from '@/components/mapbox/MapboxMap';
  import MapboxLayer from '@/components/mapbox/MapboxLayer';
  import MapboxSource from '@/components/mapbox/MapboxSource';
  import LayersControl from '@/modules/LayersControl/';
  import {mapStyles, zoom, center, hash, container, pitch} from '@/config';

  export default {
    data() {
      return {
        featureId: null,
        layers: [
          {
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
        ],
        // mapStyle: mapStyles[0],
        mapStyle: {
          "version":8,
          "name":"base",
          "sources": {},
          layers: [],

        },
        hash,
        center,
        zoom,
        container,
        pitch,
        data: null,
        sourceCounter: 0
      }
    },
    methods: {
      clickHandler(e) {
        e
      },
      mousemoveHandler(e) {
        if (e.features.length > 0) {
          if (this.featureId) {
            e.target.removeFeatureState({
              source: "maine",
              id: this.featureId
            });
          }
          this.featureId = e.features[0].id;
          e.target.setFeatureState({
            source: 'maine',
            id: this.featureId
          }, {
            hover: true
          });
          e.target.getCanvas().style.cursor = 'pointer';
        }
      },
      mouseleaveHandler(e) {
        e.target.setFeatureState({
          source: 'maine',
          id: this.featureId
        }, {
          hover: false
        });
        e.target.getCanvas().style.cursor = '';
        this.featureId = null;
      }
    },
    computed: {
      /*...mapState({
        mapInstance: state => state.map
      })*/
    },
    components: {
      MapboxMap,
      MapboxLayer,
      MapboxSource,
      LayersControl
    },
    async mounted() {

    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  :root {
    font-size: 62.5%;
    body {
      margin: 0;
      // Body font size 16px
      font-size: 1.6rem;
    }
  }
</style>
