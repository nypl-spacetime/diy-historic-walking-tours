// Initialize a Leaflet map and store a reference to the map Object
var map = L.map('map')

//  Set the [lat, long], and zoom for the map using Leaflet's setView method
map.setView([40.80558317487379, -73.94968271255495], 16)

L.tileLayer('http://maps.nypl.org/warper/layers/tile/862/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.nypl.org/">New York Public Library</a>'
}).addTo(map);
