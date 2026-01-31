// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecido');
      } else {
        entry.target.classList.remove('aparecido');
      }
    });
  }, {
    threshold: 0.4
  });

document.querySelectorAll('.fade-in').forEach(elem => {
    observer.observe(elem);
  });

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar se mantiene fijo al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        navbar.style.zIndex = '1000';
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
        navbar.style.position = '';
        navbar.style.top = '';
        navbar.style.width = '';
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = '';
        navbar.style.zIndex = '';
        document.body.style.paddingTop = '';
    }
});

// Botón "ir arriba"
const btnArriba = document.createElement('button');
btnArriba.innerHTML = '↑';
btnArriba.className = 'btn-arriba';
btnArriba.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #0d6efd;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s;
`;

document.body.appendChild(btnArriba);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax effect en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-principal');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});


