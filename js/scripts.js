$("#telephone_icon").hide(100, function () {
  setTimeout(function () {
    $("#telephone_icon").show(500);
  }, 1000);
});

setTimeout(function () {
  $("#telephone_icon").addClass("magictime twisterInUp");
}, 1000);

$("#messenger_icon").hide(100, function () {
  setTimeout(function () {
    $("#messenger_icon").show(500);
  }, 1500);
});

setTimeout(function () {
  $("#messenger_icon").addClass("magictime twisterInUp");
}, 1500);

$("#rate_icon").hide(100, function () {
  setTimeout(function () {
    $("#rate_icon").show(500);
  }, 2000);
});

setTimeout(function () {
  $("#rate_icon").addClass("magictime twisterInUp");
}, 2000);

$("#messenger_green_icon").hide(100, function () {
  setTimeout(function () {
    $("#messenger_green_icon").show(500);
  }, 2500);
});

setTimeout(function () {
  $("#messenger_green_icon").addClass("magictime twisterInDown");
}, 2500);

$("#heart_icon").hide(100, function () {
  setTimeout(function () {
    $("#heart_icon").show(500);
  }, 3000);
});

setTimeout(function () {
  $("#heart_icon").addClass("magictime twisterInDown");
}, 3000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 120,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    navText: ["", " "],
    dotsSpeed: 500,
    center: true,

    responsive: {
      0: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  });
});
