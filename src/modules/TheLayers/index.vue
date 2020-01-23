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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheLayers',
    data() {
      return {
        visible: true,
      }
    },
    methods: {
      handleChange(e) {
        this.$store.state.map.setLayoutProperty(
          'maine',
          'visibility',
          e.target.checked ? 'visible' : 'none'
        )
      }
    },
    mounted() {

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
