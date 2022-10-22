const toggle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav__link');

toggle.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
