<template>
  <div class="layers">
    <div class="layers__layers-header">
      Layers
    </div>
    <div class="layers__layers-content">
      <input
        id="layerVisibility"
        checked
        type="checkbox"
        @change="handleChange"
      > <label for="layerVisibility">Layer 'maine'</label>
      <br>
      <select
        @change="setStyle"
      >
        <option value="null" selected>
          Choose style
        </option>
        <option
          v-for="option in rasterOptions"
          :key="option.themeId"
          :value="option.themeId"
        >
          {{ option.themeLabel }}
        </option>
        <option
          v-for="option in vectorOptions"
          :key="option.id"
          :value="option.id"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  import axios from 'axios';
  import {mapStyles} from '@/config';

  export default {
    name: 'LayersControl',
    data() {
      return {
        visible: true,
        rasterOptions: null,
        vectorOptions: null
      }
    },
    methods: {
      handleChange(e) {
        this.$store.state.map.setLayoutProperty(
          'maine',
          'visibility',
          e.target.checked ? 'visible' : 'none'
        )
      },
      setStyle(e) {
        debugger
        const item = this.rasterOptions.find(item => item.themeId === e.target.value);
        const style = item ? {
          name: item.themeLabel,
          version: 8,
          sources: {
            base: {
              type: 'raster',
              tiles: [
                item.themeWmsServer === 'TILELAYER' ? item.themeServerUrl : item.themeServerUrl + '/tile/{z}/{y}/{x}.png'
              ],
              tileSize: 256
            }
          },
          layers: [
            {
              'id': 'simple-tiles',
              'type': 'raster',
              'source': 'base',
              'minzoom': 0,
              'maxzoom': 22
            }
          ]
        } : this.vectorOptions.find(item => item.id === e.target.value);
        // this.$store.state.map.setStyle(style);
        this.$store.dispatch('setBase', style);
      }
    },
    async mounted() {
      let res = await axios.get('https://geoportal.gov39.ru/cgis-portal/rest/anonymous/project/106');
      debugger
      this.rasterOptions = [...res.data.mapPart.themeGroups[0].themeType];
      this.vectorOptions = mapStyles;
    }
  }
</script>

<style lang="scss">
  .layers {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    margin: 1.6rem 0 0 1.6rem;
    padding: 1.6rem;
    min-width: 40rem;
    min-height: 52.6rem;
    border-radius: .2rem;
  }
</style>
