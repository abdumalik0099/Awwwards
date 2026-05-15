const STORAGE_KEY = 'selectedCard';

const cards = [
  {
    id: 1,
    image: "/src/assets/img/id1.png",
    title: "XOX",
    avatar: "/src/assets/img/ava1.jpg",
    author: "makemepulse",
    pro: true,
    category: "Website",
    description: "A refined landing experience for a creative studio.",
    detail: "XOX features bold typography, minimal navigation, and a strong visual hierarchy to showcase the product's best case studies. The layout is designed for clarity and conversion."
  },
  {
    id: 2,
    image: "/src/assets/img/id2.jpg",
    title: "Simonholm.studio",
    avatar: "/src/assets/img/ava2.jpeg",
    author: "simonholm.studio",
    pro: false,
    category: "Website",
    description: "Interactive portfolio concept with strong craft direction.",
    detail: "This concept highlights creative studio work with large imagery, custom grid sections, and a premium editorial feel. It is designed to make every project feel memorable."
  },
  {
    id: 3,
    image: "/src/assets/img/id3.png",
    title: "Studio Namma",
    avatar: "/src/assets/img/ava3.png",
    author: "Studio Namma",
    pro: true,
    category: "Website",
    description: "A modern agency page that balances art direction and utility.",
    detail: "Studio Namma's layout uses striking visuals and clear content blocks to communicate brand thinking and service offerings. It is built for storytelling and trust."
  },
  {
    id: 4,
    image: "/src/assets/img/id4.png",
    title: "Marvell Tile & Stone",
    avatar: "/src/assets/img/ava4.png",
    author: "Humaan",
    pro: true,
    category: "Website",
    description: "A premium design concept for a luxury materials brand.",
    detail: "Marvell Tile & Stone blends photography and refined typography to create an elegant product showcase. The detail page emphasizes textures, collections, and craftsmanship."
  },
  {
    id: 5,
    image: "/src/assets/img/id5.jpg",
    title: "T11",
    avatar: "/src/assets/img/ava5.jpg",
    author: "NaughtyDuk",
    pro: true,
    category: "Website",
    description: "A bold product landing page for a creative technology brand.",
    detail: "T11 presents an immersive digital experience with strong visual contrast and engaging content sections. It is designed to capture attention and drive exploration."
  },
  {
    id: 6,
    image: "/src/assets/img/id6.png",
    title: "ASTRODITHER",
    avatar: "/src/assets/img/ava6.png",
    author: "Robert Borghesi",
    pro: false,
    category: "Website",
    description: "A futuristic web concept with playful visual patterns.",
    detail: "ASTRODITHER brings bold color, motion-ready layout, and a strong brand voice. The design is built for storytelling with a focus on visual experimentation."
  }
];

function saveSelectedCard(card) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(card));
}

function getFirstText(root, selectors) {
  for (const selector of selectors) {
    const el = root.querySelector(selector);
    if (el && el.textContent.trim()) {
      return el.textContent.trim();
    }
  }
  return '';
}

function getImageSrc(root) {
  const img = root.querySelector('img');
  return img ? img.src : '';
}

function collectCardData(cardEl) {
  const isAgencyCard = cardEl.classList.contains('agency-card');
  const isKard = cardEl.classList.contains('kard');

  const title = getFirstText(cardEl, [
    '.dk-title',
    '.title',
    '.card__content h3',
    '.d-card__title',
    '.p-card__header .title',
    '.promo-card__top .title',
    ...(isAgencyCard ? ['.agency-card__name'] : []),
    ...(isKard ? ['.text h2'] : [])
  ]) || 'Card Detail';

  const author = getFirstText(cardEl, [
    '.dk-author',
    '.value.name',
    '.author a',
    '.p-card__meta .author a',
    '.p-card__meta .author span',
    ...(isAgencyCard ? ['.agency-card__url'] : []),
    ...(isKard ? ['.text span'] : [])
  ]);

  const category = getFirstText(cardEl, [
    '.dk-category',
    '.category',
    '.subtitle',
    '.p-card__header small.category',
    ...(isAgencyCard ? ['.agency-card__tag'] : []),
    ...(isKard ? ['.bottom-left small'] : [])
  ]);

  const description = getFirstText(cardEl, [
    '.card__content h3',
    '.d-card__desc',
    '.promo-card__top .subtitle',
    '.p-card__header .title',
    ...(isAgencyCard ? ['.agency-card__name'] : []),
    ...(isKard ? ['.text h2'] : [])
  ]);

  const detail = getFirstText(cardEl, [
    '.card__meta .label + .name',
    '.p-card__meta .price',
    '.promo-card__top .title',
    '.promo-card__bottom span',
    ...(isAgencyCard ? ['.agency-card__awards'] : []),
    ...(isKard ? ['.text span'] : [])
  ]);

  let image = getImageSrc(cardEl);
  if (isAgencyCard) {
    image = cardEl.dataset.currentImg || image;
  }

  const avatar = cardEl.querySelector(isKard ? '.text img' : 'img') ? cardEl.querySelector(isKard ? '.text img' : 'img').src : '';
  const pro = !!cardEl.querySelector('.dk-badge') || (isKard && cardEl.querySelector('.text h6') && cardEl.querySelector('.text h6').textContent.toLowerCase().includes('pro'));

  return {
    id: cardEl.dataset.id || title,
    image,
    title,
    avatar,
    author,
    category,
    description,
    detail,
    pro
  };
}

function bindProjectCardClicks() {
  const selectors = ['.dk-card', '.card', '.kard', '.d-card', '.p-card', '.promo-card', '.agency-card'];
  const selectorString = selectors.join(',');

  document.addEventListener('click', event => {
    if (event.target.closest('a, button')) return;
    const cardEl = event.target.closest(selectorString);
    if (!cardEl) return;

    const selected = collectCardData(cardEl);
    saveSelectedCard(selected);
    window.location.href = './src/html/single.html';
  });

  document.querySelectorAll(selectorString).forEach(cardEl => {
    cardEl.style.cursor = 'pointer';
  });
}

function renderCards() {
  const container = document.querySelector(".destraktch");
  if (!container) return;

  container.innerHTML = cards.map(card => `
    <div class="dk-card" data-id="${card.id}">
      <div class="dk-thumb">
        <img src="${card.image}" alt="${card.title}" />
        <div class="dk-overlay"></div>
        <button class="dk-vote" type="button">
          <i class="ri-arrow-right-line"></i> Vote Now
        </button>
        <div class="dk-bottom">
          <div class="dk-bottom-left">
            <span class="dk-category">${card.category}</span>
            <h3>${card.title}</h3>
          </div>
          <div class="dk-bottom-actions">
            <a href="javascript:void(0)" title="Open"><i class="ri-arrow-right-up-line"></i></a>
            <a href="javascript:void(0)" title="Save"><i class="ri-bookmark-line"></i></a>
          </div>
        </div>
      </div>
      <div class="dk-meta">
        <span class="dk-title">${card.title}</span>
        <span class="dk-by">by</span>
        <img class="dk-avatar" src="${card.avatar}" alt="${card.author}" />
        <span class="dk-author">${card.author}</span>
        ${card.pro ? '<span class="dk-badge">PRO</span>' : ''}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  bindProjectCardClicks();
});





/**
 * destraktch.js
 * — Blog kartalar, JS data baza
 * — .destraktch1 div ichiga avtomatik quriladi
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // ✏️  MA'LUMOTLAR — shu yerga o'zgartiring
  // ═══════════════════════════════════════════
  const posts = [
    {
      id: 7,
      img: '/src/assets/img/fourDestraktch1.jpg',
      imgBg: 'linear-gradient(135deg, #0d0d0d 0%, #1a0000 100%)',
      imgLabel: 'Shopify vs Woo',
      category: '',
      title: "Shopify vs WooCommerce: What's the better?",
      desc: "What's the best website builder for an e-commerce? In the world of eCommerce, choosing the right platform can mean the difference between success...",
      url: '#',
    },
    {
      id: 8,
      img: '/src/assets/img/fourDestraktch2.jpg',
      imgBg: 'linear-gradient(135deg, #fff5e0 0%, #ffe0b2 100%)',
      imgLabel: 'Free Fonts',
      category: '',
      title: '100 Best Free Fonts for Designers in 2025',
      desc: 'Typography is currently playing a central role in web design, with progressive improvements like Variable Fonts, CSS Shapes, FlexBox...',
      url: '#',
    },
    {
      id: 9,
      img: '/src/assets/img/fourDestraktch3.jpg',
      imgBg: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      imgLabel: 'Gradients',
      category: '',
      title: 'Trendy Gradients in Web Design',
      desc: 'This year we have seen many multicolored gradients with vibrant color palettes and irregular shapes with blur and distortion effects. Gradients...',
      url: '#',
    },
    {
      id: 10,
      img: '/src/assets/img/fourDestraktch4.jpg',
      imgBg: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)',
      imgLabel: 'UI Trends',
      category: '',
      title: 'Top UI/UX Design Trends to Watch in 2025',
      desc: 'From glassmorphism to bento grid layouts, designers are pushing the boundaries of what web interfaces can look and feel like this year...',
      url: '#',
    },
    
  ];
  // ═══════════════════════════════════════════

  function buildCard(post) {
    const imgContent = post.img
      ? `<img src="${post.img}" alt="${post.title}" loading="lazy">`
      : `<div class="d-card__img-placeholder" style="background:${post.imgBg};">${post.imgLabel}</div>`;

    const wrapStyle = post.img ? '' : `style="background:${post.imgBg};"`;

    return `
      <article class="d-card" onclick="window.location.href='${post.url}'">
        <div class="d-card__img-wrap" ${wrapStyle}>
          ${imgContent}
        </div>
        <p class="d-card__cat">${post.category}</p>
        <h2 class="d-card__title">${post.title}</h2>
        <p class="d-card__desc">${post.desc}</p>
      </article>
    `;
  }

  function buildDestraktch() {
    const root = document.querySelector('.destraktch1');
    if (!root) return;
    root.innerHTML = posts.map(buildCard).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildDestraktch);
  } else {
    buildDestraktch();
  }

})();




document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Sahifa skroll bo'lishini kuzatish
  window.addEventListener('scroll', () => {
    // Agar sahifa 300px dan pastga tushsa strelkani ko'rsatish, aks holda yashirish
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Strelka bosilganda sahifani eng tepaga silliq (smooth) qaytarish
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Silliq ko'tarilish harakati
    });
  });
});


