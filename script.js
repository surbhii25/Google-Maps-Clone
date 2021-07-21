mapboxgl.accessToken = 'pk.eyJ1Ijoic3VyYmhpaSIsImEiOiJja3Jkd21nODQ0enN0MnBueHhoMnRlNXN4In0.ZX5tS1XHHVOwIL9Yh3yUkw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy:true })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-0.127758, 51.507351])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}

