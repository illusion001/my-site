var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("home-top").style.top = "0";
  } else {
    document.getElementById("home-top").style.top = "-7rem";
  }
  prevScrollpos = currentScrollPos;
}