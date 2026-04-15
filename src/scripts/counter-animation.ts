// Animated number counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target as HTMLElement;
      const target = parseInt(el.dataset.counter || "0", 10);
      if (isNaN(target)) return;

      const duration = 2000;
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-counter]").forEach((el) => {
  counterObserver.observe(el);
});
