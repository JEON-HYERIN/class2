var frame1 = $('#slider1');
var frame2 = $('#slider2');
var prev = $('.prev');
var next = $('.next');
var speed = 500;
var enableClick = true;

init(frame1);
init(frame2);

prev.on('click', function(e){
  e.preventDefault();
  if(enableClick){
    enableClick=false;
    prevSlide(frame1);
    prevSlide(frame2);
  }  
})

next.on('click', function(e){
  e.preventDefault();
  if(enableClick){
    enableClick = false;
    nextSlide(frame1);
    nextSlide(frame2);
  }  
})

function init(frame){
  var ul = frame.find('ul');
  var len = ul.children('li').length;
  ul.css({width: 100*len+'%', left:'-100%'});
  ul.children('li').css({width: 100/len+'%'});
  ul.children('li').last().prependTo(ul);
}

function prevSlide(frame){
  var ul = frame.find('ul');
  ul.stop().animate({left: '0%'},speed,function(){
    ul.children('li').last().prependTo(ul);
    ul.css({left: '-100%'});
    enableClick = true;
  });
}

function nextSlide(frame){ 
  var ul = frame.find('ul');
  ul.stop().animate({left: '-200%'},speed,function(){
    ul.children('li').first().appendTo(ul);
    ul.css({left: '-100%'});
    enableClick = true;
  })
}



