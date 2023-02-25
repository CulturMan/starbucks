const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // logic -> input 부분에 포커스를 해라!
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  // logic : 
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
  // logic : 
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})