function initMap() {
  // The location of Uluru
  var xrcenter = { lat: 60.20869, lng: 24.97671 };
  var terkko = { lat: 60.1905, lng: 24.9075 };
  var center = { lat: 60.1985, lng: 24.9075 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    disableDefaultUI: true,
    center: center,
    styles: [
      {
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#070b0e",
          },
        ],
      },
      {
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#1d303a",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            color: "#11303a",
          },
        ],
      },
      {
        elementType: "labels.text",
        stylers: [
          {
            color: "#526169",
          },
          {
            weight: 2,
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#526169",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#11303a",
          },
        ],
      },
      {
        featureType: "poi.attraction",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.sports_complex",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#1d303a",
          },
        ],
      },
    ],
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: xrcenter, map: map });
  var markerTwo = new google.maps.Marker({ position: terkko, map: map });
}
