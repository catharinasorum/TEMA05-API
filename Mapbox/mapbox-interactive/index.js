
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg'
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/catharinasorum/ck53uditi1bn91csch95whgqy', 
      center: [-87.661557, 41.893748],
      zoom: 10.7
    });

    map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['chicago-parks']
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});