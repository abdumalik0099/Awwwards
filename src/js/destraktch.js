const cards = [
  {
    id: 1,
    image: "/src/assets/img/id1.png",
    title: "XOX",
    avatar: "/src/assets/img/ava1.jpg",
    author: "makemepulse",
    pro: true,
    category: "Website"
  },
  {
    id: 2,
    image: "/src/assets/img/id2.jpg",
    title: "Simonholm.studio",
    avatar: "/src/assets/img/ava2.jpeg",
    author: "simonholm.studio",
    pro: false,
    category: "Website"
  },
  {
    id: 3,
    image: "/src/assets/img/id3.png",
    title: "Studio Namma",
    avatar: "/src/assets/img/ava3.png",
    author: "Studio Namma",
    pro: true,
    category: "Website"
  },
  {
    id: 4,
    image: "/src/assets/img/id4.png",
    title: "Marvell Tile & Stone",
    avatar: "/src/assets/img/ava4.png",
    author: "Humaan",
    pro: true,
    category: "Website"
  },
  {
    id: 5,
    image: "/src/assets/img/id5.jpg",
    title: "T11",
    avatar: "/src/assets/img/ava5.jpg",
    author: "NaughtyDuk",
    pro: true,
    category: "Website"
  },
  {
    id: 6,
    image: "/src/assets/img/id6.png",
    title: "ASTRODITHER",
    avatar: "/src/assets/img/ava6.png",
    author: "Robert Borghesi",
    pro: false,
    category: "Website"
  }
];

function renderCards() {
  const container = document.querySelector(".destraktch");
  if (!container) return;

  container.innerHTML = cards.map(card => `
    <div class="dk-card" data-id="${card.id}">
      <div class="dk-thumb">
        <img src="${card.image}" alt="${card.title}" />
        <div class="dk-overlay"></div>
        <button class="dk-vote">
          <i class="ri-arrow-right-line"></i> Vote Now
        </button>
        <div class="dk-bottom">
          <div class="dk-bottom-left">
            <span class="dk-category">${card.category}</span>
            <h3>${card.title}</h3>
          </div>
          <div class="dk-bottom-actions">
            <a href="#" title="Open"><i class="ri-arrow-right-up-line"></i></a>
            <a href="#" title="Save"><i class="ri-bookmark-line"></i></a>
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

renderCards();




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
      img: '/src/assets/img/fourDestraktch1.jpg',
      imgBg: 'linear-gradient(135deg, #0d0d0d 0%, #1a0000 100%)',
      imgLabel: 'Shopify vs Woo',
      category: '',
      title: "Shopify vs WooCommerce: What's the better?",
      desc: "What's the best website builder for an e-commerce? In the world of eCommerce, choosing the right platform can mean the difference between success...",
      url: '#',
    },
    {
      img: '/src/assets/img/fourDestraktch2.jpg',
      imgBg: 'linear-gradient(135deg, #fff5e0 0%, #ffe0b2 100%)',
      imgLabel: 'Free Fonts',
      category: '',
      title: '100 Best Free Fonts for Designers in 2025',
      desc: 'Typography is currently playing a central role in web design, with progressive improvements like Variable Fonts, CSS Shapes, FlexBox...',
      url: '#',
    },
    {
      img: '/src/assets/img/fourDestraktch3.jpg',
      imgBg: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      imgLabel: 'Gradients',
      category: '',
      title: 'Trendy Gradients in Web Design',
      desc: 'This year we have seen many multicolored gradients with vibrant color palettes and irregular shapes with blur and distortion effects. Gradients...',
      url: '#',
    },
    {
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


