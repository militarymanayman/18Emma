const photoGrid = document.querySelector('#photo-grid');

window.photoPool.forEach((photo, index) => {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');

  figure.className = `photo-tile photo-tile-${(index % 6) + 1}`;
  image.src = photo.src;
  image.alt = photo.alt;
  image.loading = index < 4 ? 'eager' : 'lazy';
  caption.textContent = photo.caption;
  figure.append(image, caption);
  photoGrid.append(figure);
});