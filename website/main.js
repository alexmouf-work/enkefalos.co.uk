/* ==========================================================================
   Enkefalos Solutions

   Two behaviours: a scroll reveal and a rotating panel. Both are enhancement.
   The hidden states they depend on are scoped to the `js` class that index.html
   sets before first paint, so a page that never runs this file is a page
   without animation rather than an empty one.
   ========================================================================== */
(function () {
  "use strict";

  var REVEAL_ROOT_MARGIN = "0px 0px -12% 0px";
  var REVEAL_STAGGER_MS = 90;
  var REVEAL_STAGGER_MAX = 4;
  var SWIPE_MIN_PX = 40;

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (items.length === 0) return;

    function reveal(el) {
      el.classList.add("is-revealed");
    }

    /* No observer, or a browser that lacks one: show everything at once rather
       than leave content at zero opacity forever. */
    if (!("IntersectionObserver" in window)) {
      items.forEach(reveal);
      return;
    }

    /* Anything already at or above the viewport is revealed without being
       observed. An observer only fires for elements currently intersecting, so
       a page opened at an anchor or restored to a saved scroll position would
       otherwise hold everything above the reader at zero opacity, and then
       animate it in on the way back up as though it were new. */
    var pending = [];
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal(el);
      } else {
        pending.push(el);
      }
    });
    if (pending.length === 0) return;

    var remaining = pending.length;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;

          /* Stagger within a group, so a row of three settles in sequence. */
          var siblings = Array.prototype.slice.call(el.parentNode.children).filter(function (n) {
            return n.hasAttribute && n.hasAttribute("data-reveal");
          });
          var indexInGroup = Math.min(siblings.indexOf(el), REVEAL_STAGGER_MAX - 1);
          if (indexInGroup > 0) {
            el.style.transitionDelay = indexInGroup * REVEAL_STAGGER_MS + "ms";
          }

          reveal(el);
          observer.unobserve(el);
          remaining -= 1;
          if (remaining <= 0) observer.disconnect();
        });
      },
      { rootMargin: REVEAL_ROOT_MARGIN },
    );

    pending.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     The rotating panel
     ------------------------------------------------------------------------ */
  function initCarousel() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;

    var stage = root.querySelector("[data-carousel-stage]");
    var panels = Array.prototype.slice.call(root.querySelectorAll("[data-panel]"));
    var prevButton = root.querySelector("[data-carousel-prev]");
    var nextButton = root.querySelector("[data-carousel-next]");
    var readout = root.querySelector("[data-carousel-index]");

    /* A selector matching nothing it was written against is a broken
       assumption, not an operating error: stop rather than half-run. */
    if (!stage || !prevButton || !nextButton || !readout || panels.length === 0) {
      throw new Error("carousel: a control, the stage or the panels are missing from the markup");
    }

    var panelCount = panels.length;
    var activeIndex = 0;

    function show(nextIndex, direction) {
      if (nextIndex < 0 || nextIndex >= panelCount) return;
      activeIndex = nextIndex;

      panels.forEach(function (panel, i) {
        if (i === activeIndex) {
          panel.setAttribute("data-enter", direction);
          /* Apply the start offset before transitioning away from it. */
          void panel.offsetWidth;
          panel.setAttribute("data-active", "true");
          panel.removeAttribute("inert");
        } else {
          panel.removeAttribute("data-active");
          /* inert, not opacity alone: a transparent panel stays in the tab
             order and is still read aloud, so the visible state and the
             announced state would disagree. */
          panel.setAttribute("inert", "");
        }
      });

      readout.textContent = String(activeIndex + 1);
      prevButton.disabled = activeIndex === 0;
      nextButton.disabled = activeIndex === panelCount - 1;
    }

    prevButton.addEventListener("click", function () {
      show(activeIndex - 1, "prev");
    });
    nextButton.addEventListener("click", function () {
      show(activeIndex + 1, "next");
    });

    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        show(activeIndex - 1, "prev");
      } else if (event.key === "ArrowRight") {
        show(activeIndex + 1, "next");
      }
    });

    /* Swipe, bounded by a threshold so a vertical scroll is never read as one. */
    var pointerStartX = null;
    stage.addEventListener("pointerdown", function (event) {
      pointerStartX = event.clientX;
    });
    stage.addEventListener("pointerup", function (event) {
      if (pointerStartX === null) return;
      var travelled = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(travelled) < SWIPE_MIN_PX) return;
      show(activeIndex + (travelled < 0 ? 1 : -1), travelled < 0 ? "next" : "prev");
    });
    stage.addEventListener("pointercancel", function () {
      pointerStartX = null;
    });

    show(0, "next");
  }

  initReveal();
  initCarousel();
})();
