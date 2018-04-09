$(".nav-icon").on("mouseenter", function(){
  $(".icon-bar").addClass("icon-bar-toggle");
});

$(".nav-icon").on("mouseleave", function(){
  $(".icon-bar").removeClass("icon-bar-toggle");
});

$(".nav-icon").on('click', function(){
  $(".icon-bar").toggleClass("icon-change");
  var $this = $(this);
  if ($this.hasClass('open')) {
    $(".nav-items").animate({
      marginLeft : '100%'
    }, 400);
    $this.removeClass('open');
  } else {
    $(".nav-items").animate({
      marginLeft : '0'
    }, 400);
    $this.addClass('open');
  }
});
