
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/catharinasorum/ck56gdvfd0bfd1dquuy3cv3dk'
});

// Settings for Fernsehturm plassering
const fernsehturmSettings = {
    center: [13.409416, 52.520830],
    duration: 5000,
    bearing: 180,
    pitch: 3
}

// Settings for Humboldt plassering
const humboldtSettings = {
    center: [13.393612, 52.517994],
    duration: 5000,
    bearing: 180,
    pitch: 80
}

// flyTo
const flyTilFernsehturm = () => {
    map.flyTo(fernsehturmSettings);
};

// easeTo
const flyTilHumboldt = () => {
    map.easeTo(humboldtSettings);
};

// fly fra Berliner Domen til Fjernsynstårnet til Humboldt University
map.on("load", () => {
    setTimeout(flyTilFernsehturm, 3000);
    setTimeout(flyTilHumboldt, 9000);
});
