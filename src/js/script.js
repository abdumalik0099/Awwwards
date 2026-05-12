const exploreModal  = document.getElementById('exploreModal');
const exploreOverlay = document.getElementById('exploreOverlay');
const exploreLink   = document.querySelector('.header__menu-link--dropdown');
const searchInput   = document.querySelector('.header__search-input');
const modalSearch   = document.querySelector('.explore-modal__searchbar input');
const burger = document.querySelector('.header__burger')


function openModal() {
  exploreModal.classList.add('active');
  exploreOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  exploreModal.classList.remove('active');
  exploreOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', () => {
  exploreModal.classList.toggle('active');
  exploreOverlay.classList.toggle('active');
  document.body.classList.toggle('active');
});

// Explore bosganda
exploreLink?.addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
  setTimeout(() => modalSearch?.focus(), 300);
});

// Header search bosganda
searchInput?.addEventListener('focus', () => {
  openModal();
  setTimeout(() => modalSearch?.focus(), 300);
});

// Overlay bosganda yopiladi
exploreOverlay?.addEventListener('click', closeModal);

// ESC bosganda yopiladi
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});











const authModal    = document.getElementById('authModal');
const authOverlay  = document.getElementById('authOverlay');
const authClose    = document.getElementById('authClose');
const loginBtn     = document.querySelector('.header__link--login');
const signupBtn    = document.querySelector('.header__link--signup');
const loginForm    = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const footerText   = document.getElementById('authFooterText');
const switchToReg  = document.getElementById('switchToRegister');
const modal = document.querySelector('.header__profile-mobile');



function openAuth(mode = 'login') {
  authModal.classList.add('active');
  authOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setMode(mode);
}

function closeAuth() {
  authModal.classList.remove('active');
  authOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function setMode(mode) {
  if (mode === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    footerText.innerHTML = `Not a member yet? <a href="#" id="switchToRegister"><strong>Register now</strong></a>`;
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    footerText.innerHTML = `Are you a member? <a href="#" id="switchToRegister"><strong>Log in now</strong></a>`;
  }

  // Re-bind switch link
  document.getElementById('switchToRegister')?.addEventListener('click', (e) => {
    e.preventDefault();
    setMode(mode === 'login' ? 'register' : 'login');
  });
}
modal?.addEventListener('click', () => {
  authModal.classList.toggle('active');
  authOverlay.classList.toggle('active');
  document.body.classList.toggle('active');
});
loginBtn?.addEventListener('click',  (e) => { e.preventDefault(); openAuth('login'); });
signupBtn?.addEventListener('click', (e) => { e.preventDefault(); openAuth('register'); });
authClose?.addEventListener('click', closeAuth);
authOverlay?.addEventListener('click', closeAuth);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAuth(); });