document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour charger un fichier HTML dans un élément spécifique
    const loadHTML = (path, elementId) => {
      fetch(path)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Erreur lors du chargement de ${path}:`, error));
    };
  
    // Charger les includes
    loadHTML('./includes/header.html', 'head');
    loadHTML('./includes/navbar.html', 'navbar');
    loadHTML('./includes/footer.html', 'footer');

  //scroll top 
  const scrollTopBtn = document.getElementById("scrollTopBtn");

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
          behavior: "smooth"
      });
  });

    // Initialiser SwiperJS
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
        depth: 100,
        modifier: 2,
      },
    });
  });
  