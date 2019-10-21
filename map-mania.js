function initApplication() {
    console.log('Map Mania - Starting!');
}


var score = 0;
var i;
var e = 0;

var gMap
var favoritePlaces = [
    {"content":"Minooka, IL... My Home", "coordinates":{"lat":41.837546,"lng":-88.0146821}, "iconImagePath":"http://maps.google.com/mapfiles/ms/icons/blue.png"},
    {"content":"Kingston,Jamaica", "coordinates":{"lat": 18.0179, "lng": -76.8099}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Port of Spain, Trinidad", "coordinates":{"lat":10.6496,"lng": -61.5142}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Yaounde, Cameroon", "coordinates":{"lat":3.8480,"lng":11.5021}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"New York, USA", "coordinates":{"lat":40.7128,"lng":-74.0060}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Pyramids Of Giza, Egypt", "coordinates":{"lat":29.9792,"lng":31.134}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Taj Mahal, India", "coordinates":{"lat":27.1751,"lng":78.0421}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Burj Khalifa, UAE", "coordinates":{"lat":25.1972,"lng":55.2744}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Northern Lights, Iceland", "coordinates":{"lat":64.963051,"lng":-19.020835}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Great Barrier Reef, Australia", "coordinates":{"lat":-18.2871,"lng":147.6992}, "iconImagePath":"https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"}
];  
var hinters = ["Think Bob marley","Think Soca Music","Think Samuel Eto'o","Think of the Knicks","Think of Pharaohs","Think of Curry and Rhoti","Think of Middle Eastern Royalty","Think of The Northern Lights","Think of How It Is Down Under"]; 

function initMap() {
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: {"lat": 18.0179, "lng": -76.8099},
        "zoom": 4
      });

    alert(`Hello All and Welcome To My Map Game! 
    This game is played and won by finding all my 9 favorite the locations
    For it to count you must be at zoom level 6 or greater
    If you need a hint, click the hint button
    If this is Dr. Pogue Click the "Win" to win
    `);
    var marker = new google.maps.Marker({position:{"lat":41.837546,"lng":-88.0146821}, "map":gMap});

    /* Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{"lat":10.6496,"lng": -61.5142}, "map":gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'); */

    var infoWindow = new google.maps.InfoWindow({content:"Minooka, IL... My Home"});
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker);
    }); 

    
    // Note that several message boards suggested using 'idle' instead of 'bounds_changed' because 
    // 'bounds_changed' gets called over and over when the user drags the map.
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    var z;
    
    SetScore(score);
}

function myHint() {
    SetHint(hinters[e]);
    //document.getElementById("hinter").value = (hinters[e]);
    // alert(hinters[e]);
    e++;
}
function myWinner() {
    score = 10;
    SetScore(score);
    alert("Congratualtions on winning the game!")
    for (i = 0; i < favoritePlaces.length; i++) {
        console.log(favoritePlaces[i]);
        AddMarker(favoritePlaces[i]);
        }
    }

function updateGame() {
    console.log('function UpdateGame()!');
    //var location = gMap.getBounds().contains();
    var zoomLevel = gMap.getZoom()
    var inBounds = false;
    var a = false; // I used these local variables so that if the same location is scrolled over more than once the score isn't contually updated 
    var b = false;
    var c = false;
    var d = false;
    var ee = false;
    var f = false;
    var g = false;
    var h = false;
    var ii = false;

    // Check if Minooka, Il is in the currently displayed map
    if (gMap.getBounds().contains({"lat":41.837546,"lng":-88.0146821})) {
        inBounds = true;
    }
    if (zoomLevel > 5) {
    

        if ((gMap.getBounds().contains({"lat": 18.0179, "lng": -76.8099}) && (a == false))) {
            AddMarker(favoritePlaces[1]);
            console.log(favoritePlaces[1]);
            inBounds = true;
            a = true;
            score++;
            SetScore(score);
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":10.6496,"lng": -61.5142}) && (b == false))) {
            AddMarker(favoritePlaces[2]);
            console.log(favoritePlaces[2]);
            inBounds = true;
            b = true;
            score++;
            SetScore(score);
        }
        else if ((gMap.getBounds().contains({"lat":3.8480,"lng":11.5021}) && (c == false))) {
            AddMarker(favoritePlaces[3]);
            console.log(favoritePlaces[3]);
            inBounds = true;
            c = true;
            score++;
            SetScore(score);
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":40.7128,"lng":-74.0060})  && (d == false))) {
            AddMarker(favoritePlaces[4]);
            console.log(favoritePlaces[4]);
            inBounds = true;
            d = true;
            score++;
            SetScore(score);
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":29.9792,"lng":31.134}) && (ee == false))) {
            AddMarker(favoritePlaces[5]);
            console.log(favoritePlaces[5]);
            inBounds = true;
            ee = true;
            score++;
            SetScore(score);
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":27.1751,"lng":78.0421}) && (f == false))) {
            AddMarker(favoritePlaces[6]);
            console.log(favoritePlaces[6]);
            inBounds = true;
            f = true;
            score++;
            SetScore(score);
        }
        else if ((gMap.getBounds().contains({"lat":25.1972,"lng":55.2744}) && (g == false))) {
            AddMarker(favoritePlaces[7]);
            console.log(favoritePlaces[7]);
            inBounds = true;
            g = true;
            score++;
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":64.963051,"lng":-19.020835}) && (h == false))) {
            AddMarker(favoritePlaces[8]);
            console.log(favoritePlaces[8]);
            inBounds = true;
            h = true;
            score++;
            SetScore(score);
            myWin();
        }
        else if ((gMap.getBounds().contains({"lat":-18.2871,"lng":147.6992}) && (ii == false))) {
            AddMarker(favoritePlaces[9]);
            console.log(favoritePlaces[9]);
            inBounds = true;
            ii = true;
            score++;
            SetScore(score);
            myWin();
        }
        else {
            inBounds = false;
        }
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hinter").value = hint;  
}

function SetScore() {
    document.getElementById("scoreboard").value = score; 
}

function AddMarker(markerProperties) {
    var marker = new google.maps.Marker({position:markerProperties.coordinates, map:gMap});

    // Check if there is a custom icon image.
    if (markerProperties.iconImagePath) {
        // Set custum icon image.
        marker.setIcon(markerProperties.iconImagePath);
    }

    // Check if there is content and create a listener if content exists.
    if (markerProperties.content) {
        var infoWindow = new google.maps.InfoWindow({content:markerProperties.content});

        marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
        });
    }
}

