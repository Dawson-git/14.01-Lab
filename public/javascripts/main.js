// Order dropdown menu toggle
const orderBtn = document.querySelector('.nav__order-btn');
const orderMenu = document.querySelector('.nav__order-menu');

if (orderBtn && orderMenu) {
  orderBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const isOpen = orderMenu.classList.toggle('is-open');
    orderBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!orderBtn.contains(e.target) && !orderMenu.contains(e.target)) {
      orderMenu.classList.remove('is-open');
      orderBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      orderMenu.classList.remove('is-open');
      orderBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
