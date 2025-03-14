var planet = planetaryjs.planet();

// Ruta para el archivo topojson (encargado de traer la imagen del planeta)
// Valores hexadecimales para los colores de: tierra, oceano y bordes
planet.loadPlugin(planetaryjs.plugins.earth({
topojson: { file: 'https://raw.githubusercontent.com/BinaryMuse/planetary.js/v1.1.2/dist/world-110m.json' },
/* Let's add some color to the globe */
oceans:   { fill:   '#1c68da' },
land:     { fill:   '#3fce44' },
borders:  { stroke: '#1b5e1f8e' }
}));

// Load our custom autorotate plugin
planet.loadPlugin(autorotate(10));

// Load the `pings` plugin to draw animated pings on the globe
planet.loadPlugin(planetaryjs.plugins.pings({
color: '#ffffff', ttl: 5000, angle: 10
}));

// The `pings` plugin draws animated pings on the globe.
planet.loadPlugin(planetaryjs.plugins.pings());

// The `zoom` and `drag` plugins enable
// manipulating the globe with the mouse.
planet.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [100, 300]
}));
planet.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
    this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
    this.plugins.autorotate.resume();
    }
}));

// Ping - El Salvador.
var colors = ['red'];
setInterval(function() {
    var lat = 13.678809225770339;
    var lng = -89.12591713855309;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 6000, angle: 1 });
}, 150);

// Ping - California.
var colors = ['red'];
setInterval(function() {
    var lat = 37.24368280419002;
    var lng = -122.08624430333309;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 6000, angle: 1 });
}, 150);

// Ping - Texas.  
var colors = ['red'];
setInterval(function() {
    var lat = 31.45855288478609;
    var lng = -99.09504890787267;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 6000, angle: 1 });
}, 150);

// Ping - Costa Rica.
var colors = ['red'];
setInterval(function() {
    var lat = 9.918979862460201;
    var lng = -84.068428890249;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 6000, angle: 1 });
}, 150);

// Ping - Taiwán.
/*  var colors = ['red'];
setInterval(function() {
    var lat = 23.638550941770358;
    var lng = 121.23635724667412;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 6000, angle: 1 });
}, 150);*/


// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('globe');
planet.draw(canvas);

// Get location when clicking the button
// var locationButton = window.document.getElementById('see-my-location-button');
// locationButton.addEventListener('click', function() {
// // Disable button while we get the location
// locationButton.setAttribute('disabled', 'true');
// // Change button label
// locationButton.innerText = 'Getting location...';
// navigator.geolocation.getCurrentPosition(function(position) {
//     // Success callback
//     showLocation(position);
//     locationButton.innerText = 'Done, look at the globe';
// }, geoError);
// });

// Helper function to add one ping on the globe
function showLocation(position) {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
// Add a ping on the globe every second
setInterval(function() {
    planet.plugins.pings.add(longitude, latitude);
}, 1000);
}

// Geolocation API error callback
function geoError(posError) {
locationButton.classList.add('error');
locationButton.innerText = posError.message;
}

// This plugin will automatically rotate the globe around its vertical
// axis a configured number of degrees every second.
function autorotate(degPerSec) {
// Planetary.js plugins are functions that take a `planet` instance
// as an argument...
return function(planet) {
    var lastTick = null;
    var paused = false;
    planet.plugins.autorotate = {
    pause:  function() { paused = true;  },
    resume: function() { paused = false; }
    };
    // ...and configure hooks into certain pieces of its lifecycle.
    planet.onDraw(function() {
    if (paused || !lastTick) {
        lastTick = new Date();
    } else {
        var now = new Date();
        var delta = now - lastTick;
        // This plugin uses the built-in projection (provided by D3)
        // to rotate the globe each time we draw it.
        var rotation = planet.projection.rotate();
        rotation[0] += degPerSec * delta / 1000;
        if (rotation[0] >= 180) rotation[0] -= 360;
        planet.projection.rotate(rotation);
        lastTick = now;
    }
    });
};
};
