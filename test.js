var bind = require("./");
var randomColor = require("random-color");

beforeEach(function(){
  document.body.innerHTML = '<textarea></textarea>';
});

it('binds keynames', function(){
  var el = document.querySelector('textarea');

  var fn = bind(el, 'backspace', function () {
    el.value = '';

    bind.on(el, 'ctrl alt f', function (){
      el.value = '';
    });

    bind.off(el, 'backspace', fn);
  });

  bind(el, 'ctrl alt c', function () {
    el.style.backgroundColor = randomColor();
  });
});
