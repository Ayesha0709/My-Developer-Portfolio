(function () {

    const loader = document.getElementById("loader");
    const percentEl = document.getElementById("loaderPercent");
    const fill = document.getElementById("loaderProgressFill");

    if (!loader) return;

    let progress = 0;
    let loaded = false;
    let finished = false;

    const minimumDuration = 3000; // 3 seconds
    const startTime = performance.now();

    function render() {
        percentEl.textContent = Math.floor(progress);
        fill.style.width = progress + "%";
    }

    function animate() {

        if (finished) return;

        const elapsed = performance.now() - startTime;

        // BEFORE PAGE LOAD
        if (!loaded) {

            if (elapsed < 800) {

                progress += 0.70;

            } else if (elapsed < 1700) {

                progress += 0.35;

            } else if (elapsed < 2600) {

                progress += 0.18;

            } else {

                progress += 0.05;

            }

            progress = Math.min(progress, 95);

        }

        // AFTER PAGE LOAD
        else {

            progress += (100 - progress) * 0.12;

            if (progress > 99.8)
                progress = 100;

        }

        render();

        if (progress >= 100) {

            finished = true;

            loader.classList.add("content-hide");

            setTimeout(function () {

                loader.classList.add("curtain-open");

            }, 120);

            setTimeout(function () {

                loader.classList.add("hidden");

            }, 1150);

            return;

        }

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

    window.addEventListener("load", function () {

        const elapsed = performance.now() - startTime;

        const remaining = Math.max(
            minimumDuration - elapsed,
            0
        );

        setTimeout(function () {

            loaded = true;

        }, remaining);

    });

})();




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
    
    const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

   function closeMobile() {

    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");

} 

    
  document.querySelectorAll('.experience-card').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.experience-card').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });



  
  /* ============================================================
   CINEMATIC PER-LETTER DECRYPT
   Premium Portfolio Animation
============================================================ */

const first = document.getElementById("decrypt-first");
const last = document.getElementById("decrypt-last");

const sound = document.getElementById("decryptSound");

if (sound) sound.volume = 0.08;

const RANDOM =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function createLetters(element,text){

    element.innerHTML="";

    [...text].forEach(letter=>{

        const span=document.createElement("span");

        span.className="decrypt-letter";

        span.dataset.final=letter;

        span.textContent=letter===" " ? " " : RANDOM[Math.floor(Math.random()*RANDOM.length)];

        element.appendChild(span);

    });

}

function animateWord(element,text,startDelay=0){

    if(!element) return;

    createLetters(element,text);

    const letters=[...element.querySelectorAll(".decrypt-letter")];

    const start=performance.now()+startDelay;

    const stagger=85;

    const revealTime=700;

    function frame(now){

        let finished=true;

        letters.forEach((letter,index)=>{

            const target=letter.dataset.final;

            if(target===" ") return;

            const elapsed=now-start-index*stagger;

            if(elapsed<0){

                finished=false;

                return;

            }

            const progress=Math.min(elapsed/revealTime,1);

            if(progress<1){

                finished=false;

                letter.textContent=
                RANDOM[
                    Math.floor(Math.random()*RANDOM.length)
                ];

                const ease=
                1-Math.pow(1-progress,3);

                letter.style.opacity=.25+.75*ease;

                letter.style.filter=
                `blur(${6*(1-ease)}px)`;

                letter.style.transform=
                `translateY(${10*(1-ease)}px)`;

                letter.style.textShadow=
                `0 0 ${20*(1-ease)}px rgba(255,185,205,.35)`;

            }

            else{

                if(letter.textContent!==target){

                    letter.textContent=target;

                    letter.classList.add("revealed");

                    if(sound){

                        sound.currentTime=0;

                        sound.play().catch(()=>{});

                    }

                }

            }

        });

        if(!finished){

            requestAnimationFrame(frame);

        }

        else{

            sweep(element);

        }

    }

    requestAnimationFrame(frame);

}

function sweep(element){

    element.classList.remove("shine");

    void element.offsetWidth;

    element.classList.add("shine");

}

/* ------------------------
   Initial
------------------------ */

window.addEventListener("load",()=>{

    animateWord(first,"Ayesha");

    animateWord(last,"Khan",350);

});

/* ------------------------
   Replay
------------------------ */

[first,last].forEach(el=>{

    if(!el) return;

    el.addEventListener("mouseenter",()=>{

        animateWord(first,"Ayesha");

        animateWord(last,"Khan",180);

    });

});


/* ==========================================
   REVEAL ANIMATION (Intersection Observer)
========================================== */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});



/*=========================================================
   ABOUT SECTION — CLEAN CONSOLIDATED SCRIPT
   Delete every "ABOUT SECTION — PART 1..6" block from
   script.js and paste this single block in their place.
=========================================================*/

(() => {

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------------------------
     Reveal-on-scroll for all About sub-sections
  ------------------------------------------------- */

  const revealTargets = document.querySelectorAll(
    ".about-wrapper, .about-intro, .about-philosophy, .philosophy-card, " +
    ".about-stats, .about-stat, .about-focus, .about-quote, " +
    ".about-timeline, .timeline-item, .about-ending"
  );

  if (prefersReduced) {
    revealTargets.forEach(el => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });

    revealTargets.forEach(el => revealObserver.observe(el));
  }

  /* -------------------------------------------------
     Stagger delays
  ------------------------------------------------- */

  document.querySelectorAll(".philosophy-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 120}ms`;
  });

  document.querySelectorAll(".about-stat").forEach((card, i) => {
    card.style.transitionDelay = `${i * 90}ms`;
  });

  document.querySelectorAll(".timeline-item").forEach((item, i) => {
    item.style.transitionDelay = `${i * 160}ms`;
  });

  /* -------------------------------------------------
     Heading letter-by-letter reveal
  ------------------------------------------------- */

  const heading = document.querySelector(".about-heading");
  if (heading && !heading.dataset.split) {
    const text = heading.textContent.trim();
    heading.innerHTML = "";
    heading.dataset.split = "true";
    [...text].forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.style.animationDelay = `${i * 45}ms`;
      heading.appendChild(span);
    });
  }

  /* -------------------------------------------------
     Animated stat counters
     Runs once on scroll into view, and replays every
     time the card is hovered. Skips non-numeric values
     like "∞".
  ------------------------------------------------- */

  const counters = document.querySelectorAll(".about-stat .count-up");

  // Parse each counter's target number + suffix once,
  // so we can replay the animation without losing the value.
  counters.forEach(counter => {
    const raw = counter.textContent.trim();
    const numMatch = raw.match(/\d+/);

    if (!numMatch) {
      counter.dataset.static = "true"; // e.g. "∞"
      return;
    }

    counter.dataset.target = numMatch[0];
    counter.dataset.suffix = raw.replace(numMatch[0], "");
  });

  function animateCount(counter) {
    if (counter.dataset.static) return;

    const target = parseInt(counter.dataset.target, 10);
    const suffix = counter.dataset.suffix;

    if (prefersReduced) {
      counter.textContent = target + suffix;
      return;
    }

    // Cancel any animation already in progress on this counter
    const runId = (counter._runId || 0) + 1;
    counter._runId = runId;

    const duration = 1400;
    let startTime = null;

    function tick(time) {
      if (counter._runId !== runId) return;
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // Scroll-triggered — plays once when it first enters view
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      animateCount(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // Hover-triggered — replays every time you hover the card
  document.querySelectorAll(".about-stat").forEach(card => {
    const counter = card.querySelector(".count-up");
    if (!counter) return;
    card.addEventListener("mouseenter", () => animateCount(counter));
  });
  /* -------------------------------------------------
     Portrait tilt — hover only, no scroll loop
     (this replaces the old floating()/parallax loops
     that were fighting each other and drifting)
  ------------------------------------------------- */

  const portrait = document.querySelector(".about-image-wrapper");
  const portraitImg = portrait ? portrait.querySelector("img") : null;

  if (portrait && portraitImg && !prefersReduced) {
    portrait.addEventListener("mousemove", (e) => {
      const rect = portrait.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 12;
      const rotateX = ((y / rect.height) - 0.5) * -12;
      portraitImg.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.03)`;
    });

    portrait.addEventListener("mouseleave", () => {
      portraitImg.style.transform = "";
    });
  }

  /* -------------------------------------------------
     Spotlight mouse-follow
  ------------------------------------------------- */

  const wrapper = document.querySelector(".about-wrapper");
  const spotlight = document.querySelector(".about-spotlight");

  if (wrapper && spotlight && !prefersReduced) {
    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      spotlight.style.left = `${e.clientX - rect.left - 160}px`;
      spotlight.style.top = `${e.clientY - rect.top - 160}px`;
    });
  }

  /* -------------------------------------------------
     Philosophy card tilt
  ------------------------------------------------- */

  if (!prefersReduced) {
    document.querySelectorAll(".philosophy-card").forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (rect.height / 2 - y) / 16;
        const rotateY = (x - rect.width / 2) / 16;
        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* -------------------------------------------------
     Timeline progress line + item reveal
  ------------------------------------------------- */

  const timeline = document.querySelector(".about-timeline");
  const progressFill = document.querySelector(".timeline-progress");

  if (timeline && progressFill) {
    function updateTimelineProgress() {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = vh - rect.top;
      const total = rect.height + vh;
      const percent = Math.max(0, Math.min(1, visible / total));
      progressFill.style.height = `${percent * 100}%`;
    }
    window.addEventListener("scroll", () => requestAnimationFrame(updateTimelineProgress), { passive: true });
    updateTimelineProgress();
  }

  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.35 });
  timelineItems.forEach(item => timelineObserver.observe(item));

  /* -------------------------------------------------
     NOTE: the "Currently Exploring" orbit diagram needs
     no JS at all — its rotation, counter-rotation, and
     pause-on-hover are all handled in CSS.
  ------------------------------------------------- */

})();

document.querySelectorAll('.explore-bubble').forEach(function(b){
  b.addEventListener('touchstart', function(){
    document.querySelectorAll('.explore-bubble.tapped').forEach(function(x){ x.classList.remove('tapped'); });
    b.classList.add('tapped');
  }, { passive:true });
  b.addEventListener('touchend', function(){
    setTimeout(function(){ b.classList.remove('tapped'); }, 400);
  });
});


