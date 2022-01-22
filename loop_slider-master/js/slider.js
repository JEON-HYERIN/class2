/*
$(선택자).appendTo('부모선택자');
선택자를 잘라내기 해서 부모선택자 기준 제일 뒷쪽으로 요소 배치

$(선택자).prependTo('부모선택자');
선택자를 잘라내기 해서 부모선택자 기준 제일 앞쪽으로 요소 배치
*/

$('.prev').on('click', function (e) {
  e.preventDefault();

  $('#slider1 ul li').last().prependTo('#slider1 ul');
});

$('.next').on('click', function (e) {
  e.preventDefault();

  $('#slider1 ul li').first().appendTo('#slider1 ul');
});