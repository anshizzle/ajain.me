var runningEasterEgg = false;
var trollState = false;
var easterEggs = ["nothing-but-love", "max-troll", "peek-a-boo", ";)", "spit-at-em"]

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  if (runningEasterEgg) { return; }
  runningEasterEgg = true;
  updateEasterEggCounter('max-troll');

  trollState = true;

  setTimeout(clearEggs, 5000);
});

cheet('shift , 3', function () {
  if (runningEasterEgg) { return; }
  runningEasterEgg = true;
  updateEasterEggCounter('nothing-but-love');

  // Hide all the normal bitmoji
  hideBitmoji('norm');
  $('.aj-bitmoji img.heart').removeClass('hidden');
  console.log('<3 you');

  setTimeout(clearEggs, 2000)
});

function spitAtEm() {
  $(".aj-bitmoji").click(function () {
    if (runningEasterEgg) { return; }
    runningEasterEgg = true;
    updateEasterEggCounter('spit-at-em');

    hideBitmoji('norm');
    $('.aj-bitmoji img.spit').removeClass('hidden');
    var audio = new Audio('assets/spitting');
    audio.play();

    $(audio).bind('ended', clearEggs);
  })
}

function peekAndWink() {
  $(document).click(function (e) {
    if (runningEasterEgg) { return true; }
    if (e.target.tagName === 'A') { return true; }

    var viewportWidth = document.body.clientWidth;
    if (e.pageX >= viewportWidth * 2/3) {
      runningEasterEgg = true;
      updateEasterEggCounter(';)');

      var divs = [$("<div>", { 'class': 'peeking' }), $("<div>", { 'class': 'winking'} ) ];
      divs[1].bind("webkitAnimationEnd", function() {
        $('.peeking').remove();
        $('.winking').remove();
        clearEggs();
      })
      $("body").append(divs);
    }
  });
}

$(function() {
  spitAtEm();
  peekAndWink();

  $('.popping-up').bind('webkitTransitionEnd', function () {
    updateEasterEggCounter('peek-a-boo');
  });
})

var norm_bitmoji = ['forward', 'left', 'right']
var ee_bitmoji   = ['spit', 'heart'];

/**
  @param norm_or_ee [String] 'norm' or 'easter_egg'
*/
function hideBitmoji(norm_or_ee) {
  var arr = norm_or_ee == 'norm' ? norm_bitmoji : ee_bitmoji

  arr.forEach(function(class_name) {
    $('.aj-bitmoji img.' + class_name).addClass('hidden');
  });
}

/**
  @param norm_or_ee [String] 'norm' or 'easter_egg'
*/
function showBitmoji(norm_or_ee) {
  var arr = norm_or_ee == 'norm' ? norm_bitmoji : ee_bitmoji

  arr.forEach(function(class_name) {
    $('.aj-bitmoji img.' + class_name).removeClass('hidden');
  });
}

/**
  @param easter_egg_name [String] Easter Egg Name
*/
function updateEasterEggCounter(easter_egg_name) {
  var i;
  if ((i = easterEggs.indexOf(easter_egg_name)) > -1) {
    easterEggs.splice(i, 1);
    $('.easter-egg-number').text(easterEggs.length);
  }
}

function clearEggs() {
  showBitmoji('norm');
  hideBitmoji('easter_egg');

  trollState = false;
  runningEasterEgg = false;
}
