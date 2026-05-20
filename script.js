const pages = {
  1: "assets/pages/page-01.jpg",
  2: "assets/pages/page-02.jpg",
  3: "assets/pages/page-03.jpg",
  4: "assets/pages/page-04.jpg",
  5: "assets/pages/page-05.jpg",
  6: "assets/pages/page-06.jpg",
  7: "assets/pages/page-07.jpg",
  8: "assets/pages/page-08.jpg",
  9: "assets/pages/page-09.jpg",
  10: "assets/pages/page-10.jpg",
  11: "assets/pages/page-11.jpg",
  12: "assets/pages/page-12.jpg",
  13: "assets/pages/page-13.jpg"
};

let current = 1;
const total = Object.keys(pages).length;

function buildDots() {
  const dots = document.getElementById('pageDots');
  for (let i = 1; i <= total; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 1 ? ' active' : '');
    dot.title = 'Muka ' + i;
    dot.onclick = () => goToPage(i);
    dot.id = 'dot-' + i;
    dots.appendChild(dot);
  }
}

function goToPage(n) {
  current = n;
  const card = document.getElementById('pageCard');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';
  document.getElementById('pageImg').src = pages[current];
  document.getElementById('pageCounter').textContent = 'Muka ' + current + ' / ' + total;
  document.getElementById('prevBtn').disabled = current === 1;
  document.getElementById('nextBtn').disabled = current === total;
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i + 1 === current);
  });
}

function changePage(dir) {
  const next = current + dir;
  if (next >= 1 && next <= total) goToPage(next);
}

function toggleFS() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') changePage(-1);
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changePage(1); }
});

// Touch swipe support
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) changePage(diff > 0 ? 1 : -1);
});

buildDots();
goToPage(1);
