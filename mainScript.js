$(document).ready(function(){
  $(document).mousemove(function(e) {
    var images = ['url("images/MainImages/MainImg0.png")', 'url("images/MainImages/MainImg1.png")','url("images/MainImages/MainImg2.png")', 'url("images/MainImages/MainImg3.png")', 'url("images/MainImages/MainImg4.png")', 'url("images/MainImages/MainImg5.jpg")', 'url("images/MainImages/MainImg6.png")', 'url("images/MainImages/MainImg7.png")', 'url("images/MainImages/MainImg8.png")', 'url("images/MainImages/MainImg9.png")', 'url("images/MainImages/MainImg10.jpg")',];
    $(".box").css('background-image', images[Math.floor(Math.random() * images.length)]);
  });
  let constrain = 20;
  let mouseOverContainer = document.getElementById("lines");
  let ex1Layer = document.getElementById("ex1-layer");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    return "perspective(4000px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) ";
  };
   function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }
  $(document).mousemove(function(e){
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);
    console.log(position);
    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
  });

});
