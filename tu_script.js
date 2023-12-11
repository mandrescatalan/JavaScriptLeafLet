// VERSION 2

// Inicializa un mapa centrado en una ubicación específica y con un nivel de zoom
var map = L.map('map').setView([10.46497, -73.2573], 11);

// Agrega una capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de latitudes y longitudes
var cesarLocations = [
    { lat: 10.4631400, lon: -73.2532200 }, // Valledupar
    { lat: 10.38439, lon: -73.17332 }, // La Paz
    // Agrega más ubicaciones según tus necesidades
];

// Agrega marcadores para cada ubicación en la lista
cesarLocations.forEach(function (location) {
    L.marker([location.lat, location.lon]).addTo(map);
});
