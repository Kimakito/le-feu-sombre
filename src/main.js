document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = (path, elementId) => {
    return fetch(path)
      .then((response) => response.text())
      .then((data) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        } else {
          console.error(
            `Element with ID ${elementId} not found for loading ${path}.`
          );
        }
      })
      .catch((error) =>
        console.error(`Erreur lors du chargement de ${path}:`, error)
      );
  };

  // Only load the footer dynamically
  loadHTML("./includes/footer.html", "footer")
    .then(() => {
      console.log("Footer loaded successfully.");
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du footer :", error);
    });

  // --- All elements are now available directly after DOMContentLoaded ---

  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerMenu = document.getElementById("burgerMenu");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const navLinks = document.querySelectorAll("nav a");

  // Vérifications de sécurité
  if (!navbar || !logo || !mobileMenu || !burgerMenu || !scrollTopBtn) {
    console.error(
      "Un ou plusieurs éléments essentiels sont manquants dans le HTML. Le script pourrait ne pas fonctionner correctement."
    );
    return;
  }

  // --- Logique du bouton Scroll To Top ---
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.remove("hidden");
      scrollTopBtn.classList.add("block");
    } else {
      scrollTopBtn.classList.add("hidden");
      scrollTopBtn.classList.remove("block");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // --- Logique de la Navbar au défilement ---
  const primaryNavbarHeight = "123px";
  const scrolledNavbarHeight = "80px";
  const primaryLogoClasses = "h-16 md:h-20";
  const scrolledLogoClasses = "h-10 md:h-12";

  function handleScroll() {
    if (window.scrollY > 80) {
      navbar.style.height = scrolledNavbarHeight;
      navbar.classList.add("shadow-xl", "py-4");
      navbar.classList.remove("py-6");
      logo.classList.remove(...primaryLogoClasses.split(" "));
      logo.classList.add(...scrolledLogoClasses.split(" "));
      mobileMenu.style.top = scrolledNavbarHeight;
      document.body.style.paddingTop = scrolledNavbarHeight;
    } else {
      navbar.style.height = primaryNavbarHeight;
      navbar.classList.remove("shadow-xl", "py-4");
      navbar.classList.add("py-6");
      logo.classList.remove(...scrolledLogoClasses.split(" "));
      logo.classList.add(...primaryLogoClasses.split(" "));
      mobileMenu.style.top = primaryNavbarHeight;
      document.body.style.paddingTop = primaryNavbarHeight;
    }
  }
  handleScroll(); // Appel initial
  window.addEventListener("scroll", handleScroll);

  // --- Logique du Burger Menu ---
  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    burgerMenu.classList.toggle("is-open");
  });

  // --- Animation de fond de flamme ---
  const colors = {
    feuLight: "#f6e05e", // jaune ambré
    feuprimary: "#dd6b20", // orange profond
    feuDark: "#c53030", // rouge sombre
    roiprimary: "#1a202c", // bleu très profond
  };
  let time = 0;
  const speed = 0.02;
  const amplitude = 1;

  function interpolateColor(color1, color2, factor) {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map((c) => parseInt(c, 16));
    const target = color2
      .slice(1)
      .match(/.{2}/g)
      .map((c) => parseInt(c, 16));

    const r = Math.round(result[0] + factor * (target[0] - result[0]));
    const g = Math.round(result[1] + factor * (target[1] - result[1]));
    const b = Math.round(result[2] + factor * (target[2] - result[2]));

    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  }

  function smoothNoise(t, frequency) {
    const val =
      Math.sin(t * frequency) * Math.cos((t * frequency) / 2) * 0.5 + 0.5;
    return val * amplitude;
  }

  function animateFlameBackground() {
    time += 1;

    const offset1 = smoothNoise(time * speed, 0.5);
    const offset2 = smoothNoise(time * speed, 0.7);
    const offset3 = smoothNoise(time * speed, 0.9);

    const pos1 = 20 + offset1 * 50;
    const pos2 = 50 + offset2 * 50;

    const factor1 = smoothNoise(time * speed, 0.3);
    const factor2 = smoothNoise(time * speed, 1.1);

    const colorStart = interpolateColor(
      colors.feuDark,
      colors.feuprimary,
      factor1
    );
    const colorMiddle = interpolateColor(
      colors.feuprimary,
      colors.feuLight,
      factor2
    );
    const colorEnd = interpolateColor(
      colors.feuLight,
      colors.feuDark,
      1 - factor1
    );

    const gradient = `linear-gradient(90deg, ${colorStart} ${pos1}%, ${colorMiddle} ${pos2}%, ${colorEnd} 100%)`;

    navbar.style.backgroundImage = gradient;
    if (mobileMenu) {
      mobileMenu.style.backgroundImage = gradient;
    }
    requestAnimationFrame(animateFlameBackground);
  }
  animateFlameBackground();

  // --- Mise en évidence des liens actifs ---

  function highlightLink(targetLink) {
    navLinks.forEach((link) => link.classList.remove("text-roi-light"));
    if (targetLink) {
      targetLink.classList.add("text-roi-light");
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      highlightLink(this);
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        burgerMenu.classList.remove("is-open");
      }
    });
  });

  const currentPath = window.location.pathname;
  navLinks.forEach((link) => {
    if (currentPath === "/" && link.getAttribute("href") === "/") {
      highlightLink(link);
    } else if (currentPath !== "/" && link.href.includes(currentPath)) {
      highlightLink(link);
    }
  });

  // --- Mise en évidence des liens basée sur les sections en vue (IntersectionObserver) ---
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const correspondingLink = document.querySelector(
          `nav a[href="#${entry.target.id}"]`
        );
        highlightLink(correspondingLink);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
  
console.log("Swiper init");

  // --- Initialisation de SwiperJS ---
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30, // Space between slides
    loop: true, // Continuous loop
    centeredSlides: true, // Centers the active slide when multiple are visible

    // Pagination (dots at the bottom)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // Customize pagination bullet styles using Tailwind classes via CSS
      // You'll need custom CSS for swiper-pagination-bullet styles
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Autoplay
    autoplay: {
      delay: 4000, // 4 seconds
      disableOnInteraction: false, // Continue autoplay even after user interaction
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider
    },

    // Visual effect: Coverflow
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50, // Increased rotation for more dramatic 3D effect
      stretch: 0,
      depth: 100,
      modifier: 1, // Modifier to the rotation and depth
      slideShadows: true, // Add subtle shadows for depth perception
    },

    // Responsive breakpoints
    breakpoints: {
      // When window width is >= 768px (md breakpoint in Tailwind)
      768: {
        slidesPerView: 2,
        spaceBetween: 40, // More space on larger screens
        coverflowEffect: {
          rotate: 40,
          depth: 120,
        },
      },
      // When window width is >= 1024px (lg breakpoint in Tailwind)
      1024: {
        slidesPerView: 3,
        spaceBetween: 50, // Even more space
        coverflowEffect: {
          rotate: 30, // Slightly less rotation for 3 slides
          depth: 150,
        },
      },
    },

    // A11y (Accessibility) settings
    a11y: {
      enabled: true,
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
    },

    // Keyboard control for accessibility
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Mousewheel control
    mousewheel: {
      enabled: true,
    },
  });
});
