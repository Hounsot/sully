// $(document).ready(function(){
//   var colors = ['dodgerblue', 'GreenYellow', 'orangered', 'seagreen'];
//   var randomColor = colors[Math.floor(Math.random() * colors.length)];
//   var lefts = ['500', '0', '1000', '1300'];
//   var randomLeft = lefts[Math.floor(Math.random() * lefts.length)];
//   var ViewportWidth = $(document).width();
//   var viewportHeight = $(document).height();
//   console.log(randomLeft);
//   console.log(ViewportWidth);
//   console.log($(".big_blue").position);
//   $(".big_blue").css('left', `${randomLeft}px`);
//   var startPosition = $(".big_blue").offset();
//   var flyingPos = startPosition.left + ViewportWidth;
//   console.log(flyingPos);
//   $(".big_blue").css('background-color', `${randomColor}`);
//   $(".big_blue").animate({
//     left: `${flyingPos}px`,
//     bottom: `${viewportHeight}px`
//   }, 9000, "linear")
// })

$(document).ready(function(){
  var posterArray = [`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`, `<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`, `<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`,`<div class="poster"><a href="posterLand/firstPoster.html"><img src="./images/lol.gif" alt=""></a></div>`];
  var lefts = ['-800', '0', '800'];
  var ViewportWidth = $(document).width();
  var viewportHeight = $(document).height();
  var posterAppending = setInterval(function(){
    var i = 0;
    var i = i + 1;
    console.log(i);
    var randomPoster = posterArray[Math.floor(Math.random() * posterArray.length)];
    var randomLeft = lefts[Math.floor(Math.random() * lefts.length)];
    $(".dive").append(`${randomPoster}`);
    $(".poster").css('left', `${randomLeft}px`);
    var startPosition = $(".poster").offset();
    var flyingPos = startPosition.left + ViewportWidth;
    var highPoint = startPosition.top + viewportHeight;
    $(".poster").animate({
      left: `${flyingPos}px`,
      bottom: `${viewportHeight}px`
    }, 9000, "linear", function() {
      $(this).remove();
    });
  }, 3000)
})

// $(document).ready(function(){
//   var posterArray = [`<div class="poster"><img src="./images/lol.gif" alt=""></div>`, `<div class="poster"><img src="./images/lol.gif" alt=""></div>`, `<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`,`<div class="poster"><img src="./images/lol.gif" alt=""></div>`];
//   var lefts = ['-800', '800', '0'];
//   var ViewportWidth = $(document).width();
//   var viewportHeight = $(document).height();
//   var posterAppending = setInterval(function(){
//     for (var i = 0; i < lefts.length; i++) {
//     var randomPoster = posterArray[Math.floor(Math.random() * posterArray.length)];
//     var randomLeft = lefts[i];
//     $(".dive").append(`${randomPoster}`);
//     $(".poster").css('left', `${randomLeft}px`);
//     var startPosition = $(".poster").offset();
//     var flyingPos = startPosition.left + ViewportWidth;
//     var highPoint = startPosition.top + viewportHeight;
//     $(".poster").animate({
//       left: `${flyingPos}px`,
//       bottom: `${viewportHeight}px`
//     }, 9000, "linear");
//   }
//   }, 3000)
// })
