$(function() {
  $('#c6-1').parallax(0, 0.3, 1800);
  $('#c6-2').parallax(0, 0.2, 2500, true);
  var $root = $('#store');
  var defaultAddr = $('.sliders:first a:first').data('addr');
  $('.address', $root).text(defaultAddr);
  $('#city-sel', $root).selectbox({
    onChange: function(val, inst) {
      var target = $('#'+val);
      if(target.hasClass('active')){
        return;
      }
      $('.sliders.active',$root).hide().removeClass('active');
      target.addClass('active').fadeIn();
      setTimeout(_updateAddr,500);

    }
  });

  function _updateAddr(){
    var $act = $('.sliders.active',$root);
    var p = $act.data('plugin_slidesjs');
    var currentSlider = p.data.current;
    var address = $('.sliders.active a',$root).eq(currentSlider).data('addr');
  $('.address', $root).text(address);

  }

  $('.sliders', $root).slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 407,
    width: 1000
  });
  $('.sliders:not(:eq(0))', $root).hide();
  $('.sliders:eq(0)', $root).addClass('active');

  function _moveSlider(direction) {
    var $act = $('.sliders.active',$root);
    var p = $act.data('plugin_slidesjs');
    if (direction < 0) {
      p.previous();
    } else {
      p.next();
    }
    setTimeout(_updateAddr,500);
  }

  $('.pre', $root).click(function() {
    _moveSlider( - 1);
  });
  $('.next', $root).click(function() {
    _moveSlider(1);
  });
});

