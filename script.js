function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '250px';
    }
}
// Inicializar Swiper para el slider de noticias
var swiper = new Swiper(".swiper-container", {
    loop: true, // Repetir el slider al llegar al final
    autoplay: {
        delay: 8000, // Intervalo de cambio de diapositivas (en milisegundos)
    },
    pagination: {
        el: ".swiper-pagination", // Selector del contenedor de paginación
        clickable: true, // Permitir hacer clic en los puntos de paginación para navegar
    },
});