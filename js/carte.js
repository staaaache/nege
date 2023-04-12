mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhYWNoZSIsImEiOiJja2htMzd0dHUwYnAxMnNrMWFuanZzcG5oIn0.ylxpQuflfd0k4cTfUx9yag';
// Ajouter des options de style pour la carte
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/staache/clge4omt6002u01l7dsft4b40',
    center: [6.1844, 48.6921],
    zoom: 1,
    attributionControl: false, // Désactiver le contrôle d'attribution
  });

// Ajouter le logo Mapbox personnalisé à la carte
  const customLogo = document.createElement('div');
  customLogo.className = 'mapboxgl-ctrl-logo';
  map.getContainer().appendChild(customLogo);
  

// Créer un élément DOM personnalisé pour le marqueur
const markerEl = document.createElement("div");
markerEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">' +
  '<circle class="mapboxgl-marker-circle" cx="18" cy="18" r="12"/>' + // Ajouter un cercle
  '<circle class="mapboxgl-marker-circle-animation" cx="18" cy="18" r="15"/>' + // Ajouter un cercle animé
  '</svg>';

// Créer le marqueur avec l'élément DOM personnalisé
const marker = new mapboxgl.Marker({
  element: markerEl,
  draggable: true
}).setLngLat([6.1844, 48.6921])
.addTo(map);

// Ajouter une fenêtre pop-up au marqueur
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h3>Ce marqueur est situé à Nancy, France</h3>");

marker.setPopup(popup);

// Créer un bouton pour zoomer sur la carte
const nav = new mapboxgl.NavigationControl({
  showCompass: false,
});

// Créer un bouton pour localiser l'utilisateur
const geolocate = new mapboxgl.GeolocateControl({
  positionOptions: { enableHighAccuracy: true },
  trackUserLocation: true,
  showUserHeading: true,
});

// Ajouter les boutons à la carte
map.addControl(nav, 'bottom-right');
map.addControl(geolocate, 'bottom-right');



