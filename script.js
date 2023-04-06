function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
  }
// Sélectionnez la barre de navigation
const navbar = document.getElementById('menu');

// Ajoutez un écouteur d'événements pour détecter le défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Si la position de défilement est supérieure à 0, ajoutez la classe "fixed-nav"
        navbar.classList.add('fixed-nav');
    } else {
        // Sinon, supprimez la classe "fixed-nav"
        navbar.classList.remove('fixed-nav');
    }
});
