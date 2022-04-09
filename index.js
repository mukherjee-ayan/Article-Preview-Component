
$(".icon-share").click(function(){
  // For implementing share icon in mobile
  $(".author-info").toggleClass("hide");
  $(".share").toggleClass("hide");
  // For implementing share icon in desktop
  $(".popover").toggleClass("show");
  $(".icon-share").toggleClass("popover-active");
});

$(".main-body").click(function(){
  removeShare();
});

$(".image-drawer").click(function(){
  removeShare();
});

$(".publishing-detail").click(function(){
  removeShare();
});

function removeShare(){
  // For implementing share icon in mobile
  $(".author-info").removeClass("hide");
  $(".share").addClass("hide");
  // For implementing share icon in desktop
  $(".popover").removeClass("show");
  $(".icon-share").removeClass("popover-active");
}
