!function () {
  var HEIGHT = window.innerHeight;

  var curPage = 1;
  var sonArray = document.getElementsByClassName("section");

  function turnTo(num) {
    curPage = num;
    window.curPage = num;
    animation(num);
    for (var i = 0; i < 5; i++) {
      sonArray[i].style.transform = 'translatey(' + (- HEIGHT) * (num - 1) + 'px)';
    }
    window.removeEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = "";

    setTimeout(function () {
      window.addEventListener('DOMMouseScroll', wheel, false);
      window.onmousewheel = document.onmousewheel = wheel;
    }, 1200)
  }

  function handle(delta) {
    if (delta < 0) {
      if (curPage < 5) {
        turnTo(curPage + 1);
      }
    }
    else {
      if (curPage > 1) {
        turnTo(curPage - 1)
      }
    }
  }

  function wheel(event){
    var delta = 0;

    if (!event) {
      event = window.event;
    }

    if (event.wheelDelta) {
      delta = event.wheelDelta/120;
      if (window.opera) delta = - delta;
    }
    else if (event.detail) {
      delta = - event.detail/3;
    }

    if (delta)
      handle(delta);
  }

  window.curPage = 1;
  window.turnTo = turnTo;
  window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;

  window.onresize = function () {
    for (var i = 0; i < 5; i++) {
      sonArray[i].style.transform = 'translatey(' + (- HEIGHT) * (curPage - 1) + 'px)';
    }
  }
}();