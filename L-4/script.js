var t1=gsap.timeline()

function time() {
  var x = 0;
  setInterval(function () {
      x += Math.floor(Math.random() * 20);
    if (x < 100) {
      document.querySelector(".loader h1").innerHTML = x + "%";
    } else {
      x = 100;
      document.querySelector(".loader h1").innerHTML = x + "%";
    }
  }, 150);
}

t1.to(".loader h1", {
//   scale: 1.5,
  delay: 0.5,
  duration: 1,
  onStart:time()
});

t1.to(".loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1.5,
});
