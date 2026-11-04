// Keep the showcase lightweight and pleasant to navigate.
document.documentElement.classList.add('js-ready');

// Highlight a section when it enters the viewport without changing the page content.
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.dataset.visible = 'true';
    }
  }, { rootMargin: '0px 0px -18% 0px', threshold: 0.08 });
  sections.forEach((section) => observer.observe(section));
}

