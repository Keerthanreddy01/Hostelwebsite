/* main.js
   Handles: accordion toggles, carousel, room card enhancements, booking form validation, smooth scroll
   TODO: Add backend integration for form submission
*/
(function() {
  const qs = (sel, ctx=document) => ctx.querySelector(sel);
  const qsa = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    initExpandables();
    initFAQ();
    initCarousel();
    initScrollToBooking();
    initForm();
    initToggleView();
  });

  function setYear(){
    const y = new Date().getFullYear();
    const el = qs('#year');
    if(el) el.textContent = y;
  }

  // Expand buttons in room cards
  function initExpandables(){
    qsa('[data-expand-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const controls = btn.getAttribute('aria-controls');
        const target = qs('#'+controls);
        if(!target) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if(expanded){
          target.hidden = true;
        } else {
          target.hidden = false;
        }
      });
    });
  }

  // FAQ accordion
  function initFAQ(){
    qsa('#faqAccordion [data-faq-item] > button').forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const panel = btn.nextElementSibling;
        if(panel){ panel.hidden = expanded; }
      });
    });
  }

  // Reviews carousel
  function initCarousel(){
    const track = qs('[data-carousel-track]');
    if(!track) return;
    const slides = qsa('li', track);
    const dotsWrap = qs('[data-carousel-dots]');
    let index = 0;
    let autoTimer;

    function renderDots(){
      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'w-3 h-3 rounded-full ' + (i===index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600');
        b.setAttribute('aria-label', 'Go to slide '+(i+1));
        b.addEventListener('click', () => { index = i; update(); restartAuto(); });
        dotsWrap.appendChild(b);
      });
    }

    function update(){
      track.style.transform = `translateX(-${index * 100}%)`;
      renderDots();
    }

    function next(){ index = (index + 1) % slides.length; update(); }

    function restartAuto(){
      clearInterval(autoTimer);
      autoTimer = setInterval(next, 6000);
    }

    // Touch support
    let startX = 0; let deltaX = 0; let dragging = false;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; deltaX = 0; }, {passive:true});
    track.addEventListener('touchmove', e => { if(!dragging) return; deltaX = e.touches[0].clientX - startX; }, {passive:true});
    track.addEventListener('touchend', () => {
      if(Math.abs(deltaX) > 40){
        if(deltaX < 0) next(); else { index = (index - 1 + slides.length) % slides.length; update(); }
      }
      dragging = false; deltaX = 0; restartAuto();
    });

    // Keyboard support
    track.addEventListener('keydown', e => {
      if(e.key === 'ArrowRight'){ next(); restartAuto(); }
      if(e.key === 'ArrowLeft'){ index = (index - 1 + slides.length) % slides.length; update(); restartAuto(); }
    });
    track.setAttribute('tabindex','0');

    update(); restartAuto();
  }

  // Smooth scroll to booking form
  function initScrollToBooking(){
    qsa('[data-scroll-book]').forEach(el => {
      el.addEventListener('click', () => {
        const booking = qs('#booking');
        if(booking){ booking.scrollIntoView({behavior:'smooth'}); }
      });
    });
  }

  // Booking form validation
  function initForm(){
    const form = qs('#enquiryForm');
    if(!form) return;
    const status = qs('#formStatus');
    form.addEventListener('submit', e => {
      e.preventDefault();
      status.textContent = '';
      if(!form.checkValidity()){
        status.textContent = 'Please fill required fields correctly.';
        status.className = 'text-red-600';
        form.reportValidity();
        return;
      }
      // Collect data
      const data = Object.fromEntries(new FormData(form).entries());
      // TODO: Replace with real POST endpoint / fetch
      console.log('Form submission (placeholder):', data);
      status.textContent = 'Submitted successfully (placeholder). We will contact you soon.';
      status.className = 'text-green-600';
      form.reset();
    });
  }

  // Toggle compact view of room cards
  function initToggleView(){
    const btn = qs('#toggleViewBtn');
    const grid = qs('[data-rooms-grid]');
    if(!btn || !grid) return;
    let compact = false;
    btn.addEventListener('click', () => {
      compact = !compact;
      grid.classList.toggle('compact', compact);
      btn.textContent = compact ? 'Toggle Detailed View' : 'Toggle Compact View';
      qsa('.room-card', grid).forEach(card => {
        card.classList.toggle('text-xs', compact);
        card.querySelectorAll('p, ul, button[data-expand-btn]').forEach(el => {
          if(el.matches('[data-expand-btn]')) return; // keep expand
          el.classList.toggle('hidden', compact);
        });
      });
    });
  }
})();
