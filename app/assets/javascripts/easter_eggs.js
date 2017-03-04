var runningEasterEgg = false;
var trollState = false;

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  if (runningEasterEgg) { return; }

  runningEasterEgg = true;
  trollState = true;

  setTimeout(clearEggs, 5000);
});


cheet('shift , 3', function () {
  if (runningEasterEgg) { return; }
  runningEasterEgg = true;

  // Hide all the normal bitmoji
  hideBitmoji('norm');
  $(".aj-bitmoji img.heart").removeClass("hidden");
  console.log("<3 you");

  setTimeout(clearEggs, 2000)
});

function spitAtEm() {
  $(".aj-bitmoji").click(function () {
    if (runningEasterEgg) { return; }
    runningEasterEgg = true;

    hideBitmoji('norm');
    $(".aj-bitmoji img.spit").removeClass("hidden");
    var audio = new Audio('assets/spitting');
    audio.play();

    $(audio).bind('ended', clearEggs);
  })
}

function peekAndWink() {
  $(document).click(function (e) {
    if (runningEasterEgg) { return; }

    var viewportWidth = document.body.clientWidth;
    if (e.pageX >= viewportWidth * 2/3) {
      runningEasterEgg = true;
      var divs = [$("<div>", { 'class': 'peeking' }), $("<div>", { 'class': 'winking'} ) ];
      divs[1].bind("webkitAnimationEnd", function() {
        $('.peeking').remove();
        $('.winking').remove();
        runningEasterEgg = false;
      })
      $("body").append(divs);
    }
  });
}

$(function() {
  spitAtEm();
  peekAndWink();
})

let norm_bitmoji = ['forward', 'left', 'right']
let ee_bitmoji   = ['spit', 'heart'];

/**
  @param norm_or_ee [String] 'norm' or 'easter_egg'
*/
function hideBitmoji(norm_or_ee) {
  let arr = norm_or_ee == 'norm' ? norm_bitmoji : ee_bitmoji

  arr.forEach(function(class_name) {
    $('.aj-bitmoji img.' + class_name).addClass('hidden');
  });
}

/**
  @param norm_or_ee [String] 'norm' or 'easter_egg'
*/
function showBitmoji(norm_or_ee) {
  let arr = norm_or_ee == 'norm' ? norm_bitmoji : ee_bitmoji

  arr.forEach(function(class_name) {
    $('.aj-bitmoji img.' + class_name).removeClass('hidden');
  });
}


function clearEggs() {
  showBitmoji('norm');
  hideBitmoji('easter_egg');

  $('body').removeClass('black');

  trollState = false;
  runningEasterEgg = false;
}
