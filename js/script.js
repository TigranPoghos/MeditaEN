particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


const button__headerJs = document.querySelector('.button__header-js')
const modal = document.querySelector('.modal')
button__headerJs.addEventListener('click', function(){
  setTimeout(() => {
    modal.classList.add('js-active')
  }, 100);
})
const modal__close = document.querySelector('.modal__close')
modal__close.addEventListener('click', function(){
  modal.classList.remove('js-active')
})

function closeModal(modal){
  modal.classList.remove("js-active")
}

document.addEventListener('click', function(event){
  if(!modal.contains(event.target) && modal.classList.contains('js-active')){
    closeModal(modal)
  }
})