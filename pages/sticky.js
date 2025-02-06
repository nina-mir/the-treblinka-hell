const header = document.querySelector('header');
const btmWrapper = document.querySelector('.bottom-wrapper')
const topPadding = document.querySelector('#top-padding')

const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', "")
// scrollWatcher.setAttribute('margin-top', '0px')
topPadding.before(scrollWatcher)

const options = {
    root: header,
    rootMargin: "10px 0px 0px 0px",
  };

const navObserverOne = new IntersectionObserver((entries)=>{
    header.classList.toggle('sticking', !entries[0].isIntersecting)
    topPadding.classList.toggle('top-move', !entries[0].isIntersecting)
    // btmWrapper.classList.toggle('hidden', !entries[0].isIntersecting)
}, {rootMargin: "10px 0px 0px 0px"})



navObserverOne.observe(scrollWatcher)
