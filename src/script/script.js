window.onload = function() {
let grid = document.querySelector('.gallery__wrapper');
let msnry = new Masonry( grid, {
  itemSelector: '.gallery__image',
  numberOfColumns: 3,
  percentPosition: true
});
}

let acc = document.querySelector(".accordeon__title");

acc.addEventListener("click", ({target}) => {
  target.classList.toggle('active');
})

let upBtn = document.querySelector('.up-button');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}