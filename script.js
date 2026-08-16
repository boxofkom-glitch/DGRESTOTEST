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
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        if (!el.classList.contains('cnt')) return; // bail if something else took over this element (e.g. dynamic data loaded)
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
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

// Cursor glow that follows the pointer (desktop only)
(function () {
  if (window.matchMedia('(hover: none)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let x = 0, y = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; });
  (function loop() {
    cx += (x - cx) * 0.15; cy += (y - cy) * 0.15;
    glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
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

// Glow-card spotlight — track mouse position as CSS vars
(function () {
  document.querySelectorAll('.glow-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
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

// Video block: click-to-load embed for YouTube / Vimeo / direct .mp4
// (see video-config.js). Graceful placeholder if no video is set yet.
(function () {
  const block = document.querySelector('.video-block');
  if (!block) return;
  const url = (typeof INTRO_VIDEO_URL !== 'undefined') ? INTRO_VIDEO_URL : '';
  const configured = url && url.indexOf('REMPLACEZ') !== 0;

  if (!configured) {
    block.classList.add('video-block--empty');
    block.innerHTML = `<div class="video-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="15" height="16" rx="2"/><path d="M17 8l5-3v14l-5-3"/></svg>
      <span>Vidéo de présentation bientôt disponible</span>
    </div>`;
    return;
  }

  let embedSrc = '';
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]{11})/);
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (yt) embedSrc = `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
  else if (vimeo) embedSrc = `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;

  block.innerHTML = `<button type="button" class="video-play" aria-label="Lire la vidéo">
    <span class="video-play-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
  </button>`;
  block.querySelector('.video-play').addEventListener('click', () => {
    if (embedSrc) {
      block.innerHTML = `<iframe src="${embedSrc}" title="Vidéo de présentation" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    } else {
      block.innerHTML = `<video src="${url}" controls autoplay playsinline></video>`;
    }
  });
})();

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
