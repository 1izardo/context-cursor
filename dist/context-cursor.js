var zi = Object.defineProperty;
var Li = (u, t, e) => t in u ? zi(u, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[t] = e;
var mt = (u, t, e) => (Li(u, typeof t != "symbol" ? t + "" : t, e), e);
const Bi = (u) => {
  if (u) {
    const t = document.createElement("div");
    return t.setAttribute(
      "style",
      `opacity: 0; transition: opacity 0.5s ease-in-out; transform: translate(50vw, 50vh); height: ${u.radius}px; width: ${u.radius}px;`
    ), t.setAttribute("class", "c-cursor"), document.body.prepend(t), t;
  }
}, Ii = `
:root {
  --main-cursor-clr: rgb(0, 0, 0, 0.2);
  --main-cursor-hover-clr: rgb(0, 0, 0, 0.07);
  --ghost-shadow: 0 7px 15px rgba(0, 0, 0, 0.14); }

body {
  margin: 0;
  padding: 0; }

.c-cursor {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 200px;
  background-color: var(--main-cursor-clr);
  transition: background-color 0.2s ease-in-out;
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`, Ni = () => {
  var u = document.createElement("style");
  u.type = "text/css", u.innerText = Ii, document.head.appendChild(u);
}, ye = (u, t, e, r) => (u - t - e / 2) / r, K = {
  dataAttr: "data-ccursor",
  noPadding: "noPadding",
  noParallax: "noParallax",
  lift: "lift"
}, st = (u, t) => {
  var e;
  return !!((e = u.getAttribute(K.dataAttr)) != null && e.includes(t));
}, Yi = (u) => getComputedStyle(document.documentElement).getPropertyValue(u);
function xt(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function Br(u, t) {
  u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t;
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var rt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Zt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, nr, G, Y, ut = 1e8, D = 1 / ut, Xe = Math.PI * 2, Vi = Xe / 4, Ui = 0, Ir = Math.sqrt, Xi = Math.cos, qi = Math.sin, X = function(t) {
  return typeof t == "string";
}, z = function(t) {
  return typeof t == "function";
}, bt = function(t) {
  return typeof t == "number";
}, sr = function(t) {
  return typeof t > "u";
}, pt = function(t) {
  return typeof t == "object";
}, Z = function(t) {
  return t !== !1;
}, Nr = function() {
  return typeof window < "u";
}, xe = function(t) {
  return z(t) || X(t);
}, Yr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, H = Array.isArray, qe = /(?:-?\.?\d|\.)+/gi, Vr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Fe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ur = /[+-]=-?[.\d]+/, Xr = /[^,'"\[\]\s]+/gi, Wi = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, A, ot, We, ar, it = {}, we = {}, qr, Wr = function(t) {
  return (we = Xt(t, it)) && nt;
}, or = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Pe = function(t, e) {
  return !e && console.warn(t);
}, Gr = function(t, e) {
  return t && (it[t] = e) && we && (we[t] = e) || it;
}, le = function() {
  return 0;
}, Gi = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ve = {
  suppressEvents: !0,
  kill: !1
}, Hi = {
  suppressEvents: !0
}, ur = {}, Ot = [], Ge = {}, Hr, tt = {}, ze = {}, Tr = 30, Te = [], hr = "", fr = function(t) {
  var e = t[0], r, i;
  if (pt(e) || z(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Te.length; i-- && !Te[i].targetTest(e); )
      ;
    r = Te[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new pi(t[i], r))) || t.splice(i, 1);
  return t;
}, Yt = function(t) {
  return t._gsap || fr(ht(t))[0]._gsap;
}, $r = function(t, e, r) {
  return (r = t[e]) && z(r) ? t[e]() : sr(r) && t.getAttribute && t.getAttribute(e) || r;
}, j = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, L = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, $t = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, $i = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Se = function() {
  var t = Ot.length, e = Ot.slice(0), r, i;
  for (Ge = {}, Ot.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Kr = function(t, e, r, i) {
  Ot.length && !G && Se(), t.render(e, r, i || G && e < 0 && (t._initted || t._startAt)), Ot.length && !G && Se();
}, Qr = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Xr).length < 2 ? e : X(t) ? t.trim() : t;
}, Zr = function(t) {
  return t;
}, lt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Ki = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Xt = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, br = function u(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = pt(e[r]) ? u(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Ce = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, ue = function(t) {
  var e = t.parent || A, r = t.keyframes ? Ki(H(t.keyframes)) : lt;
  if (Z(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Qi = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, jr = function(t, e, r, i, n) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = t[i], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, Re = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Mt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, Vt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Zi = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, He = function(t, e, r, i) {
  return t._startAt && (G ? t._startAt.revert(ve) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, ji = function u(t) {
  return !t || t._ts && u(t.parent);
}, wr = function(t) {
  return t._repeat ? jt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, jt = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, Oe = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ae = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
}, Ee = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = q(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ae(t), r._dirty || Vt(r, t)), t;
}, Jr = function(t, e) {
  var r;
  if ((e._time || e._initted && !e._dur) && (r = Oe(t.rawTime(), e), (!e._dur || me(0, e.totalDuration(), r) - e._tTime > D) && e.render(r, !0)), Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -D;
  }
}, ct = function(t, e, r, i) {
  return e.parent && Mt(e), e._start = q((bt(r) ? r : r || t !== A ? at(t, r, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), jr(t, e, "_first", "_last", t._sort ? "_start" : 0), $e(e) || (t._recent = e), i || Jr(t, e), t._ts < 0 && Ee(t, t._tTime), t;
}, ti = function(t, e) {
  return (it.ScrollTrigger || or("scrollTrigger", e)) && it.ScrollTrigger.create(e, t);
}, ei = function(t, e, r, i, n) {
  if (_r(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !G && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Hr !== et.frame)
    return Ot.push(t), t._lazy = [n, i], 1;
}, Ji = function u(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
}, $e = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, tn = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Ji(t) && !(!t._initted && $e(t)) || (t._ts < 0 || t._dp._ts < 0) && !$e(t)) ? 0 : 1, a = t._rDelay, o = 0, h, f, _;
  if (a && t._repeat && (o = me(0, t._tDur, e), f = jt(o, a), t._yoyo && f & 1 && (s = 1 - s), f !== jt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || G || i || t._zTime === D || !e && t._zTime) {
    if (!t._initted && ei(t, e, i, r, o))
      return;
    for (_ = t._zTime, t._zTime = e || (r ? D : 0), r || (r = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, h = t._pt; h; )
      h.r(s, h.d), h = h._next;
    e < 0 && He(t, e, r, !0), t._onUpdate && !r && ft(t, "onUpdate"), o && t._repeat && !r && t.parent && ft(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Mt(t, 1), !r && !G && (ft(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, en = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, Jt = function(t, e, r, i) {
  var n = t._repeat, s = q(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Ee(t, t._tTime = t._tDur * a), t.parent && Ae(t), r || Vt(t.parent, t), t;
}, Pr = function(t) {
  return t instanceof Q ? Vt(t) : Jt(t, t._dur);
}, rn = {
  _start: 0,
  endTime: le,
  totalDuration: le
}, at = function u(t, e, r) {
  var i = t.labels, n = t._recent || rn, s = t.duration() >= ut ? n.endTime(!1) : t._dur, a, o, h;
  return X(e) && (isNaN(e) || e in i) ? (o = e.charAt(0), h = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (h ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = s), i[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), h && r && (o = o / 100 * (H(r) ? r[0] : r).totalDuration()), a > 1 ? u(t, e.substr(0, a - 1), r) + o : s + o)) : e == null ? s : +e;
}, he = function(t, e, r) {
  var i = bt(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (a = s, o = r; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = Z(o.vars.inherit) && o.parent;
    s.immediateRender = Z(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new U(e[0], s, e[n + 1]);
}, Rt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, me = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, W = function(t, e) {
  return !X(t) || !(e = Wi.exec(t)) ? "" : e[1];
}, nn = function(t, e, r) {
  return Rt(r, function(i) {
    return me(t, e, i);
  });
}, Ke = [].slice, ri = function(t, e) {
  return t && pt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && pt(t[0])) && !t.nodeType && t !== ot;
}, sn = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return X(i) && !e || ri(i, 1) ? (n = r).push.apply(n, ht(i)) : r.push(i);
  }) || r;
}, ht = function(t, e, r) {
  return Y && !e && Y.selector ? Y.selector(t) : X(t) && !r && (We || !te()) ? Ke.call((e || ar).querySelectorAll(t), 0) : H(t) ? sn(t, r) : ri(t) ? Ke.call(t, 0) : t ? [t] : [];
}, Qe = function(t) {
  return t = ht(t)[0] || Pe("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return ht(e, r.querySelectorAll ? r : r === t ? Pe("Invalid scope") || ar.createElement("div") : t);
  };
}, ii = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ni = function(t) {
  if (z(t))
    return t;
  var e = pt(t) ? t : {
    each: t
  }, r = Ut(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = i > 0 && i < 1, o = isNaN(i) || a, h = e.axis, f = i, _ = i;
  return X(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && o && (f = i[0], _ = i[1]), function(c, d, p) {
    var l = (p || e).length, g = s[l], m, y, v, T, x, S, P, w, b;
    if (!g) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, ut])[1], !b) {
        for (P = -ut; P < (P = p[b++].getBoundingClientRect().left) && b < l; )
          ;
        b--;
      }
      for (g = s[l] = [], m = o ? Math.min(b, l) * f - 0.5 : i % b, y = b === ut ? 0 : o ? l * _ / b - 0.5 : i / b | 0, P = 0, w = ut, S = 0; S < l; S++)
        v = S % b - m, T = y - (S / b | 0), g[S] = x = h ? Math.abs(h === "y" ? T : v) : Ir(v * v + T * T), x > P && (P = x), x < w && (w = x);
      i === "random" && ii(g), g.max = P - w, g.min = w, g.v = l = (parseFloat(e.amount) || parseFloat(e.each) * (b > l ? l - 1 : h ? h === "y" ? l / b : b : Math.max(b, l / b)) || 0) * (i === "edges" ? -1 : 1), g.b = l < 0 ? n - l : n, g.u = W(e.amount || e.each) || 0, r = r && l < 0 ? _i(r) : r;
    }
    return l = (g[c] - g.min) / g.max || 0, q(g.b + (r ? r(l) : l) * g.v) + g.u;
  };
}, Ze = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = q(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (bt(r) ? 0 : W(r));
  };
}, si = function(t, e) {
  var r = H(t), i, n;
  return !r && pt(t) && (i = r = t.radius || ut, t.values ? (t = ht(t.values), (n = !bt(t[0])) && (i *= i)) : t = Ze(t.increment)), Rt(e, r ? z(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), h = ut, f = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - a, d = t[_].y - o, c = c * c + d * d) : c = Math.abs(t[_] - a), c < h && (h = c, f = _);
    return f = !i || h <= i ? t[f] : s, n || f === s || bt(s) ? f : f + W(s);
  } : Ze(t));
}, ai = function(t, e, r, i) {
  return Rt(H(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, an = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, on = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || W(r));
  };
}, un = function(t, e, r) {
  return ui(t, e, 0, 1, r);
}, oi = function(t, e, r) {
  return Rt(r, function(i) {
    return t[~~e(i)];
  });
}, hn = function u(t, e, r) {
  var i = e - t;
  return H(t) ? oi(t, u(0, t.length), e) : Rt(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, fn = function u(t, e, r) {
  var i = e - t, n = i * 2;
  return H(t) ? oi(t, u(0, t.length - 1), e) : Rt(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, _e = function(t) {
  for (var e = 0, r = "", i, n, s, a; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), a = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(a ? Xr : qe), r += t.substr(e, i - e) + ai(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, ui = function(t, e, r, i, n) {
  var s = e - t, a = i - r;
  return Rt(n, function(o) {
    return r + ((o - t) / s * a || 0);
  });
}, ln = function u(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = X(t), a = {}, o, h, f, _, c;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (H(t) && !H(e)) {
      for (f = [], _ = t.length, c = _ - 2, h = 1; h < _; h++)
        f.push(u(t[h - 1], t[h]));
      _--, n = function(p) {
        p *= _;
        var l = Math.min(c, ~~p);
        return f[l](p - l);
      }, r = e;
    } else
      i || (t = Xt(H(t) ? [] : {}, t));
    if (!f) {
      for (o in e)
        lr.call(a, t, o, "get", e[o]);
      n = function(p) {
        return pr(p, a) || (s ? t.p : t);
      };
    }
  }
  return Rt(r, n);
}, Sr = function(t, e, r) {
  var i = t.labels, n = ut, s, a, o;
  for (s in i)
    a = i[s] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, ft = function(t, e, r) {
  var i = t.vars, n = i[e], s = Y, a = t._ctx, o, h, f;
  if (n)
    return o = i[e + "Params"], h = i.callbackScope || t, r && Ot.length && Se(), a && (Y = a), f = o ? n.apply(h, o) : n.call(h), Y = s, f;
}, ae = function(t) {
  return Mt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && ft(t, "onInterrupt"), t;
}, Ht, _n = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, r = z(t), i = e && !r && t.init ? function() {
    this._props = [];
  } : t, n = {
    init: le,
    render: pr,
    add: lr,
    kill: kn,
    modifier: On,
    rawVars: 0
  }, s = {
    targetTest: 0,
    get: 0,
    getSetter: dr,
    aliases: {},
    register: 0
  };
  if (te(), t !== i) {
    if (tt[e])
      return;
    lt(i, lt(Ce(t, n), s)), Xt(i.prototype, Xt(n, Ce(t, s))), tt[i.prop = e] = i, t.targetTest && (Te.push(i), ur[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  Gr(e, i), t.register && t.register(nt, i, J);
}, M = 255, oe = {
  aqua: [0, M, M],
  lime: [0, M, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, M],
  navy: [0, 0, 128],
  white: [M, M, M],
  olive: [128, 128, 0],
  yellow: [M, M, 0],
  orange: [M, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [M, 0, 0],
  pink: [M, 192, 203],
  cyan: [0, M, M],
  transparent: [M, M, M, 0]
}, Le = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * M + 0.5 | 0;
}, hi = function(t, e, r) {
  var i = t ? bt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : oe.black, n, s, a, o, h, f, _, c, d, p;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), oe[t])
      i = oe[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & M, i & M, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & M, t & M];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = p = t.match(qe), !e)
        o = +i[0] % 360 / 360, h = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (h + 1) : f + h - f * h, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Le(o + 1 / 3, n, s), i[1] = Le(o, n, s), i[2] = Le(o - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(Vr), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(qe) || oe.transparent;
    i = i.map(Number);
  }
  return e && !p && (n = i[0] / M, s = i[1] / M, a = i[2] / M, _ = Math.max(n, s, a), c = Math.min(n, s, a), f = (_ + c) / 2, _ === c ? o = h = 0 : (d = _ - c, h = f > 0.5 ? d / (2 - _ - c) : d / (_ + c), o = _ === n ? (s - a) / d + (s < a ? 6 : 0) : _ === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), i[0] = ~~(o + 0.5), i[1] = ~~(h * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, fi = function(t) {
  var e = [], r = [], i = -1;
  return t.split(kt).forEach(function(n) {
    var s = n.match(Gt) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, Cr = function(t, e, r) {
  var i = "", n = (t + i).match(kt), s = e ? "hsla(" : "rgba(", a = 0, o, h, f, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = hi(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), r && (f = fi(t), o = r.c, o.join(i) !== f.c.join(i)))
    for (h = t.replace(kt, "1").split(Gt), _ = h.length - 1; a < _; a++)
      i += h[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
  if (!h)
    for (h = t.split(kt), _ = h.length - 1; a < _; a++)
      i += h[a] + n[a];
  return i + h[_];
}, kt = function() {
  var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in oe)
    u += "|" + t + "\\b";
  return new RegExp(u + ")", "gi");
}(), cn = /hsl[a]?\(/, li = function(t) {
  var e = t.join(" "), r;
  if (kt.lastIndex = 0, kt.test(e))
    return r = cn.test(e), t[1] = Cr(t[1], r), t[0] = Cr(t[0], r, fi(t[1])), !0;
}, ce, et = function() {
  var u = Date.now, t = 500, e = 33, r = u(), i = r, n = 1e3 / 240, s = n, a = [], o, h, f, _, c, d, p = function l(g) {
    var m = u() - i, y = g === !0, v, T, x, S;
    if (m > t && (r += m - e), i += m, x = i - r, v = x - s, (v > 0 || y) && (S = ++_.frame, c = x - _.time * 1e3, _.time = x = x / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), y || (o = h(l)), T)
      for (d = 0; d < a.length; d++)
        a[d](x, c, S, g);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    },
    wake: function() {
      qr && (!We && Nr() && (ot = We = window, ar = ot.document || {}, it.gsap = nt, (ot.gsapVersions || (ot.gsapVersions = [])).push(nt.version), Wr(we || ot.GreenSockGlobals || !ot.gsap && ot || {}), f = ot.requestAnimationFrame), o && _.sleep(), h = f || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, ce = 1, p(2));
    },
    sleep: function() {
      (f ? ot.cancelAnimationFrame : clearTimeout)(o), ce = 0, h = le;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = _.time * 1e3 + n;
    },
    add: function(g, m, y) {
      var v = m ? function(T, x, S, P) {
        g(T, x, S, P), _.remove(v);
      } : g;
      return _.remove(g), a[y ? "unshift" : "push"](v), te(), v;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, _;
}(), te = function() {
  return !ce && et.wake();
}, C = {}, dn = /^[\d.\-M][\d.\-,\s]/, pn = /["']/g, gn = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, o, h; n < s; n++)
    o = r[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, h = o.substr(0, a), e[i] = isNaN(h) ? h.replace(pn, "").trim() : +h, i = o.substr(a + 1).trim();
  return e;
}, mn = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, yn = function(t) {
  var e = (t + "").split("("), r = C[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [gn(e[1])] : mn(t).split(",").map(Qr)) : C._CE && dn.test(t) ? C._CE("", t) : r;
}, _i = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, ci = function u(t, e) {
  for (var r = t._first, i; r; )
    r instanceof Q ? u(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? u(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, Ut = function(t, e) {
  return t && (z(t) ? t : C[t] || yn(t)) || e;
}, qt = function(t, e, r, i) {
  r === void 0 && (r = function(o) {
    return 1 - e(1 - o);
  }), i === void 0 && (i = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, s;
  return j(t, function(a) {
    C[a] = it[a] = n, C[s = a.toLowerCase()] = r;
    for (var o in n)
      C[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = C[a + "." + o] = n[o];
  }), n;
}, di = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Be = function u(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Xe * (Math.asin(1 / i) || 0), a = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * qi((f - s) * n) + 1;
  }, o = t === "out" ? a : t === "in" ? function(h) {
    return 1 - a(1 - h);
  } : di(a);
  return n = Xe / n, o.config = function(h, f) {
    return u(t, h, f);
  }, o;
}, Ie = function u(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : di(r);
  return i.config = function(n) {
    return u(t, n);
  }, i;
};
j("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
  var e = t < 5 ? t + 1 : t;
  qt(u + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
C.Linear.easeNone = C.none = C.Linear.easeIn;
qt("Elastic", Be("in"), Be("out"), Be());
(function(u, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? u * a * a : a < r ? u * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? u * (a -= 2.25 / t) * a + 0.9375 : u * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  qt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
qt("Expo", function(u) {
  return u ? Math.pow(2, 10 * (u - 1)) : 0;
});
qt("Circ", function(u) {
  return -(Ir(1 - u * u) - 1);
});
qt("Sine", function(u) {
  return u === 1 ? 1 : -Xi(u * Vi) + 1;
});
qt("Back", Ie("in"), Ie("out"), Ie());
C.SteppedEase = C.steps = it.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - D;
    return function(a) {
      return ((i * me(0, s, a) | 0) + n) * r;
    };
  }
};
Zt.ease = C["quad.out"];
j("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
  return hr += u + "," + u + "Params,";
});
var pi = function(t, e) {
  this.id = Ui++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : $r, this.set = e ? e.getSetter : dr;
}, ee = /* @__PURE__ */ function() {
  function u(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Jt(this, +e.duration, 1, 1), this.data = e.data, Y && (this._ctx = Y, Y.data.push(this)), ce || et.wake();
  }
  var t = u.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Jt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (te(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ee(this, r), !n._dp || n.parent || Jr(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ct(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === D || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Kr(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + wr(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + wr(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? jt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -D ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Oe(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -D ? 0 : this._rts, this.totalTime(me(-this._delay, this._tDur, i), !0), Ae(this), Zi(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (te(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && ct(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (Z(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Oe(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Hi);
    var i = G;
    return G = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), G = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Pr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Pr(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(at(this, r), Z(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, Z(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -D : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -D, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - D);
  }, t.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = z(r) ? r : Zr, a = function() {
        var h = i.then;
        i.then = null, z(s) && (s = s(i)) && (s.then || s === i) && (i.then = h), n(s), i.then = h;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, t.kill = function() {
    ae(this);
  }, u;
}();
lt(ee.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Q = /* @__PURE__ */ function(u) {
  Br(t, u);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = u.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Z(r.sortChildren), A && ct(r.parent || A, xt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && ti(xt(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return he(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return he(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, a) {
    return he(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, ue(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(i, n, at(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return ct(this, U.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, a, o, h, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = h, s.onCompleteParams = f, s.parent = this, new U(i, s, at(this, o)), this;
  }, e.staggerFrom = function(i, n, s, a, o, h, f) {
    return s.runBackwards = 1, ue(s).immediateRender = Z(s.immediateRender), this.staggerTo(i, n, s, a, o, h, f);
  }, e.staggerFromTo = function(i, n, s, a, o, h, f, _) {
    return a.startAt = s, ue(a).immediateRender = Z(a.immediateRender), this.staggerTo(i, n, a, o, h, f, _);
  }, e.render = function(i, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, h = this._dur, f = i <= 0 ? 0 : q(i), _ = this._zTime < 0 != i < 0 && (this._initted || !h), c, d, p, l, g, m, y, v, T, x, S, P;
    if (this !== A && f > o && i >= 0 && (f = o), f !== this._tTime || s || _) {
      if (a !== this._time && h && (f += this._time - a, i += this._time - a), c = f, T = this._start, v = this._ts, m = !v, _ && (h || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, g = h + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, n, s);
        if (c = q(f % g), f === o ? (l = this._repeat, c = h) : (l = ~~(f / g), l && l === f / g && (c = h, l--), c > h && (c = h)), x = jt(this._tTime, g), !a && this._tTime && x !== l && (x = l), S && l & 1 && (c = h - c, P = 1), l !== x && !this._lock) {
          var w = S && x & 1, b = w === (S && l & 1);
          if (l < x && (w = !w), a = w ? 0 : h, this._lock = 1, this.render(a || (P ? 0 : q(l * g)), n, !h)._lock = 0, this._tTime = f, !n && this.parent && ft(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (h = this._dur, o = this._tDur, b && (this._lock = 2, a = w ? h : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          ci(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = en(this, q(a), q(c)), y && (f -= c - (c = y._start))), this._tTime = f, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && !n && (ft(this, "onStart"), this._tTime !== f))
        return this;
      if (c >= a && i >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !m) {
              y = 0, p && (f += this._zTime = -D);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var O = i < 0 ? i : c; d; ) {
          if (p = d._prev, (d._act || O <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || G && (d._initted || d._startAt)), c !== this._time || !this._ts && !m) {
              y = 0, p && (f += this._zTime = O ? -D : D);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = T, Ae(this), this.render(i, n, s);
      this._onUpdate && !n && ft(this, "onUpdate", !0), (f === o && this._tTime >= this.totalDuration() || !f && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !h) && (f === o && this._ts > 0 || !f && this._ts < 0) && Mt(this, 1), !n && !(i < 0 && !a) && (f || a || !o) && (ft(this, f === o && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (bt(n) || (n = at(this, n, i)), !(i instanceof ee)) {
      if (H(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (X(i))
        return this.addLabel(i, n);
      if (z(i))
        i = U.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? ct(this, i, n) : this;
  }, e.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -ut);
    for (var o = [], h = this._first; h; )
      h._start >= a && (h instanceof U ? n && o.push(h) : (s && o.push(h), i && o.push.apply(o, h.getChildren(!0, n, s)))), h = h._next;
    return o;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return X(i) ? this.removeLabel(i) : z(i) ? this.killTweensOf(i) : (Re(this, i), i === this._recent && (this._recent = this._last), Vt(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(et.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), u.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = at(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var a = U.delayedCall(0, n || le, s);
    return a.data = "isPause", this._hasPause = 1, ct(this, a, at(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = at(this, i); n; )
      n._start === i && n.data === "isPause" && Mt(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), o = a.length; o--; )
      Pt !== a[o] && a[o].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], a = ht(i), o = this._first, h = bt(n), f; o; )
      o instanceof U ? $i(o._targets, a) && (h ? (!Pt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (f = o.getTweensOf(a, n)).length && s.push.apply(s, f), o = o._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = at(s, i), o = n, h = o.startAt, f = o.onStart, _ = o.onStartParams, c = o.immediateRender, d, p = U.to(s, lt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (h && "time" in h ? h.time : s._time)) / s.timeScale()) || D,
      onStart: function() {
        if (s.pause(), !d) {
          var g = n.duration || Math.abs((a - (h && "time" in h ? h.time : s._time)) / s.timeScale());
          p._dur !== g && Jt(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        f && f.apply(p, _ || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, lt({
      startAt: {
        time: at(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Sr(this, at(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Sr(this, at(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + D);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o = this.labels, h; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (h in o)
        o[h] >= s && (o[h] += i);
    return Vt(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return u.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Vt(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, o = ut, h, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        h = a._prev, a._dirty && a.totalDuration(), f = a._start, f > o && s._sort && a._ts && !s._lock ? (s._lock = 1, ct(s, a, f - a._delay, 1)._lock = 0) : o = f, f < 0 && a._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = h;
      Jt(s, s === A && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (A._ts && (Kr(A, Oe(i, A)), Hr = et.frame), et.frame >= Tr) {
      Tr += rt.autoSleep || 120;
      var n = A._first;
      if ((!n || !n._ts) && rt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
}(ee);
lt(Q.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var xn = function(t, e, r, i, n, s, a) {
  var o = new J(this._pt, t, e, 0, 1, Ti, null, n), h = 0, f = 0, _, c, d, p, l, g, m, y;
  for (o.b = r, o.e = i, r += "", i += "", (m = ~i.indexOf("random(")) && (i = _e(i)), s && (y = [r, i], s(y, t, e), r = y[0], i = y[1]), c = r.match(Fe) || []; _ = Fe.exec(i); )
    p = _[0], l = i.substring(h, _.index), d ? d = (d + 1) % 5 : l.substr(-5) === "rgba(" && (d = 1), p !== c[f++] && (g = parseFloat(c[f - 1]) || 0, o._pt = {
      _next: o._pt,
      p: l || f === 1 ? l : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? $t(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, h = Fe.lastIndex);
  return o.c = h < i.length ? i.substring(h, i.length) : "", o.fp = a, (Ur.test(i) || m) && (o.e = 0), this._pt = o, o;
}, lr = function(t, e, r, i, n, s, a, o, h, f) {
  z(i) && (i = i(n || 0, t, s));
  var _ = t[e], c = r !== "get" ? r : z(_) ? h ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : _, d = z(_) ? h ? Pn : xi : cr, p;
  if (X(i) && (~i.indexOf("random(") && (i = _e(i)), i.charAt(1) === "=" && (p = $t(c, i) + (W(c) || 0), (p || p === 0) && (i = p))), !f || c !== i || je)
    return !isNaN(c * i) && i !== "" ? (p = new J(this._pt, t, e, +c || 0, i - (c || 0), typeof _ == "boolean" ? Cn : vi, 0, d), h && (p.fp = h), a && p.modifier(a, this, t), this._pt = p) : (!_ && !(e in t) && or(e, i), xn.call(this, t, e, c, i, d, o || rt.stringFilter, h));
}, vn = function(t, e, r, i, n) {
  if (z(t) && (t = fe(t, n, e, r, i)), !pt(t) || t.style && t.nodeType || H(t) || Yr(t))
    return X(t) ? fe(t, n, e, r, i) : t;
  var s = {}, a;
  for (a in t)
    s[a] = fe(t[a], n, e, r, i);
  return s;
}, gi = function(t, e, r, i, n, s) {
  var a, o, h, f;
  if (tt[t] && (a = new tt[t]()).init(n, a.rawVars ? e[t] : vn(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = o = new J(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== Ht))
    for (h = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--; )
      h[a._props[f]] = o;
  return a;
}, Pt, je, _r = function u(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, a = i.immediateRender, o = i.lazy, h = i.onUpdate, f = i.onUpdateParams, _ = i.callbackScope, c = i.runBackwards, d = i.yoyoEase, p = i.keyframes, l = i.autoRevert, g = t._dur, m = t._startAt, y = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : y, x = t._overwrite === "auto" && !nr, S = t.timeline, P, w, b, O, k, F, B, I, R, V, N, $, At;
  if (S && (!p || !n) && (n = "none"), t._ease = Ut(n, Zt.ease), t._yEase = d ? _i(Ut(d === !0 ? n : d, Zt.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !S && !!i.runBackwards, !S || p && !i.stagger) {
    if (I = y[0] ? Yt(y[0]).harness : 0, $ = I && i[I.prop], P = Ce(i, ur), m && (m._zTime < 0 && m.progress(1), e < 0 && c && a && !l ? m.render(-1, !0) : m.revert(c && g ? ve : Gi), m._lazy = 0), s) {
      if (Mt(t._startAt = U.set(y, lt({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !m && Z(o),
        startAt: null,
        delay: 0,
        onUpdate: h,
        onUpdateParams: f,
        callbackScope: _,
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G || !a && !l) && t._startAt.revert(ve), a && g && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && g && !m) {
      if (e && (a = !1), b = lt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !m && Z(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, P), $ && (b[I.prop] = $), Mt(t._startAt = U.set(y, b)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G ? t._startAt.revert(ve) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        u(t._startAt, D, D);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o = g && Z(o) || o && !g, w = 0; w < y.length; w++) {
      if (k = y[w], B = k._gsap || fr(y)[w]._gsap, t._ptLookup[w] = V = {}, Ge[B.id] && Ot.length && Se(), N = T === y ? w : T.indexOf(k), I && (R = new I()).init(k, $ || P, t, N, T) !== !1 && (t._pt = O = new J(t._pt, k, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(Et) {
        V[Et] = O;
      }), R.priority && (F = 1)), !I || $)
        for (b in P)
          tt[b] && (R = gi(b, P, t, N, k, T)) ? R.priority && (F = 1) : V[b] = O = lr.call(t, k, b, "get", P[b], N, T, 0, i.stringFilter);
      t._op && t._op[w] && t.kill(k, t._op[w]), x && t._pt && (Pt = t, A.killTweensOf(k, V, t.globalTime(e)), At = !t.parent, Pt = 0), t._pt && o && (Ge[B.id] = 1);
    }
    F && bi(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = h, t._initted = (!t._op || t._pt) && !At, p && e <= 0 && S.render(ut, !0, !0);
}, Tn = function(t, e, r, i, n, s, a) {
  var o = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, f, _, c;
  if (!o)
    for (o = t._ptCache[e] = [], _ = t._ptLookup, c = t._targets.length; c--; ) {
      if (h = _[c][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return je = 1, t.vars[e] = "+=0", _r(t, a), je = 0, 1;
      o.push(h);
    }
  for (c = o.length; c--; )
    f = o[c], h = f._pt || f, h.s = (i || i === 0) && !n ? i : h.s + (i || 0) + s * h.c, h.c = r - h.s, f.e && (f.e = L(r) + W(f.e)), f.b && (f.b = h.s + W(f.b));
}, bn = function(t, e) {
  var r = t[0] ? Yt(t[0]).harness : 0, i = r && r.aliases, n, s, a, o;
  if (!i)
    return e;
  n = Xt({}, e);
  for (s in i)
    if (s in n)
      for (o = i[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, wn = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, a;
  if (H(e))
    a = r[t] || (r[t] = []), e.forEach(function(o, h) {
      return a.push({
        t: h / (e.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in e)
      a = r[s] || (r[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, fe = function(t, e, r, i, n) {
  return z(t) ? t.call(e, r, i, n) : X(t) && ~t.indexOf("random(") ? _e(t) : t;
}, mi = hr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", yi = {};
j(mi + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
  return yi[u] = 1;
});
var U = /* @__PURE__ */ function(u) {
  Br(t, u);
  function t(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = u.call(this, s ? i : ue(i)) || this;
    var o = a.vars, h = o.duration, f = o.delay, _ = o.immediateRender, c = o.stagger, d = o.overwrite, p = o.keyframes, l = o.defaults, g = o.scrollTrigger, m = o.yoyoEase, y = i.parent || A, v = (H(r) || Yr(r) ? bt(r[0]) : "length" in i) ? [r] : ht(r), T, x, S, P, w, b, O, k;
    if (a._targets = v.length ? fr(v) : Pe("GSAP target " + r + " not found. https://greensock.com", !rt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || xe(h) || xe(f)) {
      if (i = a.vars, T = a.timeline = new Q({
        data: "nested",
        defaults: l || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), T.kill(), T.parent = T._dp = xt(a), T._start = 0, c || xe(h) || xe(f)) {
        if (P = v.length, O = c && ni(c), pt(c))
          for (w in c)
            ~mi.indexOf(w) && (k || (k = {}), k[w] = c[w]);
        for (x = 0; x < P; x++)
          S = Ce(i, yi), S.stagger = 0, m && (S.yoyoEase = m), k && Xt(S, k), b = v[x], S.duration = +fe(h, xt(a), x, b, v), S.delay = (+fe(f, xt(a), x, b, v) || 0) - a._delay, !c && P === 1 && S.delay && (a._delay = f = S.delay, a._start += f, S.delay = 0), T.to(b, S, O ? O(x, b, v) : 0), T._ease = C.none;
        T.duration() ? h = f = 0 : a.timeline = 0;
      } else if (p) {
        ue(lt(T.vars.defaults, {
          ease: "none"
        })), T._ease = Ut(p.ease || i.ease || "none");
        var F = 0, B, I, R;
        if (H(p))
          p.forEach(function(V) {
            return T.to(v, V, ">");
          }), T.duration();
        else {
          S = {};
          for (w in p)
            w === "ease" || w === "easeEach" || wn(w, p[w], S, p.easeEach);
          for (w in S)
            for (B = S[w].sort(function(V, N) {
              return V.t - N.t;
            }), F = 0, x = 0; x < B.length; x++)
              I = B[x], R = {
                ease: I.e,
                duration: (I.t - (x ? B[x - 1].t : 0)) / 100 * h
              }, R[w] = I.v, T.to(v, R, F), F += R.duration;
          T.duration() < h && T.to({}, {
            duration: h - T.duration()
          });
        }
      }
      h || a.duration(h = T.duration());
    } else
      a.timeline = 0;
    return d === !0 && !nr && (Pt = xt(a), A.killTweensOf(v), Pt = 0), ct(y, xt(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !h && !p && a._start === q(y._time) && Z(_) && ji(xt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -f) || 0)), g && ti(xt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var a = this._time, o = this._tDur, h = this._dur, f = i < 0, _ = i > o - D && !f ? o : i < D ? 0 : i, c, d, p, l, g, m, y, v, T;
    if (!h)
      tn(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
      if (c = _, v = this.timeline, this._repeat) {
        if (l = h + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(l * 100 + i, n, s);
        if (c = q(_ % l), _ === o ? (p = this._repeat, c = h) : (p = ~~(_ / l), p && p === _ / l && (c = h, p--), c > h && (c = h)), m = this._yoyo && p & 1, m && (T = this._yEase, c = h - c), g = jt(this._tTime, l), c === a && !s && this._initted)
          return this._tTime = _, this;
        p !== g && (v && this._yEase && ci(v, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = s = 1, this.render(q(l * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ei(this, f ? i : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (h !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(c / h), this._from && (this.ratio = y = 1 - y), c && !a && !n && (ft(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      v && v.render(i < 0 ? i : !c && m ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && He(this, i, n, s), ft(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && ft(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && He(this, i, !0, !0), (i || !h) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Mt(this, 1), !n && !(f && !a) && (_ || a || m) && (ft(this, _ === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), u.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, a) {
    ce || et.wake(), this._ts || this.play();
    var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || _r(this, o), h = this._ease(o / this._dur), Tn(this, i, n, s, a, h, o) ? this.resetTo(i, n, s, a) : (Ee(this, 0), this.parent || jr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ae(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Pt && Pt.vars.overwrite !== !0)._first || ae(this), this.parent && s !== this.timeline.totalDuration() && Jt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = i ? ht(i) : a, h = this._ptLookup, f = this._pt, _, c, d, p, l, g, m;
    if ((!n || n === "all") && Qi(a, o))
      return n === "all" && (this._pt = 0), ae(this);
    for (_ = this._op = this._op || [], n !== "all" && (X(n) && (l = {}, j(n, function(y) {
      return l[y] = 1;
    }), n = l), n = bn(a, n)), m = a.length; m--; )
      if (~o.indexOf(a[m])) {
        c = h[m], n === "all" ? (_[m] = n, p = c, d = {}) : (d = _[m] = _[m] || {}, p = n);
        for (l in p)
          g = c && c[l], g && ((!("kill" in g.d) || g.d.kill(l) === !0) && Re(this, g, "_pt"), delete c[l]), d !== "all" && (d[l] = 1);
      }
    return this._initted && !this._pt && f && ae(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return he(1, arguments);
  }, t.delayedCall = function(i, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(i, n, s) {
    return he(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return A.killTweensOf(i, n, s);
  }, t;
}(ee);
lt(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
j("staggerTo,staggerFrom,staggerFromTo", function(u) {
  U[u] = function() {
    var t = new Q(), e = Ke.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var cr = function(t, e, r) {
  return t[e] = r;
}, xi = function(t, e, r) {
  return t[e](r);
}, Pn = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Sn = function(t, e, r) {
  return t.setAttribute(e, r);
}, dr = function(t, e) {
  return z(t[e]) ? xi : sr(t[e]) && t.setAttribute ? Sn : cr;
}, vi = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Cn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Ti = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, pr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, On = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, kn = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Re(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Mn = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, bi = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, J = /* @__PURE__ */ function() {
  function u(e, r, i, n, s, a, o, h, f) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || vi, this.d = o || this, this.set = h || cr, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = u.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Mn, this.m = r, this.mt = n, this.tween = i;
  }, u;
}();
j(hr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
  return ur[u] = 1;
});
it.TweenMax = it.TweenLite = U;
it.TimelineLite = it.TimelineMax = Q;
A = new Q({
  sortChildren: !1,
  defaults: Zt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
rt.stringFilter = li;
var re = [], be = {}, Dn = [], Or = 0, Ne = function(t) {
  return (be[t] || Dn).map(function(e) {
    return e();
  });
}, Je = function() {
  var t = Date.now(), e = [];
  t - Or > 2 && (Ne("matchMediaInit"), re.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, o, h;
    for (a in i)
      s = ot.matchMedia(i[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, h = 1);
    h && (r.revert(), o && e.push(r));
  }), Ne("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r);
  }), Or = t, Ne("matchMedia"));
}, wi = /* @__PURE__ */ function() {
  function u(e, r) {
    this.selector = r && Qe(r), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e);
  }
  var t = u.prototype;
  return t.add = function(r, i, n) {
    z(r) && (n = i, i = r, r = z);
    var s = this, a = function() {
      var h = Y, f = s.selector, _;
      return h && h !== s && h.data.push(s), n && (s.selector = Qe(n)), Y = s, _ = i.apply(s, arguments), z(_) && s._r.push(_), Y = h, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = a, r === z ? a(s) : r ? s[r] = a : a;
  }, t.ignore = function(r) {
    var i = Y;
    Y = null, r(this), Y = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof u ? r.push.apply(r, i.getTweens()) : i instanceof U && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var n = this;
    if (r) {
      var s = this.getTweens();
      this.data.forEach(function(o) {
        o.data === "isFlip" && (o.revert(), o.getChildren(!0, !0, !1).forEach(function(h) {
          return s.splice(s.indexOf(h), 1);
        }));
      }), s.map(function(o) {
        return {
          g: o.globalTime(0),
          t: o
        };
      }).sort(function(o, h) {
        return h.g - o.g || -1;
      }).forEach(function(o) {
        return o.t.revert(r);
      }), this.data.forEach(function(o) {
        return !(o instanceof ee) && o.revert && o.revert(r);
      }), this._r.forEach(function(o) {
        return o(r, n);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(o) {
        return o.kill && o.kill();
      });
    if (this.clear(), i) {
      var a = re.indexOf(this);
      ~a && re.splice(a, 1);
    }
  }, t.revert = function(r) {
    this.kill(r || {});
  }, u;
}(), Rn = /* @__PURE__ */ function() {
  function u(e) {
    this.contexts = [], this.scope = e;
  }
  var t = u.prototype;
  return t.add = function(r, i, n) {
    pt(r) || (r = {
      matches: r
    });
    var s = new wi(0, n || this.scope), a = s.conditions = {}, o, h, f;
    this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (h in r)
      h === "all" ? f = 1 : (o = ot.matchMedia(r[h]), o && (re.indexOf(s) < 0 && re.push(s), (a[h] = o.matches) && (f = 1), o.addListener ? o.addListener(Je) : o.addEventListener("change", Je)));
    return f && i(s), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, u;
}(), ke = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return _n(i);
    });
  },
  timeline: function(t) {
    return new Q(t);
  },
  getTweensOf: function(t, e) {
    return A.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    X(t) && (t = ht(t)[0]);
    var n = Yt(t || {}).get, s = r ? Zr : Qr;
    return r === "native" && (r = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, r, i)) : function(a, o, h) {
      return s((tt[a] && tt[a].get || n)(t, a, o, h));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = ht(t), t.length > 1) {
      var i = t.map(function(f) {
        return nt.quickSetter(f, e, r);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    t = t[0] || {};
    var s = tt[e], a = Yt(t), o = a.harness && (a.harness.aliases || {})[e] || e, h = s ? function(f) {
      var _ = new s();
      Ht._pt = 0, _.init(t, r ? f + r : f, Ht, 0, [t]), _.render(1, _), Ht._pt && pr(1, Ht);
    } : a.set(t, o);
    return s ? h : function(f) {
      return h(t, o, r ? f + r : f, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = nt.to(t, Xt((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(o, h, f) {
      return n.resetTo(e, o, h, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return A.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ut(t.ease, Zt.ease)), br(Zt, t || {});
  },
  config: function(t) {
    return br(rt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !tt[a] && !it[a] && Pe(e + " effect requires " + a + " plugin.");
    }), ze[e] = function(a, o, h) {
      return r(ht(a), lt(o || {}, n), h);
    }, s && (Q.prototype[e] = function(a, o, h) {
      return this.add(ze[e](a, pt(o) ? o : (h = o) && {}, this), h);
    });
  },
  registerEase: function(t, e) {
    C[t] = Ut(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ut(t, e) : C;
  },
  getById: function(t) {
    return A.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new Q(t), i, n;
    for (r.smoothChildTiming = Z(t.smoothChildTiming), A.remove(r), r._dp = 0, r._time = r._tTime = A._time, i = A._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof U && i.vars.onComplete === i._targets[0])) && ct(r, i, i._start - i._delay), i = n;
    return ct(A, r, 0), r;
  },
  context: function(t, e) {
    return t ? new wi(t, e) : Y;
  },
  matchMedia: function(t) {
    return new Rn(t);
  },
  matchMediaRefresh: function() {
    return re.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Je();
  },
  addEventListener: function(t, e) {
    var r = be[t] || (be[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = be[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: hn,
    wrapYoyo: fn,
    distribute: ni,
    random: ai,
    snap: si,
    normalize: un,
    getUnit: W,
    clamp: nn,
    splitColor: hi,
    toArray: ht,
    selector: Qe,
    mapRange: ui,
    pipe: an,
    unitize: on,
    interpolate: ln,
    shuffle: ii
  },
  install: Wr,
  effects: ze,
  ticker: et,
  updateRoot: Q.updateRoot,
  plugins: tt,
  globalTimeline: A,
  core: {
    PropTween: J,
    globals: Gr,
    Tween: U,
    Timeline: Q,
    Animation: ee,
    getCache: Yt,
    _removeLinkedListItem: Re,
    reverting: function() {
      return G;
    },
    context: function(t) {
      return t && Y && (Y.data.push(t), t._ctx = Y), Y;
    },
    suppressOverwrites: function(t) {
      return nr = t;
    }
  }
};
j("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
  return ke[u] = U[u];
});
et.add(Q.updateRoot);
Ht = ke.to({}, {
  duration: 0
});
var An = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, En = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = An(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, Ye = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var o, h;
        if (X(n) && (o = {}, j(n, function(f) {
          return o[f] = 1;
        }), n = o), e) {
          o = {};
          for (h in n)
            o[h] = e(n[h]);
          n = o;
        }
        En(a, n);
      };
    }
  };
}, nt = ke.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, a, o;
    this.tween = r;
    for (s in e)
      o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      G ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, Ye("roundProps", Ze), Ye("modifiers"), Ye("snap", si)) || ke;
U.version = Q.version = nt.version = "3.11.4";
qr = 1;
Nr() && te();
C.Power0;
C.Power1;
C.Power2;
C.Power3;
C.Power4;
C.Linear;
C.Quad;
C.Cubic;
C.Quart;
C.Quint;
C.Strong;
C.Elastic;
C.Back;
C.SteppedEase;
C.Bounce;
C.Sine;
C.Expo;
C.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var kr, St, Kt, gr, Nt, Mr, mr, Fn = function() {
  return typeof window < "u";
}, wt = {}, It = 180 / Math.PI, Qt = Math.PI / 180, Wt = Math.atan2, Dr = 1e8, yr = /([A-Z])/g, zn = /(left|right|width|margin|padding|x)/i, Ln = /[\s,\(]\S/, Tt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, tr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Bn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, In = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Nn = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Pi = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Si = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Yn = function(t, e, r) {
  return t.style[e] = r;
}, Vn = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Un = function(t, e, r) {
  return t._gsap[e] = r;
}, Xn = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, qn = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Wn = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, E = "transform", _t = E + "Origin", Gn = function(t, e) {
  var r = this, i = this.target, n = i.style;
  if (t in wt) {
    if (this.tfm = this.tfm || {}, t !== "transform" && (t = Tt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
      return r.tfm[s] = vt(i, s);
    }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : vt(i, t)), this.props.indexOf(E) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(_t, e, "")), t = E;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Ci = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Hn = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].replace(yr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = mr(), n && !n.isStart && !r[E] && (Ci(r), i.uncache = 1);
  }
}, Oi = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Hn,
    save: Gn
  };
  return e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, ki, er = function(t, e) {
  var r = St.createElementNS ? St.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : St.createElement(t);
  return r.style ? r : St.createElement(t);
}, dt = function u(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(yr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && u(t, ie(e) || e, 1) || "";
}, Rr = "O,Moz,ms,Ms,Webkit".split(","), ie = function(t, e, r) {
  var i = e || Nt, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Rr[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Rr[s] : "") + t;
}, rr = function() {
  Fn() && window.document && (kr = window, St = kr.document, Kt = St.documentElement, Nt = er("div") || {
    style: {}
  }, er("div"), E = ie(E), _t = E + "Origin", Nt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ki = !!ie("perspective"), mr = nt.core.reverting, gr = 1);
}, Ve = function u(t) {
  var e = er("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (Kt.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = u;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Kt.removeChild(e), this.style.cssText = n, s;
}, Ar = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, Mi = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Ve.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Ve || (e = Ve.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Ar(t, ["x", "cx", "x1"]) || 0,
    y: +Ar(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Di = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mi(t));
}, de = function(t, e) {
  if (e) {
    var r = t.style;
    e in wt && e !== _t && (e = E), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(yr, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Ct = function(t, e, r, i, n, s) {
  var a = new J(t._pt, e, r, 0, 1, s ? Si : Pi);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, Er = {
  deg: 1,
  rad: 1,
  turn: 1
}, $n = {
  grid: 1,
  flex: 1
}, Dt = function u(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Nt.style, o = zn.test(e), h = t.tagName.toLowerCase() === "svg", f = (h ? "client" : "offset") + (o ? "Width" : "Height"), _ = 100, c = i === "px", d = i === "%", p, l, g, m;
  return i === s || !n || Er[i] || Er[s] ? n : (s !== "px" && !c && (n = u(t, e, r, "px")), m = t.getCTM && Di(t), (d || s === "%") && (wt[e] || ~e.indexOf("adius")) ? (p = m ? t.getBBox()[o ? "width" : "height"] : t[f], L(d ? n / p * _ : n / 100 * p)) : (a[o ? "width" : "height"] = _ + (c ? s : i), l = ~e.indexOf("adius") || i === "em" && t.appendChild && !h ? t : t.parentNode, m && (l = (t.ownerSVGElement || {}).parentNode), (!l || l === St || !l.appendChild) && (l = St.body), g = l._gsap, g && d && g.width && o && g.time === et.time && !g.uncache ? L(n / g.width * _) : ((d || s === "%") && !$n[dt(l, "display")] && (a.position = dt(t, "position")), l === t && (a.position = "static"), l.appendChild(Nt), p = Nt[f], l.removeChild(Nt), a.position = "absolute", o && d && (g = Yt(l), g.time = et.time, g.width = l[f]), L(c ? p * n / _ : p && n ? _ / p * n : 0))));
}, vt = function(t, e, r, i) {
  var n;
  return gr || rr(), e in Tt && e !== "transform" && (e = Tt[e], ~e.indexOf(",") && (e = e.split(",")[0])), wt[e] && e !== "transform" ? (n = ge(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : De(dt(t, _t)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Me[e] && Me[e](t, e, r) || dt(t, e) || $r(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Dt(t, e, n, r) + r : n;
}, Kn = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = ie(e, t, 1), s = n && dt(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = dt(t, "borderTopColor"));
  }
  var a = new J(this._pt, t.style, e, 0, 1, Ti), o = 0, h = 0, f, _, c, d, p, l, g, m, y, v, T, x;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (t.style[e] = i, i = dt(t, e) || i, t.style[e] = r), f = [r, i], li(f), r = f[0], i = f[1], c = r.match(Gt) || [], x = i.match(Gt) || [], x.length) {
    for (; _ = Gt.exec(i); )
      g = _[0], y = i.substring(o, _.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (l = c[h++] || "") && (d = parseFloat(l) || 0, T = l.substr((d + "").length), g.charAt(1) === "=" && (g = $t(d, g) + T), m = parseFloat(g), v = g.substr((m + "").length), o = Gt.lastIndex - v.length, v || (v = v || rt.units[e] || T, o === i.length && (i += v, a.e += v)), T !== v && (d = Dt(t, e, l, v) || 0), a._pt = {
        _next: a._pt,
        p: y || h === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = o < i.length ? i.substring(o, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? Si : Pi;
  return Ur.test(i) && (a.e = 0), this._pt = a, a;
}, Fr = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Qn = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Fr[r] || r, e[1] = Fr[i] || i, e.join(" ");
}, Zn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, a, o, h;
    if (n === "all" || n === !0)
      i.cssText = "", o = 1;
    else
      for (n = n.split(","), h = n.length; --h > -1; )
        a = n[h], wt[a] && (o = 1, a = a === "transformOrigin" ? _t : E), de(r, a);
    o && (de(r, E), s && (s.svg && r.removeAttribute("transform"), ge(r, 1), s.uncache = 1, Ci(i)));
  }
}, Me = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new J(t._pt, e, r, 0, 0, Zn);
      return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, pe = [1, 0, 0, 1, 0, 0], Ri = {}, Ai = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, zr = function(t) {
  var e = dt(t, E);
  return Ai(e) ? pe : e.substr(7).match(Vr).map(L);
}, xr = function(t, e) {
  var r = t._gsap || Yt(t), i = t.style, n = zr(t), s, a, o, h;
  return r.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? pe : n) : (n === pe && !t.offsetParent && t !== Kt && !r.svg && (o = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (h = 1, a = t.nextElementSibling, Kt.appendChild(t)), n = zr(t), o ? i.display = o : de(t, "display"), h && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Kt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ir = function(t, e, r, i, n, s) {
  var a = t._gsap, o = n || xr(t, !0), h = a.xOrigin || 0, f = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, d = o[0], p = o[1], l = o[2], g = o[3], m = o[4], y = o[5], v = e.split(" "), T = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0, S, P, w, b;
  r ? o !== pe && (P = d * g - p * l) && (w = T * (g / P) + x * (-l / P) + (l * y - g * m) / P, b = T * (-p / P) + x * (d / P) - (d * y - p * m) / P, T = w, x = b) : (S = Mi(t), T = S.x + (~v[0].indexOf("%") ? T / 100 * S.width : T), x = S.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * S.height : x)), i || i !== !1 && a.smooth ? (m = T - h, y = x - f, a.xOffset = _ + (m * d + y * l) - m, a.yOffset = c + (m * p + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = x, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[_t] = "0px 0px", s && (Ct(s, a, "xOrigin", h, T), Ct(s, a, "yOrigin", f, x), Ct(s, a, "xOffset", _, a.xOffset), Ct(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + x);
}, ge = function(t, e) {
  var r = t._gsap || new pi(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), h = dt(t, _t) || "0", f, _, c, d, p, l, g, m, y, v, T, x, S, P, w, b, O, k, F, B, I, R, V, N, $, At, Et, ne, Ft, vr, gt, zt;
  return f = _ = c = l = g = m = y = v = T = 0, d = p = 1, r.svg = !!(t.getCTM && Di(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (i[E] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[E] !== "none" ? o[E] : "")), i.scale = i.rotate = i.translate = "none"), P = xr(t, r.svg), r.svg && (r.uncache ? ($ = t.getBBox(), h = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), ir(t, N || h, !!N || r.originIsAbsolute, r.smooth !== !1, P)), x = r.xOrigin || 0, S = r.yOrigin || 0, P !== pe && (k = P[0], F = P[1], B = P[2], I = P[3], f = R = P[4], _ = V = P[5], P.length === 6 ? (d = Math.sqrt(k * k + F * F), p = Math.sqrt(I * I + B * B), l = k || F ? Wt(F, k) * It : 0, y = B || I ? Wt(B, I) * It + l : 0, y && (p *= Math.abs(Math.cos(y * Qt))), r.svg && (f -= x - (x * k + S * B), _ -= S - (x * F + S * I))) : (zt = P[6], vr = P[7], Et = P[8], ne = P[9], Ft = P[10], gt = P[11], f = P[12], _ = P[13], c = P[14], w = Wt(zt, Ft), g = w * It, w && (b = Math.cos(-w), O = Math.sin(-w), N = R * b + Et * O, $ = V * b + ne * O, At = zt * b + Ft * O, Et = R * -O + Et * b, ne = V * -O + ne * b, Ft = zt * -O + Ft * b, gt = vr * -O + gt * b, R = N, V = $, zt = At), w = Wt(-B, Ft), m = w * It, w && (b = Math.cos(-w), O = Math.sin(-w), N = k * b - Et * O, $ = F * b - ne * O, At = B * b - Ft * O, gt = I * O + gt * b, k = N, F = $, B = At), w = Wt(F, k), l = w * It, w && (b = Math.cos(w), O = Math.sin(w), N = k * b + F * O, $ = R * b + V * O, F = F * b - k * O, V = V * b - R * O, k = N, R = $), g && Math.abs(g) + Math.abs(l) > 359.9 && (g = l = 0, m = 180 - m), d = L(Math.sqrt(k * k + F * F + B * B)), p = L(Math.sqrt(V * V + zt * zt)), w = Wt(R, V), y = Math.abs(w) > 2e-4 ? w * It : 0, T = gt ? 1 / (gt < 0 ? -gt : gt) : 0), r.svg && (N = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ai(dt(t, E)), N && t.setAttribute("transform", N))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = f - ((r.xPercent = f && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = c + s, r.scaleX = L(d), r.scaleY = L(p), r.rotation = L(l) + a, r.rotationX = L(g) + a, r.rotationY = L(m) + a, r.skewX = y + a, r.skewY = v + a, r.transformPerspective = T + s, (r.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (i[_t] = De(h)), r.xOffset = r.yOffset = 0, r.force3D = rt.force3D, r.renderTransform = r.svg ? Jn : ki ? Ei : jn, r.uncache = 0, r;
}, De = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ue = function(t, e, r) {
  var i = W(e);
  return L(parseFloat(e) + parseFloat(Dt(t, "x", r + "px", i))) + i;
}, jn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ei(t, e);
}, Lt = "0deg", se = "0px", Bt = ") ", Ei = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.z, h = r.rotation, f = r.rotationY, _ = r.rotationX, c = r.skewX, d = r.skewY, p = r.scaleX, l = r.scaleY, g = r.transformPerspective, m = r.force3D, y = r.target, v = r.zOrigin, T = "", x = m === "auto" && t && t !== 1 || m === !0;
  if (v && (_ !== Lt || f !== Lt)) {
    var S = parseFloat(f) * Qt, P = Math.sin(S), w = Math.cos(S), b;
    S = parseFloat(_) * Qt, b = Math.cos(S), s = Ue(y, s, P * b * -v), a = Ue(y, a, -Math.sin(S) * -v), o = Ue(y, o, w * b * -v + v);
  }
  g !== se && (T += "perspective(" + g + Bt), (i || n) && (T += "translate(" + i + "%, " + n + "%) "), (x || s !== se || a !== se || o !== se) && (T += o !== se || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Bt), h !== Lt && (T += "rotate(" + h + Bt), f !== Lt && (T += "rotateY(" + f + Bt), _ !== Lt && (T += "rotateX(" + _ + Bt), (c !== Lt || d !== Lt) && (T += "skew(" + c + ", " + d + Bt), (p !== 1 || l !== 1) && (T += "scale(" + p + ", " + l + Bt), y.style[E] = T || "translate(0, 0)";
}, Jn = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.rotation, h = r.skewX, f = r.skewY, _ = r.scaleX, c = r.scaleY, d = r.target, p = r.xOrigin, l = r.yOrigin, g = r.xOffset, m = r.yOffset, y = r.forceCSS, v = parseFloat(s), T = parseFloat(a), x, S, P, w, b;
  o = parseFloat(o), h = parseFloat(h), f = parseFloat(f), f && (f = parseFloat(f), h += f, o += f), o || h ? (o *= Qt, h *= Qt, x = Math.cos(o) * _, S = Math.sin(o) * _, P = Math.sin(o - h) * -c, w = Math.cos(o - h) * c, h && (f *= Qt, b = Math.tan(h - f), b = Math.sqrt(1 + b * b), P *= b, w *= b, f && (b = Math.tan(f), b = Math.sqrt(1 + b * b), x *= b, S *= b)), x = L(x), S = L(S), P = L(P), w = L(w)) : (x = _, w = c, S = P = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Dt(d, "x", s, "px"), T = Dt(d, "y", a, "px")), (p || l || g || m) && (v = L(v + p - (p * x + l * P) + g), T = L(T + l - (p * S + l * w) + m)), (i || n) && (b = d.getBBox(), v = L(v + i / 100 * b.width), T = L(T + n / 100 * b.height)), b = "matrix(" + x + "," + S + "," + P + "," + w + "," + v + "," + T + ")", d.setAttribute("transform", b), y && (d.style[E] = b);
}, ts = function(t, e, r, i, n) {
  var s = 360, a = X(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? It : 1), h = o - i, f = i + h + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (h %= s, h !== h % (s / 2) && (h += h < 0 ? s : -s)), _ === "cw" && h < 0 ? h = (h + s * Dr) % s - ~~(h / s) * s : _ === "ccw" && h > 0 && (h = (h - s * Dr) % s - ~~(h / s) * s)), t._pt = c = new J(t._pt, e, r, i, h, Bn), c.e = f, c.u = "deg", t._props.push(r), c;
}, Lr = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, es = function(t, e, r) {
  var i = Lr({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, o, h, f, _, c, d, p;
  i.svg ? (h = r.getAttribute("transform"), r.setAttribute("transform", ""), s[E] = e, a = ge(r, 1), de(r, E), r.setAttribute("transform", h)) : (h = getComputedStyle(r)[E], s[E] = e, a = ge(r, 1), s[E] = h);
  for (o in wt)
    h = i[o], f = a[o], h !== f && n.indexOf(o) < 0 && (d = W(h), p = W(f), _ = d !== p ? Dt(r, o, h, p) : parseFloat(h), c = parseFloat(f), t._pt = new J(t._pt, a, o, _, c - _, tr), t._pt.u = p || 0, t._props.push(o));
  Lr(a, i);
};
j("padding,margin,Width,Radius", function(u, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? u + a : "border" + a + u;
  });
  Me[t > 1 ? "border" + u : u] = function(a, o, h, f, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return vt(a, p, h);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (f + "").split(" "), d = {}, s.forEach(function(p, l) {
      return d[p] = c[l] = c[l] || c[(l - 1) / 2 | 0];
    }), a.init(o, d, _);
  };
});
var Fi = {
  name: "css",
  register: rr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, a = t.style, o = r.vars.startAt, h, f, _, c, d, p, l, g, m, y, v, T, x, S, P, w;
    gr || rr(), this.styles = this.styles || Oi(t), w = this.styles.props, this.tween = r;
    for (l in e)
      if (l !== "autoRound" && (f = e[l], !(tt[l] && gi(l, e, r, i, t, n)))) {
        if (d = typeof f, p = Me[l], d === "function" && (f = f.call(r, i, t, n), d = typeof f), d === "string" && ~f.indexOf("random(") && (f = _e(f)), p)
          p(this, t, l, f, r) && (P = 1);
        else if (l.substr(0, 2) === "--")
          h = (getComputedStyle(t).getPropertyValue(l) + "").trim(), f += "", kt.lastIndex = 0, kt.test(h) || (g = W(h), m = W(f)), m ? g !== m && (h = Dt(t, l, h, m) + m) : g && (f += g), this.add(a, "setProperty", h, f, i, n, 0, 0, l), s.push(l), w.push(l, 0, a[l]);
        else if (d !== "undefined") {
          if (o && l in o ? (h = typeof o[l] == "function" ? o[l].call(r, i, t, n) : o[l], X(h) && ~h.indexOf("random(") && (h = _e(h)), W(h + "") || (h += rt.units[l] || W(vt(t, l)) || ""), (h + "").charAt(1) === "=" && (h = vt(t, l))) : h = vt(t, l), c = parseFloat(h), y = d === "string" && f.charAt(1) === "=" && f.substr(0, 2), y && (f = f.substr(2)), _ = parseFloat(f), l in Tt && (l === "autoAlpha" && (c === 1 && vt(t, "visibility") === "hidden" && _ && (c = 0), w.push("visibility", 0, a.visibility), Ct(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), l !== "scale" && l !== "transform" && (l = Tt[l], ~l.indexOf(",") && (l = l.split(",")[0]))), v = l in wt, v) {
            if (this.styles.save(l), T || (x = t._gsap, x.renderTransform && !e.parseTransform || ge(t, e.parseTransform), S = e.smoothOrigin !== !1 && x.smooth, T = this._pt = new J(this._pt, a, E, 0, 1, x.renderTransform, x, 0, -1), T.dep = 1), l === "scale")
              this._pt = new J(this._pt, x, "scaleY", x.scaleY, (y ? $t(x.scaleY, y + _) : _) - x.scaleY || 0, tr), this._pt.u = 0, s.push("scaleY", l), l += "X";
            else if (l === "transformOrigin") {
              w.push(_t, 0, a[_t]), f = Qn(f), x.svg ? ir(t, f, 0, S, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0, m !== x.zOrigin && Ct(this, x, "zOrigin", x.zOrigin, m), Ct(this, a, l, De(h), De(f)));
              continue;
            } else if (l === "svgOrigin") {
              ir(t, f, 1, S, 0, this);
              continue;
            } else if (l in Ri) {
              ts(this, x, l, c, y ? $t(c, y + f) : f);
              continue;
            } else if (l === "smoothOrigin") {
              Ct(this, x, "smooth", x.smooth, f);
              continue;
            } else if (l === "force3D") {
              x[l] = f;
              continue;
            } else if (l === "transform") {
              es(this, f, t);
              continue;
            }
          } else
            l in a || (l = ie(l) || l);
          if (v || (_ || _ === 0) && (c || c === 0) && !Ln.test(f) && l in a)
            g = (h + "").substr((c + "").length), _ || (_ = 0), m = W(f) || (l in rt.units ? rt.units[l] : g), g !== m && (c = Dt(t, l, h, m)), this._pt = new J(this._pt, v ? x : a, l, c, (y ? $t(c, y + _) : _) - c, !v && (m === "px" || l === "zIndex") && e.autoRound !== !1 ? Nn : tr), this._pt.u = m || 0, g !== m && m !== "%" && (this._pt.b = h, this._pt.r = In);
          else if (l in a)
            Kn.call(this, t, l, h, y ? y + f : f);
          else if (l in t)
            this.add(t, l, h || t[l], y ? y + f : f, i, n);
          else if (l !== "parseTransform") {
            or(l, f);
            continue;
          }
          v || (l in a ? w.push(l, 0, a[l]) : w.push(l, 1, h || t[l])), s.push(l);
        }
      }
    P && bi(this);
  },
  render: function(t, e) {
    if (e.tween._time || !mr())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: vt,
  aliases: Tt,
  getSetter: function(t, e, r) {
    var i = Tt[e];
    return i && i.indexOf(",") < 0 && (e = i), e in wt && e !== _t && (t._gsap.x || vt(t, "x")) ? r && Mr === r ? e === "scale" ? Xn : Un : (Mr = r || {}) && (e === "scale" ? qn : Wn) : t.style && !sr(t.style[e]) ? Yn : ~e.indexOf("-") ? Vn : dr(t, e);
  },
  core: {
    _removeProperty: de,
    _getMatrix: xr
  }
};
nt.utils.checkPrefix = ie;
nt.core.getStyleSaver = Oi;
(function(u, t, e, r) {
  var i = j(u + "," + t + "," + e, function(n) {
    wt[n] = 1;
  });
  j(t, function(n) {
    rt.units[n] = "deg", Ri[n] = 1;
  }), Tt[i[13]] = u + "," + t, j(r, function(n) {
    var s = n.split(":");
    Tt[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
j("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
  rt.units[u] = "px";
});
nt.registerPlugin(Fi);
var yt = nt.registerPlugin(Fi) || nt;
yt.core.Tween;
class rs {
  constructor(t, e, r) {
    mt(this, "cursor");
    mt(this, "cursorX", 0);
    mt(this, "cursorY", 0);
    mt(this, "props");
    mt(this, "interactElements");
    mt(this, "parallaxSpeed");
    mt(this, "isHovered", !1);
    mt(this, "cursorTarget");
    this.cursor = t, this.props = e, this.interactElements = r, this.parallaxSpeed = {
      cursor: this.props.parallaxIndex,
      target: e.parallaxIndex * 1.5
    }, document.addEventListener("wheel", () => {
      this.handleMouseOut();
    }), document.addEventListener("mousemove", (n) => {
      this.moveCursor(n);
    }), r.forEach((n) => {
      this.addInteractElement(n);
    });
    var i = new MutationObserver(() => {
      document.body.contains(this.cursorTarget) || this.resetCursor();
    });
    i.observe(document.body, {
      attributes: !1,
      childList: !0,
      subtree: !0,
      characterData: !1
    });
  }
  addInteractElement(t) {
    t.addEventListener("mouseenter", (e) => {
      this.handleMouseOver(e);
    }), t.addEventListener("mouseleave", () => {
      this.handleMouseOut();
    });
  }
  moveCursor(t) {
    if (this.cursorX = t.clientX, this.cursorY = t.clientY, this.cursor.style.opacity = "1", document.body.contains(this.cursorTarget) || this.resetCursor(), !this.isHovered)
      yt.to(this.cursor, {
        x: this.cursorX - this.props.radius / 2,
        y: this.cursorY - this.props.radius / 2,
        duration: this.props.transitionSpeed
      });
    else if (this.cursorTarget) {
      const e = Number(
        window.getComputedStyle(this.cursorTarget).borderRadius.slice(0, -2)
      );
      st(this.cursorTarget, K.lift) ? (yt.to(this.cursorTarget, {
        x: st(this.cursorTarget, K.noParallax) ? void 0 : ye(
          this.cursorX,
          this.cursorTarget.getBoundingClientRect().left,
          this.cursorTarget.clientWidth,
          this.parallaxSpeed.target
        ),
        y: st(this.cursorTarget, K.noParallax) ? void 0 : ye(
          this.cursorY,
          this.cursorTarget.getBoundingClientRect().top,
          this.cursorTarget.clientHeight,
          this.parallaxSpeed.target
        ),
        scale: 1.1,
        boxShadow: Yi("--ghost-shadow"),
        duration: this.props.transitionSpeed
      }), yt.to(this.cursor, {
        filter: "blur(8px)",
        x: this.cursorTarget.getBoundingClientRect().left + (this.cursorX - this.cursorTarget.getBoundingClientRect().left - this.cursorTarget.clientWidth / 2) / this.parallaxSpeed.cursor,
        y: this.cursorTarget.getBoundingClientRect().top + (this.cursorY - this.cursorTarget.getBoundingClientRect().top - this.cursorTarget.clientHeight / 2) / this.parallaxSpeed.cursor,
        backgroundImage: `radial-gradient(circle at ${this.cursorX - this.cursorTarget.getBoundingClientRect().left}px ${this.cursorY - this.cursorTarget.getBoundingClientRect().top}px, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
        duration: this.props.transitionSpeed
      })) : (yt.to(this.cursor, {
        x: this.cursorTarget.getBoundingClientRect().left - (st(this.cursorTarget, K.noPadding) ? 0 : this.props.hoverPadding) + (st(this.cursorTarget, K.noParallax) ? 0 : (this.cursorX - this.cursorTarget.getBoundingClientRect().left - this.cursorTarget.clientWidth / 2) / this.parallaxSpeed.cursor),
        y: this.cursorTarget.getBoundingClientRect().top - (st(this.cursorTarget, K.noPadding) ? 0 : this.props.hoverPadding) + (st(this.cursorTarget, K.noParallax) ? 0 : (this.cursorY - this.cursorTarget.getBoundingClientRect().top - this.cursorTarget.clientHeight / 2) / this.parallaxSpeed.cursor),
        borderRadius: e * (st(this.cursorTarget, K.noPadding) ? 1 : 1.5),
        width: this.cursorTarget.clientWidth + (st(this.cursorTarget, K.noPadding) ? 0 : this.props.hoverPadding * 2),
        height: this.cursorTarget.clientHeight + (st(this.cursorTarget, K.noPadding) ? 0 : this.props.hoverPadding * 2),
        duration: this.props.transitionSpeed
      }), st(this.cursorTarget, K.noParallax) || yt.to(this.cursorTarget, {
        x: -ye(
          this.cursorX,
          this.cursorTarget.getBoundingClientRect().left,
          this.cursorTarget.clientWidth,
          this.parallaxSpeed.target
        ),
        y: -ye(
          this.cursorY,
          this.cursorTarget.getBoundingClientRect().top,
          this.cursorTarget.clientHeight,
          this.parallaxSpeed.target
        ),
        duration: this.props.transitionSpeed
      }));
    }
  }
  handleMouseOver(t) {
    this.isHovered = !0, this.cursorTarget = t.target;
    const e = Number(
      window.getComputedStyle(this.cursorTarget).borderRadius.slice(0, -2)
    );
    st(this.cursorTarget, K.lift) ? (this.cursor.classList.add("c-cursor-lift_active"), yt.to(this.cursor, {
      borderRadius: e,
      width: this.cursorTarget.clientWidth,
      height: this.cursorTarget.clientHeight,
      scale: 1.1,
      duration: this.props.transitionSpeed
    })) : this.cursor.classList.add("c-cursor_active");
  }
  handleMouseOut() {
    this.resetCursor();
  }
  resetCursor() {
    this.isHovered = !1, this.cursor.classList.remove("c-cursor_active"), this.cursor.classList.remove("c-cursor-lift_active"), yt.to(this.cursor, {
      x: this.cursorX - this.props.radius / 2,
      y: this.cursorY - this.props.radius / 2,
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: "100px",
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0px)",
      duration: this.props.transitionSpeed
    }), this.cursorTarget && yt.to(this.cursorTarget, {
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
      duration: this.props.transitionSpeed
    });
  }
}
const ns = (u) => {
  const t = {
    radius: (u == null ? void 0 : u.radius) || 20,
    transitionSpeed: (u == null ? void 0 : u.transitionSpeed) || 0.2,
    parallaxIndex: (u == null ? void 0 : u.parallaxIndex) || 10,
    hoverPadding: (u == null ? void 0 : u.hoverPadding) || 6
  };
  Ni();
  const e = Bi(t);
  window.onload = () => {
    let r = document.querySelectorAll(
      `[${K.dataAttr}]`
    );
    new rs(e, t, r);
  };
};
export {
  ns as default
};
