/*- language -*/
document.addEventListener('DOMContentLoaded', function() {
  const topPanel = document.querySelector('.language__top-panel');
  const dropdown = document.querySelector('.language__dropdown');

  topPanel.addEventListener('click', function() {
    topPanel.classList.toggle('active');
    dropdown.classList.toggle('show');
  });
});

/*- hero-slider -*/
var swiper = new Swiper('.hero-slider', {
  centeredSlides: true,
  autoplay: false,
  /*autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },*/
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.hero-slider .swiper-button-next',
    prevEl: '.hero-slider .swiper-button-prev',
  },
  pagination: {
    el: '.hero-slider .swiper-pagination',
    clickable: true,
  },
});

/*- counter -*/
let counted = 0;

window.addEventListener('scroll', function() {
  const counter = document.querySelector('.statistics');

  if (counter) {
    const oTop = counter.getBoundingClientRect().top + window.pageYOffset - window.innerHeight;

    if (counted === 0 && window.pageYOffset > oTop) {
      const elements = document.querySelectorAll('.statistics__number span');
      elements.forEach(function(element) {
        const countTo = parseInt(element.getAttribute('data-count'), 10);
        const startNum = parseInt(element.textContent, 10);
        const duration = 2000;
        const startTime = performance.now();

        const easeOutQuad = function(t) {
          return t * (2 - t);
        };

        const animateCount = function(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = easeOutQuad(progress);
          const currentNum = Math.floor(easedProgress * (countTo - startNum) + startNum);

          element.textContent = currentNum;

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            element.textContent = countTo;
          }
        };

        requestAnimationFrame(animateCount);
      });

      counted = 1;
    }
  }
});


/*- services-slider -*/
var swiper = new Swiper('.services-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 1,
  navigation: {
    nextEl: '#services-arrows .swiper-button-next',
    prevEl: '#services-arrows .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
    1270: {
      slidesPerView: 4,
    },
  },
});

/*- partners-slider -*/
var swiper = new Swiper('.partners-slider', {
  autoHeight: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  spaceBetween: 170,
  slidesPerView: 5,
  loop: true,
  speed: 5000,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    376: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 70,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 170,
    },
  },
});

/*- works-catalog -*/
$(document).ready(function() {
  function updateCatalogDisplay() {
    var windowWidth = $(window).width();
    var initialVisibleItems = 9;
    var loadMoreItems = 3;

    if (windowWidth <= 900) {
      initialVisibleItems = 8;
      loadMoreItems = 2;
    }

    $('.works-catalog__item').hide();
    $('.works-catalog__item:lt(' + initialVisibleItems + ')').show();

    $('#load-more').off('click').on('click', function(event) {
      event.preventDefault();
      var $hidden = $('.works-catalog__item:hidden');
      $($hidden).slice(0, loadMoreItems).fadeIn(800);
      if ($hidden.length <= loadMoreItems) {
        $('#load-more').addClass('btn_hidden');
      }
    });

    if ($('.works-catalog__item:hidden').length > 0) {
      $('#load-more').removeClass('btn_hidden');
    } else {
      $('#load-more').addClass('btn_hidden');
    }
  }

  updateCatalogDisplay();

  $(window).resize(function() {
    updateCatalogDisplay();
  });
});

/*- fancybox -*/
Fancybox.bind('[data-fancybox="gallery"]', {});

/*- mobile-menu -*/
$('.menu-btn').click(function(e) {
  $('.m-overlay').addClass('show');
  $('.header__nav-col').addClass('show');
  $('body').addClass('scroll-none');
});

$('.close-btn').click(function(e) {
  $('.m-overlay').removeClass('show');
  $('.header__nav-col').removeClass('show');
  $('body').removeClass('scroll-none');
});

$('.m-overlay').click(function(e) {
  $('.m-overlay').removeClass('show');
  $('.header__nav-col').removeClass('show');
  $('body').removeClass('scroll-none');
});

/*- mobile-menu -*/
document.querySelector('.support__main-icon').addEventListener('click', function() {
  var content = document.querySelector('.support__dropdown');
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    this.classList.remove('active');
    //this.textContent = 'Открыть блок';
  } else {
    content.classList.add('show');
    this.classList.add('active');
    //this.textContent = 'Закрыть блок';
  }
});

document.addEventListener('click', function(event) {
  var button = document.querySelector('.support__main-icon');
  var content = document.querySelector('.support__dropdown');
  if (!button.contains(event.target) && !content.contains(event.target)) {
    if (content.classList.contains('show')) {
      content.classList.remove('show');
      button.classList.remove('active');
      //button.textContent = 'Открыть блок';
    }
  }
});