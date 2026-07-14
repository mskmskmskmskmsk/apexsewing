/* apex — interactions */
(function () {
  "use strict";

  /* ---- year ---- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- sticky nav state ---- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile menu ---- */
  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav__mobile a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ---- scroll reveals ---- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal, .reveal-img").forEach((el) => io.observe(el));

  /* hero elements visible immediately */
  requestAnimationFrame(() =>
    document
      .querySelectorAll(".hero .reveal, .hero .reveal-img")
      .forEach((el) => el.classList.add("is-in"))
  );
})();
