// -----------------------------------------
// Masonry

let grid = document.querySelector('.masonry-grid');

let msnry = new Masonry(grid, {
    itemSelector: '.masonry-grid-item',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
});

// -----------------------------------------
