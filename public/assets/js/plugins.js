/*---------------------------------
    jQuery Plugins Index
    ----------------------
    01. Slick Slider
    02. mean menu
    03. Magnific pop up
    04. jquery ui for price filter
    04. sticky sidebar
    05. mailchilp ajax
------------------------------------*/

/*
 Slick Slider
 Version: 1.9.0
 */
! function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function () {
                    e.animate({
                        opacity: 0
                    }, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                } s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                } l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
//End Slick Slider

// mean menu js for responsive menu
! function ($) {
    "use strict";
    $.fn.meanmenu = function (e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "",
                x = function () {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "",
                P = function () {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                },
                W = function () {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
                },
                b = function () {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function () {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                        }), jQuery(".mean-expand").on("click", function (e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function () {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function () {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function (e) {
                            e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                        }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                            jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                        })
                    } else W()
                };
            C || jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);
// end mean menu js for responsive menu


/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);
// End Nice Select

/*! jQuery UI - v1.12.1 - 2018-11-27
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e = 0,
        i = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
            } catch (a) {}
            e(i)
        }
    }(t.cleanData), t.widget = function (e, i, s) {
        var n, o, a, r = {},
            l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
            return t.isFunction(s) ? (r[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function () {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }(), void 0) : (r[e] = s, void 0)
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), n ? (t.each(n._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function (e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
            for (s in o[a]) n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }, t.widget.bridge = function (e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
            var a = "string" == typeof o,
                r = i.call(arguments, 1),
                l = this;
            return a ? this.length || "instance" !== o ? this.each(function () {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
                var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this))
            })), l
        }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function (i, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                } return this._setOptions(a), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function (e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = [],
                n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function (e) {
            var i = this;
            t.each(i.classesElementLookup, function (s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {
                    extra: n ? e : i,
                    keys: n ? t : e,
                    element: n ? this.element : t,
                    add: s
                };
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function (e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    }), t.widget, t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var s = !1;
    t(document).on("mouseup", function () {
        s = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!s) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, e.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    }), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, o, a, r, l, h, c = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function (t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var s, n, o = this.value(),
                a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step,
                s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function (s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function (e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    })
});


/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
(function ($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function (selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function (options) {
        $(this).each(function (i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function () {
                var msg;

                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function (index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: "jsonp",
                    error: function (resp, text) {
                        console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
})(jQuery);


/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function (o) {
    var t = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    o.zoom = function (t, n, e, i) {
        var u, c, a, r, m, l, s, f = o(t),
            h = f.css("position"),
            d = o(n);
        return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: e.width * i,
            height: e.height * i,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(t), {
            init: function () {
                c = f.outerWidth(), u = f.outerHeight(), n === t ? (r = c, a = u) : (r = d.outerWidth(), a = d.outerHeight()), m = (e.width - c) / r, l = (e.height - u) / a, s = d.offset()
            },
            move: function (o) {
                var t = o.pageX - s.left,
                    n = o.pageY - s.top;
                n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, r), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px"
            }
        }
    }, o.fn.zoom = function (n) {
        return this.each(function () {
            var e = o.extend({}, t, n || {}),
                i = e.target && o(e.target)[0] || this,
                u = this,
                c = o(u),
                a = document.createElement("img"),
                r = o(a),
                m = "mousemove.zoom",
                l = !1,
                s = !1;
            if (!e.url) {
                var f = u.querySelector("img");
                if (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url) return
            }
            c.one("zoom.destroy", function (o, t) {
                c.off(".zoom"), i.style.position = o, i.style.overflow = t, a.onload = null, r.remove()
            }.bind(this, i.style.position, i.style.overflow)), a.onload = function () {
                function t(t) {
                    f.init(), f.move(t), r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1)
                }

                function n() {
                    r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1)
                }
                var f = o.zoom(i, u, a, e.magnify);
                "grab" === e.on ? c.on("mousedown.zoom", function (e) {
                    1 === e.which && (o(document).one("mouseup.zoom", function () {
                        n(), o(document).off(m, f.move)
                    }), t(e), o(document).on(m, f.move), e.preventDefault())
                }) : "click" === e.on ? c.on("click.zoom", function (e) {
                    return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function () {
                        n(), l = !1, o(document).off(m, f.move)
                    }), !1)
                }) : "toggle" === e.on ? c.on("click.zoom", function (o) {
                    l ? n() : t(o), l = !l
                }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function (o) {
                    o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function (o) {
                    o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
                }).on("touchend.zoom", function (o) {
                    o.preventDefault(), s && (s = !1, n())
                }), o.isFunction(e.callback) && e.callback.call(a)
            }, a.setAttribute("role", "presentation"), a.alt = "", a.src = e.url
        })
    }, o.fn.zoom.defaults = t
})(window.jQuery);

// google map

/* @preserve
 * Leaflet 1.3.4+Detached: 0e566b2ad5e696ba9f79a9d48a7e51c8f4892441.0e566b2, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function (t) {
    "use strict";

    function i(t) {
        var i, e, n, o;
        for (e = 1, n = arguments.length; e < n; e++) {
            o = arguments[e];
            for (i in o) t[i] = o[i]
        }
        return t
    }

    function e(t, i) {
        var e = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function () {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._leaflet_id = t._leaflet_id || ++ei, t._leaflet_id
    }

    function o(t, i, e) {
        var n, o, s, r;
        return r = function () {
            n = !1, o && (s.apply(e, o), o = !1)
        }, s = function () {
            n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
        }
    }

    function s(t, i, e) {
        var n = i[1],
            o = i[0],
            s = n - o;
        return t === n && e ? t : ((t - o) % s + s) % s + o
    }

    function r() {
        return !1
    }

    function a(t, i) {
        var e = Math.pow(10, void 0 === i ? 6 : i);
        return Math.round(t * e) / e
    }

    function h(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function u(t) {
        return h(t).split(/\s+/)
    }

    function l(t, i) {
        t.hasOwnProperty("options") || (t.options = t.options ? ii(t.options) : {});
        for (var e in i) t.options[e] = i[e];
        return t.options
    }

    function c(t, i, e) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
    }

    function _(t, i) {
        return t.replace(ni, function (t, e) {
            var n = i[e];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(i)), n
        })
    }

    function d(t, i) {
        for (var e = 0; e < t.length; e++)
            if (t[e] === i) return e;
        return -1
    }

    function p(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var i = +new Date,
            e = Math.max(0, 16 - (i - ri));
        return ri = i + e, window.setTimeout(t, e)
    }

    function f(t, i, n) {
        if (!n || ai !== m) return ai.call(window, e(t, i));
        t.call(i)
    }

    function g(t) {
        t && hi.call(window, t)
    }

    function v() {}

    function y(t) {
        if ("undefined" != typeof L && L && L.Mixin) {
            t = oi(t) ? t : [t];
            for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
        }
    }

    function x(t, i, e) {
        this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
    }

    function w(t, i, e) {
        return t instanceof x ? t : oi(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e)
    }

    function P(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function b(t, i) {
        return !t || t instanceof P ? t : new P(t, i)
    }

    function T(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function z(t, i) {
        return t instanceof T ? t : new T(t, i)
    }

    function M(t, i, e) {
        if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
        this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
    }

    function C(t, i, e) {
        return t instanceof M ? t : oi(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e)
    }

    function S(t, i, e, n) {
        if (oi(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = i, this._c = e, this._d = n
    }

    function Z(t, i, e, n) {
        return new S(t, i, e, n)
    }

    function E(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function k(t, i) {
        var e, n, o, s, r, a, h = "";
        for (e = 0, o = t.length; e < o; e++) {
            for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
            h += i ? Ji ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function A(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function B(t, i, e, n) {
        return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this
    }

    function I(t, i, e) {
        var n = t["_leaflet_" + i + e];
        return "touchstart" === i ? t.removeEventListener(te, n, !1) : "touchmove" === i ? t.removeEventListener(ie, n, !1) : "touchend" === i && (t.removeEventListener(ee, n, !1), t.removeEventListener(ne, n, !1)), this
    }

    function O(t, i, n) {
        var o = e(function (t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(oe.indexOf(t.target.tagName) < 0)) return;
                Pt(t)
            }
            j(t, i)
        });
        t["_leaflet_touchstart" + n] = o, t.addEventListener(te, o, !1), re || (document.documentElement.addEventListener(te, R, !0), document.documentElement.addEventListener(ie, N, !0), document.documentElement.addEventListener(ee, D, !0), document.documentElement.addEventListener(ne, D, !0), re = !0)
    }

    function R(t) {
        se[t.pointerId] = t, ae++
    }

    function N(t) {
        se[t.pointerId] && (se[t.pointerId] = t)
    }

    function D(t) {
        delete se[t.pointerId], ae--
    }

    function j(t, i) {
        t.touches = [];
        for (var e in se) t.touches.push(se[e]);
        t.changedTouches = [t], i(t)
    }

    function W(t, i, e) {
        var n = function (t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i)
        };
        t["_leaflet_touchmove" + e] = n, t.addEventListener(ie, n, !1)
    }

    function H(t, i, e) {
        var n = function (t) {
            j(t, i)
        };
        t["_leaflet_touchend" + e] = n, t.addEventListener(ee, n, !1), t.addEventListener(ne, n, !1)
    }

    function F(t, i, e) {
        function n(t) {
            var i;
            if (Vi) {
                if (!bi || "mouse" === t.pointerType) return;
                i = ae
            } else i = t.touches.length;
            if (!(i > 1)) {
                var e = Date.now(),
                    n = e - (s || e);
                r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
            }
        }

        function o(t) {
            if (a && !r.cancelBubble) {
                if (Vi) {
                    if (!bi || "mouse" === t.pointerType) return;
                    var e, n, o = {};
                    for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
                    r = o
                }
                r.type = "dblclick", i(r), s = null
            }
        }
        var s, r, a = !1,
            h = 250;
        return t[le + he + e] = n, t[le + ue + e] = o, t[le + "dblclick" + e] = i, t.addEventListener(he, n, !1), t.addEventListener(ue, o, !1), t.addEventListener("dblclick", i, !1), this
    }

    function U(t, i) {
        var e = t[le + he + i],
            n = t[le + ue + i],
            o = t[le + "dblclick" + i];
        return t.removeEventListener(he, e, !1), t.removeEventListener(ue, n, !1), bi || t.removeEventListener("dblclick", o, !1), this
    }

    function V(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function q(t, i) {
        var e = t.style[i] || t.currentStyle && t.currentStyle[i];
        if ((!e || "auto" === e) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            e = n ? n[i] : null
        }
        return "auto" === e ? null : e
    }

    function G(t, i, e) {
        var n = document.createElement(t);
        return n.className = i || "", e && e.appendChild(n), n
    }

    function K(t) {
        var i = t.parentNode;
        i && i.removeChild(t)
    }

    function Y(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function X(t) {
        var i = t.parentNode;
        i.lastChild !== t && i.appendChild(t)
    }

    function J(t) {
        var i = t.parentNode;
        i.firstChild !== t && i.insertBefore(t, i.firstChild)
    }

    function $(t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var e = et(t);
        return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
    }

    function Q(t, i) {
        if (void 0 !== t.classList)
            for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
        else if (!$(t, i)) {
            var s = et(t);
            it(t, (s ? s + " " : "") + i)
        }
    }

    function tt(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : it(t, h((" " + et(t) + " ").replace(" " + i + " ", " ")))
    }

    function it(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
    }

    function et(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function nt(t, i) {
        "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && ot(t, i)
    }

    function ot(t, i) {
        var e = !1,
            n = "DXImageTransform.Microsoft.Alpha";
        try {
            e = t.filters.item(n)
        } catch (t) {
            if (1 === i) return
        }
        i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
    }

    function st(t) {
        for (var i = document.documentElement.style, e = 0; e < t.length; e++)
            if (t[e] in i) return t[e];
        return !1
    }

    function rt(t, i, e) {
        var n = i || new x(0, 0);
        t.style[ce] = (Ri ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
    }

    function at(t, i) {
        t._leaflet_pos = i, ji ? rt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
    }

    function ht(t) {
        return t._leaflet_pos || new x(0, 0)
    }

    function ut() {
        mt(window, "dragstart", Pt)
    }

    function lt() {
        ft(window, "dragstart", Pt)
    }

    function ct(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (_t(), me = t, fe = t.style.outline, t.style.outline = "none", mt(window, "keydown", _t))
    }

    function _t() {
        me && (me.style.outline = fe, me = void 0, fe = void 0, ft(window, "keydown", _t))
    }

    function dt(t) {
        do {
            t = t.parentNode
        } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
        return t
    }

    function pt(t) {
        var i = t.getBoundingClientRect();
        return {
            x: i.width / t.offsetWidth || 1,
            y: i.height / t.offsetHeight || 1,
            boundingClientRect: i
        }
    }

    function mt(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) gt(t, o, i[o], e);
        else
            for (var s = 0, r = (i = u(i)).length; s < r; s++) gt(t, i[s], e, n);
        return this
    }

    function ft(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) vt(t, o, i[o], e);
        else if (i)
            for (var s = 0, r = (i = u(i)).length; s < r; s++) vt(t, i[s], e, n);
        else {
            for (var a in t[ye]) vt(t, a, t[ye][a]);
            delete t[ye]
        }
        return this
    }

    function gt(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : "");
        if (t[ye] && t[ye][s]) return this;
        var r = function (i) {
                return e.call(o || t, i || window.event)
            },
            a = r;
        Vi && 0 === i.indexOf("touch") ? B(t, i, r, s) : !qi || "dblclick" !== i || !F || Vi && Ei ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function (i) {
            i = i || window.event, Ct(t, i) && a(i)
        }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && zi && (r = function (t) {
            St(t, a)
        }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ye] = t[ye] || {}, t[ye][s] = r
    }

    function vt(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : ""),
            r = t[ye] && t[ye][s];
        if (!r) return this;
        Vi && 0 === i.indexOf("touch") ? I(t, i, s) : !qi || "dblclick" !== i || !U || Vi && Ei ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[ye][s] = null
    }

    function yt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Mt(t), this
    }

    function xt(t) {
        return gt(t, "mousewheel", yt), this
    }

    function wt(t) {
        return mt(t, "mousedown touchstart dblclick", yt), gt(t, "click", zt), this
    }

    function Pt(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function Lt(t) {
        return Pt(t), yt(t), this
    }

    function bt(t, i) {
        if (!i) return new x(t.clientX, t.clientY);
        var e = pt(i),
            n = e.boundingClientRect;
        return new x((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
    }

    function Tt(t) {
        return bi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / xe : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function zt(t) {
        we[t.type] = !0
    }

    function Mt(t) {
        var i = we[t.type];
        return we[t.type] = !1, i
    }

    function Ct(t, i) {
        var e = i.relatedTarget;
        if (!e) return !0;
        try {
            for (; e && e !== t;) e = e.parentNode
        } catch (t) {
            return !1
        }
        return e !== t
    }

    function St(t, i) {
        var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
            n = ge && e - ge;
        n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Lt(t) : (ge = e, i(t))
    }

    function Zt(t, i) {
        if (!i || !t.length) return t.slice();
        var e = i * i;
        return t = Bt(t, e), t = kt(t, e)
    }

    function Et(t, i, e) {
        return Math.sqrt(Dt(t, i, e, !0))
    }

    function kt(t, i) {
        var e = t.length,
            n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
        n[0] = n[e - 1] = 1, At(t, n, i, 0, e - 1);
        var o, s = [];
        for (o = 0; o < e; o++) n[o] && s.push(t[o]);
        return s
    }

    function At(t, i, e, n, o) {
        var s, r, a, h = 0;
        for (r = n + 1; r <= o - 1; r++)(a = Dt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
        h > e && (i[s] = 1, At(t, i, e, n, s), At(t, i, e, s, o))
    }

    function Bt(t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Nt(t[n], t[o]) > i && (e.push(t[n]), o = n);
        return o < s - 1 && e.push(t[s - 1]), e
    }

    function It(t, i, e, n, o) {
        var s, r, a, h = n ? ke : Rt(t, e),
            u = Rt(i, e);
        for (ke = u;;) {
            if (!(h | u)) return [t, i];
            if (h & u) return !1;
            a = Rt(r = Ot(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
        }
    }

    function Ot(t, i, e, n, o) {
        var s, r, a = i.x - t.x,
            h = i.y - t.y,
            u = n.min,
            l = n.max;
        return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o)
    }

    function Rt(t, i) {
        var e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
    }

    function Nt(t, i) {
        var e = i.x - t.x,
            n = i.y - t.y;
        return e * e + n * n
    }

    function Dt(t, i, e, n) {
        var o, s = i.x,
            r = i.y,
            a = e.x - s,
            h = e.y - r,
            u = a * a + h * h;
        return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
    }

    function jt(t) {
        return !oi(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function Wt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), jt(t)
    }

    function Ht(t, i, e) {
        var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
        for (o = 0, u = t.length; o < u; o++) t[o]._code = Rt(t[o], i);
        for (r = 0; r < 4; r++) {
            for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)) : (h._code & l && ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)), n.push(a));
            t = n
        }
        return t
    }

    function Ft(t, i) {
        var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            u = i && i.pointToLayer,
            l = i && i.coordsToLatLng || Ut;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return e = l(a), u ? u(t, e) : new $e(e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new $e(e));
                return new Ke(h);
            case "LineString":
            case "MultiLineString":
                return n = Vt(a, "LineString" === r.type ? 0 : 1, l), new nn(n, i);
            case "Polygon":
            case "MultiPolygon":
                return n = Vt(a, "Polygon" === r.type ? 1 : 2, l), new on(n, i);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = Ft({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, i);
                    c && h.push(c)
                }
                return new Ke(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Ut(t) {
        return new M(t[1], t[0], t[2])
    }

    function Vt(t, i, e) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Vt(t[s], i - 1, e) : (e || Ut)(t[s]), o.push(n);
        return o
    }

    function qt(t, i) {
        return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
    }

    function Gt(t, i, e, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Gt(t[s], i - 1, e, n) : qt(t[s], n));
        return !i && e && o.push(o[0]), o
    }

    function Kt(t, e) {
        return t.feature ? i({}, t.feature, {
            geometry: e
        }) : Yt(e)
    }

    function Yt(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function Xt(t, i) {
        return new sn(t, i)
    }

    function Jt(t, i) {
        return new mn(t, i)
    }

    function $t(t) {
        return Xi ? new vn(t) : null
    }

    function Qt(t) {
        return Ji || $i ? new Pn(t) : null
    }
    var ti = Object.freeze;
    Object.freeze = function (t) {
        return t
    };
    var ii = Object.create || function () {
            function t() {}
            return function (i) {
                return t.prototype = i, new t
            }
        }(),
        ei = 0,
        ni = /\{ *([\w_-]+) *\}/g,
        oi = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        si = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        ri = 0,
        ai = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
        hi = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
            window.clearTimeout(t)
        },
        ui = (Object.freeze || Object)({
            freeze: ti,
            extend: i,
            create: ii,
            bind: e,
            lastId: ei,
            stamp: n,
            throttle: o,
            wrapNum: s,
            falseFn: r,
            formatNum: a,
            trim: h,
            splitWords: u,
            setOptions: l,
            getParamString: c,
            template: _,
            isArray: oi,
            indexOf: d,
            emptyImageUrl: si,
            requestFn: ai,
            cancelFn: hi,
            requestAnimFrame: f,
            cancelAnimFrame: g
        });
    v.extend = function (t) {
        var e = function () {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
            },
            n = e.__super__ = this.prototype,
            o = ii(n);
        o.constructor = e, e.prototype = o;
        for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
        return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(ii(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function () {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
            }
        }, e
    }, v.include = function (t) {
        return i(this.prototype, t), this
    }, v.mergeOptions = function (t) {
        return i(this.prototype.options, t), this
    }, v.addInitHook = function (t) {
        var i = Array.prototype.slice.call(arguments, 1),
            e = "function" == typeof t ? t : function () {
                this[t].apply(this, i)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
    };
    var li = {
        on: function (t, i, e) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], i);
            else
                for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
            return this
        },
        off: function (t, i, e) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], i);
                else
                    for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
            else delete this._events;
            return this
        },
        _on: function (t, i, e) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), e === this && (e = void 0);
            for (var o = {
                    fn: i,
                    ctx: e
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === i && s[r].ctx === e) return;
            s.push(o)
        },
        _off: function (t, i, e) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (i) {
                    if (e === this && (e = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var a = n[o];
                            if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
                    delete this._events[t]
                }
        },
        fire: function (t, e, n) {
            if (!this.listens(t, n)) return this;
            var o = i({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var r = 0, a = s.length; r < a; r++) {
                        var h = s[r];
                        h.fn.call(h.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        },
        listens: function (t, i) {
            var e = this._events && this._events[t];
            if (e && e.length) return !0;
            if (i)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, i)) return !0;
            return !1
        },
        once: function (t, i, n) {
            if ("object" == typeof t) {
                for (var o in t) this.once(o, t[o], i);
                return this
            }
            var s = e(function () {
                this.off(t, i, n).off(t, s, n)
            }, this);
            return this.on(t, i, n).on(t, s, n)
        },
        addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        },
        removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        },
        _propagateEvent: function (t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    li.addEventListener = li.on, li.removeEventListener = li.clearAllEventListeners = li.off, li.addOneTimeEventListener = li.once, li.fireEvent = li.fire, li.hasEventListeners = li.listens;
    var ci = v.extend(li),
        _i = Math.trunc || function (t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };
    x.prototype = {
        clone: function () {
            return new x(this.x, this.y)
        },
        add: function (t) {
            return this.clone()._add(w(t))
        },
        _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function (t) {
            return this.clone()._subtract(w(t))
        },
        _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function (t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function (t) {
            return new x(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function (t) {
            return new x(this.x / t.x, this.y / t.y)
        },
        round: function () {
            return this.clone()._round()
        },
        _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function () {
            return this.clone()._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.clone()._ceil()
        },
        _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function () {
            return this.clone()._trunc()
        },
        _trunc: function () {
            return this.x = _i(this.x), this.y = _i(this.y), this
        },
        distanceTo: function (t) {
            var i = (t = w(t)).x - this.x,
                e = t.y - this.y;
            return Math.sqrt(i * i + e * e)
        },
        equals: function (t) {
            return (t = w(t)).x === this.x && t.y === this.y
        },
        contains: function (t) {
            return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function () {
            return "Point(" + a(this.x) + ", " + a(this.y) + ")"
        }
    }, P.prototype = {
        extend: function (t) {
            return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function (t) {
            return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function () {
            return new x(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new x(this.max.x, this.min.y)
        },
        getTopLeft: function () {
            return this.min
        },
        getBottomRight: function () {
            return this.max
        },
        getSize: function () {
            return this.max.subtract(this.min)
        },
        contains: function (t) {
            var i, e;
            return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        },
        intersects: function (t) {
            t = b(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= i.x && n.x <= e.x,
                r = o.y >= i.y && n.y <= e.y;
            return s && r
        },
        overlaps: function (t) {
            t = b(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x > i.x && n.x < e.x,
                r = o.y > i.y && n.y < e.y;
            return s && r
        },
        isValid: function () {
            return !(!this.min || !this.max)
        }
    }, T.prototype = {
        extend: function (t) {
            var i, e, n = this._southWest,
                o = this._northEast;
            if (t instanceof M) i = t, e = t;
            else {
                if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
                if (i = t._southWest, e = t._northEast, !i || !e) return this
            }
            return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this
        },
        pad: function (t) {
            var i = this._southWest,
                e = this._northEast,
                n = Math.abs(i.lat - e.lat) * t,
                o = Math.abs(i.lng - e.lng) * t;
            return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o))
        },
        getCenter: function () {
            return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new M(this.getNorth(), this.getWest())
        },
        getSouthEast: function () {
            return new M(this.getSouth(), this.getEast())
        },
        getWest: function () {
            return this._southWest.lng
        },
        getSouth: function () {
            return this._southWest.lat
        },
        getEast: function () {
            return this._northEast.lng
        },
        getNorth: function () {
            return this._northEast.lat
        },
        contains: function (t) {
            t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
            var i, e, n = this._southWest,
                o = this._northEast;
            return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        },
        intersects: function (t) {
            t = z(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= i.lat && n.lat <= e.lat,
                r = o.lng >= i.lng && n.lng <= e.lng;
            return s && r
        },
        overlaps: function (t) {
            t = z(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > i.lat && n.lat < e.lat,
                r = o.lng > i.lng && n.lng < e.lng;
            return s && r
        },
        toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function (t, i) {
            return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
        },
        isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, M.prototype = {
        equals: function (t, i) {
            return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
        },
        toString: function (t) {
            return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
        },
        distanceTo: function (t) {
            return pi.distance(this, C(t))
        },
        wrap: function () {
            return pi.wrapLatLng(this)
        },
        toBounds: function (t) {
            var i = 180 * t / 40075017,
                e = i / Math.cos(Math.PI / 180 * this.lat);
            return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
        },
        clone: function () {
            return new M(this.lat, this.lng, this.alt)
        }
    };
    var di = {
            latLngToPoint: function (t, i) {
                var e = this.projection.project(t),
                    n = this.scale(i);
                return this.transformation._transform(e, n)
            },
            pointToLatLng: function (t, i) {
                var e = this.scale(i),
                    n = this.transformation.untransform(t, e);
                return this.projection.unproject(n)
            },
            project: function (t) {
                return this.projection.project(t)
            },
            unproject: function (t) {
                return this.projection.unproject(t)
            },
            scale: function (t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function (t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var i = this.projection.bounds,
                    e = this.scale(t);
                return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
            },
            infinite: !1,
            wrapLatLng: function (t) {
                var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
            },
            wrapLatLngBounds: function (t) {
                var i = t.getCenter(),
                    e = this.wrapLatLng(i),
                    n = i.lat - e.lat,
                    o = i.lng - e.lng;
                if (0 === n && 0 === o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast();
                return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
            }
        },
        pi = i({}, di, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function (t, i) {
                var e = Math.PI / 180,
                    n = t.lat * e,
                    o = i.lat * e,
                    s = Math.sin((i.lat - t.lat) * e / 2),
                    r = Math.sin((i.lng - t.lng) * e / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        mi = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function (t) {
                var i = Math.PI / 180,
                    e = this.MAX_LATITUDE,
                    n = Math.max(Math.min(e, t.lat), -e),
                    o = Math.sin(n * i);
                return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function (t) {
                var i = 180 / Math.PI;
                return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
            },
            bounds: function () {
                var t = 6378137 * Math.PI;
                return new P([-t, -t], [t, t])
            }()
        };
    S.prototype = {
        transform: function (t, i) {
            return this._transform(t.clone(), i)
        },
        _transform: function (t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        },
        untransform: function (t, i) {
            return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    };
    var fi, gi, vi, yi = i({}, pi, {
            code: "EPSG:3857",
            projection: mi,
            transformation: function () {
                var t = .5 / (Math.PI * mi.R);
                return Z(t, .5, -t, .5)
            }()
        }),
        xi = i({}, yi, {
            code: "EPSG:900913"
        }),
        wi = document.documentElement.style,
        Pi = "ActiveXObject" in window,
        Li = Pi && !document.addEventListener,
        bi = "msLaunchUri" in navigator && !("documentMode" in document),
        Ti = A("webkit"),
        zi = A("android"),
        Mi = A("android 2") || A("android 3"),
        Ci = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        Si = zi && A("Google") && Ci < 537 && !("AudioNode" in window),
        Zi = !!window.opera,
        Ei = A("chrome"),
        ki = A("gecko") && !Ti && !Zi && !Pi,
        Ai = !Ei && A("safari"),
        Bi = A("phantom"),
        Ii = "OTransition" in wi,
        Oi = 0 === navigator.platform.indexOf("Win"),
        Ri = Pi && "transition" in wi,
        Ni = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Mi,
        Di = "MozPerspective" in wi,
        ji = !window.L_DISABLE_3D && (Ri || Ni || Di) && !Ii && !Bi,
        Wi = "undefined" != typeof orientation || A("mobile"),
        Hi = Wi && Ti,
        Fi = Wi && Ni,
        Ui = !window.PointerEvent && window.MSPointerEvent,
        Vi = !(!window.PointerEvent && !Ui),
        qi = !window.L_NO_TOUCH && (Vi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Gi = Wi && Zi,
        Ki = Wi && ki,
        Yi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        Xi = !!document.createElement("canvas").getContext,
        Ji = !(!document.createElementNS || !E("svg").createSVGRect),
        $i = !Ji && function () {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (t) {
                return !1
            }
        }(),
        Qi = (Object.freeze || Object)({
            ie: Pi,
            ielt9: Li,
            edge: bi,
            webkit: Ti,
            android: zi,
            android23: Mi,
            androidStock: Si,
            opera: Zi,
            chrome: Ei,
            gecko: ki,
            safari: Ai,
            phantom: Bi,
            opera12: Ii,
            win: Oi,
            ie3d: Ri,
            webkit3d: Ni,
            gecko3d: Di,
            any3d: ji,
            mobile: Wi,
            mobileWebkit: Hi,
            mobileWebkit3d: Fi,
            msPointer: Ui,
            pointer: Vi,
            touch: qi,
            mobileOpera: Gi,
            mobileGecko: Ki,
            retina: Yi,
            canvas: Xi,
            svg: Ji,
            vml: $i
        }),
        te = Ui ? "MSPointerDown" : "pointerdown",
        ie = Ui ? "MSPointerMove" : "pointermove",
        ee = Ui ? "MSPointerUp" : "pointerup",
        ne = Ui ? "MSPointerCancel" : "pointercancel",
        oe = ["INPUT", "SELECT", "OPTION"],
        se = {},
        re = !1,
        ae = 0,
        he = Ui ? "MSPointerDown" : Vi ? "pointerdown" : "touchstart",
        ue = Ui ? "MSPointerUp" : Vi ? "pointerup" : "touchend",
        le = "_leaflet_",
        ce = st(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        _e = st(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend";
    if ("onselectstart" in document) fi = function () {
        mt(window, "selectstart", Pt)
    }, gi = function () {
        ft(window, "selectstart", Pt)
    };
    else {
        var pe = st(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        fi = function () {
            if (pe) {
                var t = document.documentElement.style;
                vi = t[pe], t[pe] = "none"
            }
        }, gi = function () {
            pe && (document.documentElement.style[pe] = vi, vi = void 0)
        }
    }
    var me, fe, ge, ve = (Object.freeze || Object)({
            TRANSFORM: ce,
            TRANSITION: _e,
            TRANSITION_END: de,
            get: V,
            getStyle: q,
            create: G,
            remove: K,
            empty: Y,
            toFront: X,
            toBack: J,
            hasClass: $,
            addClass: Q,
            removeClass: tt,
            setClass: it,
            getClass: et,
            setOpacity: nt,
            testProp: st,
            setTransform: rt,
            setPosition: at,
            getPosition: ht,
            disableTextSelection: fi,
            enableTextSelection: gi,
            disableImageDrag: ut,
            enableImageDrag: lt,
            preventOutline: ct,
            restoreOutline: _t,
            getSizedParentNode: dt,
            getScale: pt
        }),
        ye = "_leaflet_events",
        xe = Oi && Ei ? 2 * window.devicePixelRatio : ki ? window.devicePixelRatio : 1,
        we = {},
        Pe = (Object.freeze || Object)({
            on: mt,
            off: ft,
            stopPropagation: yt,
            disableScrollPropagation: xt,
            disableClickPropagation: wt,
            preventDefault: Pt,
            stop: Lt,
            getMousePosition: bt,
            getWheelDelta: Tt,
            fakeStop: zt,
            skipped: Mt,
            isExternalTarget: Ct,
            addListener: mt,
            removeListener: ft
        }),
        Le = ci.extend({
            run: function (t, i, e, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ht(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function () {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function () {
                this._animId = f(this._animate, this), this._step()
            },
            _step: function (t) {
                var i = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function (t, i) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                i && e._round(), at(this._el, e), this.fire("step")
            },
            _complete: function () {
                g(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        be = ci.extend({
            options: {
                crs: yi,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function (t, i) {
                i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = _e && ji && !Gi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), mt(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function (t, e, n) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
                    animate: n.animate
                }, n.zoom), n.pan = i({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
            },
            setZoom: function (t, i) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: i
                }) : (this._zoom = t, this)
            },
            zoomIn: function (t, i) {
                return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
            },
            zoomOut: function (t, i) {
                return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
            },
            setZoomAround: function (t, i, e) {
                var n = this.getZoomScale(i),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, i, {
                    zoom: e
                })
            },
            _getBoundsCenterZoom: function (t, i) {
                i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
                var e = w(i.paddingTopLeft || i.padding || [0, 0]),
                    n = w(i.paddingBottomRight || i.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, e.add(n));
                if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(e).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function (t, i) {
                if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
                var e = this._getBoundsCenterZoom(t, i);
                return this.setView(e.center, e.zoom, i)
            },
            fitWorld: function (t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function (t, i) {
                return this.setView(t, this._zoom, {
                    pan: i
                })
            },
            panBy: function (t, i) {
                if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
                if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new Le, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                    Q(this._mapPane, "leaflet-pan-anim");
                    var e = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function (t, i, e) {
                function n(t) {
                    var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
                        e = Math.sqrt(i * i + 1) - i;
                    return e < 1e-9 ? -18 : Math.log(e)
                }

                function o(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function s(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function r(t) {
                    return o(t) / s(t)
                }

                function a(t) {
                    return m * (s(w) / s(w + y * t))
                }

                function h(t) {
                    return m * (s(w) * r(w + y * t) - o(w)) / x
                }

                function u(t) {
                    return 1 - Math.pow(1 - t, 1.5)
                }

                function l() {
                    var e = (Date.now() - P) / b,
                        n = u(e) * L;
                    e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), {
                        flyTo: !0
                    })) : this._move(t, i)._moveEnd(!0)
                }
                if (!1 === (e = e || {}).animate || !ji) return this.setView(t, i, e);
                this._stop();
                var c = this.project(this.getCenter()),
                    _ = this.project(t),
                    d = this.getSize(),
                    p = this._zoom;
                t = C(t), i = void 0 === i ? p : i;
                var m = Math.max(d.x, d.y),
                    g = m * this.getZoomScale(p, i),
                    v = _.distanceTo(c) || 1,
                    y = 1.42,
                    x = y * y,
                    w = n(0),
                    P = Date.now(),
                    L = (n(1) - w) / y,
                    b = e.duration ? 1e3 * e.duration : 1e3 * L * .8;
                return this._moveStart(!0, e.noMoveStart), l.call(this), this
            },
            flyToBounds: function (t, i) {
                var e = this._getBoundsCenterZoom(t, i);
                return this.flyTo(e.center, e.zoom, i)
            },
            setMaxBounds: function (t) {
                return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function (t) {
                var i = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function (t) {
                var i = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function (t, i) {
                this._enforcingBounds = !0;
                var e = this.getCenter(),
                    n = this._limitCenter(e, this._zoom, z(t));
                return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
            },
            invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = i({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var n = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var o = this.getSize(),
                    s = n.divideBy(2).round(),
                    r = o.divideBy(2).round(),
                    a = s.subtract(r);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: n,
                    newSize: o
                })) : this
            },
            stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function (t) {
                if (t = this._locateOptions = i({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var n = e(this._handleGeolocationResponse, this),
                    o = e(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
            },
            stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function (t) {
                var i = t.code,
                    e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: i,
                    message: "Geolocation error: " + e + "."
                })
            },
            _handleGeolocationResponse: function (t) {
                var i = new M(t.coords.latitude, t.coords.longitude),
                    e = i.toBounds(2 * t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var o = this.getBoundsZoom(e);
                    this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                }
                var s = {
                    latlng: i,
                    bounds: e,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function (t, i) {
                if (!i) return this;
                var e = this[t] = new i(this);
                return this._handlers.push(e), this.options[t] && e.enable(), this
            },
            remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), K(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
                var t;
                for (t in this._layers) this._layers[t].remove();
                for (t in this._panes) K(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function (t, i) {
                var e = G("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                return t && (this._panes[t] = e), e
            },
            getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function () {
                return this._zoom
            },
            getBounds: function () {
                var t = this.getPixelBounds();
                return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function (t, i, e) {
                t = z(t), e = w(e || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(e),
                    u = b(this.project(a, n), this.project(r, n)).getSize(),
                    l = ji ? this.options.zoomSnap : 1,
                    c = h.x / u.x,
                    _ = h.y / u.y,
                    d = i ? Math.max(c, _) : Math.min(c, _);
                return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
            },
            getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function (t, i) {
                var e = this._getTopLeftPoint(t, i);
                return new P(e, e.add(this.getSize()))
            },
            getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function () {
                return this._panes
            },
            getContainer: function () {
                return this._container
            },
            getZoomScale: function (t, i) {
                var e = this.options.crs;
                return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
            },
            getScaleZoom: function (t, i) {
                var e = this.options.crs;
                i = void 0 === i ? this._zoom : i;
                var n = e.zoom(t * e.scale(i));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i)
            },
            unproject: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i)
            },
            layerPointToLatLng: function (t) {
                var i = w(t).add(this.getPixelOrigin());
                return this.unproject(i)
            },
            latLngToLayerPoint: function (t) {
                return this.project(C(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(C(t))
            },
            wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(z(t))
            },
            distance: function (t, i) {
                return this.options.crs.distance(C(t), C(i))
            },
            containerPointToLayerPoint: function (t) {
                return w(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function (t) {
                return w(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function (t) {
                var i = this.containerPointToLayerPoint(w(t));
                return this.layerPointToLatLng(i)
            },
            latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
            },
            mouseEventToContainerPoint: function (t) {
                return bt(t, this._container)
            },
            mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function (t) {
                var i = this._container = V(t);
                if (!i) throw new Error("Map container not found.");
                if (i._leaflet_id) throw new Error("Map container is already initialized.");
                mt(i, "scroll", this._onScroll, this), this._containerId = n(i)
            },
            _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && ji, Q(t, "leaflet-container" + (qi ? " leaflet-touch" : "") + (Yi ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (Ai ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var i = q(t, "position");
                "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), at(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Q(t.markerPane, "leaflet-zoom-hide"), Q(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function (t, i) {
                at(this._mapPane, new x(0, 0));
                var e = !this._loaded;
                this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                var n = this._zoom !== i;
                this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
            },
            _moveStart: function (t, i) {
                return t && this.fire("zoomstart"), i || this.fire("movestart"), this
            },
            _move: function (t, i, e) {
                void 0 === i && (i = this._zoom);
                var n = this._zoom !== i;
                return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
            },
            _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function () {
                return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function (t) {
                at(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function (t) {
                this._targets = {}, this._targets[n(this._container)] = this;
                var i = t ? ft : mt;
                i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ji && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function () {
                g(this._resizeRequest), this._resizeRequest = f(function () {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function (t, i) {
                for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
                    if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                        a = !0;
                        break
                    }
                    if (e && e.listens(i, !0)) {
                        if (s && !Ct(r, t)) break;
                        if (o.push(e), s) break
                    }
                    if (r === this._container) break;
                    r = r.parentNode
                }
                return o.length || a || s || !Ct(r, t) || (o = [this]), o
            },
            _handleDOMEvent: function (t) {
                if (this._loaded && !Mt(t)) {
                    var i = t.type;
                    "mousedown" !== i && "keypress" !== i || ct(t.target || t.srcElement), this._fireDOMEvent(t, i)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function (t, e, n) {
                if ("click" === t.type) {
                    var o = i({}, t);
                    o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                }
                if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                    var s = n[0];
                    "contextmenu" === e && s.listens(e, !0) && Pt(t);
                    var r = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = s.getLatLng && (!s._radius || s._radius <= 10);
                        r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                    }
                    for (var h = 0; h < n.length; h++)
                        if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function () {
                for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
            },
            whenReady: function (t, i) {
                return this._loaded ? t.call(i || this, {
                    target: this
                }) : this.on("load", t, i), this
            },
            _getMapPanePos: function () {
                return ht(this._mapPane) || new x(0, 0)
            },
            _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function (t, i) {
                return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function (t, i) {
                var e = this.getSize()._divideBy(2);
                return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return this.project(t, i)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
            },
            _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function (t, i, e) {
                if (!e) return t;
                var n = this.project(t, i),
                    o = this.getSize().divideBy(2),
                    s = new P(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, e, i);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
            },
            _limitOffset: function (t, i) {
                if (!i) return t;
                var e = this.getPixelBounds(),
                    n = new P(e.min.add(t), e.max.add(t));
                return t.add(this._getBoundsOffset(n, i))
            },
            _getBoundsOffset: function (t, i, e) {
                var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function (t, i) {
                return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
            },
            _limitZoom: function (t) {
                var i = this.getMinZoom(),
                    e = this.getMaxZoom(),
                    n = ji ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
            },
            _onPanTransitionStep: function () {
                this.fire("move")
            },
            _onPanTransitionEnd: function () {
                tt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function (t, i) {
                var e = this._getCenterOffset(t)._trunc();
                return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
            },
            _createAnimProxy: function () {
                var t = this._proxy = G("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
                    var i = ce,
                        e = this._proxy.style[i];
                    rt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function () {
                    var t = this.getCenter(),
                        i = this.getZoom();
                    rt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function () {
                K(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function (t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function (t, i, e) {
                if (this._animatingZoom) return !0;
                if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(i),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function () {
                    this._moveStart(!0, !1)._animateZoom(t, i, !0)
                }, this), !0)
            },
            _animateZoom: function (t, i, n, o) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, Q(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: i,
                    noUpdate: o
                }), setTimeout(e(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function () {
                this._animatingZoom && (this._mapPane && tt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function () {
                    this._moveEnd(!0)
                }, this))
            }
        }),
        Te = v.extend({
            options: {
                position: "topright"
            },
            initialize: function (t) {
                l(this, t)
            },
            getPosition: function () {
                return this.options.position
            },
            setPosition: function (t) {
                var i = this._map;
                return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
            },
            getContainer: function () {
                return this._container
            },
            addTo: function (t) {
                this.remove(), this._map = t;
                var i = this._container = this.onAdd(t),
                    e = this.getPosition(),
                    n = t._controlCorners[e];
                return Q(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
            },
            remove: function () {
                return this._map ? (K(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
            },
            _refocusOnMap: function (t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        }),
        ze = function (t) {
            return new Te(t)
        };
    be.include({
        addControl: function (t) {
            return t.addTo(this), this
        },
        removeControl: function (t) {
            return t.remove(), this
        },
        _initControlPos: function () {
            function t(t, o) {
                var s = e + t + " " + e + o;
                i[t + o] = G("div", s, n)
            }
            var i = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = G("div", e + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function () {
            for (var t in this._controlCorners) K(this._controlCorners[t]);
            K(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Me = Te.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, i, e, n) {
                    return e < n ? -1 : n < e ? 1 : 0
                }
            },
            initialize: function (t, i, e) {
                l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
                for (var n in t) this._addLayer(t[n], n);
                for (n in i) this._addLayer(i[n], n, !0)
            },
            onAdd: function (t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function (t) {
                return Te.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function (t, i) {
                return this._addLayer(t, i), this._map ? this._update() : this
            },
            addOverlay: function (t, i) {
                return this._addLayer(t, i, !0), this._map ? this._update() : this
            },
            removeLayer: function (t) {
                t.off("add remove", this._onLayerChange, this);
                var i = this._getLayer(n(t));
                return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
            },
            expand: function () {
                Q(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (Q(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : tt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function () {
                return tt(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function () {
                var t = "leaflet-control-layers",
                    i = this._container = G("div", t),
                    e = this.options.collapsed;
                i.setAttribute("aria-haspopup", !0), wt(i), xt(i);
                var n = this._form = G("form", t + "-list");
                e && (this._map.on("click", this.collapse, this), zi || mt(i, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = G("a", t + "-toggle", i);
                o.href = "#", o.title = "Layers", qi ? (mt(o, "click", Lt), mt(o, "click", this.expand, this)) : mt(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = G("div", t + "-base", n), this._separator = G("div", t + "-separator", n), this._overlaysList = G("div", t + "-overlays", n), i.appendChild(n)
            },
            _getLayer: function (t) {
                for (var i = 0; i < this._layers.length; i++)
                    if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
            },
            _addLayer: function (t, i, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: i,
                    overlay: n
                }), this.options.sortLayers && this._layers.sort(e(function (t, i) {
                    return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
                }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function () {
                if (!this._container) return this;
                Y(this._baseLayersList), Y(this._overlaysList), this._layerControlInputs = [];
                var t, i, e, n, o = 0;
                for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
            },
            _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var i = this._getLayer(n(t.target)),
                    e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                e && this._map.fire(e, i)
            },
            _createRadioElement: function (t, i) {
                var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = e, n.firstChild
            },
            _addItem: function (t) {
                var i, e = document.createElement("label"),
                    o = this._map.hasLayer(t.layer);
                t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), mt(i, "click", this._onInputClick, this);
                var s = document.createElement("span");
                s.innerHTML = " " + t.name;
                var r = document.createElement("div");
                return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
            },
            _onInputClick: function () {
                var t, i, e = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function () {
                for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
            },
            _expandIfNotCollapsed: function () {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function () {
                return this.expand()
            },
            _collapse: function () {
                return this.collapse()
            }
        }),
        Ce = Te.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function (t) {
                var i = "leaflet-control-zoom",
                    e = G("div", i + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
            },
            onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function () {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function () {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function (t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function (t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function (t, i, e, n, o) {
                var s = G("a", e, n);
                return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), wt(s), mt(s, "click", Lt), mt(s, "click", o, this), mt(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function () {
                var t = this._map,
                    i = "leaflet-disabled";
                tt(this._zoomInButton, i), tt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Q(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Q(this._zoomInButton, i)
            }
        });
    be.mergeOptions({
        zoomControl: !0
    }), be.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new Ce, this.addControl(this.zoomControl))
    });
    var Se = Te.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function (t) {
                var i = G("div", "leaflet-control-scale"),
                    e = this.options;
                return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function (t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function (t, i, e) {
                t.metric && (this._mScale = G("div", i, e)), t.imperial && (this._iScale = G("div", i, e))
            },
            _update: function () {
                var t = this._map,
                    i = t.getSize().y / 2,
                    e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                this._updateScales(e)
            },
            _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function (t) {
                var i = this._getRoundNum(t),
                    e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                this._updateScale(this._mScale, e, i / t)
            },
            _updateImperial: function (t) {
                var i, e, n, o = 3.2808399 * t;
                o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function (t, i, e) {
                t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
            },
            _getRoundNum: function (t) {
                var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                    e = t / i;
                return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
            }
        }),
        Ze = Te.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function (t) {
                l(this, t), this._attributions = {}
            },
            onAdd: function (t) {
                t.attributionControl = this, this._container = G("div", "leaflet-control-attribution"), wt(this._container);
                for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function (t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function (t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
            },
            removeAttribution: function (t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
            },
            _update: function () {
                if (this._map) {
                    var t = [];
                    for (var i in this._attributions) this._attributions[i] && t.push(i);
                    var e = [];
                    this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
                }
            }
        });
    be.mergeOptions({
        attributionControl: !0
    }), be.addInitHook(function () {
        this.options.attributionControl && (new Ze).addTo(this)
    });
    Te.Layers = Me, Te.Zoom = Ce, Te.Scale = Se, Te.Attribution = Ze, ze.layers = function (t, i, e) {
        return new Me(t, i, e)
    }, ze.zoom = function (t) {
        return new Ce(t)
    }, ze.scale = function (t) {
        return new Se(t)
    }, ze.attribution = function (t) {
        return new Ze(t)
    };
    var Ee = v.extend({
        initialize: function (t) {
            this._map = t
        },
        enable: function () {
            return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
        },
        disable: function () {
            return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
        },
        enabled: function () {
            return !!this._enabled
        }
    });
    Ee.addTo = function (t, i) {
        return t.addHandler(i, this), this
    };
    var ke, Ae = {
            Events: li
        },
        Be = qi ? "touchstart mousedown" : "mousedown",
        Ie = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        Oe = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        Re = ci.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function (t, i, e, n) {
                l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
            },
            enable: function () {
                this._enabled || (mt(this._dragStartTarget, Be, this._onDown, this), this._enabled = !0)
            },
            disable: function () {
                this._enabled && (Re._dragging === this && this.finishDrag(), ft(this._dragStartTarget, Be, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !$(this._element, "leaflet-zoom-anim") && !(Re._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Re._dragging = this, this._preventOutline && ct(this._element), ut(), fi(), this._moving)))) {
                    this.fire("down");
                    var i = t.touches ? t.touches[0] : t,
                        e = dt(this._element);
                    this._startPoint = new x(i.clientX, i.clientY), this._parentScale = pt(e), mt(document, Oe[t.type], this._onMove, this), mt(document, Ie[t.type], this._onUp, this)
                }
            },
            _onMove: function (t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && t.touches.length > 1) this._moved = !0;
                    else {
                        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            e = new x(i.clientX, i.clientY)._subtract(this._startPoint);
                        (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Pt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ht(this._element).subtract(e), Q(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Q(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function () {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), at(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function () {
                tt(document.body, "leaflet-dragging"), this._lastTarget && (tt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                for (var t in Oe) ft(document, Oe[t], this._onMove, this), ft(document, Ie[t], this._onUp, this);
                lt(), gi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, Re._dragging = !1
            }
        }),
        Ne = (Object.freeze || Object)({
            simplify: Zt,
            pointToSegmentDistance: Et,
            closestPointOnSegment: function (t, i, e) {
                return Dt(t, i, e)
            },
            clipSegment: It,
            _getEdgeIntersection: Ot,
            _getBitCode: Rt,
            _sqClosestPointOnSegment: Dt,
            isFlat: jt,
            _flat: Wt
        }),
        De = (Object.freeze || Object)({
            clipPolygon: Ht
        }),
        je = {
            project: function (t) {
                return new x(t.lng, t.lat)
            },
            unproject: function (t) {
                return new M(t.y, t.x)
            },
            bounds: new P([-180, -90], [180, 90])
        },
        We = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function (t) {
                var i = Math.PI / 180,
                    e = this.R,
                    n = t.lat * i,
                    o = this.R_MINOR / e,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n)
            },
            unproject: function (t) {
                for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
                return new M(a * e, t.x * e / n)
            }
        },
        He = (Object.freeze || Object)({
            LonLat: je,
            Mercator: We,
            SphericalMercator: mi
        }),
        Fe = i({}, pi, {
            code: "EPSG:3395",
            projection: We,
            transformation: function () {
                var t = .5 / (Math.PI * We.R);
                return Z(t, .5, -t, .5)
            }()
        }),
        Ue = i({}, pi, {
            code: "EPSG:4326",
            projection: je,
            transformation: Z(1 / 180, 1, -1 / 180, .5)
        }),
        Ve = i({}, di, {
            projection: je,
            transformation: Z(1, 0, -1, 0),
            scale: function (t) {
                return Math.pow(2, t)
            },
            zoom: function (t) {
                return Math.log(t) / Math.LN2
            },
            distance: function (t, i) {
                var e = i.lng - t.lng,
                    n = i.lat - t.lat;
                return Math.sqrt(e * e + n * n)
            },
            infinite: !0
        });
    di.Earth = pi, di.EPSG3395 = Fe, di.EPSG3857 = yi, di.EPSG900913 = xi, di.EPSG4326 = Ue, di.Simple = Ve;
    var qe = ci.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        remove: function () {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
            return t && t.removeLayer(this), this
        },
        getPane: function (t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
            return this._map._targets[n(t)] = this, this
        },
        removeInteractiveTarget: function (t) {
            return delete this._map._targets[n(t)], this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _layerAdd: function (t) {
            var i = t.target;
            if (i.hasLayer(this)) {
                if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                    var e = this.getEvents();
                    i.on(e, this), this.once("remove", function () {
                        i.off(e, this)
                    }, this)
                }
                this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    be.include({
        addLayer: function (t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var i = n(t);
            return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        },
        removeLayer: function (t) {
            var i = n(t);
            return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        },
        hasLayer: function (t) {
            return !!t && n(t) in this._layers
        },
        eachLayer: function (t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        },
        _addLayers: function (t) {
            for (var i = 0, e = (t = t ? oi(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
        },
        _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function (t) {
            var i = n(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
        },
        _updateZoomLevels: function () {
            var t = 1 / 0,
                i = -1 / 0,
                e = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
            }
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ge = qe.extend({
            initialize: function (t, i) {
                l(this, i), this._layers = {};
                var e, n;
                if (t)
                    for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
            },
            addLayer: function (t) {
                var i = this.getLayerId(t);
                return this._layers[i] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function (t) {
                var i = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
            },
            hasLayer: function (t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function () {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function (t) {
                var i, e, n = Array.prototype.slice.call(arguments, 1);
                for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
                return this
            },
            onAdd: function (t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function (t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function (t, i) {
                for (var e in this._layers) t.call(i, this._layers[e]);
                return this
            },
            getLayer: function (t) {
                return this._layers[t]
            },
            getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t
            },
            setZIndex: function (t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function (t) {
                return n(t)
            }
        }),
        Ke = Ge.extend({
            addLayer: function (t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Ge.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function (t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ge.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function (t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function () {
                return this.invoke("bringToFront")
            },
            bringToBack: function () {
                return this.invoke("bringToBack")
            },
            getBounds: function () {
                var t = new T;
                for (var i in this._layers) {
                    var e = this._layers[i];
                    t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                }
                return t
            }
        }),
        Ye = v.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function (t) {
                l(this, t)
            },
            createIcon: function (t) {
                return this._createIcon("icon", t)
            },
            createShadow: function (t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function (t, i) {
                var e = this._getIconUrl(t);
                if (!e) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function (t, i) {
                var e = this.options,
                    n = e[i + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = w(n),
                    s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function (t, i) {
                return i = i || document.createElement("img"), i.src = t, i
            },
            _getIconUrl: function (t) {
                return Yi && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        Xe = Ye.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function (t) {
                return Xe.imagePath || (Xe.imagePath = this._detectIconPath()), (this.options.imagePath || Xe.imagePath) + Ye.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function () {
                var t = G("div", "leaflet-default-icon-path", document.body),
                    i = q(t, "background-image") || q(t, "backgroundImage");
                return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        Je = Ee.extend({
            initialize: function (t) {
                this._marker = t
            },
            addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new Re(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), Q(t, "leaflet-marker-draggable")
            },
            removeHooks: function () {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && tt(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function () {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function (t) {
                var i = this._marker,
                    e = i._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = ht(i._icon),
                    r = e.getPixelBounds(),
                    a = e.getPixelOrigin(),
                    h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                if (!h.contains(s)) {
                    var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                    e.panBy(u, {
                        animate: !1
                    }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), at(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function () {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function (t) {
                this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
            },
            _onDrag: function (t) {
                var i = this._marker,
                    e = i._shadow,
                    n = ht(i._icon),
                    o = i._map.layerPointToLatLng(n);
                e && at(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function (t) {
                g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        $e = qe.extend({
            options: {
                icon: new Xe,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function (t, i) {
                l(this, i), this._latlng = C(t)
            },
            onAdd: function (t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function (t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function () {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function () {
                return this._latlng
            },
            setLatLng: function (t) {
                var i = this._latlng;
                return this._latlng = C(t), this.update(), this.fire("move", {
                    oldLatLng: i,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function (t) {
                return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function (t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function () {
                return this._icon
            },
            update: function () {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function () {
                var t = this.options,
                    i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    e = t.icon.createIcon(this._icon),
                    n = !1;
                e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), Q(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (Q(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function () {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), K(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function () {
                this._shadow && K(this._shadow), this._shadow = null
            },
            _setPos: function (t) {
                at(this._icon, t), this._shadow && at(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function (t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function (t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(i)
            },
            _initInteraction: function () {
                if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Je)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Je(this), t && this.dragging.enable()
                }
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function () {
                var t = this.options.opacity;
                nt(this._icon, t), this._shadow && nt(this._shadow, t)
            },
            _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function () {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        Qe = qe.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function (t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function () {
                this._renderer._removePath(this)
            },
            redraw: function () {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function (t) {
                return l(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function () {
                return this._path
            },
            _reset: function () {
                this._project(), this._update()
            },
            _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        tn = Qe.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function (t, i) {
                l(this, i), this._latlng = C(t), this._radius = this.options.radius
            },
            setLatLng: function (t) {
                return this._latlng = C(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function () {
                return this._latlng
            },
            setRadius: function (t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function () {
                return this._radius
            },
            setStyle: function (t) {
                var i = t && t.radius || this._radius;
                return Qe.prototype.setStyle.call(this, t), this.setRadius(i), this
            },
            _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function () {
                var t = this._radius,
                    i = this._radiusY || t,
                    e = this._clickTolerance(),
                    n = [t + e, i + e];
                this._pxBounds = new P(this._point.subtract(n), this._point.add(n))
            },
            _update: function () {
                this._map && this._updatePath()
            },
            _updatePath: function () {
                this._renderer._updateCircle(this)
            },
            _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        en = tn.extend({
            initialize: function (t, e, n) {
                if ("number" == typeof e && (e = i({}, n, {
                        radius: e
                    })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function (t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function () {
                return this._mRadius
            },
            getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: Qe.prototype.setStyle,
            _project: function () {
                var t = this._latlng.lng,
                    i = this._latlng.lat,
                    e = this._map,
                    n = e.options.crs;
                if (n.distance === pi.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / pi.R / o,
                        r = e.project([i + s, t]),
                        a = e.project([i - s, t]),
                        h = r.add(a).divideBy(2),
                        u = e.unproject(h).lat,
                        l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                    (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
                } else {
                    var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        }),
        nn = Qe.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function (t, i) {
                l(this, i), this._setLatLngs(t)
            },
            getLatLngs: function () {
                return this._latlngs
            },
            setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function () {
                return !this._latlngs.length
            },
            closestLayerPoint: function (t) {
                for (var i, e, n = 1 / 0, o = null, s = Dt, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                        var c = s(t, i = h[u - 1], e = h[u], !0);
                        c < n && (n = c, o = s(t, i, e))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === i) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, n = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function () {
                return this._bounds
            },
            addLatLng: function (t, i) {
                return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function (t) {
                this._bounds = new T, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function () {
                return jt(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function (t) {
                for (var i = [], e = jt(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
                return i
            },
            _project: function () {
                var t = new P;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                var i = this._clickTolerance(),
                    e = new x(i, i);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
            },
            _projectLatlngs: function (t, i, e) {
                var n, o, s = t[0] instanceof M,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                    i.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
            },
            _clipPoints: function () {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var i, e, n, o, s, r, a, h = this._parts;
                        for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                            for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = It(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
                    }
            },
            _simplifyPoints: function () {
                for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Zt(t[e], i)
            },
            _update: function () {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function () {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function (t, i) {
                var e, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (e = 0, s = this._parts.length; e < s; e++)
                    for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                        if ((i || 0 !== n) && Et(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    nn._flat = Wt;
    var on = nn.extend({
            options: {
                fill: !0
            },
            isEmpty: function () {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                    l = u.length;
                if (!l) return null;
                for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function (t) {
                var i = nn.prototype._convertLatLngs.call(this, t),
                    e = i.length;
                return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
            },
            _setLatLngs: function (t) {
                nn.prototype._setLatLngs.call(this, t), jt(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function () {
                return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function () {
                var t = this._renderer._bounds,
                    i = this.options.weight,
                    e = new x(i, i);
                if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = Ht(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function () {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function (t) {
                var i, e, n, o, s, r, a, h, u = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
                return u || nn.prototype._containsPoint.call(this, t, !0)
            }
        }),
        sn = Ke.extend({
            initialize: function (t, i) {
                l(this, i), this._layers = {}, t && this.addData(t)
            },
            addData: function (t) {
                var i, e, n, o = oi(t) ? t : t.features;
                if (o) {
                    for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = Ft(t, s);
                return r ? (r.feature = Yt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function (t) {
                return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function (t) {
                return this.eachLayer(function (i) {
                    this._setLayerStyle(i, t)
                }, this)
            },
            _setLayerStyle: function (t, i) {
                "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
            }
        }),
        rn = {
            toGeoJSON: function (t) {
                return Kt(this, {
                    type: "Point",
                    coordinates: qt(this.getLatLng(), t)
                })
            }
        };
    $e.include(rn), en.include(rn), tn.include(rn), nn.include({
        toGeoJSON: function (t) {
            var i = !jt(this._latlngs),
                e = Gt(this._latlngs, i ? 1 : 0, !1, t);
            return Kt(this, {
                type: (i ? "Multi" : "") + "LineString",
                coordinates: e
            })
        }
    }), on.include({
        toGeoJSON: function (t) {
            var i = !jt(this._latlngs),
                e = i && !jt(this._latlngs[0]),
                n = Gt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]), Kt(this, {
                type: (e ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), Ge.include({
        toMultiPoint: function (t) {
            var i = [];
            return this.eachLayer(function (e) {
                i.push(e.toGeoJSON(t).geometry.coordinates)
            }), Kt(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function (t) {
            var i = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === i) return this.toMultiPoint(t);
            var e = "GeometryCollection" === i,
                n = [];
            return this.eachLayer(function (i) {
                if (i.toGeoJSON) {
                    var o = i.toGeoJSON(t);
                    if (e) n.push(o.geometry);
                    else {
                        var s = Yt(o);
                        "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                    }
                }
            }), e ? Kt(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var an = Xt,
        hn = qe.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function (t, i, e) {
                this._url = t, this._bounds = z(i), l(this, e)
            },
            onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function () {
                K(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function () {
                return this._map && X(this._image), this
            },
            bringToBack: function () {
                return this._map && J(this._image), this
            },
            setUrl: function (t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function (t) {
                return this._bounds = z(t), this._map && this._reset(), this
            },
            getEvents: function () {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function () {
                return this._bounds
            },
            getElement: function () {
                return this._image
            },
            _initImage: function () {
                var t = "IMG" === this._url.tagName,
                    i = this._image = t ? this._url : G("img");
                Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), this.options.className && Q(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
            },
            _animateZoom: function (t) {
                var i = this._map.getZoomScale(t.zoom),
                    e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                rt(this._image, e, i)
            },
            _reset: function () {
                var t = this._image,
                    i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    e = i.getSize();
                at(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
            },
            _updateOpacity: function () {
                nt(this._image, this.options.opacity)
            },
            _updateZIndex: function () {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        un = hn.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                    i = this._image = t ? this._url : G("video");
                if (Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
                    for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
                    this._url = n.length > 0 ? o : [i.src]
                } else {
                    oi(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                    for (var a = 0; a < this._url.length; a++) {
                        var h = G("source");
                        h.src = this._url[a], i.appendChild(h)
                    }
                }
            }
        }),
        ln = qe.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function (t, i) {
                l(this, t), this._source = i
            },
            onAdd: function (t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && nt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && nt(this._container, 1), this.bringToFront()
            },
            onRemove: function (t) {
                t._fadeAnimated ? (nt(this._container, 0), this._removeTimeout = setTimeout(e(K, void 0, this._container), 200)) : K(this._container)
            },
            getLatLng: function () {
                return this._latlng
            },
            setLatLng: function (t) {
                return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function () {
                return this._content
            },
            setContent: function (t) {
                return this._content = t, this.update(), this
            },
            getElement: function () {
                return this._container
            },
            update: function () {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function () {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function () {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function () {
                return this._map && X(this._container), this
            },
            bringToBack: function () {
                return this._map && J(this._container), this
            },
            _updateContent: function () {
                if (this._content) {
                    var t = this._contentNode,
                        i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof i) t.innerHTML = i;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(i)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function () {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        i = w(this.options.offset),
                        e = this._getAnchor();
                    this._zoomAnimated ? at(this._container, t.add(e)) : i = i.add(t).add(e);
                    var n = this._containerBottom = -i.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function () {
                return [0, 0]
            }
        }),
        cn = ln.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function (t) {
                return t.openPopup(this), this
            },
            onAdd: function (t) {
                ln.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof Qe || this._source.on("preclick", yt))
            },
            onRemove: function (t) {
                ln.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof Qe || this._source.off("preclick", yt))
            },
            getEvents: function () {
                var t = ln.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function () {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function () {
                var t = "leaflet-popup",
                    i = this._container = G("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    e = this._wrapper = G("div", t + "-content-wrapper", i);
                if (this._contentNode = G("div", t + "-content", e), wt(e), xt(this._contentNode), mt(e, "contextmenu", yt), this._tipContainer = G("div", t + "-tip-container", i), this._tip = G("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = G("a", t + "-close-button", i);
                    n.href = "#close", n.innerHTML = "&#215;", mt(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function () {
                var t = this._contentNode,
                    i = t.style;
                i.width = "", i.whiteSpace = "nowrap";
                var e = t.offsetWidth;
                e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight;
                o && n > o ? (i.height = o + "px", Q(t, "leaflet-popup-scrolled")) : tt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function (t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    e = this._getAnchor();
                at(this._container, i.add(e))
            },
            _adjustPan: function () {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map,
                        i = parseInt(q(this._container, "marginBottom"), 10) || 0,
                        e = this._container.offsetHeight + i,
                        n = this._containerWidth,
                        o = new x(this._containerLeft, -e - this._containerBottom);
                    o._add(ht(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = w(this.options.autoPanPadding),
                        a = w(this.options.autoPanPaddingTopLeft || r),
                        h = w(this.options.autoPanPaddingBottomRight || r),
                        u = t.getSize(),
                        l = 0,
                        c = 0;
                    s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
                }
            },
            _onCloseButtonClick: function (t) {
                this._close(), Lt(t)
            },
            _getAnchor: function () {
                return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    be.mergeOptions({
        closePopupOnClick: !0
    }), be.include({
        openPopup: function (t, i, e) {
            return t instanceof cn || (t = new cn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), qe.include({
        bindPopup: function (t, i) {
            return t instanceof cn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new cn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function (t, i) {
            if (t instanceof qe || (i = t, t = this), t instanceof Ke)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function () {
            return this._popup
        },
        _openPopup: function (t) {
            var i = t.layer || t.target;
            this._popup && this._map && (Lt(t), i instanceof Qe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
        },
        _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var _n = ln.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function (t) {
            ln.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function (t) {
            ln.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function () {
            var t = ln.prototype.getEvents.call(this);
            return qi && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function () {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function () {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = G("div", t)
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
            var i = this._map,
                e = this._container,
                n = i.latLngToContainerPoint(i.getCenter()),
                o = i.layerPointToContainerPoint(t),
                s = this.options.direction,
                r = e.offsetWidth,
                a = e.offsetHeight,
                h = w(this.options.offset),
                u = this._getAnchor();
            "top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), tt(e, "leaflet-tooltip-right"), tt(e, "leaflet-tooltip-left"), tt(e, "leaflet-tooltip-top"), tt(e, "leaflet-tooltip-bottom"), Q(e, "leaflet-tooltip-" + s), at(e, t)
        },
        _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function (t) {
            this.options.opacity = t, this._container && nt(this._container, t)
        },
        _animateZoom: function (t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i)
        },
        _getAnchor: function () {
            return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    be.include({
        openTooltip: function (t, i, e) {
            return t instanceof _n || (t = new _n(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function (t) {
            return t && this.removeLayer(t), this
        }
    }), qe.include({
        bindTooltip: function (t, i) {
            return t instanceof _n ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new _n(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
                var i = t ? "off" : "on",
                    e = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), qi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function (t, i) {
            if (t instanceof qe || (i = t, t = this), t instanceof Ke)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (Q(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (tt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function () {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function () {
            return this._tooltip
        },
        _openTooltip: function (t) {
            var i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function (t) {
            var i, e, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
        }
    });
    var dn = Ye.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                e = this.options;
            if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                var n = w(e.bgPos);
                i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    });
    Ye.Default = Xe;
    var pn = qe.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: Wi,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function (t) {
                l(this, t)
            },
            onAdd: function () {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function (t) {
                t._addZoomLimit(this)
            },
            onRemove: function (t) {
                this._removeAllTiles(), K(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function () {
                return this._map && (X(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function () {
                return this._map && (J(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function () {
                return this._container
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function () {
                return this._loading
            },
            redraw: function () {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function () {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function () {
                return document.createElement("div")
            },
            getTileSize: function () {
                var t = this.options.tileSize;
                return t instanceof x ? t : new x(t, t)
            },
            _updateZIndex: function () {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function (t) {
                for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function () {
                if (this._map && !Li) {
                    nt(this._container, this.options.opacity);
                    var t = +new Date,
                        i = !1,
                        e = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            nt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: r,
            _initContainer: function () {
                this._container || (this._container = G("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function () {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (K(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = G("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
                }
            },
            _onUpdateLevel: r,
            _onRemoveLevel: r,
            _onCreateLevel: r,
            _pruneTiles: function () {
                if (this._map) {
                    var t, i, e = this._map.getZoom();
                    if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)
                            if ((i = this._tiles[t]).current && !i.active) {
                                var n = i.coords;
                                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                            } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function (t) {
                for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
            },
            _removeAllTiles: function () {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function () {
                for (var t in this._levels) K(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function (t, i, e, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(i / 2),
                    r = e - 1,
                    a = new x(+o, +s);
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    u = this._tiles[h];
                return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
            },
            _retainChildren: function (t, i, e, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * i; s < 2 * i + 2; s++) {
                        var r = new x(o, s);
                        r.z = e + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                    }
            },
            _resetView: function (t) {
                var i = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
            },
            _animateZoom: function (t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function (t) {
                var i = this.options;
                return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
            },
            _setView: function (t, i, e, n) {
                var o = this._clampZoom(Math.round(i));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
            },
            _setZoomTransforms: function (t, i) {
                for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
            },
            _setZoomTransform: function (t, i, e) {
                var n = this._map.getZoomScale(e, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                ji ? rt(t.el, o, n) : at(t.el, o)
            },
            _resetGrid: function () {
                var t = this._map,
                    i = t.options.crs,
                    e = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
            },
            _onMoveEnd: function () {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function (t) {
                var i = this._map,
                    e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                    n = i.getZoomScale(e, this._tileZoom),
                    o = i.project(t, this._tileZoom).floor(),
                    s = i.getSize().divideBy(2 * n);
                return new P(o.subtract(s), o.add(s))
            },
            _update: function (t) {
                var i = this._map;
                if (i) {
                    var e = this._clampZoom(i.getZoom());
                    if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var u in this._tiles) {
                            var l = this._tiles[u].coords;
                            l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1)
                        }
                        if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var _ = o.min.x; _ <= o.max.x; _++) {
                                    var d = new x(_, c);
                                    if (d.z = this._tileZoom, this._isValidTile(d)) {
                                        var p = this._tiles[this._tileCoordsToKey(d)];
                                        p ? p.current = !0 : r.push(d)
                                    }
                                }
                            if (r.sort(function (t, i) {
                                    return t.distanceTo(s) - i.distanceTo(s)
                                }), 0 !== r.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function (t) {
                var i = this._map.options.crs;
                if (!i.infinite) {
                    var e = this._globalTileRange;
                    if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return z(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function (t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function (t) {
                var i = this._map,
                    e = this.getTileSize(),
                    n = t.scaleBy(e),
                    o = n.add(e);
                return [i.unproject(n, t.z), i.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function (t) {
                var i = this._tileCoordsToNwSe(t),
                    e = new T(i[0], i[1]);
                return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
            },
            _tileCoordsToKey: function (t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function (t) {
                var i = t.split(":"),
                    e = new x(+i[0], +i[1]);
                return e.z = +i[2], e
            },
            _removeTile: function (t) {
                var i = this._tiles[t];
                i && (K(i.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: i.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function (t) {
                Q(t, "leaflet-tile");
                var i = this.getTileSize();
                t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Li && this.options.opacity < 1 && nt(t, this.options.opacity), zi && !Mi && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function (t, i) {
                var n = this._getTilePos(t),
                    o = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), at(s, n), this._tiles[o] = {
                    el: s,
                    coords: t,
                    current: !0
                }, i.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function (t, i, n) {
                i && this.fire("tileerror", {
                    error: i,
                    tile: n,
                    coords: t
                });
                var o = this._tileCoordsToKey(t);
                (n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (nt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (Q(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
            },
            _getTilePos: function (t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function (t) {
                var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                return i.z = t.z, i
            },
            _pxBoundsToTileRange: function (t) {
                var i = this.getTileSize();
                return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function () {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        mn = pn.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function (t, i) {
                this._url = t, (i = l(this, i)).detectRetina && Yi && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), zi || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function (t, i) {
                return this._url = t, i || this.redraw(), this
            },
            createTile: function (t, i) {
                var n = document.createElement("img");
                return mt(n, "load", e(this._tileOnLoad, this, i, n)), mt(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
            },
            getTileUrl: function (t) {
                var e = {
                    r: Yi ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var n = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = n), e["-y"] = n
                }
                return _(this._url, i(e, this.options))
            },
            _tileOnLoad: function (t, i) {
                Li ? setTimeout(e(t, this, null, i), 0) : t(null, i)
            },
            _tileOnError: function (t, i, e) {
                var n = this.options.errorTileUrl;
                n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
            },
            _onTileRemove: function (t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function () {
                var t = this._tileZoom,
                    i = this.options.maxZoom,
                    e = this.options.zoomReverse,
                    n = this.options.zoomOffset;
                return e && (t = i - t), t + n
            },
            _getSubdomain: function (t) {
                var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[i]
            },
            _abortLoading: function () {
                var t, i;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = si, K(i), delete this._tiles[t]))
            },
            _removeTile: function (t) {
                var i = this._tiles[t];
                if (i) return Si || i.el.setAttribute("src", si), pn.prototype._removeTile.call(this, t)
            },
            _tileReady: function (t, i, e) {
                if (this._map && (!e || e.getAttribute("src") !== si)) return pn.prototype._tileReady.call(this, t, i, e)
            }
        }),
        fn = mn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function (t, e) {
                this._url = t;
                var n = i({}, this.defaultWmsParams);
                for (var o in e) o in this.options || (n[o] = e[o]);
                var s = (e = l(this, e)).detectRetina && Yi ? 2 : 1,
                    r = this.getTileSize();
                n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
            },
            onAdd: function (t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[i] = this._crs.code, mn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function (t) {
                var i = this._tileCoordsToNwSe(t),
                    e = this._crs,
                    n = b(e.project(i[0]), e.project(i[1])),
                    o = n.min,
                    s = n.max,
                    r = (this._wmsVersion >= 1.3 && this._crs === Ue ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                    a = mn.prototype.getTileUrl.call(this, t);
                return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
            },
            setParams: function (t, e) {
                return i(this.wmsParams, t), e || this.redraw(), this
            }
        });
    mn.WMS = fn, Jt.wms = function (t, i) {
        return new fn(t, i)
    };
    var gn = qe.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function (t) {
                l(this, t), n(this), this._layers = this._layers || {}
            },
            onAdd: function () {
                this._container || (this._initContainer(), this._zoomAnimated && Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function () {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function () {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function (t, i) {
                var e = this._map.getZoomScale(i, this._zoom),
                    n = ht(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, i),
                    r = this._map.project(t, i).subtract(s),
                    a = o.multiplyBy(-e).add(n).add(o).subtract(r);
                ji ? rt(this._container, a, e) : at(this._container, a)
            },
            _reset: function () {
                this._update(), this._updateTransform(this._center, this._zoom);
                for (var t in this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function () {
                var t = this.options.padding,
                    i = this._map.getSize(),
                    e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        vn = gn.extend({
            getEvents: function () {
                var t = gn.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function () {
                this._postponeUpdatePaths = !0
            },
            onAdd: function () {
                gn.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function () {
                var t = this._container = document.createElement("canvas");
                mt(t, "mousemove", o(this._onMouseMove, 32, this), this), mt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), mt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function () {
                g(this._redrawRequest), delete this._ctx, K(this._container), ft(this._container), delete this._container
            },
            _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                    this._redrawBounds = null;
                    for (var t in this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {}, gn.prototype._update.call(this);
                    var t = this._bounds,
                        i = this._container,
                        e = t.getSize(),
                        n = Yi ? 2 : 1;
                    at(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Yi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function () {
                gn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function (t) {
                this._updateDashArray(t), this._layers[n(t)] = t;
                var i = t._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function (t) {
                this._requestRedraw(t)
            },
            _removePath: function (t) {
                var i = t._order,
                    e = i.next,
                    o = i.prev;
                e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
            },
            _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                    var i, e = t.options.dashArray.split(/[, ]+/),
                        n = [];
                    for (i = 0; i < e.length; i++) n.push(Number(e[i]));
                    t.options._dashArray = n
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function (t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
            },
            _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                    var i = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                }
            },
            _redraw: function () {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                    var i = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function () {
                var t, i = this._redrawBounds;
                if (this._ctx.save(), i) {
                    var e = i.getSize();
                    this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function (t, i) {
                if (this._drawing) {
                    var e, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
                            for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            i && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                    var i = t._point,
                        e = this._ctx,
                        n = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                    this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
                }
            },
            _fillStroke: function (t, i) {
                var e = i.options;
                e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
            },
            _onClick: function (t) {
                for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
                e && (zt(t), this._fireEvent([e], t))
            },
            _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var i = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, i)
                }
            },
            _handleMouseOut: function (t) {
                var i = this._hoveredLayer;
                i && (tt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function (t, i) {
                for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Q(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function (t, i, e) {
                this._map._fireDOMEvent(i, e || i.type, t)
            },
            _bringToFront: function (t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
            },
            _bringToBack: function (t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
            }
        }),
        yn = function () {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function (t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function (t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        xn = {
            _initContainer: function () {
                this._container = G("div", "leaflet-vml-container")
            },
            _update: function () {
                this._map._animatingZoom || (gn.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function (t) {
                var i = t._container = yn("shape");
                Q(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = yn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function (t) {
                var i = t._container;
                this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
            },
            _removePath: function (t) {
                var i = t._container;
                K(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
            },
            _updateStyle: function (t) {
                var i = t._stroke,
                    e = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = yn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = oi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = yn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
            },
            _updateCircle: function (t) {
                var i = t._point.round(),
                    e = Math.round(t._radius),
                    n = Math.round(t._radiusY || e);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
            },
            _setPath: function (t, i) {
                t._path.v = i
            },
            _bringToFront: function (t) {
                X(t._container)
            },
            _bringToBack: function (t) {
                J(t._container)
            }
        },
        wn = $i ? yn : E,
        Pn = gn.extend({
            getEvents: function () {
                var t = gn.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function () {
                this._container = wn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = wn("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function () {
                K(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function () {
                this._update()
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    gn.prototype._update.call(this);
                    var t = this._bounds,
                        i = t.getSize(),
                        e = this._container;
                    this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), at(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function (t) {
                var i = t._path = wn("path");
                t.options.className && Q(i, t.options.className), t.options.interactive && Q(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function (t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function (t) {
                K(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
            },
            _updatePath: function (t) {
                t._project(), t._update()
            },
            _updateStyle: function (t) {
                var i = t._path,
                    e = t.options;
                i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
            },
            _updatePoly: function (t, i) {
                this._setPath(t, k(t._parts, i))
            },
            _updateCircle: function (t) {
                var i = t._point,
                    e = Math.max(Math.round(t._radius), 1),
                    n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function (t, i) {
                t._path.setAttribute("d", i)
            },
            _bringToFront: function (t) {
                X(t._path)
            },
            _bringToBack: function (t) {
                J(t._path)
            }
        });
    $i && Pn.include(xn), be.include({
        getRenderer: function (t) {
            var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
        },
        _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._paneRenderers[t];
            return void 0 === i && (i = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = i), i
        },
        _createRenderer: function (t) {
            return this.options.preferCanvas && $t(t) || Qt(t)
        }
    });
    var Ln = on.extend({
        initialize: function (t, i) {
            on.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
        },
        setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
            return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Pn.create = wn, Pn.pointsToPath = k, sn.geometryToLayer = Ft, sn.coordsToLatLng = Ut, sn.coordsToLatLngs = Vt, sn.latLngToCoords = qt, sn.latLngsToCoords = Gt, sn.getFeature = Kt, sn.asFeature = Yt, be.mergeOptions({
        boxZoom: !0
    });
    var bn = Ee.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function () {
            mt(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
            ft(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function () {
            return this._moved
        },
        _destroy: function () {
            K(this._pane), delete this._pane
        },
        _resetState: function () {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function (t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), fi(), ut(), this._startPoint = this._map.mouseEventToContainerPoint(t), mt(document, {
                contextmenu: Lt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = G("div", "leaflet-zoom-box", this._container), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var i = new P(this._point, this._startPoint),
                e = i.getSize();
            at(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
        },
        _finish: function () {
            this._moved && (K(this._box), tt(this._container, "leaflet-crosshair")), gi(), lt(), ft(document, {
                contextmenu: Lt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
                var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(i).fire("boxzoomend", {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    });
    be.addInitHook("addHandler", "boxZoom", bn), be.mergeOptions({
        doubleClickZoom: !0
    });
    var Tn = Ee.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
            var i = this._map,
                e = i.getZoom(),
                n = i.options.zoomDelta,
                o = t.originalEvent.shiftKey ? e - n : e + n;
            "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
        }
    });
    be.addInitHook("addHandler", "doubleClickZoom", Tn), be.mergeOptions({
        dragging: !0,
        inertia: !Mi,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var zn = Ee.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new Re(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function () {
            tt(this._map._container, "leaflet-grab"), tt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        moving: function () {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function () {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var i = z(this._map.options.maxBounds);
                this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function (t) {
            if (this._map.options.inertia) {
                var i = this._lastTime = +new Date,
                    e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(e), this._times.push(i), this._prunePositions(i)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function (t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2),
                i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function (t, i) {
            return t - (t - i) * this._viscosity
        },
        _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    i = this._offsetLimit;
                t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function () {
            var t = this._worldWidth,
                i = Math.round(t / 2),
                e = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - i + e) % t + i - e,
                s = (n + i + e) % t - i - e,
                r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function (t) {
            var i = this._map,
                e = i.options,
                n = !e.inertia || this._times.length < 2;
            if (i.fire("dragend", t), n) i.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = e.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    u = Math.min(e.inertiaMaxSpeed, h),
                    l = a.multiplyBy(u / h),
                    c = u / (e.inertiaDeceleration * r),
                    _ = l.multiplyBy(-c / 2).round();
                _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function () {
                    i.panBy(_, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : i.fire("moveend")
            }
        }
    });
    be.addInitHook("addHandler", "dragging", zn), be.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var Mn = Ee.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), mt(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function () {
            this._removeHooks(), ft(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function () {
            if (!this._focused) {
                var t = document.body,
                    i = document.documentElement,
                    e = t.scrollTop || i.scrollTop,
                    n = t.scrollLeft || i.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, e)
            }
        },
        _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function (t) {
            var i, e, n = this._panKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
            for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
            for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
            for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
        },
        _setZoomDelta: function (t) {
            var i, e, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
            for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
        },
        _addHooks: function () {
            mt(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
            ft(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, e = t.keyCode,
                    n = this._map;
                if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                else {
                    if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                Lt(t)
            }
        }
    });
    be.addInitHook("addHandler", "keyboard", Mn), be.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var Cn = Ee.extend({
        addHooks: function () {
            mt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function () {
            ft(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function (t) {
            var i = Tt(t),
                n = this._map.options.wheelDebounceTime;
            this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Lt(t)
        },
        _performZoom: function () {
            var t = this._map,
                i = t.getZoom(),
                e = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = e ? Math.ceil(o / e) * e : o,
                r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
        }
    });
    be.addInitHook("addHandler", "scrollWheelZoom", Cn), be.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var Sn = Ee.extend({
        addHooks: function () {
            mt(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function () {
            ft(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function (t) {
            if (t.touches) {
                if (Pt(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0],
                    n = i.target;
                this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Q(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), mt(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), ft(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0],
                    e = i.target;
                e && e.tagName && "a" === e.tagName.toLowerCase() && tt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
            var i = t.touches[0];
            this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
        },
        _simulateEvent: function (t, i) {
            var e = document.createEvent("MouseEvents");
            e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
        }
    });
    qi && !Vi && be.addInitHook("addHandler", "tap", Sn), be.mergeOptions({
        touchZoom: qi && !Mi,
        bounceAtZoomLimits: !0
    });
    var Zn = Ee.extend({
        addHooks: function () {
            Q(this._map._container, "leaflet-touch-zoom"), mt(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
            tt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var e = i.mouseEventToContainerPoint(t.touches[0]),
                    n = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), mt(document, "touchmove", this._onTouchMove, this), mt(document, "touchend", this._onTouchEnd, this), Pt(t)
            }
        },
        _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = this._map,
                    n = i.mouseEventToContainerPoint(t.touches[0]),
                    o = i.mouseEventToContainerPoint(t.touches[1]),
                    s = n.distanceTo(o) / this._startDist;
                if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === r.x && 0 === r.y) return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                }
                this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
                var a = e(i._move, i, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = f(a, this, !0), Pt(t)
            }
        },
        _onTouchEnd: function () {
            this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), ft(document, "touchmove", this._onTouchMove), ft(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    be.addInitHook("addHandler", "touchZoom", Zn), be.BoxZoom = bn, be.DoubleClickZoom = Tn, be.Drag = zn, be.Keyboard = Mn, be.ScrollWheelZoom = Cn, be.Tap = Sn, be.TouchZoom = Zn, Object.freeze = ti, t.version = "1.3.4+HEAD.0e566b2", t.Control = Te, t.control = ze, t.Browser = Qi, t.Evented = ci, t.Mixin = Ae, t.Util = ui, t.Class = v, t.Handler = Ee, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = Pe, t.DomUtil = ve, t.PosAnimation = Le, t.Draggable = Re, t.LineUtil = Ne, t.PolyUtil = De, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = S, t.transformation = Z, t.Projection = He, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = di, t.GeoJSON = sn, t.geoJSON = Xt, t.geoJson = an, t.Layer = qe, t.LayerGroup = Ge, t.layerGroup = function (t, i) {
        return new Ge(t, i)
    }, t.FeatureGroup = Ke, t.featureGroup = function (t) {
        return new Ke(t)
    }, t.ImageOverlay = hn, t.imageOverlay = function (t, i, e) {
        return new hn(t, i, e)
    }, t.VideoOverlay = un, t.videoOverlay = function (t, i, e) {
        return new un(t, i, e)
    }, t.DivOverlay = ln, t.Popup = cn, t.popup = function (t, i) {
        return new cn(t, i)
    }, t.Tooltip = _n, t.tooltip = function (t, i) {
        return new _n(t, i)
    }, t.Icon = Ye, t.icon = function (t) {
        return new Ye(t)
    }, t.DivIcon = dn, t.divIcon = function (t) {
        return new dn(t)
    }, t.Marker = $e, t.marker = function (t, i) {
        return new $e(t, i)
    }, t.TileLayer = mn, t.tileLayer = Jt, t.GridLayer = pn, t.gridLayer = function (t) {
        return new pn(t)
    }, t.SVG = Pn, t.svg = Qt, t.Renderer = gn, t.Canvas = vn, t.canvas = $t, t.Path = Qe, t.CircleMarker = tn, t.circleMarker = function (t, i) {
        return new tn(t, i)
    }, t.Circle = en, t.circle = function (t, i, e) {
        return new en(t, i, e)
    }, t.Polyline = nn, t.polyline = function (t, i) {
        return new nn(t, i)
    }, t.Polygon = on, t.polygon = function (t, i) {
        return new on(t, i)
    }, t.Rectangle = Ln, t.rectangle = function (t, i) {
        return new Ln(t, i)
    }, t.Map = be, t.map = function (t, i) {
        return new be(t, i)
    };
    var En = window.L;
    t.noConflict = function () {
        return window.L = En, this
    }, window.L = t
});
// End leaflet map