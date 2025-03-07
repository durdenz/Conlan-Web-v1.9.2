var vtourIndex = 0;
showVtour(vtourIndex);

function showVtour(n) {
    var i;
    var vts = document.getElementsByClassName("vt");

    console.log("showVtour: "+n);

    // Hide all of the vTours
    for (i=0; i<vts.length; i++) {
        vts[i].style.display = "none";
    }

    // Display only the selected vTour
    vts[n].style.display = "block";
}

// Initialize and add the location map
function initMap() {
    // The location
    const loc = { lat: 28.035390, lng: -80.596500};

    // The map centered at loc
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: loc,
    });

    // The marker, positioned at loc
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
}