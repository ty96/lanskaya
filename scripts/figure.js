!function () {
  var
    images = document.getElementById('images'),
    leftArr = document.getElementById('leftArr'),
    rightArr = document.getElementById('rightArr'),
    orders = document.getElementById('orders');

  var curPage = 1;
  var amount = images.children.length;
  var unit = '14.285714';

  var firstPic = images.children[0].cloneNode(true);
  images.appendChild(firstPic);

  function turnTo(num) {
    var range = unit * (1 - num);
    images.style.transform = 'translate(' + range + '%, 0)';

    for (var i = 0; i < amount; i++) {
      orders.children[i].style.background = 'white';
    }

    orders.children[num - 1].style.background = '#149143';
    curPage = num;
  }

  orders.children[0].style.background = '#149143';

  leftArr.onclick = function () {
    if (curPage === 1) {
      turnTo(amount);
    } else {
      turnTo(curPage - 1);
    }
  };

  rightArr.onclick = function () {
    if (curPage === amount) {
      turnTo(1);
    } else {
      turnTo(curPage + 1);
    }
  };

  for(var i = 0; i < amount; i++) {
    orders.children[i].onclick = function () {
      turnTo(this.innerText * 1);
    }
  }

  setInterval(function () {
    if (curPage === amount) {
      turnTo(1);
    } else {
      turnTo(curPage + 1);
    }
  }, 5000)
}();