  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecido');
      } else {
        entry.target.classList.remove('aparecido');
      }
    });
  }, {
    threshold: 0.4 // Ajusta cuánto debe estar visible para activar (40%)
  });

  document.querySelectorAll('.fade-in').forEach(elem => {
    observer.observe(elem);
  });