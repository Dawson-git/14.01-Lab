document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.nav__order-dropdown');

  if (!dropdown) {
    return;
  }

  const button = dropdown.querySelector('.nav__order-btn');
  const menu = dropdown.querySelector('.nav__order-menu');

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  const openMenu = () => {
    button.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
  };

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      closeMenu();
    }
  });
});
