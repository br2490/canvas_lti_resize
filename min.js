(function ( $ ) {
  var desiredHeight = $(window).height();
  $('.tool_content_wrapper iframe').css({'height': desiredHeight, 'width': '100%'});
  // make this timer, loop until finally set
  setTimeout( function() {
    parent.postMessage(JSON.stringify({subject: 'lti.frameResize', height: desiredHeight}), '*');
  }, 2000);
})( jQuery );
