'use strict';

(function() {
  var root = this
  var previous_module = root.favicorn

  function favicorn (options) {
    let icon, context;
    icon = document.createElement('canvas'), icon.width = icon.height = 64, context = icon.getContext('2d');

    context.beginPath();
    context.rect(4,4,60,60);
    context.fillStyle = (options && options.color) ? options.color : '#'+Math.floor(Math.random()*16777215).toString(16);
    context.fill();

    // UNCOMMENT TO VIEW LARGER VERSION OF ICON IN DOM. Can be used to render logo/favicon dynamically from path.
    // document.body.appendChild(icon);

    render(icon);
  };

  function render (icon) {
    var link = document.getElementsByTagName('link')[0] || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = icon.toDataURL("image/x-icon");
  }

  favicorn.noConflict = function() {
    root.favicorn = previous_module
    return favicorn
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = favicorn
    }
    exports.favicorn = favicorn
  } else {
    root.favicorn = favicorn
  }
}).call(this)
