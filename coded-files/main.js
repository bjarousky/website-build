//JS will go here
$(".nav-icon").on("click", function(){
  $(".nav-items").toggleClass("nav-items-toggle");
  $(".icon-bar").toggleClass("icon-change");
});

$(".nav-icon").on("mouseenter", function(){
  $(".icon-bar").addClass("icon-bar-toggle");
});

$(".nav-icon").on("mouseleave", function(){
  $(".icon-bar").removeClass("icon-bar-toggle");
});
