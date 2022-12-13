//masonry layout

window.onload = function() {
let grid = document.querySelector('.gallery__wrapper');
let msnry = new Masonry( grid, {
  itemSelector: '.gallery__image',
  numberOfColumns: 3,
  percentPosition: true
});
}

//accordeon
let acc = document.querySelector(".accordeon__title");

acc.addEventListener("click", ({target}) => {
  target.classList.toggle('active');
})

//up button
let upBtn = document.querySelector('.up-button');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};