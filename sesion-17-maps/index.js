let marker, map;

function initMap() {
  console.log("mapa");
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Inicial",
  });
}

function geoPosicion() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  }
}

function centraMapa(posicion) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longtude,
  };
  console.log(nuevaPos);
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log("Error producido y se ha gestionado");
  console.error(error);
}
