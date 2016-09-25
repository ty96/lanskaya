!function () {
  var
    fur = document.getElementById('fur'),
    furHover = document.getElementById('furHover'),
    brand = document.getElementById('brand'),
    brandHover = document.getElementById('brandHover'),
    about = document.getElementById('about'),
    aboutHover = document.getElementById('aboutHover');

  furHover.onmouseover = function () {
    fur.style.display = 'block';
  };
  furHover.onmouseout = function () {
    fur.style.display = 'none';
  };

  brandHover.onmouseover = function () {
    brand.style.display = 'block';
  };
  brandHover.onmouseout = function () {
    brand.style.display = 'none';
  };

  aboutHover.onmouseover = function () {
    about.style.display = 'block';
  };
  aboutHover.onmouseout = function () {
    about.style.display = 'none';
  };
}();