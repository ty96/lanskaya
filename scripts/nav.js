!function () {
  var
    fur = document.getElementById('fur'),
    furHover = document.getElementById('furHover'),
    brand = document.getElementById('brand'),
    brandHover = document.getElementById('brandHover'),
    about = document.getElementById('about'),
    aboutHover = document.getElementById('aboutHover'),
    lang = document.getElementsByClassName('lang')[0],
    language = document.getElementsByClassName('language')[0];

  var width = window.outerWidth;

  if (width > 640) {
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

    lang.onmouseover = function () {
      language.style.display = 'block';
    };
    lang.onmouseout = function () {
      language.style.display = 'none';
    };

  }

  if (window.outerWidth <= 640) {
    furHover.onclick = function () {
      if (fur.style.display == 'block') {
        fur.style.display = 'none';
      } else {
        fur.style.display = 'block';
      }
    };

    lang.onclick = function () {
      if (language.style.display == 'block') {
        language.style.display = 'none';
      } else {
        language.style.display = 'block';
      }
    };

    brandHover.onclick = function () {
      if (brand.style.display == 'block') {
        brand.style.display = 'none';
      } else {
        brand.style.display = 'block';
      }
    };

    aboutHover.onclick = function () {
      if (about.style.display == 'block') {
        about.style.display = 'none';
      } else {
        about.style.display = 'block';
      }
    };
  }
}();