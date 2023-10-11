$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

//スライダー
$(function() {
  $('.slick').slick({
      fade: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed : 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
  })
});

// テキストアニメーション
document.addEventListener("DOMContentLoaded", function (event) {
let elements = document.getElementsByClassName("js-text-anime");
for (var i = 0; i < elements.length; i++) {
  animateText(elements[i]);
}
});

function animateText(element) {
let text = element.innerText;
element.innerText = "";

for (var i = 0; i < text.length; i++) {
  var span = document.createElement("span");
  span.innerText = text[i];
  element.appendChild(span);
}

let spans = element.getElementsByTagName("span");
for (var j = 0; j < spans.length; j++) {
  (function (index) {
    setTimeout(function () {
      spans[index].style.opacity = 1;
    }, index * 200);
  })(j);
}
}