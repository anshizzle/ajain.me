// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function outHereLooking() {
  $(document).mousemove(function(e) {
    let viewportWidth = document.body.clientWidth;

    if (e.pageX < viewportWidth/2) {
      $(".aj-bitmoji").addClass("left");
      $(".aj-bitmoji").removeClass("right");
    } else if(e.pageX == viewportWidth/2) {
      $(".aj-bitmoji").removeClass("right");
      $(".aj-bitmoji").removeClass("left");
    } else {
      $(".aj-bitmoji").removeClass("left");
      $(".aj-bitmoji").addClass("right");
    }
  })
}



$("#main").ready(function() {
  // $(".loading").hide();
  $("#main").removeClass('hide');

  // Toggle Panels
  $(".toggle-header").click(function(e) {
    $('.info > .col-md-12 > ul').hide();
    $($(this).data("toggle")).show();
  });

  outHereLooking();

})
