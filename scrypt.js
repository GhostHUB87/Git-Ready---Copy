
function myFunction() {
  alert("This is not fully responsive for all devices yet, thanks :)");
}

var map;
      function initMap() {
        var uluru = {lat: 44.314089, lng: 23.838718};
        map = new google.maps.Map(document.getElementById('GoogleMaps'), {
          center: uluru,
          zoom: 15,
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      }
// Google Maps end

// Scroll to top begin
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 450) {
    $('#myBtn').fadeIn();
  } else {
    $('#myBtn').fadeOut();
  }
});


$('#myBtn').on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 800);
  return false;
});
// Scroll to top end


// owl-carousel start
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: 500,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
//owl-carousel end

// Ttyped.js start
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 30,
  typeSpeed: 50,
  loop: true,
  bindInputFocusEvents: false
});
// Typed.js end

// ScrollReveal start
ScrollReveal().reveal('.sd-scroll', { delay: 2000 })
ScrollReveal().reveal('.poza', { delay: 1000, duration: 1500 })
ScrollReveal().reveal('.content', { delay: 1000, duration: 700 })
ScrollReveal().reveal('#page3', { delay: 1000, duration: 1500 })
ScrollReveal().reveal('.page4', { delay: 600, duration: 1500 })
// ScrollReveal end

// mixitup start
$('.button').click(function(){
  var value = $(this).attr("data-filter");
  if (value == 'all'){
    $('.filter').show('1000');
  } else { 
    $('.filter').not('.'+value).hide('1000');
    $('.filter').filter('.' + value).show('1000');
  }
})
// mixitup end

// smooth scroll start
$('a[href^="#"]').on('click', function (event) {

  var target = $(this.getAttribute('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }

});
// smooth scroll end

//navbar behavior change start
$(window).on("scroll", function () {
  if ($(window).width() > 721) {
    if ($(this).scrollTop() > 450) {
      $('.fixed-top').addClass('nav-scroll')
      $('.btn-3').css('color', 'white')
    } else if ($(this).scrollTop() < 450){
      $('.fixed-top').removeClass('nav-scroll')
      $('.btn-3').css('color', 'black')
    }
  }  
});
//navbar behavior change end




// const eu = {
//   nume : 'Delcea',
//   prenume : 'Sergiu',
//   varsta : 30
// }


// let user = JSON.stringify(eu)
// console.log(user)
// localStorage.setItem('eu', user)

// let user = localStorage.getItem('eu')
// let userJSON = JSON.parse(user)
// console.log(userJSON.nume + ' ' + userJSON.varsta)
