let lazyImages = [...document.querySelectorAll('.lazy-image')]
    let inAdvance = 0

    function lazyLoad() {
        lazyImages.forEach(image => {
            if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
                image.src = image.dataset.src
                image.onload = () => image.classList.add('loaded')
            }
        })
    }

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 16))
window.addEventListener('resize', _.throttle(lazyLoad, 16))