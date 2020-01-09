
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

// Greit å få lastet inn kartet før ting gjøres på kartet
map.on('load', () => {

    map.addLayer({
        id: 'australia', 
        type: 'fill',
        paint: {
            'fill-color' : 'rgba(180, 180, 180, 0.8)'
        },
        source: {
            type: 'geojson',
            data: 'australia.geojson'
        }
    });
});

// Om man trykker på Australia på kartet
map.on('click', 'australia', (evt) => {
    alert(evt.features[0].properties.landkode);
});