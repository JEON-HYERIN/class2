/*
$(선택자).appendTo('부모선택자');
선택자를 잘라내기 해서 부모선택자 기준 제일 뒷쪽으로 요소 배치

$(선택자).prependTo('부모선택자');
선택자를 잘라내기 해서 부모선택자 기준 제일 앞쪽으로 요소 배치
*/

var frame = $('#slider1');
var ul = frame.find('ul');
var lis = ul.children('li');
var prev = $('.prev');
var next = $('.next');
var speed = 2000;
var enableClick = true;

prev.on('click', function (e) {
  e.preventDefault();
  prevSlide();
});

next.on('click', function (e) {
  e.preventDefault();
  if (enableClick) {
    enableClick = false;
    nextSlide();
  }
});

function prevSlide() {
  ul.stop().animate({left: '0%'}, speed, function () {
    ul.children('li').last().prependTo(ul);
    ul.css({left: '-100%'});
  });
}
function nextSlide() {
  ul.stop().animate({left: '-200%'}, speed, function () {
    ul.children('li').first().appendTo(ul);
    ul.css({left: '-100%'});
    enableClick = true;
  });
}