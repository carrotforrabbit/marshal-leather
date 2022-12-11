// jQuery(document).ready(function($) {
//     // init Masonry after all images have loaded
//     $('.gallery__wrapper').masonry({
//         // options
//         itemSelector: '.gallery__image',
//         columnWidth: ,
//         isFitWidth: true
//     });
// });


let grids = [...document.querySelectorAll('.gallery__wrapper')];

if(grids.length && getComputedStyle(grids[0]).gridTemplateRows !== 'masonry') {
	grids = grids.map(grid => ({
		_el: grid, 
		gap: parseFloat(getComputedStyle(grid).gridRowGap), 
		items: [...grid.childNodes].filter(c => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1).map(c => ({ _el: c })), 
		ncol: 0
	}));

	function layout() {
		grids.forEach(grid => {
			/* get the post relayout number of columns */
			let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;

			/* if the number of columns has changed */
			if(grid.ncol !== ncol) {
				/* update number of columns */
				grid.ncol = ncol;

				/* revert to initial positioning, no margin */
				grid.items.forEach(c => c._el.style.removeProperty('margin-top'));

				/* if we have more than one column */
				if(grid.ncol > 1) {
					grid.items.slice(ncol).forEach((c, i) => {
						let prev_fin = grid.items[i]._el.getBoundingClientRect().bottom /* bottom edge of item above */, 
								curr_ini = c._el.getBoundingClientRect().top /* top edge of current item */;
						
						c._el.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`
					})
				}
			}
		})
	}

	addEventListener('load', e => {
		layout(); /* initial load */
		addEventListener('resize', layout, false) /* on resize */
	}, false);
}