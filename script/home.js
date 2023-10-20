// change active class on navigation links navbar
const links = document.querySelectorAll('.nav-link');
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('actived');
      });
      link.classList.add('actived');
    });
  });
}


const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

fetch('header.html')
  .then(res => res.text())
  .then(result => {header.innerHTML = result})

  fetch('footer.html')
  .then(response => response.text())
  .then(result => {footer.innerHTML = result})
