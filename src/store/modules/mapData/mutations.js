export default {
  addLayer(state, layerId) {
    state.layers.push(layerId);
  },
  removeLayer(state, layerId) {
    const index = state.layers.indexOf(layerId);

    index !== -1 ? state.layers.splice(index, 1) : console.error('Couldn\'t remove layer, the given layerId couldn\'t be found')
  }
}
