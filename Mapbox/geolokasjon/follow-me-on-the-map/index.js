
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

let marker;

const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.flyTo({
        center: [lng, lat],
        zoom: 18
    });

    marker = new mapboxgl.Marker();
    marker.setLngLat([lng, lat]);
    marker.addTo(map);
}

navigator.geolocation.watchPosition(followMe);