// Referanse til HTML-elementer
const buttons = document.querySelector('#buttons');


// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 2,
    center: [13.401067, 52.519087] // Er omvendt av det google maps har
});

map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }),
    'top-left'
  );

const addMarker = () => {
    const marker = new mapboxgl.Marker( { draggable: true });
    
    marker.setLngLat([13.401067, 52.519087]);
    marker.addTo(map);

    marker.on('dragend', () => {
        const pos = marker.getLngLat();
        console.log(pos);
        addMarker();
    } );
};

addMarker();


buttons.onclick = (evt) => {
    const stil = evt.target.dataset.stil;
   map.setStyle('mapbox://styles/mapbox/' + stil);
}