$(document).ready(function() {
  $('.slide-show').chocolate({
    images: ['img/slide-room.jpg', 'img/slide-feet.jpg'],
    interval: 5000,
    speed: 5000
  });

  $('.about').on('click', '.title', function() {
    $(this).next('.collapsible').toggle(200);
    $(this).parents('.links-list').toggleClass('active');
  });
});
