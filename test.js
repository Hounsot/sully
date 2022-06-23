var fadeStart=1300; // 100px scroll or less will equiv to 1 opacity
var fadeUntil=1400; // 200px scroll or more will equiv to 0 opacity
var fading = $('#lol');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop();
    var opacity=0;
    console.log(offset);
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    $('#lol').css('opacity',opacity);
});


// $(document).ready(function(){
//   var checktheheight = setInterval(function(){
//     let exItem = $('.wow')[0].getBoundingClientRect();
//     console.log(exItem);
//     if (exItem.y <= -300){
//       $('.wow').addClass("transition");
//     } else if(exItem.y > -100) {
//       $('.wow').removeClass("transition");
//     }
//     if (exItem.y <= - 1500) {
//       $('.wow1').addClass("transition");
//     } else if(exItem.y > -1500) {
//       $('.wow1').removeClass("transition");
//     }
//     if (exItem.y <= -3000) {
//       $('.wow2').addClass("transition");
//     } else if (exItem.y > -3000) {
//       $('.wow2').removeClass('transition');
//     }
//   }, 1000)
// })
