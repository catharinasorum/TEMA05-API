
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/catharinasorum/ck56gdvfd0bfd1dquuy3cv3dk'
});

// Funksjonen for å "fly"
const flyVidere = () => {
    map.flyTo({
        center: [13.409416, 52.520830],
        duration: 5000,
        bearing: 180,
        pitch: 3
    });
};

// fly fra Berliner Domen til Fjernsynstårnet
map.on("load", () => {
    setTimeout(flyVidere, 3000);
});
