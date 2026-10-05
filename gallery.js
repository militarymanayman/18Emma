const photoGrid = document.querySelector('#photo-grid');

if (photoGrid && window.fotoGalleryPool) {
  window.fotoGalleryPool.forEach((photo, index) => {
    const figure = document.createElement('figure');
    const isVideo = (photo.src || '').toLowerCase().endsWith('.mp4');
    const media = document.createElement(isVideo ? 'video' : 'img');
    const caption = document.createElement('figcaption');

    figure.className = `photo-tile photo-tile-${(index % 6) + 1}${isVideo ? ' photo-tile-video' : ''}`;

    if (isVideo) {
      media.src = photo.src;
      media.type = 'video/mp4';
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.controls = true;
      media.setAttribute('playsinline', 'true');
      media.setAttribute('muted', 'true');
      media.setAttribute('loop', 'true');
      media.setAttribute('autoplay', 'true');
    } else {
      media.src = photo.src;
      media.alt = photo.alt;
      media.loading = index < 4 ? 'eager' : 'lazy';
    }

    media.alt = photo.alt;

    if (photo.caption) {
      caption.textContent = photo.caption;
      figure.append(media, caption);
    } else {
      figure.append(media);
    }

    photoGrid.append(figure);
  });
}
