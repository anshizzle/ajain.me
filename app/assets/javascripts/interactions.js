// Set up the main interactions for the page.

$(function() {
  $(".project-description").hide();

  $(".project").click(function(e) {
    let target;
    if ($(e.target).hasClass("project")) { target = $(e.target); }
    else { target = $(e.target).parent(); }

    let p = target.data("project-name");
    let description_element = $(".project-description." + p)

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
