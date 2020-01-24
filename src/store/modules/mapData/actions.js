/*eslint-disable*/
export default {
  addLayer({commit, state, rootState}, layer) {
    debugger
    try {
      if (!layer.id) {
        console.error('Layer has no id property');
        return
        /*TODO If layer id is not provided generate unique id*/
      }
      rootState.map.addLayer(layer);
      commit('addLayer', layer.id);
      /*if (rootState.map.loaded()) {
        rootState.map.addLayer(layer);
        commit('addLayer', layer.id);
      } else {
        rootState.map.on('load', () => {
          debugger
          rootState.map.addLayer(layer);
          commit('addLayer', layer.id)
        })
      }*/


      /*map.addLayer(
        {
          'id': 'mapillary',
          'type': 'line',
          'source': {
            'type': 'vector',
            'tiles': [
              'https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'
            ],
            'minzoom': 6,
            'maxzoom': 14
          },
          'source-layer': 'mapillary-sequences',
          'layout': {
            'line-cap': 'round',
            'line-join': 'round'
          },
          'paint': {
            'line-opacity': 0.6,
            'line-color': 'rgb(53, 175, 109)',
            'line-width': 2
          }
        }
      );
      map.on('click', 'mapillary', e => {
        debugger
        e
      })
      map.on('mouseenter', 'mapillary', () => {
        debugger
        map.getCanvas().style.cursor = 'pointer';
      })
      map.on('mouseleave', 'mapillary', () => {
        debugger
        map.getCanvas().style.cursor = '';
      })*/




    } catch (e) {
      console.error(e);
    }
  },
  removeLayer({commit, state, rootState}, layerId) {
    rootState.map.removeLayer(layerId);
    commit('removeLayer', layerId);
  },
  setBase({commit, state, rootState}, {sources, layers}) {
    debugger
    rootState.map.getStyle().layers.filter(item => item.source === 'base' || item.type === 'background').map(item => item.id).forEach(item => rootState.map.removeLayer(item));
    rootState.map.removeSource('base');
    rootState.map.addSource('base', sources.base);
    if (layers.length > 1) {
      const layerId = rootState.map.getStyle().layers[0].id;
      layers.forEach(layer => rootState.map.addLayer(layer, layerId))
    }
    else rootState.map.addLayer(layers[0], rootState.map.getStyle().layers[0].id)
  }
}
