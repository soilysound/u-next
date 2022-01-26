export default function ToTop() {

    const button = document.querySelector('.footer-top');

    if (!button) {
        return;
    }

    function tick() {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const active = window.pageYOffset > (h / 2);

        button.setAttribute('data-active', active);
        setTimeout(function() {
            requestAnimationFrame(tick)
        }, 250);
    }

    tick();
}