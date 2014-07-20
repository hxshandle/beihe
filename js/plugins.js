// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
} ());

// Place any jQuery/helper plugins in here.
// Place any jQuery/helper plugins in here.
$(function() {
  // for tween view for contact us
  var scrollOffSet = 0;
  if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
    scrollOffSet = - 500;
    $(".scroll-down").css("padding-top", "20px");
  }
  var scrollController = $.superscrollorama();

  scrollController.addTween("#home .wrapper", TweenMax.from($("#home .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  scrollController.addTween("#about-us .wrapper", TweenMax.from($("#about-us .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  scrollController.addTween("#news .wrapper", TweenMax.from($("#news .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  /**
  scrollController.addTween("#join .wrapper", TweenMax.from($("#join .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  **/
  scrollController.addTween("#contact .wrapper", TweenMax.from($("#contact .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  scrollController.addTween("#product .wrapper", TweenMax.from($("#product .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);
  scrollController.addTween("#store .wrapper", TweenMax.from($("#store .wrapper"), 1, {
    css: {
      opacity: "0",
      top: "100px",
    }
  }), 0);

});

