$(function(){
  $('#c5-1').parallax(0, 0.3, 1800);
  $('#c5-2').parallax(0, 0.2, 2500, true);
  var $root = $('#join');
  $('#join .join-entry:first').addClass('active').show();
  $('#join .nav-item:first').addClass('active');

  function _doScroll(){
    $('.join-entry.active .article',$root).jScrollPane();
  }
  _doScroll();


  function switchCnt(src,target,$cur){
    $(src).filter('.active').removeClass('active');
    $cur.addClass('active');
    $(target).filter('.active').hide();
    var ref = $cur.data('ref');
    $('#'+ref).fadeIn().addClass('active');
    _doScroll();
  }

  $('.nav-item',$root).click(function(){
    var $this = $(this);
    if($this.hasClass('active')){
      return;
    }
    switchCnt('#join .nav-item','#join .join-entry',$this);
  });


});

