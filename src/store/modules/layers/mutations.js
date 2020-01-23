export default {
  addLayer(state, layerId) {
    state.items.push(layerId);
  },
  removeLayer(state, layerId) {
    const index = state.items.indexOf(layerId);

    index !== -1 ? state.items.splice(index, 1) : console.error('Couldn\'t remove layer, the given layerId couldn\'t be found')
  }
}
