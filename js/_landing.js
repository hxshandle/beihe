$(function() {
  function _center() {
    var $landing = $('#landing');
    var h = global.winHeight < 600 ? 600: global.winHeight;
    $landing.css({
      height: h + 'px'
    });
    var marginTop = (h - 341) / 2;
    $('#landing .brand').css({
      "padding-top": marginTop + 'px'
    });
  }
  $(window).resize(_center);
  setTimeout(function() {
    $(window).resize();
  },
  0);
});

