$(function() {
  $('#c4-1').parallax(0, 0.3, 1800);
  $('#c4-2').parallax(0, 0.2, 2500, true);
  $('#news .news-entrys:first').addClass('active');
  $('#news-list li a:first').addClass('active');
  $('#news .holder').jPages({
    containerID: 'news-list',
    perPage: 7,
    links: 'blank',
    previous: '',
    next: ''
  });

  $('#news-list li a').click(function(){
    var $this = $(this);
    if($this.hasClass('active')){
      return;
    }
    $('#news-list li a.active').removeClass('active');
    $this.addClass('active');
    $('.news-entrys.active').hide().removeClass('active');
    var ref = $this.data('ref');
    $('#'+ref).fadeIn().addClass('active');

  });
});

