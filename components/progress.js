export default function() {
    const progress = document.querySelector('.progress');
    if (!progress) {
        return;
    }

    function getscrollpercent() {
        return parseInt(((100 / (document.documentElement.scrollHeight - window.innerHeight)) * window.pageYOffset) * 10, 10);
    }

    progress.value = getscrollpercent();

    window.addEventListener('scroll', function() {
        progress.value = getscrollpercent();
    });

}