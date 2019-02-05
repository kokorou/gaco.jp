function isElementInViewport(t) {
  "use strict";
  "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
  var e = t.getBoundingClientRect();
  return (
    e.top >= 0 &&
    e.left >= 0 &&
    e.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    e.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
!(function(t) {
  "use strict";
  t.fn.zanimationSplit = function(e) {
    function n() {
      isElementInViewport(i) &&
        i.attr("data-zanim-text") &&
        (TweenMax.staggerFromTo(
          a[o.split],
          o.duration,
          o.from,
          o.to,
          o.delay,
          function() {
            a.revert();
          }
        ),
        i.removeAttr("data-zanim-text"));
    }
    var i = this,
      o = i.data("zanim-text"),
      a = new SplitText(i, { type: "lines, words, chars" });
    o.delay || (o.delay = 0.02),
      o.split || (o.split = "chars"),
      (o.ease && (o.to.ease = o.ease) && o.to.ease) ||
        (o.to.ease = "Expo.easeOut"),
      n(),
      t(window).on("scroll", n);
  };
})(jQuery),
  (function(t) {
    "use strict";
    t.fn.inertia = function(e) {
      var n = this,
        i = n.data("inertia"),
        o = n.offset().top,
        a = t(window).height(),
        r = t(window).scrollTop(),
        s = 0,
        c = 0;
      (i && (e = i)) || (!e && (e = {})),
        e.weight || (e.weight = 2),
        e.duration || (e.duration = 0.7),
        e.ease || (e.ease = "Power3.easeOut"),
        n.css(
          "transform",
          "translateY(" +
            100 * (n.offset().top - t(window).scrollTop()) / a +
            "px)"
        ),
        t(window).on("resize scroll", function() {
          (r = t(window).scrollTop()),
            (s = e.weight * (o - r) * 100 / a),
            r == c || TweenMax.to(n, e.duration, { y: s, ease: e.ease }),
            (c = r);
        });
    };
  })(jQuery);
