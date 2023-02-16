const OBSERVER_OPTIONS = {
  threshold: 0,
  rootMargin: "-150px 0px",
};
const OBSERVER_HOME = {
  threshold: 0,
  rootMargin: "0px 0px",
};
const primaryNav = document.querySelector(".mobile_menu");
const navToggle = document.querySelector(".mobile_toggle");
const checker = document.querySelectorAll(".observed");
const homeCheck = document.querySelector(".home_top");
const logoCheck = document.querySelector(".header_logo");
const headerCheck = document.querySelector(".header_wrapper");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const scrollObserver = new IntersectionObserver(function (
  entries,
  scrollObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("checked");
      scrollObserver.unobserve(entry.target);
    }
  });
},
OBSERVER_OPTIONS);

const homeTopCheck = new IntersectionObserver(function (entries, homeObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      logoCheck.classList.add("checked");
      headerCheck.classList.add("checked");
    } else if (entry.isIntersecting) {
      logoCheck.classList.remove("checked");
      headerCheck.classList.remove("checked");
    }
  });
}, OBSERVER_HOME);

if (checker) {
  checker.forEach((slide) => {
    scrollObserver.observe(slide);
  });
}

if (homeCheck) {
  homeTopCheck.observe(homeCheck);
}
