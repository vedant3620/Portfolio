(function () {
  var preload = document.getElementById("preload");
  var loading = 0;
  var id = setInterval(frame, 40);
  function frame() {
    if (loading == 100) {
      clearInterval(id);
      preload.style.display = "none";
    } else {
      loading++;
    }
    if (loading == 90) {
      preload.style.animation = "fadeout 3s ease";
    }
  }
})();

var nav = document.getElementById("mainNav");
document.addEventListener("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 40) {
    nav.style.background = "rgb(100,100,100)";
  } else {
    nav.style.background = "none";
  }
});
