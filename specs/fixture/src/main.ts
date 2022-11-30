import './style.css'

// @ts-ignore
import SmoothScrollbar from 'smooth-scrollbar'

const scrollbar = SmoothScrollbar.init(document.getElementById('app'))
window['scrollbar'] = scrollbar;

scrollbar.addListener(({ offset, limit }) => {
  const percentage = offset.y / limit.y

  document.documentElement.style.setProperty('--scroll', percentage);

  document.getElementById('scrollStatus').innerHTML = offset.y 
})


document.getElementById('scrollToSection5').addEventListener('click', () => {
  scrollbar.scrollIntoView(document.querySelector('#section-4'), {
    alignToTop: false,
    onlyScrollIfNeeded: true,
  });
})

document.getElementById('scrollToSection1').addEventListener('click', () => {
  scrollbar.scrollIntoView(document.querySelector('#section-1'), {
    alignToTop: true,
    onlyScrollIfNeeded: true,
  });
})


