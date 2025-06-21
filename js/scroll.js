function setupScrollBoxes() {
  document.querySelectorAll('.scrollingWindow').forEach(el => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    el.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add('active'); // OPTIONAL: for style/feedback
    });

    el.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    el.addEventListener('mouseup', () => {
      isDragging = false;
    });

    el.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    });
  });
}
