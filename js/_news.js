$(function() {
  $('#news .news-entrys:first').addClass('active');
  $('#news-list li a:first').addClass('active');
  $('.holder').jPages({
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

