/* ══════════════════════════════════════════
   PORTFOLIO — main.js
══════════════════════════════════════════ */

// ── Data ────────────────────────────────────────────
const DATA = {

  skills: [
    { icon: "bi-filetype-php", name: "PHP",         nivel: "Avanzado",   cat: "Backend"  },
    { icon: "bi-filetype-js",  name: "JavaScript",  nivel: "Avanzado",   cat: "Frontend" },
    { icon: "bi-filetype-html",name: "HTML & CSS",   nivel: "Avanzado",   cat: "Frontend" },
    { icon: "bi-bootstrap",    name: "Bootstrap",   nivel: "Avanzado",   cat: "Frontend" },
    { icon: "bi-database",     name: "MySQL",        nivel: "Avanzado",   cat: "Database" },
    { icon: "bi-git",          name: "Git & GitHub", nivel: "Intermedio", cat: "DevOps"   },
    { icon: "bi-server",       name: "REST APIs",   nivel: "Intermedio", cat: "Backend"  },
    { icon: "bi-file-earmark-code", name: "React",  nivel: "Intermedio", cat: "Frontend" },
  ],

  projects: [
    {
      emoji: "🛒",
      title: "E-Commerce Platform",
      desc: "Tienda online completa con carrito de compras, pasarela de pagos y panel de administración desarrollada en PHP + MySQL.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      filter: "web",
      demo: "#", repo: "#",
    },
    {
      emoji: "📊",
      title: "Dashboard Analytics",
      desc: "Panel de control de métricas en tiempo real con gráficos dinámicos, filtros avanzados y exportación a PDF/Excel.",
      tags: ["JavaScript", "Chart.js", "PHP"],
      filter: "web",
      demo: "#", repo: "#",
    },
    {
      emoji: "🔐",
      title: "Auth REST API",
      desc: "API RESTful con autenticación JWT, control de roles, rate limiting y documentación Swagger completa.",
      tags: ["PHP", "JWT", "MySQL"],
      filter: "api",
      demo: "#", repo: "#",
    },
    {
      emoji: "📱",
      title: "Task Manager App",
      desc: "Aplicación de gestión de tareas con tablero kanban, notificaciones push y sincronización en tiempo real.",
      tags: ["JavaScript", "PHP", "WebSockets"],
      filter: "app",
      demo: "#", repo: "#",
    },
    {
      emoji: "🌐",
      title: "Blog CMS",
      desc: "Sistema de gestión de contenidos personalizado con editor WYSIWYG, SEO automático y multi-idioma.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      filter: "web",
      demo: "#", repo: "#",
    },
    {
      emoji: "⚙️",
      title: "Microservices API",
      desc: "Arquitectura de microservicios con orquestación por Docker, métricas con Prometheus y CI/CD en GitHub Actions.",
      tags: ["PHP", "Docker", "REST"],
      filter: "api",
      demo: "#", repo: "#",
    },
  ],

  certifications: [
    { icon: "bi-award-fill",    issuer: "Meta",       name: "Front-End Developer Professional Certificate", date: "2024", badge: "Profesional" },
    { icon: "bi-cloud-fill",    issuer: "AWS",         name: "AWS Certified Developer – Associate",           date: "2024", badge: "Associate" },
    { icon: "bi-mortarboard-fill", issuer: "Coursera", name: "Full Stack Web Development Specialization",    date: "2023", badge: "Especialización" },
    { icon: "bi-database-fill", issuer: "Oracle",      name: "Oracle Database SQL Certified Associate",       date: "2023", badge: "Associate" },
    { icon: "bi-shield-check",  issuer: "CompTIA",     name: "CompTIA Security+ Certification",               date: "2022", badge: "Seguridad" },
    { icon: "bi-code-slash",    issuer: "freeCodeCamp",name: "JavaScript Algorithms & Data Structures",       date: "2022", badge: "Certificado" },
  ],

  experience: [
    {
      date: "2022 – Presente",
      title: "Desarrollador Full Stack Senior",
      company: "Tech Solutions S.A.C. — Lima, Perú",
      desc: "Liderazgo técnico de un equipo de 4 desarrolladores. Arquitectura de sistemas SaaS en PHP y React con +10.000 usuarios activos.",
    },
    {
      date: "2020 – 2022",
      title: "Desarrollador Web Mid-Level",
      company: "Digital Agency XYZ — Lima, Perú",
      desc: "Desarrollo de más de 15 proyectos para clientes del sector retail y financiero. Implementación de APIs de pago e integración con ERPs.",
    },
    {
      date: "2018 – 2020",
      title: "Desarrollador Junior",
      company: "StartupHub Peru — Lima, Perú",
      desc: "Desarrollo frontend con Bootstrap y jQuery, mantenimiento de bases de datos MySQL, automatización de reportes en PHP.",
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
    col.className = "col-md-6 col-lg-4 fade-in-up visible";
    col.innerHTML = `
      <div class="project-card">
        <div class="project-img"><span>${p.emoji}</span></div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            <a href="${p.demo}" class="project-link"><i class="bi bi-eye"></i> Demo</a>
            <a href="${p.repo}" class="project-link"><i class="bi bi-github"></i> Código</a>
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
        <span class="cert-badge">${c.badge}</span>
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

  // IntersectionObserver no disponible
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("visible");
    } else {
      obs.observe(el);
    }
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

  btt && btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
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

// ── Contact form ─────────────────────────────────────
function initContactForm() {
  const form   = document.getElementById("contactForm");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

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
        throw new Error();
      }
    } catch {
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

// ── Boot ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCerts();
  renderTimeline();
  initFilters();
  initNavbar();
  initContactForm();
  setYear();
  requestAnimationFrame(() => setTimeout(initObserver, 50));
});