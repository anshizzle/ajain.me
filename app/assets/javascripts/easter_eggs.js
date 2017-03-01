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
  $(".aj-bitmoji").addClass("heart");
  console.log("<3 you");

  setTimeout(clearEggs, 2000)
});

function spitAtEm() {
  $(".aj-bitmoji").click(function () {
    if (runningEasterEgg) { return; }
    runningEasterEgg = true;

    $(".aj-bitmoji").addClass("spit");
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


function clearEggs() {
  $(".aj-bitmoji").attr("class").split(' ').forEach(function(class_name) {
    if(class_name !== 'aj-bitmoji') {
      $('.aj-bitmoji').removeClass(class_name);
    }
  });

  $('body').removeClass('black');

  trollState = false;
  runningEasterEgg = false;
}
