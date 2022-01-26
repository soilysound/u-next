export default function(gallery) {

    if (!Element.prototype.requestFullscreen) {
        Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
    }

    if (!document.exitFullscreen) {
        document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    }

    var rail = gallery.querySelector('.gallery-rail');
    var launchers = document.querySelectorAll('.media img');
    var closers = gallery.querySelectorAll('.gallery-close');
    var images = document.querySelectorAll('figure img');

    if (!gallery || !launchers) {
        return;
    }

    launchers.forEach(function(button) {
        button.onclick = function() {
            gallery.requestFullscreen();
        }
    });

    closers.forEach(function(button) {
        button.onclick = function() {
            document.exitFullscreen();
        }
    });

    function next() {
        alert(rail.scrollLeft)
    }

    function prev() {
        alert(rail.scrollLeft)
    }

    document.onkeyup = function(e) {

        if (!gallery.offsetWidth) {
            return;
        }

        if (e.keyCode === 37) {
            rail.scrollLeft = (rail.scrollLeft - window.innerWidth);
        }

        if (e.keyCode === 39) {
            rail.scrollLeft = (rail.scrollLeft + window.innerWidth);
        }
    }

    images.forEach(function(image) {
        var caption = image.alt;
        var img = image.outerHTML;
        rail.insertAdjacentHTML('beforeend', `<div class="gallery-item">
        ${img}
        <p class="gallery-caption"><span>${caption}</span></p>
    </div>`);
    })
}