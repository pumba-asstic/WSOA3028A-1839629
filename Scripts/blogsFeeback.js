// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  /*let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}*/
function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}
/*function writeText (form) {
form.inputbox.value = "thank you for the feedback"
}*/
function myFunction() {
    var x = document.getElementById("myMenu-top");
    if (x.className === "menu-top") {
      x.className += " responsive";
    } else {
      x.className = "menu-top";
    }
  }