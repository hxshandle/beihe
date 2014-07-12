$(function(){
  $('#c3-1').parallax(0, 0.3, 1800);
  $('#c3-2').parallax(0, 0.2, 2500, true);
  var $root = $('#about-us');
  $('.display-entry:first',$root).show().addClass('active');
  $('a.nav-item:first',$root).addClass('active');
  _doScroll();

  function _doScroll(){
    $('.display-entry.active .article',$root).jScrollPane({
      verticalDragMinHeight:30,
      verticalDragMaxHeight:30
    });
  }

  $('a.nav-item',$root).click(function(){
    var $this = $(this);
    var ref = $this.data('ref');
    var $refEl = $('#disp-entry-'+ref);
    if($refEl.hasClass('active')){
      return;
    }
    $('.nav-item.active',$root).removeClass('active');
    $this.addClass('active');
    $('.display-entry.active',$root).hide().removeClass('active');
    $refEl.addClass('active').fadeIn(400,_doScroll);
  });
});
