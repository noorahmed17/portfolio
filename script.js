document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  const headLines = document.querySelectorAll(".head-line");
  const bodyContents = document.querySelectorAll(".body-content");
  console.log(headLines);

  let currentIndex = 0;

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

  showSlide(currentIndex);

  headLines.forEach((headLine) => {
    headLine.addEventListener("click", (e) => {
      let clikedEl = e.currentTarget;
      let dataTarget = clikedEl.dataset.target;

      // clikedEl.classList.toggle("active");
      bodyContents.forEach((bodyContent) => {
        if (bodyContent.className.includes(dataTarget)) {
          bodyContent.classList.add("active");
        } else {
          bodyContent.classList.remove("active");
        }
      });
      // console.log(currHeadLineClass);
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
  handleMediaChange(mediaQuery);
  mediaQuery.addEventListener("change", handleMediaChange);
});
