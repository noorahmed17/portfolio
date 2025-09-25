document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const headLines = document.querySelectorAll(".head-line");
  const boxContents = document.querySelectorAll(".inner-box-content");
  const dropDown = document.querySelectorAll(".has-drop-down");
  let currentIndex = 0;

  showSlide(currentIndex);
  handleMediaChange(mediaQuery);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.left = `${(i - index) * 100}%`;
    });
  }

  function handleMediaChange(e) {
    const el = document.querySelector(".nav-bar h3");
    if (e.matches) {
      el.innerHTML = "NA";
      el.style.color = "#03045e";
    } else {
      el.innerHTML = "Nour Ahmed";
    }
  }

  boxContents.forEach((content) => {
    if (content.classList.contains("active")) {
      requestAnimationFrame(() => content.classList.add("visible"));
    }
  });

  headLines.forEach((headLine) => {
    headLine.addEventListener("click", () => {
      let target = document.querySelector(`.${headLine.dataset.target}`);
      if (!target || target.classList.contains("active")) return;

      boxContents.forEach((c) => {
        if (c === target) return;
        if (c.classList.contains("visible") || c.classList.contains("active")) {
          c.classList.remove("visible");
          c.classList.remove("active");
        }
      });
      target.classList.add("active");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => target.classList.add("visible"));
      });
    });
  });

  dropDown.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("open");
    });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= 0 && currentIndex < slides.length)
      showSlide(currentIndex);
    else {
      currentIndex = 0;
      showSlide(currentIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    showSlide(currentIndex);
  });

  window.addEventListener("load", () => {
    dropDown.forEach((li) => {
      li.classList.remove("open");
    });
  });

  mediaQuery.addEventListener("change", handleMediaChange);
});
