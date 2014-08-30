/*
Inserts GA using DOM insertion of <script> tag and "script onload" method to
initialize the pageTracker object. Prevents GA insertion from blocking I/O!

As suggested by Steve Souder:
http://google-code-updates.blogspot.com/2009/03/steve-souders-lifes-too-short-write.html
*/

/* acct is GA tracking ID*/
function gaSSDSLoad (acct) {
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."),
      pageTracker,
      s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
  }
  s.onload = function () {
    s.onloadDone = true;
    init();
  };
  s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
    }
  };
  document.getElementsByTagName('head')[0].appendChild(s);
}

/* and run it */
$(window).load(function () {
	gaSSDSLoad("UA-54264930-1");                     //Tracking ID for webmaster's account
});


