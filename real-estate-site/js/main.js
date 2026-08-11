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
      status.textContent = "Thanks! Your message has been received — our team will get back to you within one business day.";
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

    function restartTimer() {
      clearInterval(heroTimer);
      heroTimer = setInterval(nextSlide, 5000);
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

    function renderLightbox() {
      var thumb = thumbs[lbIndex];
      var toneClass = (thumb.querySelector(".media-block").className.match(/tone-\d/) || ["tone-1"])[0];
      stageMedia.className = "media-block lightbox-media " + toneClass;
      var label = thumb.getAttribute("data-label") || "";
      stageMedia.innerHTML = thumb.querySelector(".media-block").innerHTML;
      caption.textContent = label;
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
    if (prevBtn) prevBtn.addEventListener("click", function () { lbIndex = (lbIndex - 1 + thumbs.length) % thumbs.length; renderLightbox(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { lbIndex = (lbIndex + 1) % thumbs.length; renderLightbox(); });
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
});
