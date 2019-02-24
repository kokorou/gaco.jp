$(document).ready(function() {
  function e(e, i) {
    clearTimeout(e._tId),
      (e._tId = setTimeout(function() {
        e();
      }, i));
  }
  function i() {
    for (
      var e,
        i = $('#menu li:not(.change-language) a'),
        t = $(window).scrollTop(),
        a = h.length - 1;
      a >= 0;
      a--
    )
      if (((e = h.eq(a)), t >= e.offset().top - n.height() - 20)) {
        for (var o = 0, s = i.length; o < s; o++)
          i.eq(o)
            .parent()
            .removeClass('active');
        return void i
          .filter('[data-moveto="#' + e.attr('id') + '"]')
          .parent()
          .addClass('active');
      }
  }
  function t() {
    window.matchMedia('(min-width: 768px)')
      ? f.hasClass('slick-initialized') || f.slick('reinit')
      : f.slick('unslick');
  }
  var n = $('#seasons_header'),
    a = $('#seasons_header .logo'),
    o = $('.hambuger'),
    s = $('[data-ga-action]'),
    l = $('#landing .swiper-container'),
    r = $('.feature_wrap_parent'),
    c = $('.feature_wrap_parent .feature_wrap'),
    d = $('#menu li:not(.change-language) a');
  FastClick.attach(document.body),
    objectFitPolyfill($('#our_video')),
    s.each(function() {
      $(this).on('click', function(e) {
        if ('function' == typeof ga) {
          e.preventDefault();
          var i = $(this).attr('data-ga-action');
          if (i) {
            var t = ga.getAll()[0].get('name');
            t &&
              ga(t + '.send', 'event', {
                eventCategory: 'Events',
                eventAction: i,
                eventLabel: page_event_name
              });
          }
          var n = $(this).attr('href'),
            a = $(this).attr('target');
          if ((a || (a = '_self'), n && '' !== n)) {
            if ('_blank' == a) return void window.open(n, a);
            if (!(n.indexOf('#') > -1)) return void window.open(n, a);
            window.location.hash &&
              $(window.location.hash) &&
              $('html, body')
                .stop()
                .animate(
                  { scrollTop: $(window.location.hash).offset().top },
                  600
                );
          }
        }
      });
    }),
    o.on('click', function(e) {
      e.preventDefault(), n.toggleClass('open-menu');
    }),
    window.matchMedia('(min-width: 768px)') &&
      (l.on('init', function() {
        var e = window.navigator.userAgent;
        e.match(/iPad/i) || e.match(/iPhone/i)
          ? $('video').each(function() {
              enableInlineVideo(this),
                setTimeout(function() {
                  $('#our_video')[0].play();
                }, 100);
            })
          : $('#our_video')[0].play();
      }),
      l.slick({
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 1e4,
        speed: 1e3,
        arrows: !1,
        dots: !1,
        cssEase: 'ease',
        zIndex: 4
      }),
      l.on('beforeChange', function(e, i, t, n) {
        c.eq(t).removeClass('active'), c.eq(n).addClass('active');
      }),
      l.on('afterChange', function(e, i, t, n) {
        0 === t && $('#our_video')[0].play();
      })),
    $(window).on('resize', function() {
      window.matchMedia('(min-width: 768px)')
        ? l.hasClass('slick-initialized') || l.slick('reinit')
        : l.slick('unslick');
    }),
    r.on('click', '.feature_wrap', function() {
      var e = $(this)
        .parent()
        .index();
      l.slick('slickGoTo', e);
    }),
    $('#register_btn').length &&
      $('#register_btn').on('click', function(e) {
        e.preventDefault();
        var i =
          !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        $.magnificPopup.open({
          fixedContentPos: !0 !== i,
          closeOnBgClick: !0,
          items: { src: $('#solution_popup').html(), type: 'inline' },
          callbacks: {
            open: function() {
              $('#register_form_iframe').iFrameResize({
                minHeight: 650,
                scrolling: !0,
                sizeHeight: !0,
                heightCalculationMethod:
                  -1 !== navigator.userAgent.indexOf('MSIE')
                    ? 'max'
                    : 'documentElementScroll',
                autoResize: !0,
                messageCallback: function(e) {
                  var i = JSON.parse(e.message);
                  if (i) {
                    $.magnificPopup.close();
                    var t = $('<div>').text(i.msg);
                    (t = $("<div class='dialog'>").append(t)),
                      $.magnificPopup.open({
                        items: { src: t, type: 'inline' }
                      });
                  }
                }
              });
            }
          }
        });
      });
  var u = function() {
    $(window).scrollTop() >= 100
      ? !1 === n.hasClass('hd-smaller') && n.addClass('hd-smaller')
      : !0 === n.hasClass('hd-smaller') && n.removeClass('hd-smaller');
  };
  a.on('click', function() {
    $('html, body')
      .stop()
      .animate({ scrollTop: 0 }, 600);
  }),
    d.on('click', function(e) {
      e.preventDefault();
      var i = $(this).attr('data-moveto');
      if ('' !== i.split('#')[1]) {
        var t = n.outerHeight();
        window.matchMedia('(max-width: 767px)') &&
          (t = n.outerHeight() - n.find('.right').outerHeight()),
          $('html, body')
            .stop()
            .animate({ scrollTop: $(i).offset().top - t }, 600),
          n.hasClass('open-menu') && n.removeClass('open-menu');
      }
    });
  var h = (function() {
    for (
      var e,
        i = $('#menu li:not(.change-language) a'),
        t = '',
        n = 0,
        a = i.length;
      n < a;
      n++
    )
      '#' === (e = i.eq(n).attr('data-moveto')).charAt(0) && (t += e + ',');
    return (t = t.slice(0, -1)), $(t);
  })();
  i(),
    $(window).scroll(function() {
      e(u, 10), e(i, 10);
    });
  var f = $('.s-prod-parent');
  $(window).resize(function() {
    e(t, 10);
  }),
    window.matchMedia('(min-width: 768px)') &&
      f.slick({
        arrows: !1,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: !0,
        infinite: !1,
        speed: 800,
        cssEase: 'ease',
        zIndex: 1,
        draggable: !0,
        dotsClass: 'slick-dots',
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2, slidesToScroll: 2 }
          },
          { breakpoint: 768, settings: 'unslick' }
        ]
      });
});
