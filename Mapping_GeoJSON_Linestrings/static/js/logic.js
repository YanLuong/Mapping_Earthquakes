// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Create the map object with center at the San Francisco airport. 14.4.3
//let map = L.map('mapid').setView([30, 30], 2);



// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data. 13.5.2
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "<hr>" + feature.properties.name + "</h2>")
//     ;
//   }

// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
//   }
// }).addTo(map);

// // Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line yellow. 13.4.3
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


//  Add a marker to the map for Los Angeles, California. 13.4.2 set up for multiple markers



// Get data from cities.js
// let cityData = cities;


//cities array for markers
// An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

  // Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(map);
// });

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// // changing marker to circle
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {radius: city.population/100000, color: "orange"})
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });


// single mapping point
//let cities = L.marker([34.0522, -118.2437]).addTo(map);



// changes marker to circle 13.4.1
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
//  }).addTo(map);


// We create the tile layer that will be the background of our map. 13.4.1
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    id: 'light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})//

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/YanLuong/Mapping_Earthquakes/main/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json";
// Then we add our 'graymap' tile layer to the map.

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data
  // , {
  //   // We turn each feature into a marker on the map.
  //   onEachFeature: function(feature, layer) {
  //     console.log(layer);
  //     layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3> <hr> <h4>Airport Name: " + feature.properties.name + "</h4>");
  //   }}
  ).addTo(map);
});



