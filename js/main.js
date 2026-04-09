/* ══════════════════════════════════════════
   PORTFOLIO — main.js
══════════════════════════════════════════ */

// ── Data ────────────────────────────────────────────
const DATA = {

  skills: [
    { icon: "bi-filetype-html", name: "HTML & CSS", nivel: "Avanzado", cat: "Frontend" },
    { icon: "bi-filetype-js",  name: "JavaScript", nivel: "Intermedio", cat: "Frontend" },
    { icon: "bi-filetype-php", name: "PHP",         nivel: "Intermedio", cat: "Backend" },
    { icon: "bi-filetype-py",  name: "Python",     nivel: "Intermedio", cat: "Backend" },
    { icon: "bi-bootstrap",    name: "Bootstrap",  nivel: "Intermedio",   cat: "Frontend" },
    { icon: "bi-database",     name: "MySQL",       nivel: "Intermedio", cat: "Database" },
    { icon: "bi-git",          name: "Git & GitHub", nivel: "Intermedio", cat: "DevOps" },
    { icon: "bi-code-square",  name: "Django",      nivel: "Básico",      cat: "Backend" },
  ],

  projects: [
    {
      emoji: "📁",
      title: "Portafolio Antiguo",
      desc: "Mi primer portafolio web desarrollado durante mi formación inicial.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      filter: "web",
      img: "img/pagina7.png",
      demo: "https://portafolio-regis-antiguo.netlify.app/", repo: "https://github.com/Regish20/PortafolioRegis-Primera-Version-",
    },
    {
      emoji: "☕",
      title: "El Cafetal",
      desc: "Página web de una cafetería con diseño moderno y funcional.",
      tags: ["HTML", "CSS", "JavaScript"],
      filter: "web",
      img: "img/pagina1.png",
      demo: "https://elcafetal.netlify.app/", repo: "https://github.com/Regish20/ElCafetal.git",
    },
    {
      emoji: "🍵",
      title: "Blog de Té",
      desc: "Blog informativo sobre diferentes tipos de té y sus beneficios.",
      tags: ["HTML", "CSS", "JavaScript"],
      filter: "web",
      img: "img/pagina2.png",
      demo: "https://blog-de-te.netlify.app/", repo: "https://github.com/Regish20/blogDeTe.git",
    },
    {
      emoji: "💻",
      title: "Mundo Tecnológico",
      desc: "Portal de noticias tecnológicas con diseño responsive.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      filter: "web",
      img: "img/pagina3.png",
      demo: "https://noticias-mundo-tecnologico.netlify.app/", repo: "https://github.com/Regish20/MundoTecnologico.git",
    },
    {
      emoji: "📰",
      title: "Mundo Tech (Wix)",
      portal: true,
      desc: "Mi blog de noticias tecnológicas donde escribo artículos sobre desarrollo de software y tecnología.",
      tags: ["Wix", "Content Writing"],
      filter: "web",
      img: "img/pagina8.png",
      demo: "https://regish2704.wixsite.com/mundo-tech", repo: "#",
    },
    {
      emoji: "📝",
      title: "Lista de Tareas",
      desc: "Lista de tareas básica para practicar manejo de errores y backend en Django.",
      tags: ["HTML", "CSS", "Python", "Django", "Bootstrap"],
      filter: "web",
      img: "img/pagina4.png",
      demo: "https://lista-de-tareas-os6p.onrender.com/", repo: "https://github.com/Regish20/Lista-De-Tareas-Django",
    },
    {
      emoji: "📚",
      title: "Blog Histórico",
      desc: "Blog que recopila diversos hechos históricos de diferente indole.",
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      filter: "web",
      img: "img/pagina5.png",
      demo: "https://blog-historia-production.up.railway.app/index.php", repo: "https://github.com/Regish20/Blog-Historia",
    },
    {
      emoji: "🔌",
      title: "API REST Django",
      desc: "API RESTful desarrollada con Django REST Framework. Endpoints para gestión de usuarios, autenticación JWT y operaciones CRUD.",
      tags: ["Python", "Django REST", "JWT", "MySQL"],
      filter: "api",
      img: "img/pagina6.png",
      demo: "https://proyecto-api-z0yl.onrender.com/", repo: "https://github.com/Regish20/proyecto-api",
    },
  ],

  certifications: [
  { icon: "bi-mortarboard-fill", issuer: "SENATI",  name: "Desarrollo de Software - 4to ciclo", date: "2024 - Presente", badge: "Carrera",      link: "" },
  { icon: "bi-award-fill",       issuer: "Cisco",   name: "Python Essentials 1",                date: "2024",          badge: "Certificado",  link: "https://tu-link-cisco.com" },
  { icon: "bi-award-fill",       issuer: "Udemy",   name: "Curso Python Avanzado",              date: "2025",          badge: "Certificado",  link: "https://tu-link-udemy.com" },
  { icon: "bi-award-fill",       issuer: "Udemy",   name: "Curso de Git y Github",              date: "2025",          badge: "Certificado",  link: "https://tu-link-udemy2.com" },
],

  experience: [
    {
      date: "2024 - Presente",
      title: "Tutor de Programación & Matemáticas",
      company: "Universidad (Docente Particular) — Lima, Perú",
      desc: "Colaboración académica en desarrollo backend. Desarrollé módulos para proyectos de matemáticas aplicadas y creé material educativo sobre programación, en conjunto con un profesor universitario.",
    },
    {
      date: "2025",
      title: "Productor de Contenido",
      company: "Mundo Tech — Blog",
      desc: "Escribí artículos relacionados al desarrollo de software. Comunicando de manera clara las últimas noticias y tendencias del mundo tecnológico.",
    },
  ],

};

// ── Render skills ────────────────────────────────────
const NIVEL_CLASS = { "Básico": "nivel-basico", "Intermedio": "nivel-intermedio", "Avanzado": "nivel-avanzado" };

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  DATA.skills.forEach(s => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 fade-in-up";
    col.innerHTML = `
      <div class="skill-card">
        <div class="skill-icon"><i class="bi ${s.icon}"></i></div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-cat">${s.cat}</div>
        <span class="skill-nivel ${NIVEL_CLASS[s.nivel]}">${s.nivel}</span>
      </div>`;
    grid.appendChild(col);
  });
}

// ── Render projects ──────────────────────────────────
function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = filter === "all" ? DATA.projects : DATA.projects.filter(p => p.filter === filter);

  filtered.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 fade-in-up";
    const imgHtml = p.img ? `<img src="${p.img}" alt="${p.title}" class="project-img" onerror="this.style.display='none';this.parentElement.innerHTML='<span>${p.emoji}</span>'">` : `<div class="project-img"><span>${p.emoji}</span></div>`;
    const linksHtml = p.portal 
      ? `<a href="${p.demo}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i> Ver sitio</a>`
      : `<a href="${p.demo}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-eye"></i> Demo</a>
         <a href="${p.repo}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Código</a>`;
    col.innerHTML = `
      <div class="project-card">
        <div class="project-img-wrap">${imgHtml}</div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            ${linksHtml}
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

// ── Render certifications ────────────────────────────
function renderCerts() {
  const grid = document.getElementById("certs-grid");
  if (!grid) return;

  DATA.certifications.forEach(c => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4 fade-in-up";
    col.innerHTML = `
      <div class="cert-card">
        <div class="cert-icon"><i class="bi ${c.icon}"></i></div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-date"><i class="bi bi-calendar3"></i> ${c.date}</div>
        <div class="cert-footer">
          <span class="cert-badge">${c.badge}</span>
          ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cert-link"><i class="bi bi-box-arrow-up-right"></i> Ver certificado</a>` : ''}
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

// ── Render timeline ──────────────────────────────────
function renderTimeline() {
  const tl = document.getElementById("timeline");
  if (!tl) return;

  DATA.experience.forEach(e => {
    const item = document.createElement("div");
    item.className = "timeline-item fade-in-up";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-date">${e.date}</div>
      <div class="timeline-title">${e.title}</div>
      <div class="timeline-company">${e.company}</div>
      <div class="timeline-desc">${e.desc}</div>`;
    tl.appendChild(item);
  });
}

// ── Scroll observer ──────────────────────────────────
function initObserver() {
  const elements = document.querySelectorAll(".fade-in-up");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 60);
    });
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay escalonado solo entre elementos del mismo "batch" visible
        const siblings = [...entry.target.parentElement.children];
        const colIdx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${colIdx * 0.07}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => {
    el.style.transitionDelay = "0s"; // reset cualquier delay previo
    obs.observe(el);
  });
}

// ── Navbar scroll ────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById("mainNav");
  const btt = document.getElementById("backToTop");
  const links = nav.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    btt && btt.classList.toggle("show", y > 400);

    let current = "";
    sections.forEach(s => {
      if (y >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  });

  if (btt) {
    btt.innerHTML = `
      <div class="elevator-track"></div>
      <div class="elevator-cabin"><i class="bi bi-arrow-up"></i></div>
      <div class="speed-line left"></div>
      <div class="speed-line right"></div>
    `;

    btt.addEventListener("click", () => {
      if (btt.classList.contains("riding")) return;

      btt.classList.add("riding");

      const startY = window.scrollY;
      const duration = 1200;
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startY * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        } else {
          setTimeout(() => btt.classList.remove("riding"), 150);
        }
      }

      requestAnimationFrame(scrollStep);
    });
  }
}
// ── Project filter ───────────────────────────────────
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
      requestAnimationFrame(() => setTimeout(initObserver, 50));
    });
  });
}

function initContactForm() {
  const form   = document.getElementById("contactForm");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
    status.className = "";
    status.textContent = "";

    try {
      const fd = new FormData(form);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd).toString()
      });

      if (res.ok) {
        status.className = "mt-3 text-center success";
        status.textContent = "✔ Mensaje enviado con éxito. Te contactaré pronto.";
        form.reset();
      } else {
        throw new Error(res.status);
      }
    } catch (err) {
      console.error("Error al enviar formulario:", err);
      status.className = "mt-3 text-center error";
      status.textContent = "✖ Ocurrió un error. Por favor intenta nuevamente.";
    } finally {
          btn.disabled = false;
          btn.innerHTML = 'Enviar mensaje <i class="bi bi-send-fill ms-1"></i>';
        }
      });
    }

// ── Footer year ──────────────────────────────────────
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── Theme toggle ─────────────────────────────────────
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("i");

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch {}

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.className = "bi bi-sun-fill";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      icon.className = "bi bi-moon-fill";
      try { localStorage.setItem("theme", "light"); } catch {}
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      icon.className = "bi bi-sun-fill";
      try { localStorage.setItem("theme", "dark"); } catch {}
    }
  });
}

// ── Boot ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCerts();
  renderTimeline();
  initFilters();
  initNavbar();
  initContactForm();
  initTheme();
  setYear();
  requestAnimationFrame(() => setTimeout(initObserver, 50));
});