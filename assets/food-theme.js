document.addEventListener('change', (event) => {
  const filter = event.target.closest('[data-food-filter]');
  if (!filter) return;

  const grid = filter.closest('[data-food-grid]');
  if (!grid) return;

  const selected = filter.value;
  grid.querySelectorAll('.food-card[data-food-category]').forEach((card) => {
    const matches = selected === 'all' || card.dataset.foodCategory === selected;
    card.style.display = matches ? '' : 'none';
  });
});
