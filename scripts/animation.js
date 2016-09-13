function animation(curPage) {
  switch (curPage) {
    case 3: section03();
      break;
    default:
      break;
  }
}

function section03() {
  var list = document.getElementById('wrapper').children[0].children;
  var room = document.getElementsByClassName('room');
  list[0].style.transform = 'rotate(-10deg) skew(40deg)';
  list[1].style.transform = 'rotate(40deg) skew(40deg)';
  list[2].style.transform = 'rotate(90deg) skew(40deg)';
  list[3].style.transform = 'rotate(140deg) skew(40deg)';
  setTimeout(function () {
    for (var i = 0; i < room.length; i++) {
      room[i].style.marginLeft = 0;
      room[i].style.marginRight = 0;
      room[i].style.visibility = 'visible';
    }
  }, 1000)
}
