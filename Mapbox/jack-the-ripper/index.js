
const nav = document.querySelector("#nav")

mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGFyaW5hc29ydW0iLCJhIjoiY2s1M2x1MTFxMDl6azNnbzRtNGZwZXRpOSJ9.cKX9PjWKrPIY6Pa_jQWpMg';

const map = new mapboxgl.Map({
    container: 'map',
    zoom: 12,
    duration: 5000,
    pitch: 80,
    center: [-0.112926, 51.514307],
    style: 'mapbox://styles/catharinasorum/ck56nssoo04wy1dlo7to3vdns'
});

const ofre = [
    {
        lng: -0.071368,
        lat: 51.516506,
        navn: "Martha Tabra"
    },
    {
        lng: -0.061042,
        lat: 51.519883,
        navn: "Mary Nichols"
    },
    {
        lng: -0.072559,
        lat: 51.520381,
        navn: "Annie Chapman"
    }
]

map.on("load", () => {

    for(const offer of ofre) {
        const div = document.createElement("div");
        div.className = "marker";
        const crossMarker = new mapboxgl.Marker(div);
        crossMarker.setLngLat([offer.lng, offer.lat]);
        crossMarker.addTo(map);

        crossMarker.on("click", (e) => {
            alert(e);
        } )
    }

});

nav.onclick = (evt) => {
    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);

    const point = [lng, lat];

    map.easeTo ({
        center: point,
        zoom: 18
    });
};
