$(document).ready(function(){
  $(".box").hover(function(){
    var boxWidth = $(this).width();
    var boxHeight = $(this).height();
    var boxWidthHover = boxWidth + boxWidth;
    var boxHeightHover = boxHeight;
    console.log(boxWidth);
    console.log(boxHeight);
    $(this).animate({
      width: `${boxWidthHover}px`,
      height: `${boxHeightHover}px`
    }, 1000);
  }, function(){
    $(this).animate({
      width: `${boxWidth}px`,
      height: `${boxHeight}px`
    })
  });
})
// $(document).ready(function(){
//   $('.box').hover(function(){
//     $(this).css(
//       "grid-column", "1/3"
//     );
//   })
// })
