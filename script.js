 window.addEventListener('load', function () {
      setTimeout(function () {
        var l = document.getElementById('loader');
        if (l) l.classList.add('hidden');
      }, 400);
    });
    setTimeout(function () {
      var l = document.getElementById('loader');
      if (l && !l.classList.contains('hidden')) l.classList.add('hidden');
    }, 4000);


    const words = [
      "FRESHER BCA STUDENT",
      "UI ENTHUSIAST",
      "PYTHON LEARNER",
      "CREATIVE DEVELOPER"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
      const element = document.getElementById("typewriter");

      if (!element) return;

      const currentWord = words[wordIndex];

      if (!deleting) {
        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          deleting = true;
          setTimeout(typeEffect, 1500); // pause before deleting
          return;
        }
      } else {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();

    const modals = {
      p1: { title: "Personal Portfolio - V1", meta: "Web Dev - 2026", problem: "Generic templates.", solution: "Vanilla HTML/CSS/JS.", approach: "Handcrafted UI.", outcomes: ["Responsive", "Custom cursor", "Reveal effects"] },
      p2: { title: "Data Dashboard", meta: "Python - 2026", problem: "Manual reporting.", solution: "Automated pipeline.", approach: "Clean viz.", outcomes: ["~60% time saved", "Auto charts", "Reusable"] },
      p3: { title: "Mobile App UI", meta: "UI/UX - 2026", problem: "No visual direction.", solution: "Figma prototype.", approach: "User goals first.", outcomes: ["40+ screens", "Complete system", "3-step nav"] }
    };
    function openModal(id) { const m = modals[id]; if (!m) return; document.getElementById('modalContent').innerHTML = '<div class="modal-meta">' + m.meta + '</div><h2>' + m.title + '</h2><div class="case-grid"><div class="case-block"><h4>Problem</h4><p>' + m.problem + '</p></div><div class="case-block"><h4>Solution</h4><p>' + m.solution + '</p></div><div class="case-block"><h4>Approach</h4><p>' + m.approach + '</p></div></div><div class="modal-outcomes"><h4>Outcomes</h4><ul class="outcome-list">' + m.outcomes.map(function (o) { return '<li>' + o + '</li>' }).join('') + '</ul></div>'; document.getElementById('modalOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeModal(e) { if (e.target === document.getElementById('modalOverlay')) closeModalDirect(); }
    function closeModalDirect() { document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow = ''; }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModalDirect(); });
    // Theme toggle — proper attribute handling
    (function () {
      var themeBtn = document.getElementById('themeBtn') || document.getElementById('theme-toggle');
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = saved ? saved === 'dark' : prefersDark;

      if (themeBtn) {
        themeBtn.checked = isDark;
        themeBtn.addEventListener('change', function () {
          var d = themeBtn.checked;
          document.documentElement.setAttribute('data-theme', d ? 'dark' : 'light');
          localStorage.setItem('theme', d ? 'dark' : 'light');
        });
      }

      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    })();
    const dot = document.getElementById('cursor-dot'); const glowEl = document.getElementById('cursor-glow');
    var mp = { x: -100, y: -100 }, gp = { x: -100, y: -100 };
    window.addEventListener('mousemove', function (e) { mp.x = e.clientX; mp.y = e.clientY; dot.style.left = mp.x + 'px'; dot.style.top = mp.y + 'px'; });
    function animGlow() { gp.x += (mp.x - gp.x) * 0.08; gp.y += (mp.y - gp.y) * 0.08; glowEl.style.left = gp.x + 'px'; glowEl.style.top = gp.y + 'px'; requestAnimationFrame(animGlow); }
    animGlow();
    function initTilt() { document.querySelectorAll('.tilt-active').forEach(function (c) { c.onmousemove = function (e) { var r = c.getBoundingClientRect(); var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; c.style.transform = 'perspective(1000px) rotateY(' + (x * 20) + 'deg) rotateX(' + (y * -20) + 'deg) translateY(-10px)'; }; c.onmouseleave = function () { c.style.transform = 'none'; }; }); }
    const obs = new IntersectionObserver(function (ents) { ents.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('revealed'); }); }, { threshold: 0.1 });
    function updObs() { document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); }); }
    function sparkleBurst(e) { for (var i = 0; i < 8; i++) { var s = document.createElement('div'); s.style.cssText = 'position:fixed;width:6px;height:6px;background:#DA7D91;left:' + e.clientX + 'px;top:' + e.clientY + 'px;clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%)'; document.body.appendChild(s); var a = Math.random() * Math.PI * 2; s.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: 'translate(' + (Math.cos(a) * 60) + 'px,' + (Math.sin(a) * 60) + 'px) scale(0)', opacity: 0 }], { duration: 600 }).onfinish = function () { s.remove(); }; } }
    initTilt(); updObs();

    // Scroll progress bar
    window.addEventListener('scroll', function () {
      var bar = document.getElementById('scroll-progress');
      if (!bar) return;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = (window.scrollY / h) * 100;
      bar.style.width = pct + '%';
    }, { passive: true });

    // Enhanced reveal observer with parallax
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          // Add a subtle parallax offset
          var rect = e.target.getBoundingClientRect();
          var centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.03;
          e.target.style.setProperty('--parallax-y', centerOffset + 'px');
        }
      });
    }, { threshold: 0.08 });

    // Observe all reveal elements and also card-stagger
    document.querySelectorAll('.reveal, .card-stagger').forEach(function (el) {
      revObs.observe(el);
    });

    // Also keep the old observer alive for backward compat
    // (already handled above)
    // === HAMBURGER ===
    document.getElementById('hamburger')?.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.toggle('open');
    });

    function closeMobile() {
      document.getElementById('mobileMenu').classList.remove('open');
    }

    
  document.querySelectorAll('.experience-card').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.experience-card').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
