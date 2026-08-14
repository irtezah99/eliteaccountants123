document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Gallery filter
  var filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll(".filter-btn");
    var items = document.querySelectorAll(".gallery-item");
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var category = btn.getAttribute("data-filter");
      items.forEach(function (item) {
        var match = category === "all" || item.getAttribute("data-category") === category;
        item.hidden = !match;
      });
    });
  }

  // Contact form (front-end only — no backend wired up)
  var form = document.querySelector("#contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var required = form.querySelectorAll("[required]");
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      status.classList.remove("is-success", "is-error");
      if (!valid) {
        status.textContent = "Please fill in all required fields before sending.";
        status.classList.add("is-error");
        return;
      }
      status.textContent = "Thanks for your message, we'll get back to you shortly.";
      status.classList.add("is-success");
      form.reset();
    });
  }

  // Footer year
  var year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Hero crossfade background rotation
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    var slides = heroBg.querySelectorAll(".hero-bg-slide");
    var dotsWrap = document.querySelector(".hero-dots");
    var dots = dotsWrap ? dotsWrap.querySelectorAll("button") : [];
    var current = 0;
    var heroTimer;

    function showSlide(index) {
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === index); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === index); });
      current = index;
    }

    function nextSlide() { showSlide((current + 1) % slides.length); }

    var heroReduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function restartTimer() {
      clearInterval(heroTimer);
      if (!heroReduceMotion) {
        heroTimer = setInterval(nextSlide, 5000);
      }
    }

    if (slides.length > 1) {
      restartTimer();
      dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
          showSlide(i);
          restartTimer();
        });
      });
    }
  }

  // Sold-projects carousel
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector(".carousel-track");
    var prev = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");
    if (!track) return;
    function scrollByCard(dir) {
      var card = track.querySelector(".card");
      var amount = card ? card.getBoundingClientRect().width + 24 : 320;
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
    if (prev) prev.addEventListener("click", function () { scrollByCard(-1); });
    if (next) next.addEventListener("click", function () { scrollByCard(1); });
  });

  // Photo lightbox
  var lightbox = document.querySelector("#lightbox");
  if (lightbox) {
    var thumbs = Array.prototype.slice.call(document.querySelectorAll(".photo-thumb"));
    var stageMedia = lightbox.querySelector(".lightbox-media");
    var caption = lightbox.querySelector(".lightbox-caption");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var prevBtn = lightbox.querySelector(".lightbox-prev");
    var nextBtn = lightbox.querySelector(".lightbox-next");
    var lbIndex = 0;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function paintLightbox() {
      var thumb = thumbs[lbIndex];
      var toneClass = (thumb.querySelector(".media-block").className.match(/tone-\d/) || ["tone-1"])[0];
      stageMedia.className = "media-block lightbox-media " + toneClass;
      var label = thumb.getAttribute("data-label") || "";
      stageMedia.innerHTML = thumb.querySelector(".media-block").innerHTML;
      caption.textContent = label;
    }

    function renderLightbox(animate) {
      if (!animate || reduceMotion) {
        paintLightbox();
        return;
      }
      stageMedia.style.opacity = "0";
      setTimeout(function () {
        paintLightbox();
        stageMedia.style.opacity = "1";
      }, 180);
    }

    function openLightbox(index) {
      lbIndex = index;
      renderLightbox();
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener("click", function () { openLightbox(i); });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", function () { lbIndex = (lbIndex - 1 + thumbs.length) % thumbs.length; renderLightbox(true); });
    if (nextBtn) nextBtn.addEventListener("click", function () { lbIndex = (lbIndex + 1) % thumbs.length; renderLightbox(true); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
      if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
    });
  }

  // Generic modal open/close (mortgage calculator)
  document.querySelectorAll("[data-modal-target]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var modal = document.querySelector(trigger.getAttribute("data-modal-target"));
      if (modal) {
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      }
    });
  });
  document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
    function closeModal() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
    overlay.querySelectorAll("[data-modal-close]").forEach(function (btn) {
      btn.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  });

  // Mortgage calculator
  var mortgageForm = document.querySelector("#mortgage-form");
  if (mortgageForm) {
    mortgageForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var price = parseFloat(document.querySelector("#calc-price").value) || 0;
      var downPct = parseFloat(document.querySelector("#calc-down").value) || 0;
      var ratePct = parseFloat(document.querySelector("#calc-rate").value) || 0;
      var years = parseFloat(document.querySelector("#calc-term").value) || 30;

      var loanAmount = price * (1 - downPct / 100);
      var monthlyRate = ratePct / 100 / 12;
      var numPayments = years * 12;
      var monthly;

      if (monthlyRate === 0) {
        monthly = loanAmount / numPayments;
      } else {
        monthly = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      }

      var totalPaid = monthly * numPayments;
      var totalInterest = totalPaid - loanAmount;

      var fmt = function (n) {
        return "$" + Math.round(n).toLocaleString("en-US");
      };

      document.querySelector("#calc-monthly").textContent = fmt(monthly) + " / mo";
      document.querySelector("#calc-loan-amount").textContent = fmt(loanAmount);
      document.querySelector("#calc-total-interest").textContent = fmt(totalInterest);
      document.querySelector("#calc-result").hidden = false;
    });
  }

  // Inline property-page loan-amount calculator (sliders + editable fields,
  // auto-recalculating loan amount = price - deposit)
  var pdCalc = document.querySelector(".pd-calc");
  if (pdCalc) {
    var pdPriceRange = document.querySelector("#pd-calc-price-range");
    var pdPriceInput = document.querySelector("#pd-calc-price");
    var pdDepositRange = document.querySelector("#pd-calc-deposit-range");
    var pdDepositInput = document.querySelector("#pd-calc-deposit");
    var pdRateRange = document.querySelector("#pd-calc-rate-range");
    var pdRateInput = document.querySelector("#pd-calc-rate");
    var pdLoanOut = document.querySelector("#pd-calc-loan");

    function pdCalcUpdate() {
      var price = parseFloat(pdPriceInput.value) || 0;
      var deposit = parseFloat(pdDepositInput.value) || 0;
      var loan = Math.max(price - deposit, 0);
      pdLoanOut.textContent = "$" + Math.round(loan).toLocaleString("en-US");
    }

    function pdCalcSync(range, input) {
      range.addEventListener("input", function () {
        input.value = range.value;
        pdCalcUpdate();
      });
      input.addEventListener("input", function () {
        range.value = input.value;
        pdCalcUpdate();
      });
    }

    pdCalcSync(pdPriceRange, pdPriceInput);
    pdCalcSync(pdDepositRange, pdDepositInput);
    pdCalcSync(pdRateRange, pdRateInput);
    pdCalcUpdate();
  }

  // Keep every heading on a single line: shrink font-size to fit its
  // container instead of wrapping; fall back to wrapping only if a
  // heading still won't fit at a sane minimum size.
  function fitHeadingsToContainer() {
    document.querySelectorAll("h1:not(.no-autofit), h2:not(.no-autofit), h3, h4").forEach(function (el) {
      el.style.whiteSpace = "nowrap";
      el.style.fontSize = "";
      var baseSize = parseFloat(window.getComputedStyle(el).fontSize);
      var floorSize = Math.max(12, baseSize * 0.45);
      var size = baseSize;
      var attempts = 0;
      while (el.scrollWidth > el.clientWidth + 1 && size > floorSize && attempts < 60) {
        size -= 0.5;
        el.style.fontSize = size + "px";
        attempts++;
      }
      if (el.scrollWidth > el.clientWidth + 1) {
        el.style.whiteSpace = "normal";
      }
    });
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeadingsToContainer);
  } else {
    fitHeadingsToContainer();
  }
  window.addEventListener("load", fitHeadingsToContainer);
  window.addEventListener("resize", debounce(fitHeadingsToContainer, 150));

  // Scroll-reveal: fade + slide in trust badges, project cards, value
  // cards, testimonials and FAQ items as they enter the viewport.
  // Progressive enhancement — the reveal-init class (and its hidden
  // state) is only added once we know JS + IntersectionObserver work,
  // so content stays visible if either is unavailable.
  if ("IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(
      ".trust-card, .carousel-track .card, .gallery-item, .card-refined, .quote-card, .faq-item, " +
      ".specs-grid > div, .split > div, .photo-thumb, .map-block, .amenities-list"
    );
    if (revealEls.length) {
      revealEls.forEach(function (el) { el.classList.add("reveal-init"); });
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  // Stats count-up: animate the stats-strip numbers from 0 to their
  // target value once the strip scrolls into view.
  var statsStrip = document.querySelector(".stats-strip");
  if (statsStrip && "IntersectionObserver" in window) {
    var reduceMotionStats = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var statEls = statsStrip.querySelectorAll("strong");

    function animateCount(el, delay) {
      var raw = el.textContent.trim();
      var match = raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
      if (!match) return;
      var prefix = match[1];
      var numStr = match[2];
      var suffix = match[3];
      var target = parseFloat(numStr.replace(/,/g, ""));
      if (isNaN(target)) return;
      var decimals = (numStr.split(".")[1] || "").length;
      var duration = 1100;

      setTimeout(function () {
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = target * eased;
          var display = decimals
            ? current.toFixed(decimals)
            : Math.round(current).toLocaleString("en-US");
          el.textContent = prefix + display + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = raw;
          }
        }
        requestAnimationFrame(step);
      }, delay);
    }

    if (statEls.length && !reduceMotionStats) {
      var statsObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            statsObserver.unobserve(entry.target);
            statEls.forEach(function (el, i) { animateCount(el, i * 100); });
          });
        },
        { threshold: 0.4 }
      );
      statsObserver.observe(statsStrip);
    }
  }
});
