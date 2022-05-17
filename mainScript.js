$(document).ready(function(){
$(document).mousemove(function(e) {
  var images = ['url("images/MainImages/MainImg0.png")', 'url("images/MainImages/MainImg1.png")','url("images/MainImages/MainImg2.png")', 'url("images/MainImages/MainImg3.png")', 'url("images/MainImages/MainImg4.png")', 'url("images/MainImages/MainImg5.jpg")', 'url("images/MainImages/MainImg6.png")', 'url("images/MainImages/MainImg7.png")', 'url("images/MainImages/MainImg8.png")', 'url("images/MainImages/MainImg9.png")', 'url("images/MainImages/MainImg10.jpg")',];
  $(".box").css('background-image', images[Math.floor(Math.random() * images.length)]);
})
})
