$(function() {

  $('#top-nav').css({top:'-200px'}).show();
  $('#top-nav a').each(function(){
    var $this = $(this);
    var w = $this.width();
    $this.css({width:(w+50)+'px'});
  });
  $('#top-nav').css({top:'0px'}).hide();

  function toggleTopNav() {
    var scrollTop = $(window).scrollTop();
    var WH = $(window).height();
    if (scrollTop > WH - 83) {
      $('#top-nav,#social-link').fadeIn(1000);
    } else {
      $('#top-nav,#social-link').fadeOut(1000);
    }
  }

  $(window).on('scroll', toggleTopNav);


  $('#top-nav a').hover(
  function() {
    var $this = $(this);
    var _w = $this.width();
    $this.data('en', $this.text());
    $this.text($this.data('zh')).css({
    });

  },
  function() {
    var $this = $(this);
    $this.text($this.data('en')).css({
    });
  });

});

