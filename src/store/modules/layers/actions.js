/*eslint-disable*/
export default {
  addLayer({commit, state, rootState}, {layer, map}) {
    try {
      if (rootState.map.instance.isStyleLoaded()) rootState.map.instance.addLayer(layer)
      else console.warn('Couldn\'t add layer, map style is not loaded yet')


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
      console.err(e);
    }
  }
}
