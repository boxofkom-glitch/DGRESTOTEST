// Nav burger
const burger = document.getElementById('navBurger');
if (burger) {
  burger.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('menu-open'));
  });
}

// Scroll reveal
(function () {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
  setTimeout(() => items.forEach(el => el.classList.add('in-view')), 2500);
})();

// Animated counters (elements with class "cnt" and data-target)
(function () {
  const counters = document.querySelectorAll('.cnt');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        if (!el.classList.contains('cnt')) return; // bail if something else took over this element (e.g. dynamic data loaded)
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => io.observe(el));
})();

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Scroll progress bar
(function () {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight || 1) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
})();

// Magnetic buttons — pull slightly toward the cursor
(function () {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const relX = e.clientX - r.left - r.width / 2;
      const relY = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${relX * 0.18}px, ${relY * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });
})();

// Tilt effect on cards with .tilt
(function () {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; });
  });
})();

// Add a shine sweep element inside every primary button
document.querySelectorAll('.btn-primary').forEach(btn => {
  if (!btn.querySelector('.shine')) {
    const s = document.createElement('span');
    s.className = 'shine';
    btn.appendChild(s);
  }
});

// Duplicate marquee content once so the loop is seamless
document.querySelectorAll('.marquee-track').forEach(track => {
  track.innerHTML += track.innerHTML;
});

// Global toast helper: toast('Message', 'ok' | 'error')
window.toast = function (text, type) {
  let stack = document.querySelector('.toast-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
  }
  const el = document.createElement('div');
  el.className = 'toast ' + (type || 'ok');
  el.textContent = text;
  stack.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 3800);
};
