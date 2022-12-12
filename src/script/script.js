window.onload = function() {
let grid = document.querySelector('.gallery__wrapper');
let msnry = new Masonry( grid, {
  itemSelector: '.gallery__image',
  numberOfColumns: 3,
  percentPosition: true
});
}

