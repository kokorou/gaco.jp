!(function(a) {
  "use strict";
  function t(t, n) {
    var o = a(t).data("zanim");
    return (
      void 0 === n &&
        (n = {
          delay: 0,
          duration: 0.8,
          ease: "Expo.easeOut",
          from: {},
          to: {}
        }),
      o.delay || (o.delay = n.delay),
      o.duration || (o.duration = n.duration),
      o.from || (o.from = n.from),
      o.to || (o.to = n.to),
      (o.ease && (o.to.ease = o.ease) && o.to.ease) || (o.to.ease = n.ease),
      o
    );
  }
  a.fn.zanimation = function(n) {
    var o = a(this);
    if (o.data("zanim-timeline")) {
      var e = new TimelineMax();
      return (
        o.find("*[data-zanim]").each(function() {
          var o = t(this, n);
          e.fromTo(a(this), o.duration, o.from, o.to, o.delay).pause();
        }),
        e
      );
    }
    if (!o.parents("[data-zanim-timeline]").length) {
      var i = t(this, n);
      return TweenMax.fromTo(o, i.duration, i.from, i.to)
        .delay(i.delay)
        .pause();
    }
    return new TimelineMax();
  };
})(jQuery),
  (function(a) {
    function t(t) {
      (function(t) {
        var n = t,
          o = a(window).height(),
          e = n.offset().top,
          i = n.height();
        return (
          (windowScrollTop = a(window).scrollTop()),
          e <= windowScrollTop + o && windowScrollTop <= e + i
        );
      })(t) &&
        "scroll" == t.attr("data-zanim-trigger") &&
        (t.zanimation(zanimationDefaults).play(),
        t.removeAttr("data-zanim-trigger"));
    }
    a(document).ready(function() {
      a("*[data-zanim-trigger='scroll']").each(function() {
        var n = a(this);
        t(n),
          a(window).on("scroll", function() {
            t(n);
          });
      });
    });
  })(jQuery);
