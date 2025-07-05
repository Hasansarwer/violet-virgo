// File: src/components/Hamburger.astro
    document.querySelector('.hamburger')?.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.toggle('expanded');
    });