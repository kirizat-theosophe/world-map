
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyaXphIiwiYSI6ImNrNTNseGc0ZDBhMHMzZm1jdjBoMWYweWEifQ.X3lZ_RB7KFuRgfgZB7fwMw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-79.4512, 43.6568],
zoom: 13
});
 
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
types: 'poi',
// see https://docs.mapbox.com/api/search/#geocoding-response-object for information about the schema of each response feature
render: function(item) {
// extract the item's maki icon or use a default
const maki = item.properties.maki || 'marker';
return (
"<div class='geocoder-dropdown-item'><img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/" +
maki +
"-15.svg'><span class='geocoder-dropdown-text'>" +
item.text +
'</span></div>'
);
},
mapboxgl: mapboxgl
});
map.addControl(geocoder);