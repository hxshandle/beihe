$(function() {
  $('#c2-1').parallax(0, 0.3, 1800);
  $('#c2-2').parallax(0, 0.2, 2500, true);

  var $root = $('#product');
  $('.nav-item:first', $root).addClass('active');
  $('.disp-section:not(:eq(0))', $root).hide();
  $('.disp-section:first', $root).addClass('active');

  $('.nav-item', $root).click(function() {
    var $this = $(this);
    if ($this.hasClass('active')) {
      return;
    }
    switchCnt('#product .nav-item', '#product .disp-section', $this);
  });;
  function switchCnt(src, target, $cur) {
    $(src).filter('.active').removeClass('active');
    $cur.addClass('active');
    $(target).filter('.active').hide();
    var ref = $cur.data('ref');
    $('#' + ref).fadeIn().addClass('active');

    var sel = '#' + ref + ' .holder';
    var listId = ref + '-list';
    _doJPages(sel, listId);
  }

  function _doJPages(sel, listId) {
    if ($(sel).data('hasJPages')) {
      return;
    }
    perPage = 2;
    if (listId.indexOf('collocation') != - 1) {
      perPage = 4;
    }
    $(sel).jPages({
      containerID: listId,
      perPage: perPage,
      links: 'blank',
      previous: '',
      next: ''
    });
    $(sel).data('hasJPages', true);
  }

  $('.disp-section .series:first', $root).each(function() {
    var $this = $(this);
    var listId = $this.attr('id');
    var parentId = $this.parent().attr('id');
    _doJPages('#' + parentId + ' .holder', listId);
  });

  var firstRef = $('#collocation-list a:first').data('ref');
  $('.big-show').attr('src',firstRef);

  $('#collocation-list a').click(function(){
    var $this = $(this);
    var ref = $this.data('ref');
    $('.big-show').attr("src",ref);
  });
});

