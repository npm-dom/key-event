var test = require('prova');
var bind = require("./");
var randomColor = require("random-color");

test('binds keynames', function (t) {
  reset();

  var el = document.querySelector('textarea');


  bind(el, 'backspace', function self () {
    el.value = 'pressed backspace. removing this keybinding now.';
    bind.off(el, 'backspace', self);
  });

  bind(el, 'alt c', function () {
    document.body.style.backgroundColor = randomColor();
  });

  t.end();
});

function reset () {
  document.body.innerHTML =  '<textarea style="width: 200px; height: 200px;"></textarea><br>' + ['backspace', 'alt c'].join('<br>');
}
