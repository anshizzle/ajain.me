cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $(".aj-bitmoji").addClass("devil");
  $("body").addClass('black');
  let audio = new Audio('assets/evil_laugh');
  audio.play();
  $(audio).bind('ended', clearEggs);
});


cheet('shift , 3', function () {
  $(".aj-bitmoji").addClass("heart");
  console.log("<3 you");

  setTimeout(clearEggs, 2000)
});


$(".aj-bitmoji").click(function () {
  $(".aj-bitmoji").addClass("spit");
  let audio = new Audio('assets/spitting');
  audio.play();
  $(audio).bind('ended', clearEggs);
})

function clearEggs() {
  $(".aj-bitmoji").attr("class").split(' ').forEach(function(class_name) {
    if(class_name !== 'aj-bitmoji') {
      $('.aj-bitmoji').removeClass(class_name);
    }
  });

  $('body').removeClass('black');
}
