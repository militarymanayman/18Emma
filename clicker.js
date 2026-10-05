const cellStage = document.querySelector('#cell-stage');
const cellCount = document.querySelector('#cell-count');
const stageNote = document.querySelector('#stage-note');
let nextPhoto = 1;

function divideCell(cell) {
  const originalImage = cell.querySelector('img');
  const newCell = cell.cloneNode(true);
  const newImage = newCell.querySelector('img');

  newImage.src = originalImage.src;
  newImage.alt = originalImage.alt;
  newCell.classList.add('is-newborn');
  cell.classList.add('is-dividing');
  cellStage.append(newCell);

  const photo = window.foscoloPool[nextPhoto % window.foscoloPool.length];
  nextPhoto += 1;
  cellCount.textContent = String(cellStage.children.length);
  stageNote.textContent = `${cellStage.children.length} little cells, and counting.`;

  newCell.addEventListener('animationend', () => {
    newImage.src = photo.src;
    newImage.alt = photo.alt;
    newCell.classList.remove('is-newborn');
  }, { once: true });

  cell.addEventListener('animationend', () => {
    cell.classList.remove('is-dividing');
  }, { once: true });
}

cellStage.addEventListener('click', (event) => {
  const cell = event.target.closest('.cell');
  if (cell && cellStage.contains(cell)) divideCell(cell);
});
