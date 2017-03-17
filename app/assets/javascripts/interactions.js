// Set up the main interactions for the page.

$(function() {
  $(".project-description").hide();

  $(".project").click(function(e) {
    var target;

    // Get .project div, not the child.
    if ($(e.target).hasClass("project")) { target = $(e.target); }
    else { target = $(e.target).parent(); }

    var p = target.data("project-name");
    var description_element = $(".project-description." + p)

    $(".project-description").slideUp(300);
    if (target.hasClass("selected")) {
      target.removeClass('selected');
      return;
    }

    $(".project").removeClass('selected');
    description_element.slideDown(300);

    target.addClass('selected');
  });

  $('#scroll-to-projects').click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 500);
  })


});
