/**
 * CHRIS WISE - EXECUTIVE RESUME & RESEARCH PORTFOLIO
 * High-performance, zero-dependency vanilla JS
 * Features: Muted desaturated canvas constellation, project filtering, scrollspy, mobile navigation, clipboard copy.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Muted Desaturated Canvas Constellation (Steel & Sage)
  // ==========================================================================
  const canvas = document.getElementById('quantum-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;
    let mouse = { x: -9999, y: -9999, radius: 120 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.26;
        this.vy = (Math.random() - 0.5) * 0.26;
        this.radius = Math.random() * 1.3 + 0.9;
        this.baseAlpha = Math.random() * 0.22 + 0.18;
        // Dual-tone: 65% Tech Azure Blue, 35% Bright Emerald Green
        this.isGreen = Math.random() > 0.65;
        this.color = this.isGreen ? '62, 207, 142' : '75, 162, 230';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce gently at boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle interactive mouse repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 0.8;
          this.y -= (dy / dist) * force * 0.8;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      // Density tuned for visual balance
      const count = Math.min(Math.floor((width * height) / 24000), 46);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Connect nearby nodes with delicate filaments
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 118) {
            const alpha = (1 - dist / 118) * 0.09;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p1.color}, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Delicate filament to interactive mouse cursor
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = mouse.x - p1.x;
          const mdy = mouse.y - p1.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 125) {
            const malpha = (1 - mdist / 125) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(75, 162, 230, ${malpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    function start() {
      if (!prefersReducedMotion && !animationFrameId) {
        animate();
      }
    }

    function stop() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }

    window.addEventListener('resize', () => {
      clearTimeout(window._resizeTimer);
      window._resizeTimer = setTimeout(resize, 150);
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    // Pause when tab is inactive to preserve battery & CPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    resize();
    start();
  }

  // ==========================================================================
  // 2. Sticky Navbar & Scroll State
  // ==========================================================================
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ==========================================================================
  // 3. Mobile Navigation Drawer
  // ==========================================================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key for keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ==========================================================================
  // 4. ScrollSpy / Active Link Highlighting
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link[href^="#"]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ==========================================================================
  // 5. Research & Projects Filter Tabs
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active filter button
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects
        projectCards.forEach((card) => {
          const categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // ==========================================================================
  // 6. Interactive Copy Email with Toast Feedback
  // ==========================================================================
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
      const email = 'email@chriswise.tech';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied to clipboard: ${email}`);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast(`Copied: ${text}`);
      } catch (err) {
        showToast(`Email: ${text}`);
      }
      document.body.removeChild(textarea);
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }
  }

})();
