var $main = $('main');
var $btnOpen = $main.children('.btnOpen');
var $aside = $('aside');
var $top = $aside.children('.top');
var $right = $aside.children('.right');
var $bottom = $aside.children('.bottom');
var $left = $aside.children('.left');
var $con = $aside.children('.con')
var $btnClose = $aside.find('.btnClose');
var speed = 500;

var on_stat = {
  top: {width: '100%'},
  right: {height: '100%'},
  bottom: {width: '100%'},
  left: {height: '100%'}
}

var off_stat = {
  top: {width: '0%'},
  right: {height: '0%'},
  bottom: {width: '0%'},
  left: {height: '0%'}
}

var [on, off] = ['on', 'off'];

$btnOpen.on('click',function(e){
  e.preventDefault();
  showBox();  
})

$btnClose.on('click',function(e){
  e.preventDefault();
  closeBox();
})

function showBox(){
  $main.addClass(off);

  $aside.show();

  $top.animate(on_stat.top,speed,function(){
    $right.animate(on_stat.right,speed,function(){
      $bottom.animate(on_stat.bottom,speed,function(){
        $left.animate(on_stat.left, speed,function(){
          $con.fadeIn(speed,function(){
            $btnClose.addClass(on);
          })
        });
      })
    });
  });
}

function closeBox(){
  $btnClose.removeClass(on);

  $con.fadeOut(speed/2,function(){
    $top.animate(off_stat.top,speed/2);
    $right.animate(off_stat.right,speed/2);
    $bottom.animate(off_stat.bottom,speed/2);
    $left.animate(off_stat.left,speed/2,function(){
      $aside.hide();
      $main.removeClass(off);
    });
  })
}

