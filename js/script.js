$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".header").addClass("header_scroll");
  } else {
    $(".header").removeClass("header_scroll");
  }
});
$(function () {
  $(":input").inputmask();

  $("#phone").inputmask({ mask: "(999) 999-9999" });
  $("#parentPhone").inputmask({ mask: "(999) 999-9999" });
});
AOS.init();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


/* $("document").ready(function () {
  var checkTcNum = function (value) {
    value = value.toString();
    var isEleven = /^[0-9]{11}$/.test(value);
    var totalX = 0;
    for (var i = 0; i < 10; i++) {
      totalX += Number(value.substr(i, 1));
    }
    var isRuleX = totalX % 10 == value.substr(10, 1);
    var totalY1 = 0;
    var totalY2 = 0;
    for (var i = 0; i < 10; i += 2) {
      totalY1 += Number(value.substr(i, 1));
    }
    for (var i = 1; i < 10; i += 2) {
      totalY2 += Number(value.substr(i, 1));
    }
    var isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0);
    return isEleven && isRuleX && isRuleY;
  };

  $("#tc").on("keyup focus blur load", function (event) {
    event.preventDefault();
    var isValid = checkTcNum($(this).val());
    console.log("isValid ", isValid);
    if (isValid) {
      $("h4")
        .text("TC Kimlik numaranız doğru")
        .attr("class", " text-success d-block mb-0");
    } else {
      $("h4")
        .text("Lütfen doğru bir TC kimlik numarası giriniz")
        .attr("class", " text-danger d-block mb-0");
    }
  });
}); */

var swiper = new Swiper(".mySwiperSection", {});

const menuToggle = document.querySelector(".menu-toggle");
const wrapper = document.querySelector(".wrapper");
const navigation = document.querySelector(".menu-area");
const collapse = document.querySelector(".collapse");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  collapse.classList.toggle("active");
  navigation.classList.toggle("active");
  wrapper.classList.toggle("menu--is-revealed");
  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

$("ul.nav.nav-tabs  a").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});

(function ($) {
  // Test for making sure event are maintained
  $(".js-alert-test").click(function () {
    alert("Button Clicked: Event was maintained");
  });
  fakewaffle.responsiveTabs(["xs", "sm"]);
})(jQuery);


