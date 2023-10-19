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

