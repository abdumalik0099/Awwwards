/**
 * swiper.js
 * — 2 ta statik banner karta
 * — Logo va har bir slide uchun rasm qo'yish mumkin
 * — Faqat mock screen ichidagi kontent swipe bo'ladi
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // ✏️  SHU YERGA RASM QO'YING
  // ═══════════════════════════════════════════
  const agencies = [
    {
      tag: 'International',
      name: 'Baunfire',
      url: 'baunfire.com',
      awards: 21,
      works: 37,

      // ── LOGO: rasm yo'li yozing, bo'sh qolsa harf ko'rinadi ──
      logoImg: '/src/assets/img/swipperLogo1.png',          // misol: 'images/baunfire-logo.png'
      logoText: 'B',        // logoImg bo'lmasa shu harf chiqadi
      logoBg: '#111',
      logoColor: '#fff',

      // ── PREVIEW FONI: karta tepasidagi katta fon rasmi ──
      previewImg: '',       // misol: 'images/baunfire-bg.jpg'
      previewBg: '#282828',

      // ── SLIDLAR: har biriga rasm yoki rang berasiz ──
      slides: [
        {
          img: '/src/assets/img/swipper1.png',          // misol: 'images/slide1.jpg'  — bo'sh bo'lsa rang chiqadi
          bg: 'linear-gradient(135deg, #0d1b3e 0%, #1a3a6b 100%)',
          color: '#a8c4f0',
          text: 'Accelerating Access to\nLife-Saving Cell Therapies',
        },
        {
          img: '/src/assets/img/swipper2.png',
          bg: 'linear-gradient(135deg, #0a2a1a 0%, #1a4a2e 100%)',
          color: '#6fcf97',
          text: 'Digital Strategy\n& Brand Identity',
        },
        {
          img: '/src/assets/img/swipper3.png',
          bg: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 100%)',
          color: '#c39bd3',
          text: 'Award-Winning\nWeb Experiences',
        },
        {
          img: '/src/assets/img/swipper4.png',
          bg: 'linear-gradient(135deg, #1a1200 0%, #3d2c00 100%)',
          color: '#f5cba7',
          text: 'Innovation Through\nDesign Excellence',
        },
        {
          img: '/src/assets/img/swipper5.png',
          bg: 'linear-gradient(135deg, #0f0f0f 0%, #1e1e1e 100%)',
          color: '#e0e0e0',
          text: 'Human-Centered\nProduct Design',
        },
      ],
    },

    {
      tag: 'International',
      name: 'Isadora Digital Agency',
      url: 'isadoradigitalagency.com',
      awards: 16,
      works: 36,

      logoImg: '/src/assets/img/swipperLogo2.png',          // misol: 'images/isadora-logo.png'
      logoText: 'IS',
      logoBg: '#fff',
      logoColor: '#111',

      previewImg: '',       // misol: 'images/isadora-bg.jpg'
      previewBg: '#282828',

      slides: [
        {
          img: '/src/assets/img/swipper2.png',          // misol: 'images/feast.jpg'
          bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1200 100%)',
          color: '#f97316',
          text: 'FEAST AWAY!\nHappiness Starts Here',
        },
        {
          img: '/src/assets/img/swipper3.png',
          bg: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 100%)',
          color: '#818cf8',
          text: 'Multicultural Agency\nGlobal Reach',
        },
        {
          img: '/src/assets/img/swipper4.png',
          bg: 'linear-gradient(135deg, #001a0a 0%, #003d1a 100%)',
          color: '#4ade80',
          text: 'Creative Campaigns\nThat Convert',
        },
        {
          img: '/src/assets/img/swipper5.png',
          bg: 'linear-gradient(135deg, #1a001a 0%, #3d003d 100%)',
          color: '#e879f9',
          text: 'Bold Brands\nBrave Stories',
        },
        {
          img: '/src/assets/img/swipper1.png',
          bg: 'linear-gradient(135deg, #1a001a 0%, #3d003d 100%)',
          color: '#e879f9',
          text: 'Bold Brands\nBrave Stories',
        },
      ],
    },
  ];
  // ═══════════════════════════════════════════

  // ─────────────────────────────────────────
  // BUILD
  // ─────────────────────────────────────────
  function buildCard(agency) {

    // Logo: rasm bo'lsa <img>, bo'lmasa harf
    const logoInner = agency.logoImg
      ? `<img src="${agency.logoImg}" alt="${agency.name} logo">`
      : agency.logoText;

    // Preview fon style
    const previewStyle = agency.previewImg
      ? `background-image:url('${agency.previewImg}');background-size:cover;background-position:center;`
      : `background:${agency.previewBg};`;

    // Screen slidlar
    const screenSlides = agency.slides.map(s => {
      const lines = s.text.split('\n').join('<br>');
      if (s.img) {
        // Rasm bor: background-image sifatida ishlatamiz, ustiga matn
        return `
          <div class="screen-slide screen-slide--has-img"
               style="background-image:url('${s.img}');background-size:cover;background-position:center;color:${s.color};">
            <span class="screen-slide__text">${lines}</span>
          </div>`;
      } else {
        // Rasm yo'q: oddiy rang
        return `
          <div class="screen-slide" style="background:${s.bg};color:${s.color};">
            <span class="screen-slide__text">${lines}</span>
          </div>`;
      }
    }).join('');

    const dots = agency.slides
      .map((_, i) => `<span class="agency-card__dot${i === 0 ? ' is-active' : ''}" data-index="${i}"></span>`)
      .join('');

    return `
      <article class="agency-card">
        <div class="agency-card__preview" style="${previewStyle}">
          <div class="agency-card__logo-badge" style="background:${agency.logoBg};color:${agency.logoColor};">
            ${logoInner}
          </div>
          <div class="agency-card__mock">
            <div class="screen-wrap">
              <div class="screen-track">
                ${screenSlides}
              </div>
            </div>
          </div>
          <div class="agency-card__dots">${dots}</div>
        </div>
        <div class="agency-card__body">
          <p class="agency-card__tag">${agency.tag}</p>
          <div class="agency-card__row">
            <h2 class="agency-card__name">${agency.name}</h2>
            <div class="agency-card__works-pill">
              <span class="agency-card__works-label">Works</span>
              <span class="agency-card__works-count">${agency.works}</span>
            </div>
          </div>
          <div class="agency-card__footer">
            <span class="agency-card__url">${agency.url}</span>
            <span class="agency-card__awards">${agency.awards} awards</span>
          </div>
        </div>
      </article>
    `;
  }

  function buildSwiper() {
    const root = document.querySelector('.swiper');
    if (!root) return;
    root.innerHTML = agencies.map(buildCard).join('');
    root.querySelectorAll('.agency-card').forEach((card, i) => {
      initScreenSwiper(card, agencies[i].slides.length);
    });
  }

  // ─────────────────────────────────────────
  // SCREEN SWIPER
  // ─────────────────────────────────────────
  function initScreenSwiper(card, total) {
    const track = card.querySelector('.screen-track');
    const dots  = card.querySelectorAll('.agency-card__dot');
    const wrap  = card.querySelector('.screen-wrap');
    let current = 0;
    let autoplay;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); resetAuto(); });
    });

    function startAuto() { autoplay = setInterval(() => goTo(current + 1), 5000); }
    function resetAuto()  { clearInterval(autoplay); startAuto(); }
    startAuto();

    card.addEventListener('mouseenter', () => clearInterval(autoplay));
    card.addEventListener('mouseleave', () => startAuto());

    let startX = 0;
    wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });

    let dragging = false, dragX = 0;
    wrap.addEventListener('mousedown', e => { dragging = true; dragX = e.clientX; e.preventDefault(); });
    wrap.addEventListener('mouseup', e => {
      if (!dragging) return; dragging = false;
      const diff = dragX - e.clientX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });
    wrap.addEventListener('mouseleave', () => { dragging = false; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwiper);
  } else {
    buildSwiper();
  }

})();