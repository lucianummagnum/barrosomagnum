(function() {
	const U = document.createElement("link").relList;
	if(U && U.supports && U.supports("modulepreload")) return;
	for(const j of document.querySelectorAll('link[rel="modulepreload"]')) d(j);
	new MutationObserver(j => {
		for(const M of j)
			if(M.type === "childList")
				for(const R of M.addedNodes) R.tagName === "LINK" && R.rel === "modulepreload" && d(R)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function E(j) {
		const M = {};
		return j.integrity && (M.integrity = j.integrity), j.referrerPolicy && (M.referrerPolicy = j.referrerPolicy), j.crossOrigin === "use-credentials" ? M.credentials = "include" : j.crossOrigin === "anonymous" ? M.credentials = "omit" : M.credentials = "same-origin", M
	}

	function d(j) {
		if(j.ep) return;
		j.ep = !0;
		const M = E(j);
		fetch(j.href, M)
	}
})();
var us = {
		exports: {}
	},
	Sn = {};
var vd;

function P0() {
	if(vd) return Sn;
	vd = 1;
	var N = Symbol.for("react.transitional.element"),
		U = Symbol.for("react.fragment");

	function E(d, j, M) {
		var R = null;
		if(M !== void 0 && (R = "" + M), j.key !== void 0 && (R = "" + j.key), "key" in j) {
			M = {};
			for(var st in j) st !== "key" && (M[st] = j[st])
		} else M = j;
		return j = M.ref, {
			$$typeof: N,
			type: d,
			key: R,
			ref: j !== void 0 ? j : null,
			props: M
		}
	}
	return Sn.Fragment = U, Sn.jsx = E, Sn.jsxs = E, Sn
}
var pd;

function th() {
	return pd || (pd = 1, us.exports = P0()), us.exports
}
var s = th(),
	cs = {
		exports: {}
	},
	Q = {};
var xd;

function eh() {
	if(xd) return Q;
	xd = 1;
	var N = Symbol.for("react.transitional.element"),
		U = Symbol.for("react.portal"),
		E = Symbol.for("react.fragment"),
		d = Symbol.for("react.strict_mode"),
		j = Symbol.for("react.profiler"),
		M = Symbol.for("react.consumer"),
		R = Symbol.for("react.context"),
		st = Symbol.for("react.forward_ref"),
		H = Symbol.for("react.suspense"),
		z = Symbol.for("react.memo"),
		F = Symbol.for("react.lazy"),
		Y = Symbol.for("react.activity"),
		ht = Symbol.iterator;

	function $t(r) {
		return r === null || typeof r != "object" ? null : (r = ht && r[ht] || r["@@iterator"], typeof r == "function" ? r : null)
	}
	var Gt = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		Rt = Object.assign,
		Ce = {};

	function Ft(r, A, _) {
		this.props = r, this.context = A, this.refs = Ce, this.updater = _ || Gt
	}
	Ft.prototype.isReactComponent = {}, Ft.prototype.setState = function(r, A) {
		if(typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, r, A, "setState")
	}, Ft.prototype.forceUpdate = function(r) {
		this.updater.enqueueForceUpdate(this, r, "forceUpdate")
	};

	function $e() {}
	$e.prototype = Ft.prototype;

	function Ht(r, A, _) {
		this.props = r, this.context = A, this.refs = Ce, this.updater = _ || Gt
	}
	var se = Ht.prototype = new $e;
	se.constructor = Ht, Rt(se, Ft.prototype), se.isPureReactComponent = !0;
	var ze = Array.isArray;

	function Qt() {}
	var W = {
			H: null,
			A: null,
			T: null,
			S: null
		},
		Xt = Object.prototype.hasOwnProperty;

	function Ne(r, A, _) {
		var D = _.ref;
		return {
			$$typeof: N,
			type: r,
			key: A,
			ref: D !== void 0 ? D : null,
			props: _
		}
	}

	function Zl(r, A) {
		return Ne(r.type, A, r.props)
	}

	function je(r) {
		return typeof r == "object" && r !== null && r.$$typeof === N
	}

	function Zt(r) {
		var A = {
			"=": "=0",
			":": "=2"
		};
		return "$" + r.replace(/[=:]/g, function(_) {
			return A[_]
		})
	}
	var Al = /\/+/g;

	function De(r, A) {
		return typeof r == "object" && r !== null && r.key != null ? Zt("" + r.key) : A.toString(36)
	}

	function ge(r) {
		switch(r.status) {
			case "fulfilled":
				return r.value;
			case "rejected":
				throw r.reason;
			default:
				switch(typeof r.status == "string" ? r.then(Qt, Qt) : (r.status = "pending", r.then(function(A) {
						r.status === "pending" && (r.status = "fulfilled", r.value = A)
					}, function(A) {
						r.status === "pending" && (r.status = "rejected", r.reason = A)
					})), r.status) {
					case "fulfilled":
						return r.value;
					case "rejected":
						throw r.reason
				}
		}
		throw r
	}

	function g(r, A, _, D, X) {
		var L = typeof r;
		(L === "undefined" || L === "boolean") && (r = null);
		var et = !1;
		if(r === null) et = !0;
		else switch(L) {
			case "bigint":
			case "string":
			case "number":
				et = !0;
				break;
			case "object":
				switch(r.$$typeof) {
					case N:
					case U:
						et = !0;
						break;
					case F:
						return et = r._init, g(et(r._payload), A, _, D, X)
				}
		}
		if(et) return X = X(r), et = D === "" ? "." + De(r, 0) : D, ze(X) ? (_ = "", et != null && (_ = et.replace(Al, "$&/") + "/"), g(X, A, _, "", function(Ta) {
			return Ta
		})) : X != null && (je(X) && (X = Zl(X, _ + (X.key == null || r && r.key === X.key ? "" : ("" + X.key).replace(Al, "$&/") + "/") + et)), A.push(X)), 1;
		et = 0;
		var Bt = D === "" ? "." : D + ":";
		if(ze(r))
			for(var gt = 0; gt < r.length; gt++) D = r[gt], L = Bt + De(D, gt), et += g(D, A, _, L, X);
		else if(gt = $t(r), typeof gt == "function")
			for(r = gt.call(r), gt = 0; !(D = r.next()).done;) D = D.value, L = Bt + De(D, gt++), et += g(D, A, _, L, X);
		else if(L === "object") {
			if(typeof r.then == "function") return g(ge(r), A, _, D, X);
			throw A = String(r), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.")
		}
		return et
	}

	function T(r, A, _) {
		if(r == null) return r;
		var D = [],
			X = 0;
		return g(r, D, "", "", function(L) {
			return A.call(_, L, X++)
		}), D
	}

	function G(r) {
		if(r._status === -1) {
			var A = r._result;
			A = A(), A.then(function(_) {
				(r._status === 0 || r._status === -1) && (r._status = 1, r._result = _)
			}, function(_) {
				(r._status === 0 || r._status === -1) && (r._status = 2, r._result = _)
			}), r._status === -1 && (r._status = 0, r._result = A)
		}
		if(r._status === 1) return r._result.default;
		throw r._result
	}
	var nt = typeof reportError == "function" ? reportError : function(r) {
			if(typeof window == "object" && typeof window.ErrorEvent == "function") {
				var A = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
					error: r
				});
				if(!window.dispatchEvent(A)) return
			} else if(typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", r);
				return
			}
			console.error(r)
		},
		ft = {
			map: T,
			forEach: function(r, A, _) {
				T(r, function() {
					A.apply(this, arguments)
				}, _)
			},
			count: function(r) {
				var A = 0;
				return T(r, function() {
					A++
				}), A
			},
			toArray: function(r) {
				return T(r, function(A) {
					return A
				}) || []
			},
			only: function(r) {
				if(!je(r)) throw Error("React.Children.only expected to receive a single React element child.");
				return r
			}
		};
	return Q.Activity = Y, Q.Children = ft, Q.Component = Ft, Q.Fragment = E, Q.Profiler = j, Q.PureComponent = Ht, Q.StrictMode = d, Q.Suspense = H, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Q.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(r) {
			return W.H.useMemoCache(r)
		}
	}, Q.cache = function(r) {
		return function() {
			return r.apply(null, arguments)
		}
	}, Q.cacheSignal = function() {
		return null
	}, Q.cloneElement = function(r, A, _) {
		if(r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
		var D = Rt({}, r.props),
			X = r.key;
		if(A != null)
			for(L in A.key !== void 0 && (X = "" + A.key), A) !Xt.call(A, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && A.ref === void 0 || (D[L] = A[L]);
		var L = arguments.length - 2;
		if(L === 1) D.children = _;
		else if(1 < L) {
			for(var et = Array(L), Bt = 0; Bt < L; Bt++) et[Bt] = arguments[Bt + 2];
			D.children = et
		}
		return Ne(r.type, X, D)
	}, Q.createContext = function(r) {
		return r = {
			$$typeof: R,
			_currentValue: r,
			_currentValue2: r,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, r.Provider = r, r.Consumer = {
			$$typeof: M,
			_context: r
		}, r
	}, Q.createElement = function(r, A, _) {
		var D, X = {},
			L = null;
		if(A != null)
			for(D in A.key !== void 0 && (L = "" + A.key), A) Xt.call(A, D) && D !== "key" && D !== "__self" && D !== "__source" && (X[D] = A[D]);
		var et = arguments.length - 2;
		if(et === 1) X.children = _;
		else if(1 < et) {
			for(var Bt = Array(et), gt = 0; gt < et; gt++) Bt[gt] = arguments[gt + 2];
			X.children = Bt
		}
		if(r && r.defaultProps)
			for(D in et = r.defaultProps, et) X[D] === void 0 && (X[D] = et[D]);
		return Ne(r, L, X)
	}, Q.createRef = function() {
		return {
			current: null
		}
	}, Q.forwardRef = function(r) {
		return {
			$$typeof: st,
			render: r
		}
	}, Q.isValidElement = je, Q.lazy = function(r) {
		return {
			$$typeof: F,
			_payload: {
				_status: -1,
				_result: r
			},
			_init: G
		}
	}, Q.memo = function(r, A) {
		return {
			$$typeof: z,
			type: r,
			compare: A === void 0 ? null : A
		}
	}, Q.startTransition = function(r) {
		var A = W.T,
			_ = {};
		W.T = _;
		try {
			var D = r(),
				X = W.S;
			X !== null && X(_, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Qt, nt)
		} catch (L) {
			nt(L)
		} finally {
			A !== null && _.types !== null && (A.types = _.types), W.T = A
		}
	}, Q.unstable_useCacheRefresh = function() {
		return W.H.useCacheRefresh()
	}, Q.use = function(r) {
		return W.H.use(r)
	}, Q.useActionState = function(r, A, _) {
		return W.H.useActionState(r, A, _)
	}, Q.useCallback = function(r, A) {
		return W.H.useCallback(r, A)
	}, Q.useContext = function(r) {
		return W.H.useContext(r)
	}, Q.useDebugValue = function() {}, Q.useDeferredValue = function(r, A) {
		return W.H.useDeferredValue(r, A)
	}, Q.useEffect = function(r, A) {
		return W.H.useEffect(r, A)
	}, Q.useEffectEvent = function(r) {
		return W.H.useEffectEvent(r)
	}, Q.useId = function() {
		return W.H.useId()
	}, Q.useImperativeHandle = function(r, A, _) {
		return W.H.useImperativeHandle(r, A, _)
	}, Q.useInsertionEffect = function(r, A) {
		return W.H.useInsertionEffect(r, A)
	}, Q.useLayoutEffect = function(r, A) {
		return W.H.useLayoutEffect(r, A)
	}, Q.useMemo = function(r, A) {
		return W.H.useMemo(r, A)
	}, Q.useOptimistic = function(r, A) {
		return W.H.useOptimistic(r, A)
	}, Q.useReducer = function(r, A, _) {
		return W.H.useReducer(r, A, _)
	}, Q.useRef = function(r) {
		return W.H.useRef(r)
	}, Q.useState = function(r) {
		return W.H.useState(r)
	}, Q.useSyncExternalStore = function(r, A, _) {
		return W.H.useSyncExternalStore(r, A, _)
	}, Q.useTransition = function() {
		return W.H.useTransition()
	}, Q.version = "19.2.3", Q
}
var yd;

function rs() {
	return yd || (yd = 1, cs.exports = eh()), cs.exports
}
var yt = rs(),
	is = {
		exports: {}
	},
	An = {},
	ss = {
		exports: {}
	},
	fs = {};
var gd;

function lh() {
	return gd || (gd = 1, (function(N) {
		function U(g, T) {
			var G = g.length;
			g.push(T);
			t: for(; 0 < G;) {
				var nt = G - 1 >>> 1,
					ft = g[nt];
				if(0 < j(ft, T)) g[nt] = T, g[G] = ft, G = nt;
				else break t
			}
		}

		function E(g) {
			return g.length === 0 ? null : g[0]
		}

		function d(g) {
			if(g.length === 0) return null;
			var T = g[0],
				G = g.pop();
			if(G !== T) {
				g[0] = G;
				t: for(var nt = 0, ft = g.length, r = ft >>> 1; nt < r;) {
					var A = 2 * (nt + 1) - 1,
						_ = g[A],
						D = A + 1,
						X = g[D];
					if(0 > j(_, G)) D < ft && 0 > j(X, _) ? (g[nt] = X, g[D] = G, nt = D) : (g[nt] = _, g[A] = G, nt = A);
					else if(D < ft && 0 > j(X, G)) g[nt] = X, g[D] = G, nt = D;
					else break t
				}
			}
			return T
		}

		function j(g, T) {
			var G = g.sortIndex - T.sortIndex;
			return G !== 0 ? G : g.id - T.id
		}
		if(N.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var M = performance;
			N.unstable_now = function() {
				return M.now()
			}
		} else {
			var R = Date,
				st = R.now();
			N.unstable_now = function() {
				return R.now() - st
			}
		}
		var H = [],
			z = [],
			F = 1,
			Y = null,
			ht = 3,
			$t = !1,
			Gt = !1,
			Rt = !1,
			Ce = !1,
			Ft = typeof setTimeout == "function" ? setTimeout : null,
			$e = typeof clearTimeout == "function" ? clearTimeout : null,
			Ht = typeof setImmediate < "u" ? setImmediate : null;

		function se(g) {
			for(var T = E(z); T !== null;) {
				if(T.callback === null) d(z);
				else if(T.startTime <= g) d(z), T.sortIndex = T.expirationTime, U(H, T);
				else break;
				T = E(z)
			}
		}

		function ze(g) {
			if(Rt = !1, se(g), !Gt)
				if(E(H) !== null) Gt = !0, Qt || (Qt = !0, Zt());
				else {
					var T = E(z);
					T !== null && ge(ze, T.startTime - g)
				}
		}
		var Qt = !1,
			W = -1,
			Xt = 5,
			Ne = -1;

		function Zl() {
			return Ce ? !0 : !(N.unstable_now() - Ne < Xt)
		}

		function je() {
			if(Ce = !1, Qt) {
				var g = N.unstable_now();
				Ne = g;
				var T = !0;
				try {
					t: {
						Gt = !1,
						Rt && (Rt = !1, $e(W), W = -1),
						$t = !0;
						var G = ht;
						try {
							e: {
								for(se(g), Y = E(H); Y !== null && !(Y.expirationTime > g && Zl());) {
									var nt = Y.callback;
									if(typeof nt == "function") {
										Y.callback = null, ht = Y.priorityLevel;
										var ft = nt(Y.expirationTime <= g);
										if(g = N.unstable_now(), typeof ft == "function") {
											Y.callback = ft, se(g), T = !0;
											break e
										}
										Y === E(H) && d(H), se(g)
									} else d(H);
									Y = E(H)
								}
								if(Y !== null) T = !0;
								else {
									var r = E(z);
									r !== null && ge(ze, r.startTime - g), T = !1
								}
							}
							break t
						}
						finally {
							Y = null, ht = G, $t = !1
						}
						T = void 0
					}
				}
				finally {
					T ? Zt() : Qt = !1
				}
			}
		}
		var Zt;
		if(typeof Ht == "function") Zt = function() {
			Ht(je)
		};
		else if(typeof MessageChannel < "u") {
			var Al = new MessageChannel,
				De = Al.port2;
			Al.port1.onmessage = je, Zt = function() {
				De.postMessage(null)
			}
		} else Zt = function() {
			Ft(je, 0)
		};

		function ge(g, T) {
			W = Ft(function() {
				g(N.unstable_now())
			}, T)
		}
		N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(g) {
			g.callback = null
		}, N.unstable_forceFrameRate = function(g) {
			0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xt = 0 < g ? Math.floor(1e3 / g) : 5
		}, N.unstable_getCurrentPriorityLevel = function() {
			return ht
		}, N.unstable_next = function(g) {
			switch(ht) {
				case 1:
				case 2:
				case 3:
					var T = 3;
					break;
				default:
					T = ht
			}
			var G = ht;
			ht = T;
			try {
				return g()
			} finally {
				ht = G
			}
		}, N.unstable_requestPaint = function() {
			Ce = !0
		}, N.unstable_runWithPriority = function(g, T) {
			switch(g) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					g = 3
			}
			var G = ht;
			ht = g;
			try {
				return T()
			} finally {
				ht = G
			}
		}, N.unstable_scheduleCallback = function(g, T, G) {
			var nt = N.unstable_now();
			switch(typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? nt + G : nt) : G = nt, g) {
				case 1:
					var ft = -1;
					break;
				case 2:
					ft = 250;
					break;
				case 5:
					ft = 1073741823;
					break;
				case 4:
					ft = 1e4;
					break;
				default:
					ft = 5e3
			}
			return ft = G + ft, g = {
				id: F++,
				callback: T,
				priorityLevel: g,
				startTime: G,
				expirationTime: ft,
				sortIndex: -1
			}, G > nt ? (g.sortIndex = G, U(z, g), E(H) === null && g === E(z) && (Rt ? ($e(W), W = -1) : Rt = !0, ge(ze, G - nt))) : (g.sortIndex = ft, U(H, g), Gt || $t || (Gt = !0, Qt || (Qt = !0, Zt()))), g
		}, N.unstable_shouldYield = Zl, N.unstable_wrapCallback = function(g) {
			var T = ht;
			return function() {
				var G = ht;
				ht = T;
				try {
					return g.apply(this, arguments)
				} finally {
					ht = G
				}
			}
		}
	})(fs)), fs
}
var bd;

function ah() {
	return bd || (bd = 1, ss.exports = lh()), ss.exports
}
var os = {
		exports: {}
	},
	qt = {};
var Sd;

function nh() {
	if(Sd) return qt;
	Sd = 1;
	var N = rs();

	function U(H) {
		var z = "https://react.dev/errors/" + H;
		if(1 < arguments.length) {
			z += "?args[]=" + encodeURIComponent(arguments[1]);
			for(var F = 2; F < arguments.length; F++) z += "&args[]=" + encodeURIComponent(arguments[F])
		}
		return "Minified React error #" + H + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function E() {}
	var d = {
			d: {
				f: E,
				r: function() {
					throw Error(U(522))
				},
				D: E,
				C: E,
				L: E,
				m: E,
				X: E,
				S: E,
				M: E
			},
			p: 0,
			findDOMNode: null
		},
		j = Symbol.for("react.portal");

	function M(H, z, F) {
		var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: j,
			key: Y == null ? null : "" + Y,
			children: H,
			containerInfo: z,
			implementation: F
		}
	}
	var R = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

	function st(H, z) {
		if(H === "font") return "";
		if(typeof z == "string") return z === "use-credentials" ? z : ""
	}
	return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, qt.createPortal = function(H, z) {
		var F = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if(!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(U(299));
		return M(H, z, null, F)
	}, qt.flushSync = function(H) {
		var z = R.T,
			F = d.p;
		try {
			if(R.T = null, d.p = 2, H) return H()
		} finally {
			R.T = z, d.p = F, d.d.f()
		}
	}, qt.preconnect = function(H, z) {
		typeof H == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, d.d.C(H, z))
	}, qt.prefetchDNS = function(H) {
		typeof H == "string" && d.d.D(H)
	}, qt.preinit = function(H, z) {
		if(typeof H == "string" && z && typeof z.as == "string") {
			var F = z.as,
				Y = st(F, z.crossOrigin),
				ht = typeof z.integrity == "string" ? z.integrity : void 0,
				$t = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
			F === "style" ? d.d.S(H, typeof z.precedence == "string" ? z.precedence : void 0, {
				crossOrigin: Y,
				integrity: ht,
				fetchPriority: $t
			}) : F === "script" && d.d.X(H, {
				crossOrigin: Y,
				integrity: ht,
				fetchPriority: $t,
				nonce: typeof z.nonce == "string" ? z.nonce : void 0
			})
		}
	}, qt.preinitModule = function(H, z) {
		if(typeof H == "string")
			if(typeof z == "object" && z !== null) {
				if(z.as == null || z.as === "script") {
					var F = st(z.as, z.crossOrigin);
					d.d.M(H, {
						crossOrigin: F,
						integrity: typeof z.integrity == "string" ? z.integrity : void 0,
						nonce: typeof z.nonce == "string" ? z.nonce : void 0
					})
				}
			} else z == null && d.d.M(H)
	}, qt.preload = function(H, z) {
		if(typeof H == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
			var F = z.as,
				Y = st(F, z.crossOrigin);
			d.d.L(H, F, {
				crossOrigin: Y,
				integrity: typeof z.integrity == "string" ? z.integrity : void 0,
				nonce: typeof z.nonce == "string" ? z.nonce : void 0,
				type: typeof z.type == "string" ? z.type : void 0,
				fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
				referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
				imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
				imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
				media: typeof z.media == "string" ? z.media : void 0
			})
		}
	}, qt.preloadModule = function(H, z) {
		if(typeof H == "string")
			if(z) {
				var F = st(z.as, z.crossOrigin);
				d.d.m(H, {
					as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
					crossOrigin: F,
					integrity: typeof z.integrity == "string" ? z.integrity : void 0
				})
			} else d.d.m(H)
	}, qt.requestFormReset = function(H) {
		d.d.r(H)
	}, qt.unstable_batchedUpdates = function(H, z) {
		return H(z)
	}, qt.useFormState = function(H, z, F) {
		return R.H.useFormState(H, z, F)
	}, qt.useFormStatus = function() {
		return R.H.useHostTransitionStatus()
	}, qt.version = "19.2.3", qt
}
var Ad;

function uh() {
	if(Ad) return os.exports;
	Ad = 1;

	function N() {
		if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)
		} catch (U) {
			console.error(U)
		}
	}
	return N(), os.exports = nh(), os.exports
}
var zd;

function ch() {
	if(zd) return An;
	zd = 1;
	var N = ah(),
		U = rs(),
		E = uh();

	function d(t) {
		var e = "https://react.dev/errors/" + t;
		if(1 < arguments.length) {
			e += "?args[]=" + encodeURIComponent(arguments[1]);
			for(var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l])
		}
		return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function j(t) {
		return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
	}

	function M(t) {
		var e = t,
			l = t;
		if(t.alternate)
			for(; e.return;) e = e.return;
		else {
			t = e;
			do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return; while(t)
		}
		return e.tag === 3 ? l : null
	}

	function R(t) {
		if(t.tag === 13) {
			var e = t.memoizedState;
			if(e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
		}
		return null
	}

	function st(t) {
		if(t.tag === 31) {
			var e = t.memoizedState;
			if(e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
		}
		return null
	}

	function H(t) {
		if(M(t) !== t) throw Error(d(188))
	}

	function z(t) {
		var e = t.alternate;
		if(!e) {
			if(e = M(t), e === null) throw Error(d(188));
			return e !== t ? null : t
		}
		for(var l = t, a = e;;) {
			var n = l.return;
			if(n === null) break;
			var u = n.alternate;
			if(u === null) {
				if(a = n.return, a !== null) {
					l = a;
					continue
				}
				break
			}
			if(n.child === u.child) {
				for(u = n.child; u;) {
					if(u === l) return H(n), t;
					if(u === a) return H(n), e;
					u = u.sibling
				}
				throw Error(d(188))
			}
			if(l.return !== a.return) l = n, a = u;
			else {
				for(var c = !1, i = n.child; i;) {
					if(i === l) {
						c = !0, l = n, a = u;
						break
					}
					if(i === a) {
						c = !0, a = n, l = u;
						break
					}
					i = i.sibling
				}
				if(!c) {
					for(i = u.child; i;) {
						if(i === l) {
							c = !0, l = u, a = n;
							break
						}
						if(i === a) {
							c = !0, a = u, l = n;
							break
						}
						i = i.sibling
					}
					if(!c) throw Error(d(189))
				}
			}
			if(l.alternate !== a) throw Error(d(190))
		}
		if(l.tag !== 3) throw Error(d(188));
		return l.stateNode.current === l ? t : e
	}

	function F(t) {
		var e = t.tag;
		if(e === 5 || e === 26 || e === 27 || e === 6) return t;
		for(t = t.child; t !== null;) {
			if(e = F(t), e !== null) return e;
			t = t.sibling
		}
		return null
	}
	var Y = Object.assign,
		ht = Symbol.for("react.element"),
		$t = Symbol.for("react.transitional.element"),
		Gt = Symbol.for("react.portal"),
		Rt = Symbol.for("react.fragment"),
		Ce = Symbol.for("react.strict_mode"),
		Ft = Symbol.for("react.profiler"),
		$e = Symbol.for("react.consumer"),
		Ht = Symbol.for("react.context"),
		se = Symbol.for("react.forward_ref"),
		ze = Symbol.for("react.suspense"),
		Qt = Symbol.for("react.suspense_list"),
		W = Symbol.for("react.memo"),
		Xt = Symbol.for("react.lazy"),
		Ne = Symbol.for("react.activity"),
		Zl = Symbol.for("react.memo_cache_sentinel"),
		je = Symbol.iterator;

	function Zt(t) {
		return t === null || typeof t != "object" ? null : (t = je && t[je] || t["@@iterator"], typeof t == "function" ? t : null)
	}
	var Al = Symbol.for("react.client.reference");

	function De(t) {
		if(t == null) return null;
		if(typeof t == "function") return t.$$typeof === Al ? null : t.displayName || t.name || null;
		if(typeof t == "string") return t;
		switch(t) {
			case Rt:
				return "Fragment";
			case Ft:
				return "Profiler";
			case Ce:
				return "StrictMode";
			case ze:
				return "Suspense";
			case Qt:
				return "SuspenseList";
			case Ne:
				return "Activity"
		}
		if(typeof t == "object") switch(t.$$typeof) {
			case Gt:
				return "Portal";
			case Ht:
				return t.displayName || "Context";
			case $e:
				return (t._context.displayName || "Context") + ".Consumer";
			case se:
				var e = t.render;
				return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
			case W:
				return e = t.displayName || null, e !== null ? e : De(t.type) || "Memo";
			case Xt:
				e = t._payload, t = t._init;
				try {
					return De(t(e))
				} catch {}
		}
		return null
	}
	var ge = Array.isArray,
		g = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		T = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		G = {
			pending: !1,
			data: null,
			method: null,
			action: null
		},
		nt = [],
		ft = -1;

	function r(t) {
		return {
			current: t
		}
	}

	function A(t) {
		0 > ft || (t.current = nt[ft], nt[ft] = null, ft--)
	}

	function _(t, e) {
		ft++, nt[ft] = t.current, t.current = e
	}
	var D = r(null),
		X = r(null),
		L = r(null),
		et = r(null);

	function Bt(t, e) {
		switch(_(L, e), _(X, t), _(D, null), e.nodeType) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? Yr(t) : 0;
				break;
			default:
				if(t = e.tagName, e = e.namespaceURI) e = Yr(e), t = Gr(e, t);
				else switch(t) {
					case "svg":
						t = 1;
						break;
					case "math":
						t = 2;
						break;
					default:
						t = 0
				}
		}
		A(D), _(D, t)
	}

	function gt() {
		A(D), A(X), A(L)
	}

	function Ta(t) {
		t.memoizedState !== null && _(et, t);
		var e = D.current,
			l = Gr(e, t.type);
		e !== l && (_(X, t), _(D, l))
	}

	function zn(t) {
		X.current === t && (A(D), A(X)), et.current === t && (A(et), xn._currentValue = G)
	}
	var Xu, ds;

	function zl(t) {
		if(Xu === void 0) try {
			throw Error()
		} catch (l) {
			var e = l.stack.trim().match(/\n( *(at )?)/);
			Xu = e && e[1] || "", ds = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
		}
		return `
` + Xu + t + ds
	}
	var Zu = !1;

	function Vu(t, e) {
		if(!t || Zu) return "";
		Zu = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function() {
					try {
						if(e) {
							var S = function() {
								throw Error()
							};
							if(Object.defineProperty(S.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(S, [])
								} catch (x) {
									var p = x
								}
								Reflect.construct(t, [], S)
							} else {
								try {
									S.call()
								} catch (x) {
									p = x
								}
								t.call(S.prototype)
							}
						} else {
							try {
								throw Error()
							} catch (x) {
								p = x
							}(S = t()) && typeof S.catch == "function" && S.catch(function() {})
						}
					} catch (x) {
						if(x && p && typeof x.stack == "string") return [x.stack, p.stack]
					}
					return [null, null]
				}
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
			n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
				value: "DetermineComponentFrameRoot"
			});
			var u = a.DetermineComponentFrameRoot(),
				c = u[0],
				i = u[1];
			if(c && i) {
				var f = c.split(`
`),
					v = i.split(`
`);
				for(n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");) a++;
				for(; n < v.length && !v[n].includes("DetermineComponentFrameRoot");) n++;
				if(a === f.length || n === v.length)
					for(a = f.length - 1, n = v.length - 1; 1 <= a && 0 <= n && f[a] !== v[n];) n--;
				for(; 1 <= a && 0 <= n; a--, n--)
					if(f[a] !== v[n]) {
						if(a !== 1 || n !== 1)
							do
								if(a--, n--, 0 > n || f[a] !== v[n]) {
									var y = `
` + f[a].replace(" at new ", " at ");
									return t.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", t.displayName)), y
								} while(1 <= a && 0 <= n);
						break
					}
			}
		} finally {
			Zu = !1, Error.prepareStackTrace = l
		}
		return (l = t ? t.displayName || t.name : "") ? zl(l) : ""
	}

	function Cd(t, e) {
		switch(t.tag) {
			case 26:
			case 27:
			case 5:
				return zl(t.type);
			case 16:
				return zl("Lazy");
			case 13:
				return t.child !== e && e !== null ? zl("Suspense Fallback") : zl("Suspense");
			case 19:
				return zl("SuspenseList");
			case 0:
			case 15:
				return Vu(t.type, !1);
			case 11:
				return Vu(t.type.render, !1);
			case 1:
				return Vu(t.type, !0);
			case 31:
				return zl("Activity");
			default:
				return ""
		}
	}

	function hs(t) {
		try {
			var e = "",
				l = null;
			do e += Cd(t, l), l = t, t = t.return; while(t);
			return e
		} catch (a) {
			return `
Error generating stack: ` + a.message + `
` + a.stack
		}
	}
	var Lu = Object.prototype.hasOwnProperty,
		wu = N.unstable_scheduleCallback,
		Ku = N.unstable_cancelCallback,
		Dd = N.unstable_shouldYield,
		Od = N.unstable_requestPaint,
		It = N.unstable_now,
		Ud = N.unstable_getCurrentPriorityLevel,
		ms = N.unstable_ImmediatePriority,
		vs = N.unstable_UserBlockingPriority,
		Nn = N.unstable_NormalPriority,
		Hd = N.unstable_LowPriority,
		ps = N.unstable_IdlePriority,
		qd = N.log,
		Rd = N.unstable_setDisableYieldValue,
		_a = null,
		Pt = null;

	function Fe(t) {
		if(typeof qd == "function" && Rd(t), Pt && typeof Pt.setStrictMode == "function") try {
			Pt.setStrictMode(_a, t)
		} catch {}
	}
	var te = Math.clz32 ? Math.clz32 : Gd,
		Bd = Math.log,
		Yd = Math.LN2;

	function Gd(t) {
		return t >>>= 0, t === 0 ? 32 : 31 - (Bd(t) / Yd | 0) | 0
	}
	var jn = 256,
		En = 262144,
		Tn = 4194304;

	function Nl(t) {
		var e = t & 42;
		if(e !== 0) return e;
		switch(t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return t & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t
		}
	}

	function _n(t, e, l) {
		var a = t.pendingLanes;
		if(a === 0) return 0;
		var n = 0,
			u = t.suspendedLanes,
			c = t.pingedLanes;
		t = t.warmLanes;
		var i = a & 134217727;
		return i !== 0 ? (a = i & ~u, a !== 0 ? n = Nl(a) : (c &= i, c !== 0 ? n = Nl(c) : l || (l = i & ~t, l !== 0 && (n = Nl(l))))) : (i = a & ~u, i !== 0 ? n = Nl(i) : c !== 0 ? n = Nl(c) : l || (l = a & ~t, l !== 0 && (n = Nl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
	}

	function Ma(t, e) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
	}

	function Qd(t, e) {
		switch(t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return e + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1
		}
	}

	function xs() {
		var t = Tn;
		return Tn <<= 1, (Tn & 62914560) === 0 && (Tn = 4194304), t
	}

	function Ju(t) {
		for(var e = [], l = 0; 31 > l; l++) e.push(t);
		return e
	}

	function Ca(t, e) {
		t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
	}

	function Xd(t, e, l, a, n, u) {
		var c = t.pendingLanes;
		t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
		var i = t.entanglements,
			f = t.expirationTimes,
			v = t.hiddenUpdates;
		for(l = c & ~l; 0 < l;) {
			var y = 31 - te(l),
				S = 1 << y;
			i[y] = 0, f[y] = -1;
			var p = v[y];
			if(p !== null)
				for(v[y] = null, y = 0; y < p.length; y++) {
					var x = p[y];
					x !== null && (x.lane &= -536870913)
				}
			l &= ~S
		}
		a !== 0 && ys(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e))
	}

	function ys(t, e, l) {
		t.pendingLanes |= e, t.suspendedLanes &= ~e;
		var a = 31 - te(e);
		t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930
	}

	function gs(t, e) {
		var l = t.entangledLanes |= e;
		for(t = t.entanglements; l;) {
			var a = 31 - te(l),
				n = 1 << a;
			n & e | t[a] & e && (t[a] |= e), l &= ~n
		}
	}

	function bs(t, e) {
		var l = e & -e;
		return l = (l & 42) !== 0 ? 1 : ku(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
	}

	function ku(t) {
		switch(t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0
		}
		return t
	}

	function Wu(t) {
		return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
	}

	function Ss() {
		var t = T.p;
		return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : sd(t.type))
	}

	function As(t, e) {
		var l = T.p;
		try {
			return T.p = t, e()
		} finally {
			T.p = l
		}
	}
	var Ie = Math.random().toString(36).slice(2),
		Mt = "__reactFiber$" + Ie,
		Vt = "__reactProps$" + Ie,
		Vl = "__reactContainer$" + Ie,
		$u = "__reactEvents$" + Ie,
		Zd = "__reactListeners$" + Ie,
		Vd = "__reactHandles$" + Ie,
		zs = "__reactResources$" + Ie,
		Da = "__reactMarker$" + Ie;

	function Fu(t) {
		delete t[Mt], delete t[Vt], delete t[$u], delete t[Zd], delete t[Vd]
	}

	function Ll(t) {
		var e = t[Mt];
		if(e) return e;
		for(var l = t.parentNode; l;) {
			if(e = l[Vl] || l[Mt]) {
				if(l = e.alternate, e.child !== null || l !== null && l.child !== null)
					for(t = Kr(t); t !== null;) {
						if(l = t[Mt]) return l;
						t = Kr(t)
					}
				return e
			}
			t = l, l = t.parentNode
		}
		return null
	}

	function wl(t) {
		if(t = t[Mt] || t[Vl]) {
			var e = t.tag;
			if(e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
		}
		return null
	}

	function Oa(t) {
		var e = t.tag;
		if(e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
		throw Error(d(33))
	}

	function Kl(t) {
		var e = t[zs];
		return e || (e = t[zs] = {
			hoistableStyles: new Map,
			hoistableScripts: new Map
		}), e
	}

	function Tt(t) {
		t[Da] = !0
	}
	var Ns = new Set,
		js = {};

	function jl(t, e) {
		Jl(t, e), Jl(t + "Capture", e)
	}

	function Jl(t, e) {
		for(js[t] = e, t = 0; t < e.length; t++) Ns.add(e[t])
	}
	var Ld = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
		Es = {},
		Ts = {};

	function wd(t) {
		return Lu.call(Ts, t) ? !0 : Lu.call(Es, t) ? !1 : Ld.test(t) ? Ts[t] = !0 : (Es[t] = !0, !1)
	}

	function Mn(t, e, l) {
		if(wd(e))
			if(l === null) t.removeAttribute(e);
			else {
				switch(typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						t.removeAttribute(e);
						return;
					case "boolean":
						var a = e.toLowerCase().slice(0, 5);
						if(a !== "data-" && a !== "aria-") {
							t.removeAttribute(e);
							return
						}
				}
				t.setAttribute(e, "" + l)
			}
	}

	function Cn(t, e, l) {
		if(l === null) t.removeAttribute(e);
		else {
			switch(typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(e);
					return
			}
			t.setAttribute(e, "" + l)
		}
	}

	function Oe(t, e, l, a) {
		if(a === null) t.removeAttribute(l);
		else {
			switch(typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(l);
					return
			}
			t.setAttributeNS(e, l, "" + a)
		}
	}

	function fe(t) {
		switch(typeof t) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return ""
		}
	}

	function _s(t) {
		var e = t.type;
		return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
	}

	function Kd(t, e, l) {
		var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
		if(!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
			var n = a.get,
				u = a.set;
			return Object.defineProperty(t, e, {
				configurable: !0,
				get: function() {
					return n.call(this)
				},
				set: function(c) {
					l = "" + c, u.call(this, c)
				}
			}), Object.defineProperty(t, e, {
				enumerable: a.enumerable
			}), {
				getValue: function() {
					return l
				},
				setValue: function(c) {
					l = "" + c
				},
				stopTracking: function() {
					t._valueTracker = null, delete t[e]
				}
			}
		}
	}

	function Iu(t) {
		if(!t._valueTracker) {
			var e = _s(t) ? "checked" : "value";
			t._valueTracker = Kd(t, e, "" + t[e])
		}
	}

	function Ms(t) {
		if(!t) return !1;
		var e = t._valueTracker;
		if(!e) return !0;
		var l = e.getValue(),
			a = "";
		return t && (a = _s(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1
	}

	function Dn(t) {
		if(t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
		try {
			return t.activeElement || t.body
		} catch {
			return t.body
		}
	}
	var Jd = /[\n"\\]/g;

	function oe(t) {
		return t.replace(Jd, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " "
		})
	}

	function Pu(t, e, l, a, n, u, c, i) {
		t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + fe(e)) : t.value !== "" + fe(e) && (t.value = "" + fe(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? tc(t, c, fe(e)) : l != null ? tc(t, c, fe(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + fe(i) : t.removeAttribute("name")
	}

	function Cs(t, e, l, a, n, u, c, i) {
		if(u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
			if(!(u !== "submit" && u !== "reset" || e != null)) {
				Iu(t);
				return
			}
			l = l != null ? "" + fe(l) : "", e = e != null ? "" + fe(e) : l, i || e === t.value || (t.value = e), t.defaultValue = e
		}
		a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Iu(t)
	}

	function tc(t, e, l) {
		e === "number" && Dn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
	}

	function kl(t, e, l, a) {
		if(t = t.options, e) {
			e = {};
			for(var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
			for(l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0)
		} else {
			for(l = "" + fe(l), e = null, n = 0; n < t.length; n++) {
				if(t[n].value === l) {
					t[n].selected = !0, a && (t[n].defaultSelected = !0);
					return
				}
				e !== null || t[n].disabled || (e = t[n])
			}
			e !== null && (e.selected = !0)
		}
	}

	function Ds(t, e, l) {
		if(e != null && (e = "" + fe(e), e !== t.value && (t.value = e), l == null)) {
			t.defaultValue !== e && (t.defaultValue = e);
			return
		}
		t.defaultValue = l != null ? "" + fe(l) : ""
	}

	function Os(t, e, l, a) {
		if(e == null) {
			if(a != null) {
				if(l != null) throw Error(d(92));
				if(ge(a)) {
					if(1 < a.length) throw Error(d(93));
					a = a[0]
				}
				l = a
			}
			l == null && (l = ""), e = l
		}
		l = fe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Iu(t)
	}

	function Wl(t, e) {
		if(e) {
			var l = t.firstChild;
			if(l && l === t.lastChild && l.nodeType === 3) {
				l.nodeValue = e;
				return
			}
		}
		t.textContent = e
	}
	var kd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

	function Us(t, e, l) {
		var a = e.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || kd.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
	}

	function Hs(t, e, l) {
		if(e != null && typeof e != "object") throw Error(d(62));
		if(t = t.style, l != null) {
			for(var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
			for(var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && Us(t, n, a)
		} else
			for(var u in e) e.hasOwnProperty(u) && Us(t, u, e[u])
	}

	function ec(t) {
		if(t.indexOf("-") === -1) return !1;
		switch(t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var Wd = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]),
		$d = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

	function On(t) {
		return $d.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
	}

	function Ue() {}
	var lc = null;

	function ac(t) {
		return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
	}
	var $l = null,
		Fl = null;

	function qs(t) {
		var e = wl(t);
		if(e && (t = e.stateNode)) {
			var l = t[Vt] || null;
			t: switch(t = e.stateNode, e.type) {
				case "input":
					if(Pu(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
						for(l = t; l.parentNode;) l = l.parentNode;
						for(l = l.querySelectorAll('input[name="' + oe("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
							var a = l[e];
							if(a !== t && a.form === t.form) {
								var n = a[Vt] || null;
								if(!n) throw Error(d(90));
								Pu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
							}
						}
						for(e = 0; e < l.length; e++) a = l[e], a.form === t.form && Ms(a)
					}
					break t;
				case "textarea":
					Ds(t, l.value, l.defaultValue);
					break t;
				case "select":
					e = l.value, e != null && kl(t, !!l.multiple, e, !1)
			}
		}
	}
	var nc = !1;

	function Rs(t, e, l) {
		if(nc) return t(e, l);
		nc = !0;
		try {
			var a = t(e);
			return a
		} finally {
			if(nc = !1, ($l !== null || Fl !== null) && (gu(), $l && (e = $l, t = Fl, Fl = $l = null, qs(e), t)))
				for(e = 0; e < t.length; e++) qs(t[e])
		}
	}

	function Ua(t, e) {
		var l = t.stateNode;
		if(l === null) return null;
		var a = l[Vt] || null;
		if(a === null) return null;
		l = a[e];
		t: switch(e) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
				break t;
			default:
				t = !1
		}
		if(t) return null;
		if(l && typeof l != "function") throw Error(d(231, e, typeof l));
		return l
	}
	var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
		uc = !1;
	if(He) try {
		var Ha = {};
		Object.defineProperty(Ha, "passive", {
			get: function() {
				uc = !0
			}
		}), window.addEventListener("test", Ha, Ha), window.removeEventListener("test", Ha, Ha)
	} catch {
		uc = !1
	}
	var Pe = null,
		cc = null,
		Un = null;

	function Bs() {
		if(Un) return Un;
		var t, e = cc,
			l = e.length,
			a, n = "value" in Pe ? Pe.value : Pe.textContent,
			u = n.length;
		for(t = 0; t < l && e[t] === n[t]; t++);
		var c = l - t;
		for(a = 1; a <= c && e[l - a] === n[u - a]; a++);
		return Un = n.slice(t, 1 < a ? 1 - a : void 0)
	}

	function Hn(t) {
		var e = t.keyCode;
		return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
	}

	function qn() {
		return !0
	}

	function Ys() {
		return !1
	}

	function Lt(t) {
		function e(l, a, n, u, c) {
			this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
			for(var i in t) t.hasOwnProperty(i) && (l = t[i], this[i] = l ? l(u) : u[i]);
			return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? qn : Ys, this.isPropagationStopped = Ys, this
		}
		return Y(e.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var l = this.nativeEvent;
				l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = qn)
			},
			stopPropagation: function() {
				var l = this.nativeEvent;
				l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = qn)
			},
			persist: function() {},
			isPersistent: qn
		}), e
	}
	var El = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(t) {
				return t.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		Rn = Lt(El),
		qa = Y({}, El, {
			view: 0,
			detail: 0
		}),
		Fd = Lt(qa),
		ic, sc, Ra, Bn = Y({}, qa, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: oc,
			button: 0,
			buttons: 0,
			relatedTarget: function(t) {
				return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
			},
			movementX: function(t) {
				return "movementX" in t ? t.movementX : (t !== Ra && (Ra && t.type === "mousemove" ? (ic = t.screenX - Ra.screenX, sc = t.screenY - Ra.screenY) : sc = ic = 0, Ra = t), ic)
			},
			movementY: function(t) {
				return "movementY" in t ? t.movementY : sc
			}
		}),
		Gs = Lt(Bn),
		Id = Y({}, Bn, {
			dataTransfer: 0
		}),
		Pd = Lt(Id),
		t1 = Y({}, qa, {
			relatedTarget: 0
		}),
		fc = Lt(t1),
		e1 = Y({}, El, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		l1 = Lt(e1),
		a1 = Y({}, El, {
			clipboardData: function(t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData
			}
		}),
		n1 = Lt(a1),
		u1 = Y({}, El, {
			data: 0
		}),
		Qs = Lt(u1),
		c1 = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		i1 = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		s1 = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function f1(t) {
		var e = this.nativeEvent;
		return e.getModifierState ? e.getModifierState(t) : (t = s1[t]) ? !!e[t] : !1
	}

	function oc() {
		return f1
	}
	var o1 = Y({}, qa, {
			key: function(t) {
				if(t.key) {
					var e = c1[t.key] || t.key;
					if(e !== "Unidentified") return e
				}
				return t.type === "keypress" ? (t = Hn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? i1[t.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: oc,
			charCode: function(t) {
				return t.type === "keypress" ? Hn(t) : 0
			},
			keyCode: function(t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
			},
			which: function(t) {
				return t.type === "keypress" ? Hn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
			}
		}),
		r1 = Lt(o1),
		d1 = Y({}, Bn, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		Xs = Lt(d1),
		h1 = Y({}, qa, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: oc
		}),
		m1 = Lt(h1),
		v1 = Y({}, El, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		p1 = Lt(v1),
		x1 = Y({}, Bn, {
			deltaX: function(t) {
				return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
			},
			deltaY: function(t) {
				return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		y1 = Lt(x1),
		g1 = Y({}, El, {
			newState: 0,
			oldState: 0
		}),
		b1 = Lt(g1),
		S1 = [9, 13, 27, 32],
		rc = He && "CompositionEvent" in window,
		Ba = null;
	He && "documentMode" in document && (Ba = document.documentMode);
	var A1 = He && "TextEvent" in window && !Ba,
		Zs = He && (!rc || Ba && 8 < Ba && 11 >= Ba),
		Vs = " ",
		Ls = !1;

	function ws(t, e) {
		switch(t) {
			case "keyup":
				return S1.indexOf(e.keyCode) !== -1;
			case "keydown":
				return e.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Ks(t) {
		return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
	}
	var Il = !1;

	function z1(t, e) {
		switch(t) {
			case "compositionend":
				return Ks(e);
			case "keypress":
				return e.which !== 32 ? null : (Ls = !0, Vs);
			case "textInput":
				return t = e.data, t === Vs && Ls ? null : t;
			default:
				return null
		}
	}

	function N1(t, e) {
		if(Il) return t === "compositionend" || !rc && ws(t, e) ? (t = Bs(), Un = cc = Pe = null, Il = !1, t) : null;
		switch(t) {
			case "paste":
				return null;
			case "keypress":
				if(!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
					if(e.char && 1 < e.char.length) return e.char;
					if(e.which) return String.fromCharCode(e.which)
				}
				return null;
			case "compositionend":
				return Zs && e.locale !== "ko" ? null : e.data;
			default:
				return null
		}
	}
	var j1 = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Js(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === "input" ? !!j1[t.type] : e === "textarea"
	}

	function ks(t, e, l, a) {
		$l ? Fl ? Fl.push(a) : Fl = [a] : $l = a, e = Eu(e, "onChange"), 0 < e.length && (l = new Rn("onChange", "change", null, l, a), t.push({
			event: l,
			listeners: e
		}))
	}
	var Ya = null,
		Ga = null;

	function E1(t) {
		Or(t, 0)
	}

	function Yn(t) {
		var e = Oa(t);
		if(Ms(e)) return t
	}

	function Ws(t, e) {
		if(t === "change") return e
	}
	var $s = !1;
	if(He) {
		var dc;
		if(He) {
			var hc = "oninput" in document;
			if(!hc) {
				var Fs = document.createElement("div");
				Fs.setAttribute("oninput", "return;"), hc = typeof Fs.oninput == "function"
			}
			dc = hc
		} else dc = !1;
		$s = dc && (!document.documentMode || 9 < document.documentMode)
	}

	function Is() {
		Ya && (Ya.detachEvent("onpropertychange", Ps), Ga = Ya = null)
	}

	function Ps(t) {
		if(t.propertyName === "value" && Yn(Ga)) {
			var e = [];
			ks(e, Ga, t, ac(t)), Rs(E1, e)
		}
	}

	function T1(t, e, l) {
		t === "focusin" ? (Is(), Ya = e, Ga = l, Ya.attachEvent("onpropertychange", Ps)) : t === "focusout" && Is()
	}

	function _1(t) {
		if(t === "selectionchange" || t === "keyup" || t === "keydown") return Yn(Ga)
	}

	function M1(t, e) {
		if(t === "click") return Yn(e)
	}

	function C1(t, e) {
		if(t === "input" || t === "change") return Yn(e)
	}

	function D1(t, e) {
		return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
	}
	var ee = typeof Object.is == "function" ? Object.is : D1;

	function Qa(t, e) {
		if(ee(t, e)) return !0;
		if(typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
		var l = Object.keys(t),
			a = Object.keys(e);
		if(l.length !== a.length) return !1;
		for(a = 0; a < l.length; a++) {
			var n = l[a];
			if(!Lu.call(e, n) || !ee(t[n], e[n])) return !1
		}
		return !0
	}

	function tf(t) {
		for(; t && t.firstChild;) t = t.firstChild;
		return t
	}

	function ef(t, e) {
		var l = tf(t);
		t = 0;
		for(var a; l;) {
			if(l.nodeType === 3) {
				if(a = t + l.textContent.length, t <= e && a >= e) return {
					node: l,
					offset: e - t
				};
				t = a
			}
			t: {
				for(; l;) {
					if(l.nextSibling) {
						l = l.nextSibling;
						break t
					}
					l = l.parentNode
				}
				l = void 0
			}
			l = tf(l)
		}
	}

	function lf(t, e) {
		return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? lf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
	}

	function af(t) {
		t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
		for(var e = Dn(t.document); e instanceof t.HTMLIFrameElement;) {
			try {
				var l = typeof e.contentWindow.location.href == "string"
			} catch {
				l = !1
			}
			if(l) t = e.contentWindow;
			else break;
			e = Dn(t.document)
		}
		return e
	}

	function mc(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
	}
	var O1 = He && "documentMode" in document && 11 >= document.documentMode,
		Pl = null,
		vc = null,
		Xa = null,
		pc = !1;

	function nf(t, e, l) {
		var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		pc || Pl == null || Pl !== Dn(a) || (a = Pl, "selectionStart" in a && mc(a) ? a = {
			start: a.selectionStart,
			end: a.selectionEnd
		} : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
			anchorNode: a.anchorNode,
			anchorOffset: a.anchorOffset,
			focusNode: a.focusNode,
			focusOffset: a.focusOffset
		}), Xa && Qa(Xa, a) || (Xa = a, a = Eu(vc, "onSelect"), 0 < a.length && (e = new Rn("onSelect", "select", null, e, l), t.push({
			event: e,
			listeners: a
		}), e.target = Pl)))
	}

	function Tl(t, e) {
		var l = {};
		return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l
	}
	var ta = {
			animationend: Tl("Animation", "AnimationEnd"),
			animationiteration: Tl("Animation", "AnimationIteration"),
			animationstart: Tl("Animation", "AnimationStart"),
			transitionrun: Tl("Transition", "TransitionRun"),
			transitionstart: Tl("Transition", "TransitionStart"),
			transitioncancel: Tl("Transition", "TransitionCancel"),
			transitionend: Tl("Transition", "TransitionEnd")
		},
		xc = {},
		uf = {};
	He && (uf = document.createElement("div").style, "AnimationEvent" in window || (delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window || delete ta.transitionend.transition);

	function _l(t) {
		if(xc[t]) return xc[t];
		if(!ta[t]) return t;
		var e = ta[t],
			l;
		for(l in e)
			if(e.hasOwnProperty(l) && l in uf) return xc[t] = e[l];
		return t
	}
	var cf = _l("animationend"),
		sf = _l("animationiteration"),
		ff = _l("animationstart"),
		U1 = _l("transitionrun"),
		H1 = _l("transitionstart"),
		q1 = _l("transitioncancel"),
		of = _l("transitionend"),
		rf = new Map,
		yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	yc.push("scrollEnd");

	function be(t, e) {
		rf.set(t, e), jl(e, [t])
	}
	var Gn = typeof reportError == "function" ? reportError : function(t) {
			if(typeof window == "object" && typeof window.ErrorEvent == "function") {
				var e = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
					error: t
				});
				if(!window.dispatchEvent(e)) return
			} else if(typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", t);
				return
			}
			console.error(t)
		},
		re = [],
		ea = 0,
		gc = 0;

	function Qn() {
		for(var t = ea, e = gc = ea = 0; e < t;) {
			var l = re[e];
			re[e++] = null;
			var a = re[e];
			re[e++] = null;
			var n = re[e];
			re[e++] = null;
			var u = re[e];
			if(re[e++] = null, a !== null && n !== null) {
				var c = a.pending;
				c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n
			}
			u !== 0 && df(l, n, u)
		}
	}

	function Xn(t, e, l, a) {
		re[ea++] = t, re[ea++] = e, re[ea++] = l, re[ea++] = a, gc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
	}

	function bc(t, e, l, a) {
		return Xn(t, e, l, a), Zn(t)
	}

	function Ml(t, e) {
		return Xn(t, null, null, e), Zn(t)
	}

	function df(t, e, l) {
		t.lanes |= l;
		var a = t.alternate;
		a !== null && (a.lanes |= l);
		for(var n = !1, u = t.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
		return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - te(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null
	}

	function Zn(t) {
		if(50 < on) throw on = 0, Mi = null, Error(d(185));
		for(var e = t.return; e !== null;) t = e, e = t.return;
		return t.tag === 3 ? t.stateNode : null
	}
	var la = {};

	function R1(t, e, l, a) {
		this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function le(t, e, l, a) {
		return new R1(t, e, l, a)
	}

	function Sc(t) {
		return t = t.prototype, !(!t || !t.isReactComponent)
	}

	function qe(t, e) {
		var l = t.alternate;
		return l === null ? (l = le(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
			lanes: e.lanes,
			firstContext: e.firstContext
		}, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l
	}

	function hf(t, e) {
		t.flags &= 65011714;
		var l = t.alternate;
		return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
			lanes: e.lanes,
			firstContext: e.firstContext
		}), t
	}

	function Vn(t, e, l, a, n, u) {
		var c = 0;
		if(a = t, typeof t == "function") Sc(t) && (c = 1);
		else if(typeof t == "string") c = X0(t, l, D.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
		else t: switch(t) {
			case Ne:
				return t = le(31, l, e, n), t.elementType = Ne, t.lanes = u, t;
			case Rt:
				return Cl(l.children, n, u, e);
			case Ce:
				c = 8, n |= 24;
				break;
			case Ft:
				return t = le(12, l, e, n | 2), t.elementType = Ft, t.lanes = u, t;
			case ze:
				return t = le(13, l, e, n), t.elementType = ze, t.lanes = u, t;
			case Qt:
				return t = le(19, l, e, n), t.elementType = Qt, t.lanes = u, t;
			default:
				if(typeof t == "object" && t !== null) switch(t.$$typeof) {
					case Ht:
						c = 10;
						break t;
					case $e:
						c = 9;
						break t;
					case se:
						c = 11;
						break t;
					case W:
						c = 14;
						break t;
					case Xt:
						c = 16, a = null;
						break t
				}
				c = 29, l = Error(d(130, t === null ? "null" : typeof t, "")), a = null
		}
		return e = le(c, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e
	}

	function Cl(t, e, l, a) {
		return t = le(7, t, a, e), t.lanes = l, t
	}

	function Ac(t, e, l) {
		return t = le(6, t, null, e), t.lanes = l, t
	}

	function mf(t) {
		var e = le(18, null, null, 0);
		return e.stateNode = t, e
	}

	function zc(t, e, l) {
		return e = le(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation
		}, e
	}
	var vf = new WeakMap;

	function de(t, e) {
		if(typeof t == "object" && t !== null) {
			var l = vf.get(t);
			return l !== void 0 ? l : (e = {
				value: t,
				source: e,
				stack: hs(e)
			}, vf.set(t, e), e)
		}
		return {
			value: t,
			source: e,
			stack: hs(e)
		}
	}
	var aa = [],
		na = 0,
		Ln = null,
		Za = 0,
		he = [],
		me = 0,
		tl = null,
		Ee = 1,
		Te = "";

	function Re(t, e) {
		aa[na++] = Za, aa[na++] = Ln, Ln = t, Za = e
	}

	function pf(t, e, l) {
		he[me++] = Ee, he[me++] = Te, he[me++] = tl, tl = t;
		var a = Ee;
		t = Te;
		var n = 32 - te(a) - 1;
		a &= ~(1 << n), l += 1;
		var u = 32 - te(e) + n;
		if(30 < u) {
			var c = n - n % 5;
			u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Ee = 1 << 32 - te(e) + n | l << n | a, Te = u + t
		} else Ee = 1 << u | l << n | a, Te = t
	}

	function Nc(t) {
		t.return !== null && (Re(t, 1), pf(t, 1, 0))
	}

	function jc(t) {
		for(; t === Ln;) Ln = aa[--na], aa[na] = null, Za = aa[--na], aa[na] = null;
		for(; t === tl;) tl = he[--me], he[me] = null, Te = he[--me], he[me] = null, Ee = he[--me], he[me] = null
	}

	function xf(t, e) {
		he[me++] = Ee, he[me++] = Te, he[me++] = tl, Ee = e.id, Te = e.overflow, tl = t
	}
	var Ct = null,
		rt = null,
		$ = !1,
		el = null,
		ve = !1,
		Ec = Error(d(519));

	function ll(t) {
		var e = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
		throw Va(de(e, t)), Ec
	}

	function yf(t) {
		var e = t.stateNode,
			l = t.type,
			a = t.memoizedProps;
		switch(e[Mt] = t, e[Vt] = a, l) {
			case "dialog":
				K("cancel", e), K("close", e);
				break;
			case "iframe":
			case "object":
			case "embed":
				K("load", e);
				break;
			case "video":
			case "audio":
				for(l = 0; l < dn.length; l++) K(dn[l], e);
				break;
			case "source":
				K("error", e);
				break;
			case "img":
			case "image":
			case "link":
				K("error", e), K("load", e);
				break;
			case "details":
				K("toggle", e);
				break;
			case "input":
				K("invalid", e), Cs(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
				break;
			case "select":
				K("invalid", e);
				break;
			case "textarea":
				K("invalid", e), Os(e, a.value, a.defaultValue, a.children)
		}
		l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Rr(e.textContent, l) ? (a.popover != null && (K("beforetoggle", e), K("toggle", e)), a.onScroll != null && K("scroll", e), a.onScrollEnd != null && K("scrollend", e), a.onClick != null && (e.onclick = Ue), e = !0) : e = !1, e || ll(t, !0)
	}

	function gf(t) {
		for(Ct = t.return; Ct;) switch(Ct.tag) {
			case 5:
			case 31:
			case 13:
				ve = !1;
				return;
			case 27:
			case 3:
				ve = !0;
				return;
			default:
				Ct = Ct.return
		}
	}

	function ua(t) {
		if(t !== Ct) return !1;
		if(!$) return gf(t), $ = !0, !1;
		var e = t.tag,
			l;
		if((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Li(t.type, t.memoizedProps)), l = !l), l && rt && ll(t), gf(t), e === 13) {
			if(t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
			rt = wr(t)
		} else if(e === 31) {
			if(t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
			rt = wr(t)
		} else e === 27 ? (e = rt, pl(t.type) ? (t = Wi, Wi = null, rt = t) : rt = e) : rt = Ct ? xe(t.stateNode.nextSibling) : null;
		return !0
	}

	function Dl() {
		rt = Ct = null, $ = !1
	}

	function Tc() {
		var t = el;
		return t !== null && (kt === null ? kt = t : kt.push.apply(kt, t), el = null), t
	}

	function Va(t) {
		el === null ? el = [t] : el.push(t)
	}
	var _c = r(null),
		Ol = null,
		Be = null;

	function al(t, e, l) {
		_(_c, e._currentValue), e._currentValue = l
	}

	function Ye(t) {
		t._currentValue = _c.current, A(_c)
	}

	function Mc(t, e, l) {
		for(; t !== null;) {
			var a = t.alternate;
			if((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
			t = t.return
		}
	}

	function Cc(t, e, l, a) {
		var n = t.child;
		for(n !== null && (n.return = t); n !== null;) {
			var u = n.dependencies;
			if(u !== null) {
				var c = n.child;
				u = u.firstContext;
				t: for(; u !== null;) {
					var i = u;
					u = n;
					for(var f = 0; f < e.length; f++)
						if(i.context === e[f]) {
							u.lanes |= l, i = u.alternate, i !== null && (i.lanes |= l), Mc(u.return, l, t), a || (c = null);
							break t
						} u = i.next
				}
			} else if(n.tag === 18) {
				if(c = n.return, c === null) throw Error(d(341));
				c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Mc(c, l, t), c = null
			} else c = n.child;
			if(c !== null) c.return = n;
			else
				for(c = n; c !== null;) {
					if(c === t) {
						c = null;
						break
					}
					if(n = c.sibling, n !== null) {
						n.return = c.return, c = n;
						break
					}
					c = c.return
				}
			n = c
		}
	}

	function ca(t, e, l, a) {
		t = null;
		for(var n = e, u = !1; n !== null;) {
			if(!u) {
				if((n.flags & 524288) !== 0) u = !0;
				else if((n.flags & 262144) !== 0) break
			}
			if(n.tag === 10) {
				var c = n.alternate;
				if(c === null) throw Error(d(387));
				if(c = c.memoizedProps, c !== null) {
					var i = n.type;
					ee(n.pendingProps.value, c.value) || (t !== null ? t.push(i) : t = [i])
				}
			} else if(n === et.current) {
				if(c = n.alternate, c === null) throw Error(d(387));
				c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(xn) : t = [xn])
			}
			n = n.return
		}
		t !== null && Cc(e, t, l, a), e.flags |= 262144
	}

	function wn(t) {
		for(t = t.firstContext; t !== null;) {
			if(!ee(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next
		}
		return !1
	}

	function Ul(t) {
		Ol = t, Be = null, t = t.dependencies, t !== null && (t.firstContext = null)
	}

	function Dt(t) {
		return bf(Ol, t)
	}

	function Kn(t, e) {
		return Ol === null && Ul(t), bf(t, e)
	}

	function bf(t, e) {
		var l = e._currentValue;
		if(e = {
				context: e,
				memoizedValue: l,
				next: null
			}, Be === null) {
			if(t === null) throw Error(d(308));
			Be = e, t.dependencies = {
				lanes: 0,
				firstContext: e
			}, t.flags |= 524288
		} else Be = Be.next = e;
		return l
	}
	var B1 = typeof AbortController < "u" ? AbortController : function() {
			var t = [],
				e = this.signal = {
					aborted: !1,
					addEventListener: function(l, a) {
						t.push(a)
					}
				};
			this.abort = function() {
				e.aborted = !0, t.forEach(function(l) {
					return l()
				})
			}
		},
		Y1 = N.unstable_scheduleCallback,
		G1 = N.unstable_NormalPriority,
		At = {
			$$typeof: Ht,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0
		};

	function Dc() {
		return {
			controller: new B1,
			data: new Map,
			refCount: 0
		}
	}

	function La(t) {
		t.refCount--, t.refCount === 0 && Y1(G1, function() {
			t.controller.abort()
		})
	}
	var wa = null,
		Oc = 0,
		ia = 0,
		sa = null;

	function Q1(t, e) {
		if(wa === null) {
			var l = wa = [];
			Oc = 0, ia = qi(), sa = {
				status: "pending",
				value: void 0,
				then: function(a) {
					l.push(a)
				}
			}
		}
		return Oc++, e.then(Sf, Sf), e
	}

	function Sf() {
		if(--Oc === 0 && wa !== null) {
			sa !== null && (sa.status = "fulfilled");
			var t = wa;
			wa = null, ia = 0, sa = null;
			for(var e = 0; e < t.length; e++)(0, t[e])()
		}
	}

	function X1(t, e) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function(n) {
					l.push(n)
				}
			};
		return t.then(function() {
			a.status = "fulfilled", a.value = e;
			for(var n = 0; n < l.length; n++)(0, l[n])(e)
		}, function(n) {
			for(a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
		}), a
	}
	var Af = g.S;
	g.S = function(t, e) {
		cr = It(), typeof e == "object" && e !== null && typeof e.then == "function" && Q1(t, e), Af !== null && Af(t, e)
	};
	var Hl = r(null);

	function Uc() {
		var t = Hl.current;
		return t !== null ? t : ot.pooledCache
	}

	function Jn(t, e) {
		e === null ? _(Hl, Hl.current) : _(Hl, e.pool)
	}

	function zf() {
		var t = Uc();
		return t === null ? null : {
			parent: At._currentValue,
			pool: t
		}
	}
	var fa = Error(d(460)),
		Hc = Error(d(474)),
		kn = Error(d(542)),
		Wn = {
			then: function() {}
		};

	function Nf(t) {
		return t = t.status, t === "fulfilled" || t === "rejected"
	}

	function jf(t, e, l) {
		switch(l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ue, Ue), e = l), e.status) {
			case "fulfilled":
				return e.value;
			case "rejected":
				throw t = e.reason, Tf(t), t;
			default:
				if(typeof e.status == "string") e.then(Ue, Ue);
				else {
					if(t = ot, t !== null && 100 < t.shellSuspendCounter) throw Error(d(482));
					t = e, t.status = "pending", t.then(function(a) {
						if(e.status === "pending") {
							var n = e;
							n.status = "fulfilled", n.value = a
						}
					}, function(a) {
						if(e.status === "pending") {
							var n = e;
							n.status = "rejected", n.reason = a
						}
					})
				}
				switch(e.status) {
					case "fulfilled":
						return e.value;
					case "rejected":
						throw t = e.reason, Tf(t), t
				}
				throw Rl = e, fa
		}
	}

	function ql(t) {
		try {
			var e = t._init;
			return e(t._payload)
		} catch (l) {
			throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Rl = l, fa) : l
		}
	}
	var Rl = null;

	function Ef() {
		if(Rl === null) throw Error(d(459));
		var t = Rl;
		return Rl = null, t
	}

	function Tf(t) {
		if(t === fa || t === kn) throw Error(d(483))
	}
	var oa = null,
		Ka = 0;

	function $n(t) {
		var e = Ka;
		return Ka += 1, oa === null && (oa = []), jf(oa, t, e)
	}

	function Ja(t, e) {
		e = e.props.ref, t.ref = e !== void 0 ? e : null
	}

	function Fn(t, e) {
		throw e.$$typeof === ht ? Error(d(525)) : (t = Object.prototype.toString.call(e), Error(d(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
	}

	function _f(t) {
		function e(h, o) {
			if(t) {
				var m = h.deletions;
				m === null ? (h.deletions = [o], h.flags |= 16) : m.push(o)
			}
		}

		function l(h, o) {
			if(!t) return null;
			for(; o !== null;) e(h, o), o = o.sibling;
			return null
		}

		function a(h) {
			for(var o = new Map; h !== null;) h.key !== null ? o.set(h.key, h) : o.set(h.index, h), h = h.sibling;
			return o
		}

		function n(h, o) {
			return h = qe(h, o), h.index = 0, h.sibling = null, h
		}

		function u(h, o, m) {
			return h.index = m, t ? (m = h.alternate, m !== null ? (m = m.index, m < o ? (h.flags |= 67108866, o) : m) : (h.flags |= 67108866, o)) : (h.flags |= 1048576, o)
		}

		function c(h) {
			return t && h.alternate === null && (h.flags |= 67108866), h
		}

		function i(h, o, m, b) {
			return o === null || o.tag !== 6 ? (o = Ac(m, h.mode, b), o.return = h, o) : (o = n(o, m), o.return = h, o)
		}

		function f(h, o, m, b) {
			var q = m.type;
			return q === Rt ? y(h, o, m.props.children, b, m.key) : o !== null && (o.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Xt && ql(q) === o.type) ? (o = n(o, m.props), Ja(o, m), o.return = h, o) : (o = Vn(m.type, m.key, m.props, null, h.mode, b), Ja(o, m), o.return = h, o)
		}

		function v(h, o, m, b) {
			return o === null || o.tag !== 4 || o.stateNode.containerInfo !== m.containerInfo || o.stateNode.implementation !== m.implementation ? (o = zc(m, h.mode, b), o.return = h, o) : (o = n(o, m.children || []), o.return = h, o)
		}

		function y(h, o, m, b, q) {
			return o === null || o.tag !== 7 ? (o = Cl(m, h.mode, b, q), o.return = h, o) : (o = n(o, m), o.return = h, o)
		}

		function S(h, o, m) {
			if(typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = Ac("" + o, h.mode, m), o.return = h, o;
			if(typeof o == "object" && o !== null) {
				switch(o.$$typeof) {
					case $t:
						return m = Vn(o.type, o.key, o.props, null, h.mode, m), Ja(m, o), m.return = h, m;
					case Gt:
						return o = zc(o, h.mode, m), o.return = h, o;
					case Xt:
						return o = ql(o), S(h, o, m)
				}
				if(ge(o) || Zt(o)) return o = Cl(o, h.mode, m, null), o.return = h, o;
				if(typeof o.then == "function") return S(h, $n(o), m);
				if(o.$$typeof === Ht) return S(h, Kn(h, o), m);
				Fn(h, o)
			}
			return null
		}

		function p(h, o, m, b) {
			var q = o !== null ? o.key : null;
			if(typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return q !== null ? null : i(h, o, "" + m, b);
			if(typeof m == "object" && m !== null) {
				switch(m.$$typeof) {
					case $t:
						return m.key === q ? f(h, o, m, b) : null;
					case Gt:
						return m.key === q ? v(h, o, m, b) : null;
					case Xt:
						return m = ql(m), p(h, o, m, b)
				}
				if(ge(m) || Zt(m)) return q !== null ? null : y(h, o, m, b, null);
				if(typeof m.then == "function") return p(h, o, $n(m), b);
				if(m.$$typeof === Ht) return p(h, o, Kn(h, m), b);
				Fn(h, m)
			}
			return null
		}

		function x(h, o, m, b, q) {
			if(typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return h = h.get(m) || null, i(o, h, "" + b, q);
			if(typeof b == "object" && b !== null) {
				switch(b.$$typeof) {
					case $t:
						return h = h.get(b.key === null ? m : b.key) || null, f(o, h, b, q);
					case Gt:
						return h = h.get(b.key === null ? m : b.key) || null, v(o, h, b, q);
					case Xt:
						return b = ql(b), x(h, o, m, b, q)
				}
				if(ge(b) || Zt(b)) return h = h.get(m) || null, y(o, h, b, q, null);
				if(typeof b.then == "function") return x(h, o, m, $n(b), q);
				if(b.$$typeof === Ht) return x(h, o, m, Kn(o, b), q);
				Fn(o, b)
			}
			return null
		}

		function C(h, o, m, b) {
			for(var q = null, I = null, O = o, V = o = 0, k = null; O !== null && V < m.length; V++) {
				O.index > V ? (k = O, O = null) : k = O.sibling;
				var P = p(h, O, m[V], b);
				if(P === null) {
					O === null && (O = k);
					break
				}
				t && O && P.alternate === null && e(h, O), o = u(P, o, V), I === null ? q = P : I.sibling = P, I = P, O = k
			}
			if(V === m.length) return l(h, O), $ && Re(h, V), q;
			if(O === null) {
				for(; V < m.length; V++) O = S(h, m[V], b), O !== null && (o = u(O, o, V), I === null ? q = O : I.sibling = O, I = O);
				return $ && Re(h, V), q
			}
			for(O = a(O); V < m.length; V++) k = x(O, h, V, m[V], b), k !== null && (t && k.alternate !== null && O.delete(k.key === null ? V : k.key), o = u(k, o, V), I === null ? q = k : I.sibling = k, I = k);
			return t && O.forEach(function(Sl) {
				return e(h, Sl)
			}), $ && Re(h, V), q
		}

		function B(h, o, m, b) {
			if(m == null) throw Error(d(151));
			for(var q = null, I = null, O = o, V = o = 0, k = null, P = m.next(); O !== null && !P.done; V++, P = m.next()) {
				O.index > V ? (k = O, O = null) : k = O.sibling;
				var Sl = p(h, O, P.value, b);
				if(Sl === null) {
					O === null && (O = k);
					break
				}
				t && O && Sl.alternate === null && e(h, O), o = u(Sl, o, V), I === null ? q = Sl : I.sibling = Sl, I = Sl, O = k
			}
			if(P.done) return l(h, O), $ && Re(h, V), q;
			if(O === null) {
				for(; !P.done; V++, P = m.next()) P = S(h, P.value, b), P !== null && (o = u(P, o, V), I === null ? q = P : I.sibling = P, I = P);
				return $ && Re(h, V), q
			}
			for(O = a(O); !P.done; V++, P = m.next()) P = x(O, h, V, P.value, b), P !== null && (t && P.alternate !== null && O.delete(P.key === null ? V : P.key), o = u(P, o, V), I === null ? q = P : I.sibling = P, I = P);
			return t && O.forEach(function(I0) {
				return e(h, I0)
			}), $ && Re(h, V), q
		}

		function it(h, o, m, b) {
			if(typeof m == "object" && m !== null && m.type === Rt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
				switch(m.$$typeof) {
					case $t:
						t: {
							for(var q = m.key; o !== null;) {
								if(o.key === q) {
									if(q = m.type, q === Rt) {
										if(o.tag === 7) {
											l(h, o.sibling), b = n(o, m.props.children), b.return = h, h = b;
											break t
										}
									} else if(o.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Xt && ql(q) === o.type) {
										l(h, o.sibling), b = n(o, m.props), Ja(b, m), b.return = h, h = b;
										break t
									}
									l(h, o);
									break
								} else e(h, o);
								o = o.sibling
							}
							m.type === Rt ? (b = Cl(m.props.children, h.mode, b, m.key), b.return = h, h = b) : (b = Vn(m.type, m.key, m.props, null, h.mode, b), Ja(b, m), b.return = h, h = b)
						}
						return c(h);
					case Gt:
						t: {
							for(q = m.key; o !== null;) {
								if(o.key === q)
									if(o.tag === 4 && o.stateNode.containerInfo === m.containerInfo && o.stateNode.implementation === m.implementation) {
										l(h, o.sibling), b = n(o, m.children || []), b.return = h, h = b;
										break t
									} else {
										l(h, o);
										break
									}
								else e(h, o);
								o = o.sibling
							}
							b = zc(m, h.mode, b),
							b.return = h,
							h = b
						}
						return c(h);
					case Xt:
						return m = ql(m), it(h, o, m, b)
				}
				if(ge(m)) return C(h, o, m, b);
				if(Zt(m)) {
					if(q = Zt(m), typeof q != "function") throw Error(d(150));
					return m = q.call(m), B(h, o, m, b)
				}
				if(typeof m.then == "function") return it(h, o, $n(m), b);
				if(m.$$typeof === Ht) return it(h, o, Kn(h, m), b);
				Fn(h, m)
			}
			return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, o !== null && o.tag === 6 ? (l(h, o.sibling), b = n(o, m), b.return = h, h = b) : (l(h, o), b = Ac(m, h.mode, b), b.return = h, h = b), c(h)) : l(h, o)
		}
		return function(h, o, m, b) {
			try {
				Ka = 0;
				var q = it(h, o, m, b);
				return oa = null, q
			} catch (O) {
				if(O === fa || O === kn) throw O;
				var I = le(29, O, null, h.mode);
				return I.lanes = b, I.return = h, I
			}
		}
	}
	var Bl = _f(!0),
		Mf = _f(!1),
		nl = !1;

	function qc(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		}
	}

	function Rc(t, e) {
		t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
			baseState: t.baseState,
			firstBaseUpdate: t.firstBaseUpdate,
			lastBaseUpdate: t.lastBaseUpdate,
			shared: t.shared,
			callbacks: null
		})
	}

	function ul(t) {
		return {
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function cl(t, e, l) {
		var a = t.updateQueue;
		if(a === null) return null;
		if(a = a.shared, (tt & 2) !== 0) {
			var n = a.pending;
			return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Zn(t), df(t, null, l), e
		}
		return Xn(t, a, e, l), Zn(t)
	}

	function ka(t, e, l) {
		if(e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
			var a = e.lanes;
			a &= t.pendingLanes, l |= a, e.lanes = l, gs(t, l)
		}
	}

	function Bc(t, e) {
		var l = t.updateQueue,
			a = t.alternate;
		if(a !== null && (a = a.updateQueue, l === a)) {
			var n = null,
				u = null;
			if(l = l.firstBaseUpdate, l !== null) {
				do {
					var c = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null
					};
					u === null ? n = u = c : u = u.next = c, l = l.next
				} while(l !== null);
				u === null ? n = u = e : u = u.next = e
			} else n = u = e;
			l = {
				baseState: a.baseState,
				firstBaseUpdate: n,
				lastBaseUpdate: u,
				shared: a.shared,
				callbacks: a.callbacks
			}, t.updateQueue = l;
			return
		}
		t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e
	}
	var Yc = !1;

	function Wa() {
		if(Yc) {
			var t = sa;
			if(t !== null) throw t
		}
	}

	function $a(t, e, l, a) {
		Yc = !1;
		var n = t.updateQueue;
		nl = !1;
		var u = n.firstBaseUpdate,
			c = n.lastBaseUpdate,
			i = n.shared.pending;
		if(i !== null) {
			n.shared.pending = null;
			var f = i,
				v = f.next;
			f.next = null, c === null ? u = v : c.next = v, c = f;
			var y = t.alternate;
			y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== c && (i === null ? y.firstBaseUpdate = v : i.next = v, y.lastBaseUpdate = f))
		}
		if(u !== null) {
			var S = n.baseState;
			c = 0, y = v = f = null, i = u;
			do {
				var p = i.lane & -536870913,
					x = p !== i.lane;
				if(x ? (J & p) === p : (a & p) === p) {
					p !== 0 && p === ia && (Yc = !0), y !== null && (y = y.next = {
						lane: 0,
						tag: i.tag,
						payload: i.payload,
						callback: null,
						next: null
					});
					t: {
						var C = t,
							B = i;p = e;
						var it = l;
						switch(B.tag) {
							case 1:
								if(C = B.payload, typeof C == "function") {
									S = C.call(it, S, p);
									break t
								}
								S = C;
								break t;
							case 3:
								C.flags = C.flags & -65537 | 128;
							case 0:
								if(C = B.payload, p = typeof C == "function" ? C.call(it, S, p) : C, p == null) break t;
								S = Y({}, S, p);
								break t;
							case 2:
								nl = !0
						}
					}
					p = i.callback, p !== null && (t.flags |= 64, x && (t.flags |= 8192), x = n.callbacks, x === null ? n.callbacks = [p] : x.push(p))
				} else x = {
					lane: p,
					tag: i.tag,
					payload: i.payload,
					callback: i.callback,
					next: null
				}, y === null ? (v = y = x, f = S) : y = y.next = x, c |= p;
				if(i = i.next, i === null) {
					if(i = n.shared.pending, i === null) break;
					x = i, i = x.next, x.next = null, n.lastBaseUpdate = x, n.shared.pending = null
				}
			} while(!0);
			y === null && (f = S), n.baseState = f, n.firstBaseUpdate = v, n.lastBaseUpdate = y, u === null && (n.shared.lanes = 0), rl |= c, t.lanes = c, t.memoizedState = S
		}
	}

	function Cf(t, e) {
		if(typeof t != "function") throw Error(d(191, t));
		t.call(e)
	}

	function Df(t, e) {
		var l = t.callbacks;
		if(l !== null)
			for(t.callbacks = null, t = 0; t < l.length; t++) Cf(l[t], e)
	}
	var ra = r(null),
		In = r(0);

	function Of(t, e) {
		t = Je, _(In, t), _(ra, e), Je = t | e.baseLanes
	}

	function Gc() {
		_(In, Je), _(ra, ra.current)
	}

	function Qc() {
		Je = In.current, A(ra), A(In)
	}
	var ae = r(null),
		pe = null;

	function il(t) {
		var e = t.alternate;
		_(bt, bt.current & 1), _(ae, t), pe === null && (e === null || ra.current !== null || e.memoizedState !== null) && (pe = t)
	}

	function Xc(t) {
		_(bt, bt.current), _(ae, t), pe === null && (pe = t)
	}

	function Uf(t) {
		t.tag === 22 ? (_(bt, bt.current), _(ae, t), pe === null && (pe = t)) : sl()
	}

	function sl() {
		_(bt, bt.current), _(ae, ae.current)
	}

	function ne(t) {
		A(ae), pe === t && (pe = null), A(bt)
	}
	var bt = r(0);

	function Pn(t) {
		for(var e = t; e !== null;) {
			if(e.tag === 13) {
				var l = e.memoizedState;
				if(l !== null && (l = l.dehydrated, l === null || Ji(l) || ki(l))) return e
			} else if(e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
				if((e.flags & 128) !== 0) return e
			} else if(e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if(e === t) break;
			for(; e.sibling === null;) {
				if(e.return === null || e.return === t) return null;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		return null
	}
	var Ge = 0,
		Z = null,
		ut = null,
		zt = null,
		tu = !1,
		da = !1,
		Yl = !1,
		eu = 0,
		Fa = 0,
		ha = null,
		Z1 = 0;

	function pt() {
		throw Error(d(321))
	}

	function Zc(t, e) {
		if(e === null) return !1;
		for(var l = 0; l < e.length && l < t.length; l++)
			if(!ee(t[l], e[l])) return !1;
		return !0
	}

	function Vc(t, e, l, a, n, u) {
		return Ge = u, Z = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, g.H = t === null || t.memoizedState === null ? xo : ni, Yl = !1, u = l(a, n), Yl = !1, da && (u = qf(e, l, a, n)), Hf(t), u
	}

	function Hf(t) {
		g.H = tn;
		var e = ut !== null && ut.next !== null;
		if(Ge = 0, zt = ut = Z = null, tu = !1, Fa = 0, ha = null, e) throw Error(d(300));
		t === null || Nt || (t = t.dependencies, t !== null && wn(t) && (Nt = !0))
	}

	function qf(t, e, l, a) {
		Z = t;
		var n = 0;
		do {
			if(da && (ha = null), Fa = 0, da = !1, 25 <= n) throw Error(d(301));
			if(n += 1, zt = ut = null, t.updateQueue != null) {
				var u = t.updateQueue;
				u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
			}
			g.H = yo, u = e(l, a)
		} while(da);
		return u
	}

	function V1() {
		var t = g.H,
			e = t.useState()[0];
		return e = typeof e.then == "function" ? Ia(e) : e, t = t.useState()[0], (ut !== null ? ut.memoizedState : null) !== t && (Z.flags |= 1024), e
	}

	function Lc() {
		var t = eu !== 0;
		return eu = 0, t
	}

	function wc(t, e, l) {
		e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l
	}

	function Kc(t) {
		if(tu) {
			for(t = t.memoizedState; t !== null;) {
				var e = t.queue;
				e !== null && (e.pending = null), t = t.next
			}
			tu = !1
		}
		Ge = 0, zt = ut = Z = null, da = !1, Fa = eu = 0, ha = null
	}

	function Yt() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return zt === null ? Z.memoizedState = zt = t : zt = zt.next = t, zt
	}

	function St() {
		if(ut === null) {
			var t = Z.alternate;
			t = t !== null ? t.memoizedState : null
		} else t = ut.next;
		var e = zt === null ? Z.memoizedState : zt.next;
		if(e !== null) zt = e, ut = t;
		else {
			if(t === null) throw Z.alternate === null ? Error(d(467)) : Error(d(310));
			ut = t, t = {
				memoizedState: ut.memoizedState,
				baseState: ut.baseState,
				baseQueue: ut.baseQueue,
				queue: ut.queue,
				next: null
			}, zt === null ? Z.memoizedState = zt = t : zt = zt.next = t
		}
		return zt
	}

	function lu() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		}
	}

	function Ia(t) {
		var e = Fa;
		return Fa += 1, ha === null && (ha = []), t = jf(ha, t, e), e = Z, (zt === null ? e.memoizedState : zt.next) === null && (e = e.alternate, g.H = e === null || e.memoizedState === null ? xo : ni), t
	}

	function au(t) {
		if(t !== null && typeof t == "object") {
			if(typeof t.then == "function") return Ia(t);
			if(t.$$typeof === Ht) return Dt(t)
		}
		throw Error(d(438, String(t)))
	}

	function Jc(t) {
		var e = null,
			l = Z.updateQueue;
		if(l !== null && (e = l.memoCache), e == null) {
			var a = Z.alternate;
			a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
				data: a.data.map(function(n) {
					return n.slice()
				}),
				index: 0
			})))
		}
		if(e == null && (e = {
				data: [],
				index: 0
			}), l === null && (l = lu(), Z.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
			for(l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Zl;
		return e.index++, l
	}

	function Qe(t, e) {
		return typeof e == "function" ? e(t) : e
	}

	function nu(t) {
		var e = St();
		return kc(e, ut, t)
	}

	function kc(t, e, l) {
		var a = t.queue;
		if(a === null) throw Error(d(311));
		a.lastRenderedReducer = l;
		var n = t.baseQueue,
			u = a.pending;
		if(u !== null) {
			if(n !== null) {
				var c = n.next;
				n.next = u.next, u.next = c
			}
			e.baseQueue = n = u, a.pending = null
		}
		if(u = t.baseState, n === null) t.memoizedState = u;
		else {
			e = n.next;
			var i = c = null,
				f = null,
				v = e,
				y = !1;
			do {
				var S = v.lane & -536870913;
				if(S !== v.lane ? (J & S) === S : (Ge & S) === S) {
					var p = v.revertLane;
					if(p === 0) f !== null && (f = f.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null
					}), S === ia && (y = !0);
					else if((Ge & p) === p) {
						v = v.next, p === ia && (y = !0);
						continue
					} else S = {
						lane: 0,
						revertLane: v.revertLane,
						gesture: null,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null
					}, f === null ? (i = f = S, c = u) : f = f.next = S, Z.lanes |= p, rl |= p;
					S = v.action, Yl && l(u, S), u = v.hasEagerState ? v.eagerState : l(u, S)
				} else p = {
					lane: S,
					revertLane: v.revertLane,
					gesture: v.gesture,
					action: v.action,
					hasEagerState: v.hasEagerState,
					eagerState: v.eagerState,
					next: null
				}, f === null ? (i = f = p, c = u) : f = f.next = p, Z.lanes |= S, rl |= S;
				v = v.next
			} while(v !== null && v !== e);
			if(f === null ? c = u : f.next = i, !ee(u, t.memoizedState) && (Nt = !0, y && (l = sa, l !== null))) throw l;
			t.memoizedState = u, t.baseState = c, t.baseQueue = f, a.lastRenderedState = u
		}
		return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
	}

	function Wc(t) {
		var e = St(),
			l = e.queue;
		if(l === null) throw Error(d(311));
		l.lastRenderedReducer = t;
		var a = l.dispatch,
			n = l.pending,
			u = e.memoizedState;
		if(n !== null) {
			l.pending = null;
			var c = n = n.next;
			do u = t(u, c.action), c = c.next; while(c !== n);
			ee(u, e.memoizedState) || (Nt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u
		}
		return [u, a]
	}

	function Rf(t, e, l) {
		var a = Z,
			n = St(),
			u = $;
		if(u) {
			if(l === void 0) throw Error(d(407));
			l = l()
		} else l = e();
		var c = !ee((ut || n).memoizedState, l);
		if(c && (n.memoizedState = l, Nt = !0), n = n.queue, Ic(Gf.bind(null, a, n, t), [t]), n.getSnapshot !== e || c || zt !== null && zt.memoizedState.tag & 1) {
			if(a.flags |= 2048, ma(9, {
					destroy: void 0
				}, Yf.bind(null, a, n, l, e), null), ot === null) throw Error(d(349));
			u || (Ge & 127) !== 0 || Bf(a, e, l)
		}
		return l
	}

	function Bf(t, e, l) {
		t.flags |= 16384, t = {
			getSnapshot: e,
			value: l
		}, e = Z.updateQueue, e === null ? (e = lu(), Z.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t))
	}

	function Yf(t, e, l, a) {
		e.value = l, e.getSnapshot = a, Qf(e) && Xf(t)
	}

	function Gf(t, e, l) {
		return l(function() {
			Qf(e) && Xf(t)
		})
	}

	function Qf(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var l = e();
			return !ee(t, l)
		} catch {
			return !0
		}
	}

	function Xf(t) {
		var e = Ml(t, 2);
		e !== null && Wt(e, t, 2)
	}

	function $c(t) {
		var e = Yt();
		if(typeof t == "function") {
			var l = t;
			if(t = l(), Yl) {
				Fe(!0);
				try {
					l()
				} finally {
					Fe(!1)
				}
			}
		}
		return e.memoizedState = e.baseState = t, e.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Qe,
			lastRenderedState: t
		}, e
	}

	function Zf(t, e, l, a) {
		return t.baseState = l, kc(t, ut, typeof a == "function" ? a : Qe)
	}

	function L1(t, e, l, a, n) {
		if(iu(t)) throw Error(d(485));
		if(t = e.action, t !== null) {
			var u = {
				payload: n,
				action: t,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(c) {
					u.listeners.push(c)
				}
			};
			g.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Vf(e, u)) : (u.next = l.next, e.pending = l.next = u)
		}
	}

	function Vf(t, e) {
		var l = e.action,
			a = e.payload,
			n = t.state;
		if(e.isTransition) {
			var u = g.T,
				c = {};
			g.T = c;
			try {
				var i = l(n, a),
					f = g.S;
				f !== null && f(c, i), Lf(t, e, i)
			} catch (v) {
				Fc(t, e, v)
			} finally {
				u !== null && c.types !== null && (u.types = c.types), g.T = u
			}
		} else try {
			u = l(n, a), Lf(t, e, u)
		} catch (v) {
			Fc(t, e, v)
		}
	}

	function Lf(t, e, l) {
		l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
			wf(t, e, a)
		}, function(a) {
			return Fc(t, e, a)
		}) : wf(t, e, l)
	}

	function wf(t, e, l) {
		e.status = "fulfilled", e.value = l, Kf(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Vf(t, l)))
	}

	function Fc(t, e, l) {
		var a = t.pending;
		if(t.pending = null, a !== null) {
			a = a.next;
			do e.status = "rejected", e.reason = l, Kf(e), e = e.next; while(e !== a)
		}
		t.action = null
	}

	function Kf(t) {
		t = t.listeners;
		for(var e = 0; e < t.length; e++)(0, t[e])()
	}

	function Jf(t, e) {
		return e
	}

	function kf(t, e) {
		if($) {
			var l = ot.formState;
			if(l !== null) {
				t: {
					var a = Z;
					if($) {
						if(rt) {
							e: {
								for(var n = rt, u = ve; n.nodeType !== 8;) {
									if(!u) {
										n = null;
										break e
									}
									if(n = xe(n.nextSibling), n === null) {
										n = null;
										break e
									}
								}
								u = n.data,
								n = u === "F!" || u === "F" ? n : null
							}
							if(n) {
								rt = xe(n.nextSibling), a = n.data === "F!";
								break t
							}
						}
						ll(a)
					}
					a = !1
				}
				a && (e = l[0])
			}
		}
		return l = Yt(), l.memoizedState = l.baseState = e, a = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Jf,
			lastRenderedState: e
		}, l.queue = a, l = mo.bind(null, Z, a), a.dispatch = l, a = $c(!1), u = ai.bind(null, Z, !1, a.queue), a = Yt(), n = {
			state: e,
			dispatch: null,
			action: t,
			pending: null
		}, a.queue = n, l = L1.bind(null, Z, n, u, l), n.dispatch = l, a.memoizedState = t, [e, l, !1]
	}

	function Wf(t) {
		var e = St();
		return $f(e, ut, t)
	}

	function $f(t, e, l) {
		if(e = kc(t, e, Jf)[0], t = nu(Qe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
			var a = Ia(e)
		} catch (c) {
			throw c === fa ? kn : c
		} else a = e;
		e = St();
		var n = e.queue,
			u = n.dispatch;
		return l !== e.memoizedState && (Z.flags |= 2048, ma(9, {
			destroy: void 0
		}, w1.bind(null, n, l), null)), [a, u, t]
	}

	function w1(t, e) {
		t.action = e
	}

	function Ff(t) {
		var e = St(),
			l = ut;
		if(l !== null) return $f(e, l, t);
		St(), e = e.memoizedState, l = St();
		var a = l.queue.dispatch;
		return l.memoizedState = t, [e, a, !1]
	}

	function ma(t, e, l, a) {
		return t = {
			tag: t,
			create: l,
			deps: a,
			inst: e,
			next: null
		}, e = Z.updateQueue, e === null && (e = lu(), Z.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t
	}

	function If() {
		return St().memoizedState
	}

	function uu(t, e, l, a) {
		var n = Yt();
		Z.flags |= t, n.memoizedState = ma(1 | e, {
			destroy: void 0
		}, l, a === void 0 ? null : a)
	}

	function cu(t, e, l, a) {
		var n = St();
		a = a === void 0 ? null : a;
		var u = n.memoizedState.inst;
		ut !== null && a !== null && Zc(a, ut.memoizedState.deps) ? n.memoizedState = ma(e, u, l, a) : (Z.flags |= t, n.memoizedState = ma(1 | e, u, l, a))
	}

	function Pf(t, e) {
		uu(8390656, 8, t, e)
	}

	function Ic(t, e) {
		cu(2048, 8, t, e)
	}

	function K1(t) {
		Z.flags |= 4;
		var e = Z.updateQueue;
		if(e === null) e = lu(), Z.updateQueue = e, e.events = [t];
		else {
			var l = e.events;
			l === null ? e.events = [t] : l.push(t)
		}
	}

	function to(t) {
		var e = St().memoizedState;
		return K1({
				ref: e,
				nextImpl: t
			}),
			function() {
				if((tt & 2) !== 0) throw Error(d(440));
				return e.impl.apply(void 0, arguments)
			}
	}

	function eo(t, e) {
		return cu(4, 2, t, e)
	}

	function lo(t, e) {
		return cu(4, 4, t, e)
	}

	function ao(t, e) {
		if(typeof e == "function") {
			t = t();
			var l = e(t);
			return function() {
				typeof l == "function" ? l() : e(null)
			}
		}
		if(e != null) return t = t(), e.current = t,
			function() {
				e.current = null
			}
	}

	function no(t, e, l) {
		l = l != null ? l.concat([t]) : null, cu(4, 4, ao.bind(null, e, t), l)
	}

	function Pc() {}

	function uo(t, e) {
		var l = St();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		return e !== null && Zc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t)
	}

	function co(t, e) {
		var l = St();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		if(e !== null && Zc(e, a[1])) return a[0];
		if(a = t(), Yl) {
			Fe(!0);
			try {
				t()
			} finally {
				Fe(!1)
			}
		}
		return l.memoizedState = [a, e], a
	}

	function ti(t, e, l) {
		return l === void 0 || (Ge & 1073741824) !== 0 && (J & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = sr(), Z.lanes |= t, rl |= t, l)
	}

	function io(t, e, l, a) {
		return ee(l, e) ? l : ra.current !== null ? (t = ti(t, l, a), ee(t, e) || (Nt = !0), t) : (Ge & 42) === 0 || (Ge & 1073741824) !== 0 && (J & 261930) === 0 ? (Nt = !0, t.memoizedState = l) : (t = sr(), Z.lanes |= t, rl |= t, e)
	}

	function so(t, e, l, a, n) {
		var u = T.p;
		T.p = u !== 0 && 8 > u ? u : 8;
		var c = g.T,
			i = {};
		g.T = i, ai(t, !1, e, l);
		try {
			var f = n(),
				v = g.S;
			if(v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
				var y = X1(f, a);
				Pa(t, e, y, ie(t))
			} else Pa(t, e, a, ie(t))
		} catch (S) {
			Pa(t, e, {
				then: function() {},
				status: "rejected",
				reason: S
			}, ie())
		} finally {
			T.p = u, c !== null && i.types !== null && (c.types = i.types), g.T = c
		}
	}

	function J1() {}

	function ei(t, e, l, a) {
		if(t.tag !== 5) throw Error(d(476));
		var n = fo(t).queue;
		so(t, n, e, G, l === null ? J1 : function() {
			return oo(t), l(a)
		})
	}

	function fo(t) {
		var e = t.memoizedState;
		if(e !== null) return e;
		e = {
			memoizedState: G,
			baseState: G,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qe,
				lastRenderedState: G
			},
			next: null
		};
		var l = {};
		return e.next = {
			memoizedState: l,
			baseState: l,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qe,
				lastRenderedState: l
			},
			next: null
		}, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
	}

	function oo(t) {
		var e = fo(t);
		e.next === null && (e = t.alternate.memoizedState), Pa(t, e.next.queue, {}, ie())
	}

	function li() {
		return Dt(xn)
	}

	function ro() {
		return St().memoizedState
	}

	function ho() {
		return St().memoizedState
	}

	function k1(t) {
		for(var e = t.return; e !== null;) {
			switch(e.tag) {
				case 24:
				case 3:
					var l = ie();
					t = ul(l);
					var a = cl(e, t, l);
					a !== null && (Wt(a, e, l), ka(a, e, l)), e = {
						cache: Dc()
					}, t.payload = e;
					return
			}
			e = e.return
		}
	}

	function W1(t, e, l) {
		var a = ie();
		l = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, iu(t) ? vo(e, l) : (l = bc(t, e, l, a), l !== null && (Wt(l, t, a), po(l, e, a)))
	}

	function mo(t, e, l) {
		var a = ie();
		Pa(t, e, l, a)
	}

	function Pa(t, e, l, a) {
		var n = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if(iu(t)) vo(e, n);
		else {
			var u = t.alternate;
			if(t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
				var c = e.lastRenderedState,
					i = u(c, l);
				if(n.hasEagerState = !0, n.eagerState = i, ee(i, c)) return Xn(t, e, n, 0), ot === null && Qn(), !1
			} catch {}
			if(l = bc(t, e, n, a), l !== null) return Wt(l, t, a), po(l, e, a), !0
		}
		return !1
	}

	function ai(t, e, l, a) {
		if(a = {
				lane: 2,
				revertLane: qi(),
				gesture: null,
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, iu(t)) {
			if(e) throw Error(d(479))
		} else e = bc(t, l, a, 2), e !== null && Wt(e, t, 2)
	}

	function iu(t) {
		var e = t.alternate;
		return t === Z || e !== null && e === Z
	}

	function vo(t, e) {
		da = tu = !0;
		var l = t.pending;
		l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e
	}

	function po(t, e, l) {
		if((l & 4194048) !== 0) {
			var a = e.lanes;
			a &= t.pendingLanes, l |= a, e.lanes = l, gs(t, l)
		}
	}
	var tn = {
		readContext: Dt,
		use: au,
		useCallback: pt,
		useContext: pt,
		useEffect: pt,
		useImperativeHandle: pt,
		useLayoutEffect: pt,
		useInsertionEffect: pt,
		useMemo: pt,
		useReducer: pt,
		useRef: pt,
		useState: pt,
		useDebugValue: pt,
		useDeferredValue: pt,
		useTransition: pt,
		useSyncExternalStore: pt,
		useId: pt,
		useHostTransitionStatus: pt,
		useFormState: pt,
		useActionState: pt,
		useOptimistic: pt,
		useMemoCache: pt,
		useCacheRefresh: pt
	};
	tn.useEffectEvent = pt;
	var xo = {
			readContext: Dt,
			use: au,
			useCallback: function(t, e) {
				return Yt().memoizedState = [t, e === void 0 ? null : e], t
			},
			useContext: Dt,
			useEffect: Pf,
			useImperativeHandle: function(t, e, l) {
				l = l != null ? l.concat([t]) : null, uu(4194308, 4, ao.bind(null, e, t), l)
			},
			useLayoutEffect: function(t, e) {
				return uu(4194308, 4, t, e)
			},
			useInsertionEffect: function(t, e) {
				uu(4, 2, t, e)
			},
			useMemo: function(t, e) {
				var l = Yt();
				e = e === void 0 ? null : e;
				var a = t();
				if(Yl) {
					Fe(!0);
					try {
						t()
					} finally {
						Fe(!1)
					}
				}
				return l.memoizedState = [a, e], a
			},
			useReducer: function(t, e, l) {
				var a = Yt();
				if(l !== void 0) {
					var n = l(e);
					if(Yl) {
						Fe(!0);
						try {
							l(e)
						} finally {
							Fe(!1)
						}
					}
				} else n = e;
				return a.memoizedState = a.baseState = n, t = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: n
				}, a.queue = t, t = t.dispatch = W1.bind(null, Z, t), [a.memoizedState, t]
			},
			useRef: function(t) {
				var e = Yt();
				return t = {
					current: t
				}, e.memoizedState = t
			},
			useState: function(t) {
				t = $c(t);
				var e = t.queue,
					l = mo.bind(null, Z, e);
				return e.dispatch = l, [t.memoizedState, l]
			},
			useDebugValue: Pc,
			useDeferredValue: function(t, e) {
				var l = Yt();
				return ti(l, t, e)
			},
			useTransition: function() {
				var t = $c(!1);
				return t = so.bind(null, Z, t.queue, !0, !1), Yt().memoizedState = t, [!1, t]
			},
			useSyncExternalStore: function(t, e, l) {
				var a = Z,
					n = Yt();
				if($) {
					if(l === void 0) throw Error(d(407));
					l = l()
				} else {
					if(l = e(), ot === null) throw Error(d(349));
					(J & 127) !== 0 || Bf(a, e, l)
				}
				n.memoizedState = l;
				var u = {
					value: l,
					getSnapshot: e
				};
				return n.queue = u, Pf(Gf.bind(null, a, u, t), [t]), a.flags |= 2048, ma(9, {
					destroy: void 0
				}, Yf.bind(null, a, u, l, e), null), l
			},
			useId: function() {
				var t = Yt(),
					e = ot.identifierPrefix;
				if($) {
					var l = Te,
						a = Ee;
					l = (a & ~(1 << 32 - te(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = eu++, 0 < l && (e += "H" + l.toString(32)), e += "_"
				} else l = Z1++, e = "_" + e + "r_" + l.toString(32) + "_";
				return t.memoizedState = e
			},
			useHostTransitionStatus: li,
			useFormState: kf,
			useActionState: kf,
			useOptimistic: function(t) {
				var e = Yt();
				e.memoizedState = e.baseState = t;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null
				};
				return e.queue = l, e = ai.bind(null, Z, !0, l), l.dispatch = e, [t, e]
			},
			useMemoCache: Jc,
			useCacheRefresh: function() {
				return Yt().memoizedState = k1.bind(null, Z)
			},
			useEffectEvent: function(t) {
				var e = Yt(),
					l = {
						impl: t
					};
				return e.memoizedState = l,
					function() {
						if((tt & 2) !== 0) throw Error(d(440));
						return l.impl.apply(void 0, arguments)
					}
			}
		},
		ni = {
			readContext: Dt,
			use: au,
			useCallback: uo,
			useContext: Dt,
			useEffect: Ic,
			useImperativeHandle: no,
			useInsertionEffect: eo,
			useLayoutEffect: lo,
			useMemo: co,
			useReducer: nu,
			useRef: If,
			useState: function() {
				return nu(Qe)
			},
			useDebugValue: Pc,
			useDeferredValue: function(t, e) {
				var l = St();
				return io(l, ut.memoizedState, t, e)
			},
			useTransition: function() {
				var t = nu(Qe)[0],
					e = St().memoizedState;
				return [typeof t == "boolean" ? t : Ia(t), e]
			},
			useSyncExternalStore: Rf,
			useId: ro,
			useHostTransitionStatus: li,
			useFormState: Wf,
			useActionState: Wf,
			useOptimistic: function(t, e) {
				var l = St();
				return Zf(l, ut, t, e)
			},
			useMemoCache: Jc,
			useCacheRefresh: ho
		};
	ni.useEffectEvent = to;
	var yo = {
		readContext: Dt,
		use: au,
		useCallback: uo,
		useContext: Dt,
		useEffect: Ic,
		useImperativeHandle: no,
		useInsertionEffect: eo,
		useLayoutEffect: lo,
		useMemo: co,
		useReducer: Wc,
		useRef: If,
		useState: function() {
			return Wc(Qe)
		},
		useDebugValue: Pc,
		useDeferredValue: function(t, e) {
			var l = St();
			return ut === null ? ti(l, t, e) : io(l, ut.memoizedState, t, e)
		},
		useTransition: function() {
			var t = Wc(Qe)[0],
				e = St().memoizedState;
			return [typeof t == "boolean" ? t : Ia(t), e]
		},
		useSyncExternalStore: Rf,
		useId: ro,
		useHostTransitionStatus: li,
		useFormState: Ff,
		useActionState: Ff,
		useOptimistic: function(t, e) {
			var l = St();
			return ut !== null ? Zf(l, ut, t, e) : (l.baseState = t, [t, l.queue.dispatch])
		},
		useMemoCache: Jc,
		useCacheRefresh: ho
	};
	yo.useEffectEvent = to;

	function ui(t, e, l, a) {
		e = t.memoizedState, l = l(a, e), l = l == null ? e : Y({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l)
	}
	var ci = {
		enqueueSetState: function(t, e, l) {
			t = t._reactInternals;
			var a = ie(),
				n = ul(a);
			n.payload = e, l != null && (n.callback = l), e = cl(t, n, a), e !== null && (Wt(e, t, a), ka(e, t, a))
		},
		enqueueReplaceState: function(t, e, l) {
			t = t._reactInternals;
			var a = ie(),
				n = ul(a);
			n.tag = 1, n.payload = e, l != null && (n.callback = l), e = cl(t, n, a), e !== null && (Wt(e, t, a), ka(e, t, a))
		},
		enqueueForceUpdate: function(t, e) {
			t = t._reactInternals;
			var l = ie(),
				a = ul(l);
			a.tag = 2, e != null && (a.callback = e), e = cl(t, a, l), e !== null && (Wt(e, t, l), ka(e, t, l))
		}
	};

	function go(t, e, l, a, n, u, c) {
		return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Qa(l, a) || !Qa(n, u) : !0
	}

	function bo(t, e, l, a) {
		t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && ci.enqueueReplaceState(e, e.state, null)
	}

	function Gl(t, e) {
		var l = e;
		if("ref" in e) {
			l = {};
			for(var a in e) a !== "ref" && (l[a] = e[a])
		}
		if(t = t.defaultProps) {
			l === e && (l = Y({}, l));
			for(var n in t) l[n] === void 0 && (l[n] = t[n])
		}
		return l
	}

	function So(t) {
		Gn(t)
	}

	function Ao(t) {
		console.error(t)
	}

	function zo(t) {
		Gn(t)
	}

	function su(t, e) {
		try {
			var l = t.onUncaughtError;
			l(e.value, {
				componentStack: e.stack
			})
		} catch (a) {
			setTimeout(function() {
				throw a
			})
		}
	}

	function No(t, e, l) {
		try {
			var a = t.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: e.tag === 1 ? e.stateNode : null
			})
		} catch (n) {
			setTimeout(function() {
				throw n
			})
		}
	}

	function ii(t, e, l) {
		return l = ul(l), l.tag = 3, l.payload = {
			element: null
		}, l.callback = function() {
			su(t, e)
		}, l
	}

	function jo(t) {
		return t = ul(t), t.tag = 3, t
	}

	function Eo(t, e, l, a) {
		var n = l.type.getDerivedStateFromError;
		if(typeof n == "function") {
			var u = a.value;
			t.payload = function() {
				return n(u)
			}, t.callback = function() {
				No(e, l, a)
			}
		}
		var c = l.stateNode;
		c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
			No(e, l, a), typeof n != "function" && (dl === null ? dl = new Set([this]) : dl.add(this));
			var i = a.stack;
			this.componentDidCatch(a.value, {
				componentStack: i !== null ? i : ""
			})
		})
	}

	function $1(t, e, l, a, n) {
		if(l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
			if(e = l.alternate, e !== null && ca(e, l, n, !0), l = ae.current, l !== null) {
				switch(l.tag) {
					case 31:
					case 13:
						return pe === null ? bu() : l.alternate === null && xt === 0 && (xt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Wn ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([a]) : e.add(a), Oi(t, a, n)), !1;
					case 22:
						return l.flags |= 65536, a === Wn ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
							transitions: null,
							markerInstances: null,
							retryQueue: new Set([a])
						}, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([a]) : l.add(a)), Oi(t, a, n)), !1
				}
				throw Error(d(435, l.tag))
			}
			return Oi(t, a, n), bu(), !1
		}
		if($) return e = ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Ec && (t = Error(d(422), {
			cause: a
		}), Va(de(t, l)))) : (a !== Ec && (e = Error(d(423), {
			cause: a
		}), Va(de(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = de(a, l), n = ii(t.stateNode, a, n), Bc(t, n), xt !== 4 && (xt = 2)), !1;
		var u = Error(d(520), {
			cause: a
		});
		if(u = de(u, l), fn === null ? fn = [u] : fn.push(u), xt !== 4 && (xt = 2), e === null) return !0;
		a = de(a, l), l = e;
		do {
			switch(l.tag) {
				case 3:
					return l.flags |= 65536, t = n & -n, l.lanes |= t, t = ii(l.stateNode, a, t), Bc(l, t), !1;
				case 1:
					if(e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (dl === null || !dl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = jo(n), Eo(n, t, l, a), Bc(l, n), !1
			}
			l = l.return
		} while(l !== null);
		return !1
	}
	var si = Error(d(461)),
		Nt = !1;

	function Ot(t, e, l, a) {
		e.child = t === null ? Mf(e, null, l, a) : Bl(e, t.child, l, a)
	}

	function To(t, e, l, a, n) {
		l = l.render;
		var u = e.ref;
		if("ref" in a) {
			var c = {};
			for(var i in a) i !== "ref" && (c[i] = a[i])
		} else c = a;
		return Ul(e), a = Vc(t, e, l, c, u, n), i = Lc(), t !== null && !Nt ? (wc(t, e, n), Xe(t, e, n)) : ($ && i && Nc(e), e.flags |= 1, Ot(t, e, a, n), e.child)
	}

	function _o(t, e, l, a, n) {
		if(t === null) {
			var u = l.type;
			return typeof u == "function" && !Sc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Mo(t, e, u, a, n)) : (t = Vn(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t)
		}
		if(u = t.child, !pi(t, n)) {
			var c = u.memoizedProps;
			if(l = l.compare, l = l !== null ? l : Qa, l(c, a) && t.ref === e.ref) return Xe(t, e, n)
		}
		return e.flags |= 1, t = qe(u, a), t.ref = e.ref, t.return = e, e.child = t
	}

	function Mo(t, e, l, a, n) {
		if(t !== null) {
			var u = t.memoizedProps;
			if(Qa(u, a) && t.ref === e.ref)
				if(Nt = !1, e.pendingProps = a = u, pi(t, n))(t.flags & 131072) !== 0 && (Nt = !0);
				else return e.lanes = t.lanes, Xe(t, e, n)
		}
		return fi(t, e, l, a, n)
	}

	function Co(t, e, l, a) {
		var n = a.children,
			u = t !== null ? t.memoizedState : null;
		if(t === null && e.stateNode === null && (e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), a.mode === "hidden") {
			if((e.flags & 128) !== 0) {
				if(u = u !== null ? u.baseLanes | l : l, t !== null) {
					for(a = e.child = t.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
					a = n & ~u
				} else a = 0, e.child = null;
				return Do(t, e, u, l, a)
			}
			if((l & 536870912) !== 0) e.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, t !== null && Jn(e, u !== null ? u.cachePool : null), u !== null ? Of(e, u) : Gc(), Uf(e);
			else return a = e.lanes = 536870912, Do(t, e, u !== null ? u.baseLanes | l : l, l, a)
		} else u !== null ? (Jn(e, u.cachePool), Of(e, u), sl(), e.memoizedState = null) : (t !== null && Jn(e, null), Gc(), sl());
		return Ot(t, e, n, l), e.child
	}

	function en(t, e) {
		return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), e.sibling
	}

	function Do(t, e, l, a, n) {
		var u = Uc();
		return u = u === null ? null : {
			parent: At._currentValue,
			pool: u
		}, e.memoizedState = {
			baseLanes: l,
			cachePool: u
		}, t !== null && Jn(e, null), Gc(), Uf(e), t !== null && ca(t, e, a, !0), e.childLanes = n, null
	}

	function fu(t, e) {
		return e = ru({
			mode: e.mode,
			children: e.children
		}, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
	}

	function Oo(t, e, l) {
		return Bl(e, t.child, null, l), t = fu(e, e.pendingProps), t.flags |= 2, ne(e), e.memoizedState = null, t
	}

	function F1(t, e, l) {
		var a = e.pendingProps,
			n = (e.flags & 128) !== 0;
		if(e.flags &= -129, t === null) {
			if($) {
				if(a.mode === "hidden") return t = fu(e, a), e.lanes = 536870912, en(null, t);
				if(Xc(e), (t = rt) ? (t = Lr(t, ve), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
						dehydrated: t,
						treeContext: tl !== null ? {
							id: Ee,
							overflow: Te
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = mf(t), l.return = e, e.child = l, Ct = e, rt = null)) : t = null, t === null) throw ll(e);
				return e.lanes = 536870912, null
			}
			return fu(e, a)
		}
		var u = t.memoizedState;
		if(u !== null) {
			var c = u.dehydrated;
			if(Xc(e), n)
				if(e.flags & 256) e.flags &= -257, e = Oo(t, e, l);
				else if(e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
			else throw Error(d(558));
			else if(Nt || ca(t, e, l, !1), n = (l & t.childLanes) !== 0, Nt || n) {
				if(a = ot, a !== null && (c = bs(a, l), c !== 0 && c !== u.retryLane)) throw u.retryLane = c, Ml(t, c), Wt(a, t, c), si;
				bu(), e = Oo(t, e, l)
			} else t = u.treeContext, rt = xe(c.nextSibling), Ct = e, $ = !0, el = null, ve = !1, t !== null && xf(e, t), e = fu(e, a), e.flags |= 4096;
			return e
		}
		return t = qe(t.child, {
			mode: a.mode,
			children: a.children
		}), t.ref = e.ref, e.child = t, t.return = e, t
	}

	function ou(t, e) {
		var l = e.ref;
		if(l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if(typeof l != "function" && typeof l != "object") throw Error(d(284));
			(t === null || t.ref !== l) && (e.flags |= 4194816)
		}
	}

	function fi(t, e, l, a, n) {
		return Ul(e), l = Vc(t, e, l, a, void 0, n), a = Lc(), t !== null && !Nt ? (wc(t, e, n), Xe(t, e, n)) : ($ && a && Nc(e), e.flags |= 1, Ot(t, e, l, n), e.child)
	}

	function Uo(t, e, l, a, n, u) {
		return Ul(e), e.updateQueue = null, l = qf(e, a, l, n), Hf(t), a = Lc(), t !== null && !Nt ? (wc(t, e, u), Xe(t, e, u)) : ($ && a && Nc(e), e.flags |= 1, Ot(t, e, l, u), e.child)
	}

	function Ho(t, e, l, a, n) {
		if(Ul(e), e.stateNode === null) {
			var u = la,
				c = l.contextType;
			typeof c == "object" && c !== null && (u = Dt(c)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ci, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, qc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Dt(c) : la, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (ui(e, l, c, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && ci.enqueueReplaceState(u, u.state, null), $a(e, a, u, n), Wa(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
		} else if(t === null) {
			u = e.stateNode;
			var i = e.memoizedProps,
				f = Gl(l, i);
			u.props = f;
			var v = u.context,
				y = l.contextType;
			c = la, typeof y == "object" && y !== null && (c = Dt(y));
			var S = l.getDerivedStateFromProps;
			y = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function", i = e.pendingProps !== i, y || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i || v !== c) && bo(e, u, a, c), nl = !1;
			var p = e.memoizedState;
			u.state = p, $a(e, a, u, n), Wa(), v = e.memoizedState, i || p !== v || nl ? (typeof S == "function" && (ui(e, l, S, a), v = e.memoizedState), (f = nl || go(e, l, f, a, p, v, c)) ? (y || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = v), u.props = a, u.state = v, u.context = c, a = f) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
		} else {
			u = e.stateNode, Rc(t, e), c = e.memoizedProps, y = Gl(l, c), u.props = y, S = e.pendingProps, p = u.context, v = l.contextType, f = la, typeof v == "object" && v !== null && (f = Dt(v)), i = l.getDerivedStateFromProps, (v = typeof i == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== S || p !== f) && bo(e, u, a, f), nl = !1, p = e.memoizedState, u.state = p, $a(e, a, u, n), Wa();
			var x = e.memoizedState;
			c !== S || p !== x || nl || t !== null && t.dependencies !== null && wn(t.dependencies) ? (typeof i == "function" && (ui(e, l, i, a), x = e.memoizedState), (y = nl || go(e, l, y, a, p, x, f) || t !== null && t.dependencies !== null && wn(t.dependencies)) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, x, f), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, x, f)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = x), u.props = a, u.state = x, u.context = f, a = y) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), a = !1)
		}
		return u = a, ou(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Bl(e, t.child, null, n), e.child = Bl(e, null, l, n)) : Ot(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Xe(t, e, n), t
	}

	function qo(t, e, l, a) {
		return Dl(), e.flags |= 256, Ot(t, e, l, a), e.child
	}
	var oi = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};

	function ri(t) {
		return {
			baseLanes: t,
			cachePool: zf()
		}
	}

	function di(t, e, l) {
		return t = t !== null ? t.childLanes & ~l : 0, e && (t |= ce), t
	}

	function Ro(t, e, l) {
		var a = e.pendingProps,
			n = !1,
			u = (e.flags & 128) !== 0,
			c;
		if((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (bt.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
			if($) {
				if(n ? il(e) : sl(), (t = rt) ? (t = Lr(t, ve), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
						dehydrated: t,
						treeContext: tl !== null ? {
							id: Ee,
							overflow: Te
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = mf(t), l.return = e, e.child = l, Ct = e, rt = null)) : t = null, t === null) throw ll(e);
				return ki(t) ? e.lanes = 32 : e.lanes = 536870912, null
			}
			var i = a.children;
			return a = a.fallback, n ? (sl(), n = e.mode, i = ru({
				mode: "hidden",
				children: i
			}, n), a = Cl(a, n, l, null), i.return = e, a.return = e, i.sibling = a, e.child = i, a = e.child, a.memoizedState = ri(l), a.childLanes = di(t, c, l), e.memoizedState = oi, en(null, a)) : (il(e), hi(e, i))
		}
		var f = t.memoizedState;
		if(f !== null && (i = f.dehydrated, i !== null)) {
			if(u) e.flags & 256 ? (il(e), e.flags &= -257, e = mi(t, e, l)) : e.memoizedState !== null ? (sl(), e.child = t.child, e.flags |= 128, e = null) : (sl(), i = a.fallback, n = e.mode, a = ru({
				mode: "visible",
				children: a.children
			}, n), i = Cl(i, n, l, null), i.flags |= 2, a.return = e, i.return = e, a.sibling = i, e.child = a, Bl(e, t.child, null, l), a = e.child, a.memoizedState = ri(l), a.childLanes = di(t, c, l), e.memoizedState = oi, e = en(null, a));
			else if(il(e), ki(i)) {
				if(c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
				c = v, a = Error(d(419)), a.stack = "", a.digest = c, Va({
					value: a,
					source: null,
					stack: null
				}), e = mi(t, e, l)
			} else if(Nt || ca(t, e, l, !1), c = (l & t.childLanes) !== 0, Nt || c) {
				if(c = ot, c !== null && (a = bs(c, l), a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Ml(t, a), Wt(c, t, a), si;
				Ji(i) || bu(), e = mi(t, e, l)
			} else Ji(i) ? (e.flags |= 192, e.child = t.child, e = null) : (t = f.treeContext, rt = xe(i.nextSibling), Ct = e, $ = !0, el = null, ve = !1, t !== null && xf(e, t), e = hi(e, a.children), e.flags |= 4096);
			return e
		}
		return n ? (sl(), i = a.fallback, n = e.mode, f = t.child, v = f.sibling, a = qe(f, {
			mode: "hidden",
			children: a.children
		}), a.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? i = qe(v, i) : (i = Cl(i, n, l, null), i.flags |= 2), i.return = e, a.return = e, a.sibling = i, e.child = a, en(null, a), a = e.child, i = t.child.memoizedState, i === null ? i = ri(l) : (n = i.cachePool, n !== null ? (f = At._currentValue, n = n.parent !== f ? {
			parent: f,
			pool: f
		} : n) : n = zf(), i = {
			baseLanes: i.baseLanes | l,
			cachePool: n
		}), a.memoizedState = i, a.childLanes = di(t, c, l), e.memoizedState = oi, en(t.child, a)) : (il(e), l = t.child, t = l.sibling, l = qe(l, {
			mode: "visible",
			children: a.children
		}), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l)
	}

	function hi(t, e) {
		return e = ru({
			mode: "visible",
			children: e
		}, t.mode), e.return = t, t.child = e
	}

	function ru(t, e) {
		return t = le(22, t, null, e), t.lanes = 0, t
	}

	function mi(t, e, l) {
		return Bl(e, t.child, null, l), t = hi(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
	}

	function Bo(t, e, l) {
		t.lanes |= e;
		var a = t.alternate;
		a !== null && (a.lanes |= e), Mc(t.return, e, l)
	}

	function vi(t, e, l, a, n, u) {
		var c = t.memoizedState;
		c === null ? t.memoizedState = {
			isBackwards: e,
			rendering: null,
			renderingStartTime: 0,
			last: a,
			tail: l,
			tailMode: n,
			treeForkCount: u
		} : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u)
	}

	function Yo(t, e, l) {
		var a = e.pendingProps,
			n = a.revealOrder,
			u = a.tail;
		a = a.children;
		var c = bt.current,
			i = (c & 2) !== 0;
		if(i ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, _(bt, c), Ot(t, e, a, l), a = $ ? Za : 0, !i && t !== null && (t.flags & 128) !== 0) t: for(t = e.child; t !== null;) {
			if(t.tag === 13) t.memoizedState !== null && Bo(t, l, e);
			else if(t.tag === 19) Bo(t, l, e);
			else if(t.child !== null) {
				t.child.return = t, t = t.child;
				continue
			}
			if(t === e) break t;
			for(; t.sibling === null;) {
				if(t.return === null || t.return === e) break t;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		switch(n) {
			case "forwards":
				for(l = e.child, n = null; l !== null;) t = l.alternate, t !== null && Pn(t) === null && (n = l), l = l.sibling;
				l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), vi(e, !1, n, l, u, a);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for(l = null, n = e.child, e.child = null; n !== null;) {
					if(t = n.alternate, t !== null && Pn(t) === null) {
						e.child = n;
						break
					}
					t = n.sibling, n.sibling = l, l = n, n = t
				}
				vi(e, !0, l, null, u, a);
				break;
			case "together":
				vi(e, !1, null, null, void 0, a);
				break;
			default:
				e.memoizedState = null
		}
		return e.child
	}

	function Xe(t, e, l) {
		if(t !== null && (e.dependencies = t.dependencies), rl |= e.lanes, (l & e.childLanes) === 0)
			if(t !== null) {
				if(ca(t, e, l, !1), (l & e.childLanes) === 0) return null
			} else return null;
		if(t !== null && e.child !== t.child) throw Error(d(153));
		if(e.child !== null) {
			for(t = e.child, l = qe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;) t = t.sibling, l = l.sibling = qe(t, t.pendingProps), l.return = e;
			l.sibling = null
		}
		return e.child
	}

	function pi(t, e) {
		return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && wn(t)))
	}

	function I1(t, e, l) {
		switch(e.tag) {
			case 3:
				Bt(e, e.stateNode.containerInfo), al(e, At, t.memoizedState.cache), Dl();
				break;
			case 27:
			case 5:
				Ta(e);
				break;
			case 4:
				Bt(e, e.stateNode.containerInfo);
				break;
			case 10:
				al(e, e.type, e.memoizedProps.value);
				break;
			case 31:
				if(e.memoizedState !== null) return e.flags |= 128, Xc(e), null;
				break;
			case 13:
				var a = e.memoizedState;
				if(a !== null) return a.dehydrated !== null ? (il(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Ro(t, e, l) : (il(e), t = Xe(t, e, l), t !== null ? t.sibling : null);
				il(e);
				break;
			case 19:
				var n = (t.flags & 128) !== 0;
				if(a = (l & e.childLanes) !== 0, a || (ca(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
					if(a) return Yo(t, e, l);
					e.flags |= 128
				}
				if(n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), _(bt, bt.current), a) break;
				return null;
			case 22:
				return e.lanes = 0, Co(t, e, l, e.pendingProps);
			case 24:
				al(e, At, t.memoizedState.cache)
		}
		return Xe(t, e, l)
	}

	function Go(t, e, l) {
		if(t !== null)
			if(t.memoizedProps !== e.pendingProps) Nt = !0;
			else {
				if(!pi(t, l) && (e.flags & 128) === 0) return Nt = !1, I1(t, e, l);
				Nt = (t.flags & 131072) !== 0
			}
		else Nt = !1, $ && (e.flags & 1048576) !== 0 && pf(e, Za, e.index);
		switch(e.lanes = 0, e.tag) {
			case 16:
				t: {
					var a = e.pendingProps;
					if(t = ql(e.elementType), e.type = t, typeof t == "function") Sc(t) ? (a = Gl(t, a), e.tag = 1, e = Ho(null, e, t, a, l)) : (e.tag = 0, e = fi(null, e, t, a, l));
					else {
						if(t != null) {
							var n = t.$$typeof;
							if(n === se) {
								e.tag = 11, e = To(null, e, t, a, l);
								break t
							} else if(n === W) {
								e.tag = 14, e = _o(null, e, t, a, l);
								break t
							}
						}
						throw e = De(t) || t, Error(d(306, e, ""))
					}
				}
				return e;
			case 0:
				return fi(t, e, e.type, e.pendingProps, l);
			case 1:
				return a = e.type, n = Gl(a, e.pendingProps), Ho(t, e, a, n, l);
			case 3:
				t: {
					if(Bt(e, e.stateNode.containerInfo), t === null) throw Error(d(387));a = e.pendingProps;
					var u = e.memoizedState;n = u.element,
					Rc(t, e),
					$a(e, a, null, l);
					var c = e.memoizedState;
					if(a = c.cache, al(e, At, a), a !== u.cache && Cc(e, [At], l, !0), Wa(), a = c.element, u.isDehydrated)
						if(u = {
								element: a,
								isDehydrated: !1,
								cache: c.cache
							}, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
							e = qo(t, e, a, l);
							break t
						} else if(a !== n) {
						n = de(Error(d(424)), e), Va(n), e = qo(t, e, a, l);
						break t
					} else
						for(t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, rt = xe(t.firstChild), Ct = e, $ = !0, el = null, ve = !0, l = Mf(e, null, a, l), e.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
					else {
						if(Dl(), a === n) {
							e = Xe(t, e, l);
							break t
						}
						Ot(t, e, a, l)
					}
					e = e.child
				}
				return e;
			case 26:
				return ou(t, e), t === null ? (l = $r(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : $ || (l = e.type, t = e.pendingProps, a = Tu(L.current).createElement(l), a[Mt] = e, a[Vt] = t, Ut(a, l, t), Tt(a), e.stateNode = a) : e.memoizedState = $r(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
			case 27:
				return Ta(e), t === null && $ && (a = e.stateNode = Jr(e.type, e.pendingProps, L.current), Ct = e, ve = !0, n = rt, pl(e.type) ? (Wi = n, rt = xe(a.firstChild)) : rt = n), Ot(t, e, e.pendingProps.children, l), ou(t, e), t === null && (e.flags |= 4194304), e.child;
			case 5:
				return t === null && $ && ((n = a = rt) && (a = _0(a, e.type, e.pendingProps, ve), a !== null ? (e.stateNode = a, Ct = e, rt = xe(a.firstChild), ve = !1, n = !0) : n = !1), n || ll(e)), Ta(e), n = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = u.children, Li(n, u) ? a = null : c !== null && Li(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = Vc(t, e, V1, null, null, l), xn._currentValue = n), ou(t, e), Ot(t, e, a, l), e.child;
			case 6:
				return t === null && $ && ((t = l = rt) && (l = M0(l, e.pendingProps, ve), l !== null ? (e.stateNode = l, Ct = e, rt = null, t = !0) : t = !1), t || ll(e)), null;
			case 13:
				return Ro(t, e, l);
			case 4:
				return Bt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Bl(e, null, a, l) : Ot(t, e, a, l), e.child;
			case 11:
				return To(t, e, e.type, e.pendingProps, l);
			case 7:
				return Ot(t, e, e.pendingProps, l), e.child;
			case 8:
				return Ot(t, e, e.pendingProps.children, l), e.child;
			case 12:
				return Ot(t, e, e.pendingProps.children, l), e.child;
			case 10:
				return a = e.pendingProps, al(e, e.type, a.value), Ot(t, e, a.children, l), e.child;
			case 9:
				return n = e.type._context, a = e.pendingProps.children, Ul(e), n = Dt(n), a = a(n), e.flags |= 1, Ot(t, e, a, l), e.child;
			case 14:
				return _o(t, e, e.type, e.pendingProps, l);
			case 15:
				return Mo(t, e, e.type, e.pendingProps, l);
			case 19:
				return Yo(t, e, l);
			case 31:
				return F1(t, e, l);
			case 22:
				return Co(t, e, l, e.pendingProps);
			case 24:
				return Ul(e), a = Dt(At), t === null ? (n = Uc(), n === null && (n = ot, u = Dc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
					parent: a,
					cache: n
				}, qc(e), al(e, At, n)) : ((t.lanes & l) !== 0 && (Rc(t, e), $a(e, null, null, l), Wa()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
					parent: a,
					cache: a
				}, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), al(e, At, a)) : (a = u.cache, al(e, At, a), a !== n.cache && Cc(e, [At], l, !0))), Ot(t, e, e.pendingProps.children, l), e.child;
			case 29:
				throw e.pendingProps
		}
		throw Error(d(156, e.tag))
	}

	function Ze(t) {
		t.flags |= 4
	}

	function xi(t, e, l, a, n) {
		if((e = (t.mode & 32) !== 0) && (e = !1), e) {
			if(t.flags |= 16777216, (n & 335544128) === n)
				if(t.stateNode.complete) t.flags |= 8192;
				else if(dr()) t.flags |= 8192;
			else throw Rl = Wn, Hc
		} else t.flags &= -16777217
	}

	function Qo(t, e) {
		if(e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
		else if(t.flags |= 16777216, !ed(e))
			if(dr()) t.flags |= 8192;
			else throw Rl = Wn, Hc
	}

	function du(t, e) {
		e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? xs() : 536870912, t.lanes |= e, ya |= e)
	}

	function ln(t, e) {
		if(!$) switch(t.tailMode) {
			case "hidden":
				e = t.tail;
				for(var l = null; e !== null;) e.alternate !== null && (l = e), e = e.sibling;
				l === null ? t.tail = null : l.sibling = null;
				break;
			case "collapsed":
				l = t.tail;
				for(var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
				a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
		}
	}

	function dt(t) {
		var e = t.alternate !== null && t.alternate.child === t.child,
			l = 0,
			a = 0;
		if(e)
			for(var n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
		else
			for(n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
		return t.subtreeFlags |= a, t.childLanes = l, e
	}

	function P1(t, e, l) {
		var a = e.pendingProps;
		switch(jc(e), e.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return dt(e), null;
			case 1:
				return dt(e), null;
			case 3:
				return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ye(At), gt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ua(e) ? Ze(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Tc())), dt(e), null;
			case 26:
				var n = e.type,
					u = e.memoizedState;
				return t === null ? (Ze(e), u !== null ? (dt(e), Qo(e, u)) : (dt(e), xi(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Ze(e), dt(e), Qo(e, u)) : (dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ze(e), dt(e), xi(e, n, t, a, l)), null;
			case 27:
				if(zn(e), l = L.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if(!a) {
						if(e.stateNode === null) throw Error(d(166));
						return dt(e), null
					}
					t = D.current, ua(e) ? yf(e) : (t = Jr(n, a, l), e.stateNode = t, Ze(e))
				}
				return dt(e), null;
			case 5:
				if(zn(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if(!a) {
						if(e.stateNode === null) throw Error(d(166));
						return dt(e), null
					}
					if(u = D.current, ua(e)) yf(e);
					else {
						var c = Tu(L.current);
						switch(u) {
							case 1:
								u = c.createElementNS("http://www.w3.org/2000/svg", n);
								break;
							case 2:
								u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
								break;
							default:
								switch(n) {
									case "svg":
										u = c.createElementNS("http://www.w3.org/2000/svg", n);
										break;
									case "math":
										u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
										break;
									case "script":
										u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
										break;
									case "select":
										u = typeof a.is == "string" ? c.createElement("select", {
											is: a.is
										}) : c.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
										break;
									default:
										u = typeof a.is == "string" ? c.createElement(n, {
											is: a.is
										}) : c.createElement(n)
								}
						}
						u[Mt] = e, u[Vt] = a;
						t: for(c = e.child; c !== null;) {
							if(c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
							else if(c.tag !== 4 && c.tag !== 27 && c.child !== null) {
								c.child.return = c, c = c.child;
								continue
							}
							if(c === e) break t;
							for(; c.sibling === null;) {
								if(c.return === null || c.return === e) break t;
								c = c.return
							}
							c.sibling.return = c.return, c = c.sibling
						}
						e.stateNode = u;
						t: switch(Ut(u, n, a), n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								a = !!a.autoFocus;
								break t;
							case "img":
								a = !0;
								break t;
							default:
								a = !1
						}
						a && Ze(e)
					}
				}
				return dt(e), xi(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
			case 6:
				if(t && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if(typeof a != "string" && e.stateNode === null) throw Error(d(166));
					if(t = L.current, ua(e)) {
						if(t = e.stateNode, l = e.memoizedProps, a = null, n = Ct, n !== null) switch(n.tag) {
							case 27:
							case 5:
								a = n.memoizedProps
						}
						t[Mt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Rr(t.nodeValue, l)), t || ll(e, !0)
					} else t = Tu(t).createTextNode(a), t[Mt] = e, e.stateNode = t
				}
				return dt(e), null;
			case 31:
				if(l = e.memoizedState, t === null || t.memoizedState !== null) {
					if(a = ua(e), l !== null) {
						if(t === null) {
							if(!a) throw Error(d(318));
							if(t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(557));
							t[Mt] = e
						} else Dl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
						dt(e), t = !1
					} else l = Tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
					if(!t) return e.flags & 256 ? (ne(e), e) : (ne(e), null);
					if((e.flags & 128) !== 0) throw Error(d(558))
				}
				return dt(e), null;
			case 13:
				if(a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
					if(n = ua(e), a !== null && a.dehydrated !== null) {
						if(t === null) {
							if(!n) throw Error(d(318));
							if(n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
							n[Mt] = e
						} else Dl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
						dt(e), n = !1
					} else n = Tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
					if(!n) return e.flags & 256 ? (ne(e), e) : (ne(e), null)
				}
				return ne(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), du(e, e.updateQueue), dt(e), null);
			case 4:
				return gt(), t === null && Gi(e.stateNode.containerInfo), dt(e), null;
			case 10:
				return Ye(e.type), dt(e), null;
			case 19:
				if(A(bt), a = e.memoizedState, a === null) return dt(e), null;
				if(n = (e.flags & 128) !== 0, u = a.rendering, u === null)
					if(n) ln(a, !1);
					else {
						if(xt !== 0 || t !== null && (t.flags & 128) !== 0)
							for(t = e.child; t !== null;) {
								if(u = Pn(t), u !== null) {
									for(e.flags |= 128, ln(a, !1), t = u.updateQueue, e.updateQueue = t, du(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;) hf(l, t), l = l.sibling;
									return _(bt, bt.current & 1 | 2), $ && Re(e, a.treeForkCount), e.child
								}
								t = t.sibling
							}
						a.tail !== null && It() > xu && (e.flags |= 128, n = !0, ln(a, !1), e.lanes = 4194304)
					}
				else {
					if(!n)
						if(t = Pn(u), t !== null) {
							if(e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, du(e, t), ln(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !$) return dt(e), null
						} else 2 * It() - a.renderingStartTime > xu && l !== 536870912 && (e.flags |= 128, n = !0, ln(a, !1), e.lanes = 4194304);
					a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u)
				}
				return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = It(), t.sibling = null, l = bt.current, _(bt, n ? l & 1 | 2 : l & 1), $ && Re(e, a.treeForkCount), t) : (dt(e), null);
			case 22:
			case 23:
				return ne(e), Qc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), l = e.updateQueue, l !== null && du(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && A(Hl), null;
			case 24:
				return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ye(At), dt(e), null;
			case 25:
				return null;
			case 30:
				return null
		}
		throw Error(d(156, e.tag))
	}

	function t0(t, e) {
		switch(jc(e), e.tag) {
			case 1:
				return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
			case 3:
				return Ye(At), gt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
			case 26:
			case 27:
			case 5:
				return zn(e), null;
			case 31:
				if(e.memoizedState !== null) {
					if(ne(e), e.alternate === null) throw Error(d(340));
					Dl()
				}
				return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
			case 13:
				if(ne(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
					if(e.alternate === null) throw Error(d(340));
					Dl()
				}
				return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
			case 19:
				return A(bt), null;
			case 4:
				return gt(), null;
			case 10:
				return Ye(e.type), null;
			case 22:
			case 23:
				return ne(e), Qc(), t !== null && A(Hl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
			case 24:
				return Ye(At), null;
			case 25:
				return null;
			default:
				return null
		}
	}

	function Xo(t, e) {
		switch(jc(e), e.tag) {
			case 3:
				Ye(At), gt();
				break;
			case 26:
			case 27:
			case 5:
				zn(e);
				break;
			case 4:
				gt();
				break;
			case 31:
				e.memoizedState !== null && ne(e);
				break;
			case 13:
				ne(e);
				break;
			case 19:
				A(bt);
				break;
			case 10:
				Ye(e.type);
				break;
			case 22:
			case 23:
				ne(e), Qc(), t !== null && A(Hl);
				break;
			case 24:
				Ye(At)
		}
	}

	function an(t, e) {
		try {
			var l = e.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if(a !== null) {
				var n = a.next;
				l = n;
				do {
					if((l.tag & t) === t) {
						a = void 0;
						var u = l.create,
							c = l.inst;
						a = u(), c.destroy = a
					}
					l = l.next
				} while(l !== n)
			}
		} catch (i) {
			at(e, e.return, i)
		}
	}

	function fl(t, e, l) {
		try {
			var a = e.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if(n !== null) {
				var u = n.next;
				a = u;
				do {
					if((a.tag & t) === t) {
						var c = a.inst,
							i = c.destroy;
						if(i !== void 0) {
							c.destroy = void 0, n = e;
							var f = l,
								v = i;
							try {
								v()
							} catch (y) {
								at(n, f, y)
							}
						}
					}
					a = a.next
				} while(a !== u)
			}
		} catch (y) {
			at(e, e.return, y)
		}
	}

	function Zo(t) {
		var e = t.updateQueue;
		if(e !== null) {
			var l = t.stateNode;
			try {
				Df(e, l)
			} catch (a) {
				at(t, t.return, a)
			}
		}
	}

	function Vo(t, e, l) {
		l.props = Gl(t.type, t.memoizedProps), l.state = t.memoizedState;
		try {
			l.componentWillUnmount()
		} catch (a) {
			at(t, e, a)
		}
	}

	function nn(t, e) {
		try {
			var l = t.ref;
			if(l !== null) {
				switch(t.tag) {
					case 26:
					case 27:
					case 5:
						var a = t.stateNode;
						break;
					case 30:
						a = t.stateNode;
						break;
					default:
						a = t.stateNode
				}
				typeof l == "function" ? t.refCleanup = l(a) : l.current = a
			}
		} catch (n) {
			at(t, e, n)
		}
	}

	function _e(t, e) {
		var l = t.ref,
			a = t.refCleanup;
		if(l !== null)
			if(typeof a == "function") try {
				a()
			} catch (n) {
				at(t, e, n)
			} finally {
				t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
			} else if(typeof l == "function") try {
				l(null)
			} catch (n) {
				at(t, e, n)
			} else l.current = null
	}

	function Lo(t) {
		var e = t.type,
			l = t.memoizedProps,
			a = t.stateNode;
		try {
			t: switch(e) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break t;
				case "img":
					l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
			}
		}
		catch (n) {
			at(t, t.return, n)
		}
	}

	function yi(t, e, l) {
		try {
			var a = t.stateNode;
			A0(a, t.type, l, e), a[Vt] = e
		} catch (n) {
			at(t, t.return, n)
		}
	}

	function wo(t) {
		return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && pl(t.type) || t.tag === 4
	}

	function gi(t) {
		t: for(;;) {
			for(; t.sibling === null;) {
				if(t.return === null || wo(t.return)) return null;
				t = t.return
			}
			for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
				if(t.tag === 27 && pl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
				t.child.return = t, t = t.child
			}
			if(!(t.flags & 2)) return t.stateNode
		}
	}

	function bi(t, e, l) {
		var a = t.tag;
		if(a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ue));
		else if(a !== 4 && (a === 27 && pl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
			for(bi(t, e, l), t = t.sibling; t !== null;) bi(t, e, l), t = t.sibling
	}

	function hu(t, e, l) {
		var a = t.tag;
		if(a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
		else if(a !== 4 && (a === 27 && pl(t.type) && (l = t.stateNode), t = t.child, t !== null))
			for(hu(t, e, l), t = t.sibling; t !== null;) hu(t, e, l), t = t.sibling
	}

	function Ko(t) {
		var e = t.stateNode,
			l = t.memoizedProps;
		try {
			for(var a = t.type, n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
			Ut(e, a, l), e[Mt] = t, e[Vt] = l
		} catch (u) {
			at(t, t.return, u)
		}
	}
	var Ve = !1,
		jt = !1,
		Si = !1,
		Jo = typeof WeakSet == "function" ? WeakSet : Set,
		_t = null;

	function e0(t, e) {
		if(t = t.containerInfo, Zi = Hu, t = af(t), mc(t)) {
			if("selectionStart" in t) var l = {
				start: t.selectionStart,
				end: t.selectionEnd
			};
			else t: {
				l = (l = t.ownerDocument) && l.defaultView || window;
				var a = l.getSelection && l.getSelection();
				if(a && a.rangeCount !== 0) {
					l = a.anchorNode;
					var n = a.anchorOffset,
						u = a.focusNode;
					a = a.focusOffset;
					try {
						l.nodeType, u.nodeType
					} catch {
						l = null;
						break t
					}
					var c = 0,
						i = -1,
						f = -1,
						v = 0,
						y = 0,
						S = t,
						p = null;
					e: for(;;) {
						for(var x; S !== l || n !== 0 && S.nodeType !== 3 || (i = c + n), S !== u || a !== 0 && S.nodeType !== 3 || (f = c + a), S.nodeType === 3 && (c += S.nodeValue.length), (x = S.firstChild) !== null;) p = S, S = x;
						for(;;) {
							if(S === t) break e;
							if(p === l && ++v === n && (i = c), p === u && ++y === a && (f = c), (x = S.nextSibling) !== null) break;
							S = p, p = S.parentNode
						}
						S = x
					}
					l = i === -1 || f === -1 ? null : {
						start: i,
						end: f
					}
				} else l = null
			}
			l = l || {
				start: 0,
				end: 0
			}
		} else l = null;
		for(Vi = {
				focusedElem: t,
				selectionRange: l
			}, Hu = !1, _t = e; _t !== null;)
			if(e = _t, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, _t = t;
			else
				for(; _t !== null;) {
					switch(e = _t, u = e.alternate, t = e.flags, e.tag) {
						case 0:
							if((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
								for(l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
							break;
						case 11:
						case 15:
							break;
						case 1:
							if((t & 1024) !== 0 && u !== null) {
								t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
								try {
									var C = Gl(l.type, n);
									t = a.getSnapshotBeforeUpdate(C, u), a.__reactInternalSnapshotBeforeUpdate = t
								} catch (B) {
									at(l, l.return, B)
								}
							}
							break;
						case 3:
							if((t & 1024) !== 0) {
								if(t = e.stateNode.containerInfo, l = t.nodeType, l === 9) Ki(t);
								else if(l === 1) switch(t.nodeName) {
									case "HEAD":
									case "HTML":
									case "BODY":
										Ki(t);
										break;
									default:
										t.textContent = ""
								}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if((t & 1024) !== 0) throw Error(d(163))
					}
					if(t = e.sibling, t !== null) {
						t.return = e.return, _t = t;
						break
					}
					_t = e.return
				}
	}

	function ko(t, e, l) {
		var a = l.flags;
		switch(l.tag) {
			case 0:
			case 11:
			case 15:
				we(t, l), a & 4 && an(5, l);
				break;
			case 1:
				if(we(t, l), a & 4)
					if(t = l.stateNode, e === null) try {
						t.componentDidMount()
					} catch (c) {
						at(l, l.return, c)
					} else {
						var n = Gl(l.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
						} catch (c) {
							at(l, l.return, c)
						}
					}
				a & 64 && Zo(l), a & 512 && nn(l, l.return);
				break;
			case 3:
				if(we(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
					if(e = null, l.child !== null) switch(l.child.tag) {
						case 27:
						case 5:
							e = l.child.stateNode;
							break;
						case 1:
							e = l.child.stateNode
					}
					try {
						Df(t, e)
					} catch (c) {
						at(l, l.return, c)
					}
				}
				break;
			case 27:
				e === null && a & 4 && Ko(l);
			case 26:
			case 5:
				we(t, l), e === null && a & 4 && Lo(l), a & 512 && nn(l, l.return);
				break;
			case 12:
				we(t, l);
				break;
			case 31:
				we(t, l), a & 4 && Fo(t, l);
				break;
			case 13:
				we(t, l), a & 4 && Io(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = o0.bind(null, l), C0(t, l))));
				break;
			case 22:
				if(a = l.memoizedState !== null || Ve, !a) {
					e = e !== null && e.memoizedState !== null || jt, n = Ve;
					var u = jt;
					Ve = a, (jt = e) && !u ? Ke(t, l, (l.subtreeFlags & 8772) !== 0) : we(t, l), Ve = n, jt = u
				}
				break;
			case 30:
				break;
			default:
				we(t, l)
		}
	}

	function Wo(t) {
		var e = t.alternate;
		e !== null && (t.alternate = null, Wo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Fu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
	}
	var mt = null,
		wt = !1;

	function Le(t, e, l) {
		for(l = l.child; l !== null;) $o(t, e, l), l = l.sibling
	}

	function $o(t, e, l) {
		if(Pt && typeof Pt.onCommitFiberUnmount == "function") try {
			Pt.onCommitFiberUnmount(_a, l)
		} catch {}
		switch(l.tag) {
			case 26:
				jt || _e(l, e), Le(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
				break;
			case 27:
				jt || _e(l, e);
				var a = mt,
					n = wt;
				pl(l.type) && (mt = l.stateNode, wt = !1), Le(t, e, l), mn(l.stateNode), mt = a, wt = n;
				break;
			case 5:
				jt || _e(l, e);
			case 6:
				if(a = mt, n = wt, mt = null, Le(t, e, l), mt = a, wt = n, mt !== null)
					if(wt) try {
						(mt.nodeType === 9 ? mt.body : mt.nodeName === "HTML" ? mt.ownerDocument.body : mt).removeChild(l.stateNode)
					} catch (u) {
						at(l, e, u)
					} else try {
						mt.removeChild(l.stateNode)
					} catch (u) {
						at(l, e, u)
					}
				break;
			case 18:
				mt !== null && (wt ? (t = mt, Zr(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ea(t)) : Zr(mt, l.stateNode));
				break;
			case 4:
				a = mt, n = wt, mt = l.stateNode.containerInfo, wt = !0, Le(t, e, l), mt = a, wt = n;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				fl(2, l, e), jt || fl(4, l, e), Le(t, e, l);
				break;
			case 1:
				jt || (_e(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Vo(l, e, a)), Le(t, e, l);
				break;
			case 21:
				Le(t, e, l);
				break;
			case 22:
				jt = (a = jt) || l.memoizedState !== null, Le(t, e, l), jt = a;
				break;
			default:
				Le(t, e, l)
		}
	}

	function Fo(t, e) {
		if(e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
			t = t.dehydrated;
			try {
				Ea(t)
			} catch (l) {
				at(e, e.return, l)
			}
		}
	}

	function Io(t, e) {
		if(e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
			Ea(t)
		} catch (l) {
			at(e, e.return, l)
		}
	}

	function l0(t) {
		switch(t.tag) {
			case 31:
			case 13:
			case 19:
				var e = t.stateNode;
				return e === null && (e = t.stateNode = new Jo), e;
			case 22:
				return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Jo), e;
			default:
				throw Error(d(435, t.tag))
		}
	}

	function mu(t, e) {
		var l = l0(t);
		e.forEach(function(a) {
			if(!l.has(a)) {
				l.add(a);
				var n = r0.bind(null, t, a);
				a.then(n, n)
			}
		})
	}

	function Kt(t, e) {
		var l = e.deletions;
		if(l !== null)
			for(var a = 0; a < l.length; a++) {
				var n = l[a],
					u = t,
					c = e,
					i = c;
				t: for(; i !== null;) {
					switch(i.tag) {
						case 27:
							if(pl(i.type)) {
								mt = i.stateNode, wt = !1;
								break t
							}
							break;
						case 5:
							mt = i.stateNode, wt = !1;
							break t;
						case 3:
						case 4:
							mt = i.stateNode.containerInfo, wt = !0;
							break t
					}
					i = i.return
				}
				if(mt === null) throw Error(d(160));
				$o(u, c, n), mt = null, wt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
			}
		if(e.subtreeFlags & 13886)
			for(e = e.child; e !== null;) Po(e, t), e = e.sibling
	}
	var Se = null;

	function Po(t, e) {
		var l = t.alternate,
			a = t.flags;
		switch(t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				Kt(e, t), Jt(t), a & 4 && (fl(3, t, t.return), an(3, t), fl(5, t, t.return));
				break;
			case 1:
				Kt(e, t), Jt(t), a & 512 && (jt || l === null || _e(l, l.return)), a & 64 && Ve && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
				break;
			case 26:
				var n = Se;
				if(Kt(e, t), Jt(t), a & 512 && (jt || l === null || _e(l, l.return)), a & 4) {
					var u = l !== null ? l.memoizedState : null;
					if(a = t.memoizedState, l === null)
						if(a === null)
							if(t.stateNode === null) {
								t: {
									a = t.type,
									l = t.memoizedProps,
									n = n.ownerDocument || n;e: switch(a) {
										case "title":
											u = n.getElementsByTagName("title")[0], (!u || u[Da] || u[Mt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Ut(u, a, l), u[Mt] = t, Tt(u), a = u;
											break t;
										case "link":
											var c = Pr("link", "href", n).get(a + (l.href || ""));
											if(c) {
												for(var i = 0; i < c.length; i++)
													if(u = c[i], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
														c.splice(i, 1);
														break e
													}
											}
											u = n.createElement(a), Ut(u, a, l), n.head.appendChild(u);
											break;
										case "meta":
											if(c = Pr("meta", "content", n).get(a + (l.content || ""))) {
												for(i = 0; i < c.length; i++)
													if(u = c[i], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
														c.splice(i, 1);
														break e
													}
											}
											u = n.createElement(a), Ut(u, a, l), n.head.appendChild(u);
											break;
										default:
											throw Error(d(468, a))
									}
									u[Mt] = t,
									Tt(u),
									a = u
								}
								t.stateNode = a
							}
					else td(n, t.type, t.stateNode);
					else t.stateNode = Ir(n, a, t.memoizedProps);
					else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? td(n, t.type, t.stateNode) : Ir(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && yi(t, t.memoizedProps, l.memoizedProps)
				}
				break;
			case 27:
				Kt(e, t), Jt(t), a & 512 && (jt || l === null || _e(l, l.return)), l !== null && a & 4 && yi(t, t.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if(Kt(e, t), Jt(t), a & 512 && (jt || l === null || _e(l, l.return)), t.flags & 32) {
					n = t.stateNode;
					try {
						Wl(n, "")
					} catch (C) {
						at(t, t.return, C)
					}
				}
				a & 4 && t.stateNode != null && (n = t.memoizedProps, yi(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Si = !0);
				break;
			case 6:
				if(Kt(e, t), Jt(t), a & 4) {
					if(t.stateNode === null) throw Error(d(162));
					a = t.memoizedProps, l = t.stateNode;
					try {
						l.nodeValue = a
					} catch (C) {
						at(t, t.return, C)
					}
				}
				break;
			case 3:
				if(Cu = null, n = Se, Se = _u(e.containerInfo), Kt(e, t), Se = n, Jt(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
					Ea(e.containerInfo)
				} catch (C) {
					at(t, t.return, C)
				}
				Si && (Si = !1, tr(t));
				break;
			case 4:
				a = Se, Se = _u(t.stateNode.containerInfo), Kt(e, t), Jt(t), Se = a;
				break;
			case 12:
				Kt(e, t), Jt(t);
				break;
			case 31:
				Kt(e, t), Jt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, mu(t, a)));
				break;
			case 13:
				Kt(e, t), Jt(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (pu = It()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, mu(t, a)));
				break;
			case 22:
				n = t.memoizedState !== null;
				var f = l !== null && l.memoizedState !== null,
					v = Ve,
					y = jt;
				if(Ve = v || n, jt = y || f, Kt(e, t), jt = y, Ve = v, Jt(t), a & 8192) t: for(e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || f || Ve || jt || Ql(t)), l = null, e = t;;) {
					if(e.tag === 5 || e.tag === 26) {
						if(l === null) {
							f = l = e;
							try {
								if(u = f.stateNode, n) c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
								else {
									i = f.stateNode;
									var S = f.memoizedProps.style,
										p = S != null && S.hasOwnProperty("display") ? S.display : null;
									i.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim()
								}
							} catch (C) {
								at(f, f.return, C)
							}
						}
					} else if(e.tag === 6) {
						if(l === null) {
							f = e;
							try {
								f.stateNode.nodeValue = n ? "" : f.memoizedProps
							} catch (C) {
								at(f, f.return, C)
							}
						}
					} else if(e.tag === 18) {
						if(l === null) {
							f = e;
							try {
								var x = f.stateNode;
								n ? Vr(x, !0) : Vr(f.stateNode, !1)
							} catch (C) {
								at(f, f.return, C)
							}
						}
					} else if((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
						e.child.return = e, e = e.child;
						continue
					}
					if(e === t) break t;
					for(; e.sibling === null;) {
						if(e.return === null || e.return === t) break t;
						l === e && (l = null), e = e.return
					}
					l === e && (l = null), e.sibling.return = e.return, e = e.sibling
				}
				a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, mu(t, l))));
				break;
			case 19:
				Kt(e, t), Jt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, mu(t, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				Kt(e, t), Jt(t)
		}
	}

	function Jt(t) {
		var e = t.flags;
		if(e & 2) {
			try {
				for(var l, a = t.return; a !== null;) {
					if(wo(a)) {
						l = a;
						break
					}
					a = a.return
				}
				if(l == null) throw Error(d(160));
				switch(l.tag) {
					case 27:
						var n = l.stateNode,
							u = gi(t);
						hu(t, u, n);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (Wl(c, ""), l.flags &= -33);
						var i = gi(t);
						hu(t, i, c);
						break;
					case 3:
					case 4:
						var f = l.stateNode.containerInfo,
							v = gi(t);
						bi(t, v, f);
						break;
					default:
						throw Error(d(161))
				}
			} catch (y) {
				at(t, t.return, y)
			}
			t.flags &= -3
		}
		e & 4096 && (t.flags &= -4097)
	}

	function tr(t) {
		if(t.subtreeFlags & 1024)
			for(t = t.child; t !== null;) {
				var e = t;
				tr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
			}
	}

	function we(t, e) {
		if(e.subtreeFlags & 8772)
			for(e = e.child; e !== null;) ko(t, e.alternate, e), e = e.sibling
	}

	function Ql(t) {
		for(t = t.child; t !== null;) {
			var e = t;
			switch(e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					fl(4, e, e.return), Ql(e);
					break;
				case 1:
					_e(e, e.return);
					var l = e.stateNode;
					typeof l.componentWillUnmount == "function" && Vo(e, e.return, l), Ql(e);
					break;
				case 27:
					mn(e.stateNode);
				case 26:
				case 5:
					_e(e, e.return), Ql(e);
					break;
				case 22:
					e.memoizedState === null && Ql(e);
					break;
				case 30:
					Ql(e);
					break;
				default:
					Ql(e)
			}
			t = t.sibling
		}
	}

	function Ke(t, e, l) {
		for(l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
			var a = e.alternate,
				n = t,
				u = e,
				c = u.flags;
			switch(u.tag) {
				case 0:
				case 11:
				case 15:
					Ke(n, u, l), an(4, u);
					break;
				case 1:
					if(Ke(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
						n.componentDidMount()
					} catch (v) {
						at(a, a.return, v)
					}
					if(a = u, n = a.updateQueue, n !== null) {
						var i = a.stateNode;
						try {
							var f = n.shared.hiddenCallbacks;
							if(f !== null)
								for(n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) Cf(f[n], i)
						} catch (v) {
							at(a, a.return, v)
						}
					}
					l && c & 64 && Zo(u), nn(u, u.return);
					break;
				case 27:
					Ko(u);
				case 26:
				case 5:
					Ke(n, u, l), l && a === null && c & 4 && Lo(u), nn(u, u.return);
					break;
				case 12:
					Ke(n, u, l);
					break;
				case 31:
					Ke(n, u, l), l && c & 4 && Fo(n, u);
					break;
				case 13:
					Ke(n, u, l), l && c & 4 && Io(n, u);
					break;
				case 22:
					u.memoizedState === null && Ke(n, u, l), nn(u, u.return);
					break;
				case 30:
					break;
				default:
					Ke(n, u, l)
			}
			e = e.sibling
		}
	}

	function Ai(t, e) {
		var l = null;
		t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && La(l))
	}

	function zi(t, e) {
		t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && La(t))
	}

	function Ae(t, e, l, a) {
		if(e.subtreeFlags & 10256)
			for(e = e.child; e !== null;) er(t, e, l, a), e = e.sibling
	}

	function er(t, e, l, a) {
		var n = e.flags;
		switch(e.tag) {
			case 0:
			case 11:
			case 15:
				Ae(t, e, l, a), n & 2048 && an(9, e);
				break;
			case 1:
				Ae(t, e, l, a);
				break;
			case 3:
				Ae(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && La(t)));
				break;
			case 12:
				if(n & 2048) {
					Ae(t, e, l, a), t = e.stateNode;
					try {
						var u = e.memoizedProps,
							c = u.id,
							i = u.onPostCommit;
						typeof i == "function" && i(c, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
					} catch (f) {
						at(e, e.return, f)
					}
				} else Ae(t, e, l, a);
				break;
			case 31:
				Ae(t, e, l, a);
				break;
			case 13:
				Ae(t, e, l, a);
				break;
			case 23:
				break;
			case 22:
				u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ae(t, e, l, a) : un(t, e) : u._visibility & 2 ? Ae(t, e, l, a) : (u._visibility |= 2, va(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Ai(c, e);
				break;
			case 24:
				Ae(t, e, l, a), n & 2048 && zi(e.alternate, e);
				break;
			default:
				Ae(t, e, l, a)
		}
	}

	function va(t, e, l, a, n) {
		for(n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
			var u = t,
				c = e,
				i = l,
				f = a,
				v = c.flags;
			switch(c.tag) {
				case 0:
				case 11:
				case 15:
					va(u, c, i, f, n), an(8, c);
					break;
				case 23:
					break;
				case 22:
					var y = c.stateNode;
					c.memoizedState !== null ? y._visibility & 2 ? va(u, c, i, f, n) : un(u, c) : (y._visibility |= 2, va(u, c, i, f, n)), n && v & 2048 && Ai(c.alternate, c);
					break;
				case 24:
					va(u, c, i, f, n), n && v & 2048 && zi(c.alternate, c);
					break;
				default:
					va(u, c, i, f, n)
			}
			e = e.sibling
		}
	}

	function un(t, e) {
		if(e.subtreeFlags & 10256)
			for(e = e.child; e !== null;) {
				var l = t,
					a = e,
					n = a.flags;
				switch(a.tag) {
					case 22:
						un(l, a), n & 2048 && Ai(a.alternate, a);
						break;
					case 24:
						un(l, a), n & 2048 && zi(a.alternate, a);
						break;
					default:
						un(l, a)
				}
				e = e.sibling
			}
	}
	var cn = 8192;

	function pa(t, e, l) {
		if(t.subtreeFlags & cn)
			for(t = t.child; t !== null;) lr(t, e, l), t = t.sibling
	}

	function lr(t, e, l) {
		switch(t.tag) {
			case 26:
				pa(t, e, l), t.flags & cn && t.memoizedState !== null && Z0(l, Se, t.memoizedState, t.memoizedProps);
				break;
			case 5:
				pa(t, e, l);
				break;
			case 3:
			case 4:
				var a = Se;
				Se = _u(t.stateNode.containerInfo), pa(t, e, l), Se = a;
				break;
			case 22:
				t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = cn, cn = 16777216, pa(t, e, l), cn = a) : pa(t, e, l));
				break;
			default:
				pa(t, e, l)
		}
	}

	function ar(t) {
		var e = t.alternate;
		if(e !== null && (t = e.child, t !== null)) {
			e.child = null;
			do e = t.sibling, t.sibling = null, t = e; while(t !== null)
		}
	}

	function sn(t) {
		var e = t.deletions;
		if((t.flags & 16) !== 0) {
			if(e !== null)
				for(var l = 0; l < e.length; l++) {
					var a = e[l];
					_t = a, ur(a, t)
				}
			ar(t)
		}
		if(t.subtreeFlags & 10256)
			for(t = t.child; t !== null;) nr(t), t = t.sibling
	}

	function nr(t) {
		switch(t.tag) {
			case 0:
			case 11:
			case 15:
				sn(t), t.flags & 2048 && fl(9, t, t.return);
				break;
			case 3:
				sn(t);
				break;
			case 12:
				sn(t);
				break;
			case 22:
				var e = t.stateNode;
				t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, vu(t)) : sn(t);
				break;
			default:
				sn(t)
		}
	}

	function vu(t) {
		var e = t.deletions;
		if((t.flags & 16) !== 0) {
			if(e !== null)
				for(var l = 0; l < e.length; l++) {
					var a = e[l];
					_t = a, ur(a, t)
				}
			ar(t)
		}
		for(t = t.child; t !== null;) {
			switch(e = t, e.tag) {
				case 0:
				case 11:
				case 15:
					fl(8, e, e.return), vu(e);
					break;
				case 22:
					l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, vu(e));
					break;
				default:
					vu(e)
			}
			t = t.sibling
		}
	}

	function ur(t, e) {
		for(; _t !== null;) {
			var l = _t;
			switch(l.tag) {
				case 0:
				case 11:
				case 15:
					fl(8, l, e);
					break;
				case 23:
				case 22:
					if(l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++
					}
					break;
				case 24:
					La(l.memoizedState.cache)
			}
			if(a = l.child, a !== null) a.return = l, _t = a;
			else t: for(l = t; _t !== null;) {
				a = _t;
				var n = a.sibling,
					u = a.return;
				if(Wo(a), a === l) {
					_t = null;
					break t
				}
				if(n !== null) {
					n.return = u, _t = n;
					break t
				}
				_t = u
			}
		}
	}
	var a0 = {
			getCacheForType: function(t) {
				var e = Dt(At),
					l = e.data.get(t);
				return l === void 0 && (l = t(), e.data.set(t, l)), l
			},
			cacheSignal: function() {
				return Dt(At).controller.signal
			}
		},
		n0 = typeof WeakMap == "function" ? WeakMap : Map,
		tt = 0,
		ot = null,
		w = null,
		J = 0,
		lt = 0,
		ue = null,
		ol = !1,
		xa = !1,
		Ni = !1,
		Je = 0,
		xt = 0,
		rl = 0,
		Xl = 0,
		ji = 0,
		ce = 0,
		ya = 0,
		fn = null,
		kt = null,
		Ei = !1,
		pu = 0,
		cr = 0,
		xu = 1 / 0,
		yu = null,
		dl = null,
		Et = 0,
		hl = null,
		ga = null,
		ke = 0,
		Ti = 0,
		_i = null,
		ir = null,
		on = 0,
		Mi = null;

	function ie() {
		return (tt & 2) !== 0 && J !== 0 ? J & -J : g.T !== null ? qi() : Ss()
	}

	function sr() {
		if(ce === 0)
			if((J & 536870912) === 0 || $) {
				var t = En;
				En <<= 1, (En & 3932160) === 0 && (En = 262144), ce = t
			} else ce = 536870912;
		return t = ae.current, t !== null && (t.flags |= 32), ce
	}

	function Wt(t, e, l) {
		(t === ot && (lt === 2 || lt === 9) || t.cancelPendingCommit !== null) && (ba(t, 0), ml(t, J, ce, !1)), Ca(t, l), ((tt & 2) === 0 || t !== ot) && (t === ot && ((tt & 2) === 0 && (Xl |= l), xt === 4 && ml(t, J, ce, !1)), Me(t))
	}

	function fr(t, e, l) {
		if((tt & 6) !== 0) throw Error(d(327));
		var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ma(t, e),
			n = a ? i0(t, e) : Di(t, e, !0),
			u = a;
		do {
			if(n === 0) {
				xa && !a && ml(t, e, 0, !1);
				break
			} else {
				if(l = t.current.alternate, u && !u0(l)) {
					n = Di(t, e, !1), u = !1;
					continue
				}
				if(n === 2) {
					if(u = e, t.errorRecoveryDisabledLanes & u) var c = 0;
					else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
					if(c !== 0) {
						e = c;
						t: {
							var i = t;n = fn;
							var f = i.current.memoizedState.isDehydrated;
							if(f && (ba(i, c).flags |= 256), c = Di(i, c, !1), c !== 2) {
								if(Ni && !f) {
									i.errorRecoveryDisabledLanes |= u, Xl |= u, n = 4;
									break t
								}
								u = kt, kt = n, u !== null && (kt === null ? kt = u : kt.push.apply(kt, u))
							}
							n = c
						}
						if(u = !1, n !== 2) continue
					}
				}
				if(n === 1) {
					ba(t, 0), ml(t, e, 0, !0);
					break
				}
				t: {
					switch(a = t, u = n, u) {
						case 0:
						case 1:
							throw Error(d(345));
						case 4:
							if((e & 4194048) !== e) break;
						case 6:
							ml(a, e, ce, !ol);
							break t;
						case 2:
							kt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(d(329))
					}
					if((e & 62914560) === e && (n = pu + 300 - It(), 10 < n)) {
						if(ml(a, e, ce, !ol), _n(a, 0, !0) !== 0) break t;
						ke = e, a.timeoutHandle = Qr(or.bind(null, a, l, kt, yu, Ei, e, ce, Xl, ya, ol, u, "Throttled", -0, 0), n);
						break t
					}
					or(a, l, kt, yu, Ei, e, ce, Xl, ya, ol, u, null, -0, 0)
				}
			}
			break
		} while(!0);
		Me(t)
	}

	function or(t, e, l, a, n, u, c, i, f, v, y, S, p, x) {
		if(t.timeoutHandle = -1, S = e.subtreeFlags, S & 8192 || (S & 16785408) === 16785408) {
			S = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Ue
			}, lr(e, u, S);
			var C = (u & 62914560) === u ? pu - It() : (u & 4194048) === u ? cr - It() : 0;
			if(C = V0(S, C), C !== null) {
				ke = u, t.cancelPendingCommit = C(yr.bind(null, t, e, u, l, a, n, c, i, f, y, S, null, p, x)), ml(t, u, c, !v);
				return
			}
		}
		yr(t, e, u, l, a, n, c, i, f)
	}

	function u0(t) {
		for(var e = t;;) {
			var l = e.tag;
			if((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
				for(var a = 0; a < l.length; a++) {
					var n = l[a],
						u = n.getSnapshot;
					n = n.value;
					try {
						if(!ee(u(), n)) return !1
					} catch {
						return !1
					}
				}
			if(l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
			else {
				if(e === t) break;
				for(; e.sibling === null;) {
					if(e.return === null || e.return === t) return !0;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
		}
		return !0
	}

	function ml(t, e, l, a) {
		e &= ~ji, e &= ~Xl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
		for(var n = e; 0 < n;) {
			var u = 31 - te(n),
				c = 1 << u;
			a[u] = -1, n &= ~c
		}
		l !== 0 && ys(t, l, e)
	}

	function gu() {
		return (tt & 6) === 0 ? (rn(0), !1) : !0
	}

	function Ci() {
		if(w !== null) {
			if(lt === 0) var t = w.return;
			else t = w, Be = Ol = null, Kc(t), oa = null, Ka = 0, t = w;
			for(; t !== null;) Xo(t.alternate, t), t = t.return;
			w = null
		}
	}

	function ba(t, e) {
		var l = t.timeoutHandle;
		l !== -1 && (t.timeoutHandle = -1, j0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), ke = 0, Ci(), ot = t, w = l = qe(t.current, null), J = e, lt = 0, ue = null, ol = !1, xa = Ma(t, e), Ni = !1, ya = ce = ji = Xl = rl = xt = 0, kt = fn = null, Ei = !1, (e & 8) !== 0 && (e |= e & 32);
		var a = t.entangledLanes;
		if(a !== 0)
			for(t = t.entanglements, a &= e; 0 < a;) {
				var n = 31 - te(a),
					u = 1 << n;
				e |= t[n], a &= ~u
			}
		return Je = e, Qn(), l
	}

	function rr(t, e) {
		Z = null, g.H = tn, e === fa || e === kn ? (e = Ef(), lt = 3) : e === Hc ? (e = Ef(), lt = 4) : lt = e === si ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ue = e, w === null && (xt = 1, su(t, de(e, t.current)))
	}

	function dr() {
		var t = ae.current;
		return t === null ? !0 : (J & 4194048) === J ? pe === null : (J & 62914560) === J || (J & 536870912) !== 0 ? t === pe : !1
	}

	function hr() {
		var t = g.H;
		return g.H = tn, t === null ? tn : t
	}

	function mr() {
		var t = g.A;
		return g.A = a0, t
	}

	function bu() {
		xt = 4, ol || (J & 4194048) !== J && ae.current !== null || (xa = !0), (rl & 134217727) === 0 && (Xl & 134217727) === 0 || ot === null || ml(ot, J, ce, !1)
	}

	function Di(t, e, l) {
		var a = tt;
		tt |= 2;
		var n = hr(),
			u = mr();
		(ot !== t || J !== e) && (yu = null, ba(t, e)), e = !1;
		var c = xt;
		t: do try {
				if(lt !== 0 && w !== null) {
					var i = w,
						f = ue;
					switch(lt) {
						case 8:
							Ci(), c = 6;
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							ae.current === null && (e = !0);
							var v = lt;
							if(lt = 0, ue = null, Sa(t, i, f, v), l && xa) {
								c = 0;
								break t
							}
							break;
						default:
							v = lt, lt = 0, ue = null, Sa(t, i, f, v)
					}
				}
				c0(), c = xt;
				break
			} catch (y) {
				rr(t, y)
			}
			while(!0);
			return e && t.shellSuspendCounter++, Be = Ol = null, tt = a, g.H = n, g.A = u, w === null && (ot = null, J = 0, Qn()), c
	}

	function c0() {
		for(; w !== null;) vr(w)
	}

	function i0(t, e) {
		var l = tt;
		tt |= 2;
		var a = hr(),
			n = mr();
		ot !== t || J !== e ? (yu = null, xu = It() + 500, ba(t, e)) : xa = Ma(t, e);
		t: do try {
				if(lt !== 0 && w !== null) {
					e = w;
					var u = ue;
					e: switch(lt) {
						case 1:
							lt = 0, ue = null, Sa(t, e, u, 1);
							break;
						case 2:
						case 9:
							if(Nf(u)) {
								lt = 0, ue = null, pr(e);
								break
							}
							e = function() {
								lt !== 2 && lt !== 9 || ot !== t || (lt = 7), Me(t)
							}, u.then(e, e);
							break t;
						case 3:
							lt = 7;
							break t;
						case 4:
							lt = 5;
							break t;
						case 7:
							Nf(u) ? (lt = 0, ue = null, pr(e)) : (lt = 0, ue = null, Sa(t, e, u, 7));
							break;
						case 5:
							var c = null;
							switch(w.tag) {
								case 26:
									c = w.memoizedState;
								case 5:
								case 27:
									var i = w;
									if(c ? ed(c) : i.stateNode.complete) {
										lt = 0, ue = null;
										var f = i.sibling;
										if(f !== null) w = f;
										else {
											var v = i.return;
											v !== null ? (w = v, Su(v)) : w = null
										}
										break e
									}
							}
							lt = 0, ue = null, Sa(t, e, u, 5);
							break;
						case 6:
							lt = 0, ue = null, Sa(t, e, u, 6);
							break;
						case 8:
							Ci(), xt = 6;
							break t;
						default:
							throw Error(d(462))
					}
				}
				s0();
				break
			} catch (y) {
				rr(t, y)
			}
			while(!0);
			return Be = Ol = null, g.H = a, g.A = n, tt = l, w !== null ? 0 : (ot = null, J = 0, Qn(), xt)
	}

	function s0() {
		for(; w !== null && !Dd();) vr(w)
	}

	function vr(t) {
		var e = Go(t.alternate, t, Je);
		t.memoizedProps = t.pendingProps, e === null ? Su(t) : w = e
	}

	function pr(t) {
		var e = t,
			l = e.alternate;
		switch(e.tag) {
			case 15:
			case 0:
				e = Uo(l, e, e.pendingProps, e.type, void 0, J);
				break;
			case 11:
				e = Uo(l, e, e.pendingProps, e.type.render, e.ref, J);
				break;
			case 5:
				Kc(e);
			default:
				Xo(l, e), e = w = hf(e, Je), e = Go(l, e, Je)
		}
		t.memoizedProps = t.pendingProps, e === null ? Su(t) : w = e
	}

	function Sa(t, e, l, a) {
		Be = Ol = null, Kc(e), oa = null, Ka = 0;
		var n = e.return;
		try {
			if($1(t, n, e, l, J)) {
				xt = 1, su(t, de(l, t.current)), w = null;
				return
			}
		} catch (u) {
			if(n !== null) throw w = n, u;
			xt = 1, su(t, de(l, t.current)), w = null;
			return
		}
		e.flags & 32768 ? ($ || a === 1 ? t = !0 : xa || (J & 536870912) !== 0 ? t = !1 : (ol = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ae.current, a !== null && a.tag === 13 && (a.flags |= 16384))), xr(e, t)) : Su(e)
	}

	function Su(t) {
		var e = t;
		do {
			if((e.flags & 32768) !== 0) {
				xr(e, ol);
				return
			}
			t = e.return;
			var l = P1(e.alternate, e, Je);
			if(l !== null) {
				w = l;
				return
			}
			if(e = e.sibling, e !== null) {
				w = e;
				return
			}
			w = e = t
		} while(e !== null);
		xt === 0 && (xt = 5)
	}

	function xr(t, e) {
		do {
			var l = t0(t.alternate, t);
			if(l !== null) {
				l.flags &= 32767, w = l;
				return
			}
			if(l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
				w = t;
				return
			}
			w = t = l
		} while(t !== null);
		xt = 6, w = null
	}

	function yr(t, e, l, a, n, u, c, i, f) {
		t.cancelPendingCommit = null;
		do Au(); while(Et !== 0);
		if((tt & 6) !== 0) throw Error(d(327));
		if(e !== null) {
			if(e === t.current) throw Error(d(177));
			if(u = e.lanes | e.childLanes, u |= gc, Xd(t, l, u, c, i, f), t === ot && (w = ot = null, J = 0), ga = e, hl = t, ke = l, Ti = u, _i = n, ir = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, d0(Nn, function() {
					return zr(), null
				})) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
				a = g.T, g.T = null, n = T.p, T.p = 2, c = tt, tt |= 4;
				try {
					e0(t, e, l)
				} finally {
					tt = c, T.p = n, g.T = a
				}
			}
			Et = 1, gr(), br(), Sr()
		}
	}

	function gr() {
		if(Et === 1) {
			Et = 0;
			var t = hl,
				e = ga,
				l = (e.flags & 13878) !== 0;
			if((e.subtreeFlags & 13878) !== 0 || l) {
				l = g.T, g.T = null;
				var a = T.p;
				T.p = 2;
				var n = tt;
				tt |= 4;
				try {
					Po(e, t);
					var u = Vi,
						c = af(t.containerInfo),
						i = u.focusedElem,
						f = u.selectionRange;
					if(c !== i && i && i.ownerDocument && lf(i.ownerDocument.documentElement, i)) {
						if(f !== null && mc(i)) {
							var v = f.start,
								y = f.end;
							if(y === void 0 && (y = v), "selectionStart" in i) i.selectionStart = v, i.selectionEnd = Math.min(y, i.value.length);
							else {
								var S = i.ownerDocument || document,
									p = S && S.defaultView || window;
								if(p.getSelection) {
									var x = p.getSelection(),
										C = i.textContent.length,
										B = Math.min(f.start, C),
										it = f.end === void 0 ? B : Math.min(f.end, C);
									!x.extend && B > it && (c = it, it = B, B = c);
									var h = ef(i, B),
										o = ef(i, it);
									if(h && o && (x.rangeCount !== 1 || x.anchorNode !== h.node || x.anchorOffset !== h.offset || x.focusNode !== o.node || x.focusOffset !== o.offset)) {
										var m = S.createRange();
										m.setStart(h.node, h.offset), x.removeAllRanges(), B > it ? (x.addRange(m), x.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset), x.addRange(m))
									}
								}
							}
						}
						for(S = [], x = i; x = x.parentNode;) x.nodeType === 1 && S.push({
							element: x,
							left: x.scrollLeft,
							top: x.scrollTop
						});
						for(typeof i.focus == "function" && i.focus(), i = 0; i < S.length; i++) {
							var b = S[i];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top
						}
					}
					Hu = !!Zi, Vi = Zi = null
				} finally {
					tt = n, T.p = a, g.T = l
				}
			}
			t.current = e, Et = 2
		}
	}

	function br() {
		if(Et === 2) {
			Et = 0;
			var t = hl,
				e = ga,
				l = (e.flags & 8772) !== 0;
			if((e.subtreeFlags & 8772) !== 0 || l) {
				l = g.T, g.T = null;
				var a = T.p;
				T.p = 2;
				var n = tt;
				tt |= 4;
				try {
					ko(t, e.alternate, e)
				} finally {
					tt = n, T.p = a, g.T = l
				}
			}
			Et = 3
		}
	}

	function Sr() {
		if(Et === 4 || Et === 3) {
			Et = 0, Od();
			var t = hl,
				e = ga,
				l = ke,
				a = ir;
			(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Et = 5 : (Et = 0, ga = hl = null, Ar(t, t.pendingLanes));
			var n = t.pendingLanes;
			if(n === 0 && (dl = null), Wu(l), e = e.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function") try {
				Pt.onCommitFiberRoot(_a, e, void 0, (e.current.flags & 128) === 128)
			} catch {}
			if(a !== null) {
				e = g.T, n = T.p, T.p = 2, g.T = null;
				try {
					for(var u = t.onRecoverableError, c = 0; c < a.length; c++) {
						var i = a[c];
						u(i.value, {
							componentStack: i.stack
						})
					}
				} finally {
					g.T = e, T.p = n
				}
			}(ke & 3) !== 0 && Au(), Me(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Mi ? on++ : (on = 0, Mi = t) : on = 0, rn(0)
		}
	}

	function Ar(t, e) {
		(t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, La(e)))
	}

	function Au() {
		return gr(), br(), Sr(), zr()
	}

	function zr() {
		if(Et !== 5) return !1;
		var t = hl,
			e = Ti;
		Ti = 0;
		var l = Wu(ke),
			a = g.T,
			n = T.p;
		try {
			T.p = 32 > l ? 32 : l, g.T = null, l = _i, _i = null;
			var u = hl,
				c = ke;
			if(Et = 0, ga = hl = null, ke = 0, (tt & 6) !== 0) throw Error(d(331));
			var i = tt;
			if(tt |= 4, nr(u.current), er(u, u.current, c, l), tt = i, rn(0, !1), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
				Pt.onPostCommitFiberRoot(_a, u)
			} catch {}
			return !0
		} finally {
			T.p = n, g.T = a, Ar(t, e)
		}
	}

	function Nr(t, e, l) {
		e = de(l, e), e = ii(t.stateNode, e, 2), t = cl(t, e, 2), t !== null && (Ca(t, 2), Me(t))
	}

	function at(t, e, l) {
		if(t.tag === 3) Nr(t, t, l);
		else
			for(; e !== null;) {
				if(e.tag === 3) {
					Nr(e, t, l);
					break
				} else if(e.tag === 1) {
					var a = e.stateNode;
					if(typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (dl === null || !dl.has(a))) {
						t = de(l, t), l = jo(2), a = cl(e, l, 2), a !== null && (Eo(l, a, e, t), Ca(a, 2), Me(a));
						break
					}
				}
				e = e.return
			}
	}

	function Oi(t, e, l) {
		var a = t.pingCache;
		if(a === null) {
			a = t.pingCache = new n0;
			var n = new Set;
			a.set(e, n)
		} else n = a.get(e), n === void 0 && (n = new Set, a.set(e, n));
		n.has(l) || (Ni = !0, n.add(l), t = f0.bind(null, t, e, l), e.then(t, t))
	}

	function f0(t, e, l) {
		var a = t.pingCache;
		a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, ot === t && (J & l) === l && (xt === 4 || xt === 3 && (J & 62914560) === J && 300 > It() - pu ? (tt & 2) === 0 && ba(t, 0) : ji |= l, ya === J && (ya = 0)), Me(t)
	}

	function jr(t, e) {
		e === 0 && (e = xs()), t = Ml(t, e), t !== null && (Ca(t, e), Me(t))
	}

	function o0(t) {
		var e = t.memoizedState,
			l = 0;
		e !== null && (l = e.retryLane), jr(t, l)
	}

	function r0(t, e) {
		var l = 0;
		switch(t.tag) {
			case 31:
			case 13:
				var a = t.stateNode,
					n = t.memoizedState;
				n !== null && (l = n.retryLane);
				break;
			case 19:
				a = t.stateNode;
				break;
			case 22:
				a = t.stateNode._retryCache;
				break;
			default:
				throw Error(d(314))
		}
		a !== null && a.delete(e), jr(t, l)
	}

	function d0(t, e) {
		return wu(t, e)
	}
	var zu = null,
		Aa = null,
		Ui = !1,
		Nu = !1,
		Hi = !1,
		vl = 0;

	function Me(t) {
		t !== Aa && t.next === null && (Aa === null ? zu = Aa = t : Aa = Aa.next = t), Nu = !0, Ui || (Ui = !0, m0())
	}

	function rn(t, e) {
		if(!Hi && Nu) {
			Hi = !0;
			do
				for(var l = !1, a = zu; a !== null;) {
					if(t !== 0) {
						var n = a.pendingLanes;
						if(n === 0) var u = 0;
						else {
							var c = a.suspendedLanes,
								i = a.pingedLanes;
							u = (1 << 31 - te(42 | t) + 1) - 1, u &= n & ~(c & ~i), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
						}
						u !== 0 && (l = !0, Mr(a, u))
					} else u = J, u = _n(a, a === ot ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ma(a, u) || (l = !0, Mr(a, u));
					a = a.next
				}
			while(l);
			Hi = !1
		}
	}

	function h0() {
		Er()
	}

	function Er() {
		Nu = Ui = !1;
		var t = 0;
		vl !== 0 && N0() && (t = vl);
		for(var e = It(), l = null, a = zu; a !== null;) {
			var n = a.next,
				u = Tr(a, e);
			u === 0 ? (a.next = null, l === null ? zu = n : l.next = n, n === null && (Aa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Nu = !0)), a = n
		}
		Et !== 0 && Et !== 5 || rn(t), vl !== 0 && (vl = 0)
	}

	function Tr(t, e) {
		for(var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
			var c = 31 - te(u),
				i = 1 << c,
				f = n[c];
			f === -1 ? ((i & l) === 0 || (i & a) !== 0) && (n[c] = Qd(i, e)) : f <= e && (t.expiredLanes |= i), u &= ~i
		}
		if(e = ot, l = J, l = _n(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (lt === 2 || lt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Ku(a), t.callbackNode = null, t.callbackPriority = 0;
		if((l & 3) === 0 || Ma(t, l)) {
			if(e = l & -l, e === t.callbackPriority) return e;
			switch(a !== null && Ku(a), Wu(l)) {
				case 2:
				case 8:
					l = vs;
					break;
				case 32:
					l = Nn;
					break;
				case 268435456:
					l = ps;
					break;
				default:
					l = Nn
			}
			return a = _r.bind(null, t), l = wu(l, a), t.callbackPriority = e, t.callbackNode = l, e
		}
		return a !== null && a !== null && Ku(a), t.callbackPriority = 2, t.callbackNode = null, 2
	}

	function _r(t, e) {
		if(Et !== 0 && Et !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
		var l = t.callbackNode;
		if(Au() && t.callbackNode !== l) return null;
		var a = J;
		return a = _n(t, t === ot ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (fr(t, a, e), Tr(t, It()), t.callbackNode != null && t.callbackNode === l ? _r.bind(null, t) : null)
	}

	function Mr(t, e) {
		if(Au()) return null;
		fr(t, e, !0)
	}

	function m0() {
		E0(function() {
			(tt & 6) !== 0 ? wu(ms, h0) : Er()
		})
	}

	function qi() {
		if(vl === 0) {
			var t = ia;
			t === 0 && (t = jn, jn <<= 1, (jn & 261888) === 0 && (jn = 256)), vl = t
		}
		return vl
	}

	function Cr(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : On("" + t)
	}

	function Dr(t, e) {
		var l = e.ownerDocument.createElement("input");
		return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t
	}

	function v0(t, e, l, a, n) {
		if(e === "submit" && l && l.stateNode === n) {
			var u = Cr((n[Vt] || null).action),
				c = a.submitter;
			c && (e = (e = c[Vt] || null) ? Cr(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
			var i = new Rn("action", "action", null, a, n);
			t.push({
				event: i,
				listeners: [{
					instance: null,
					listener: function() {
						if(a.defaultPrevented) {
							if(vl !== 0) {
								var f = c ? Dr(n, c) : new FormData(n);
								ei(l, {
									pending: !0,
									data: f,
									method: n.method,
									action: u
								}, null, f)
							}
						} else typeof u == "function" && (i.preventDefault(), f = c ? Dr(n, c) : new FormData(n), ei(l, {
							pending: !0,
							data: f,
							method: n.method,
							action: u
						}, u, f))
					},
					currentTarget: n
				}]
			})
		}
	}
	for(var Ri = 0; Ri < yc.length; Ri++) {
		var Bi = yc[Ri],
			p0 = Bi.toLowerCase(),
			x0 = Bi[0].toUpperCase() + Bi.slice(1);
		be(p0, "on" + x0)
	}
	be(cf, "onAnimationEnd"), be(sf, "onAnimationIteration"), be(ff, "onAnimationStart"), be("dblclick", "onDoubleClick"), be("focusin", "onFocus"), be("focusout", "onBlur"), be(U1, "onTransitionRun"), be(H1, "onTransitionStart"), be(q1, "onTransitionCancel"), be(of, "onTransitionEnd"), Jl("onMouseEnter", ["mouseout", "mouseover"]), Jl("onMouseLeave", ["mouseout", "mouseover"]), Jl("onPointerEnter", ["pointerout", "pointerover"]), Jl("onPointerLeave", ["pointerout", "pointerover"]), jl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), jl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		y0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));

	function Or(t, e) {
		e = (e & 4) !== 0;
		for(var l = 0; l < t.length; l++) {
			var a = t[l],
				n = a.event;
			a = a.listeners;
			t: {
				var u = void 0;
				if(e)
					for(var c = a.length - 1; 0 <= c; c--) {
						var i = a[c],
							f = i.instance,
							v = i.currentTarget;
						if(i = i.listener, f !== u && n.isPropagationStopped()) break t;
						u = i, n.currentTarget = v;
						try {
							u(n)
						} catch (y) {
							Gn(y)
						}
						n.currentTarget = null, u = f
					} else
						for(c = 0; c < a.length; c++) {
							if(i = a[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== u && n.isPropagationStopped()) break t;
							u = i, n.currentTarget = v;
							try {
								u(n)
							} catch (y) {
								Gn(y)
							}
							n.currentTarget = null, u = f
						}
			}
		}
	}

	function K(t, e) {
		var l = e[$u];
		l === void 0 && (l = e[$u] = new Set);
		var a = t + "__bubble";
		l.has(a) || (Ur(e, t, 2, !1), l.add(a))
	}

	function Yi(t, e, l) {
		var a = 0;
		e && (a |= 4), Ur(l, t, a, e)
	}
	var ju = "_reactListening" + Math.random().toString(36).slice(2);

	function Gi(t) {
		if(!t[ju]) {
			t[ju] = !0, Ns.forEach(function(l) {
				l !== "selectionchange" && (y0.has(l) || Yi(l, !1, t), Yi(l, !0, t))
			});
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[ju] || (e[ju] = !0, Yi("selectionchange", !1, e))
		}
	}

	function Ur(t, e, l, a) {
		switch(sd(e)) {
			case 2:
				var n = K0;
				break;
			case 8:
				n = J0;
				break;
			default:
				n = ts
		}
		l = n.bind(null, e, l, t), n = void 0, !uc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
			capture: !0,
			passive: n
		}) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
			passive: n
		}) : t.addEventListener(e, l, !1)
	}

	function Qi(t, e, l, a, n) {
		var u = a;
		if((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for(;;) {
			if(a === null) return;
			var c = a.tag;
			if(c === 3 || c === 4) {
				var i = a.stateNode.containerInfo;
				if(i === n) break;
				if(c === 4)
					for(c = a.return; c !== null;) {
						var f = c.tag;
						if((f === 3 || f === 4) && c.stateNode.containerInfo === n) return;
						c = c.return
					}
				for(; i !== null;) {
					if(c = Ll(i), c === null) return;
					if(f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
						a = u = c;
						continue t
					}
					i = i.parentNode
				}
			}
			a = a.return
		}
		Rs(function() {
			var v = u,
				y = ac(l),
				S = [];
			t: {
				var p = rf.get(t);
				if(p !== void 0) {
					var x = Rn,
						C = t;
					switch(t) {
						case "keypress":
							if(Hn(l) === 0) break t;
						case "keydown":
						case "keyup":
							x = r1;
							break;
						case "focusin":
							C = "focus", x = fc;
							break;
						case "focusout":
							C = "blur", x = fc;
							break;
						case "beforeblur":
						case "afterblur":
							x = fc;
							break;
						case "click":
							if(l.button === 2) break t;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							x = Gs;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							x = Pd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							x = m1;
							break;
						case cf:
						case sf:
						case ff:
							x = l1;
							break;
						case of:
							x = p1;
							break;
						case "scroll":
						case "scrollend":
							x = Fd;
							break;
						case "wheel":
							x = y1;
							break;
						case "copy":
						case "cut":
						case "paste":
							x = n1;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							x = Xs;
							break;
						case "toggle":
						case "beforetoggle":
							x = b1
					}
					var B = (e & 4) !== 0,
						it = !B && (t === "scroll" || t === "scrollend"),
						h = B ? p !== null ? p + "Capture" : null : p;
					B = [];
					for(var o = v, m; o !== null;) {
						var b = o;
						if(m = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || m === null || h === null || (b = Ua(o, h), b != null && B.push(hn(o, b, m))), it) break;
						o = o.return
					}
					0 < B.length && (p = new x(p, C, null, l, y), S.push({
						event: p,
						listeners: B
					}))
				}
			}
			if((e & 7) === 0) {
				t: {
					if(p = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", p && l !== lc && (C = l.relatedTarget || l.fromElement) && (Ll(C) || C[Vl])) break t;
					if((x || p) && (p = y.window === y ? y : (p = y.ownerDocument) ? p.defaultView || p.parentWindow : window, x ? (C = l.relatedTarget || l.toElement, x = v, C = C ? Ll(C) : null, C !== null && (it = M(C), B = C.tag, C !== it || B !== 5 && B !== 27 && B !== 6) && (C = null)) : (x = null, C = v), x !== C)) {
						if(B = Gs, b = "onMouseLeave", h = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (B = Xs, b = "onPointerLeave", h = "onPointerEnter", o = "pointer"), it = x == null ? p : Oa(x), m = C == null ? p : Oa(C), p = new B(b, o + "leave", x, l, y), p.target = it, p.relatedTarget = m, b = null, Ll(y) === v && (B = new B(h, o + "enter", C, l, y), B.target = m, B.relatedTarget = it, b = B), it = b, x && C) e: {
							for(B = g0, h = x, o = C, m = 0, b = h; b; b = B(b)) m++;b = 0;
							for(var q = o; q; q = B(q)) b++;
							for(; 0 < m - b;) h = B(h),
							m--;
							for(; 0 < b - m;) o = B(o),
							b--;
							for(; m--;) {
								if(h === o || o !== null && h === o.alternate) {
									B = h;
									break e
								}
								h = B(h), o = B(o)
							}
							B = null
						}
						else B = null;
						x !== null && Hr(S, p, x, B, !1), C !== null && it !== null && Hr(S, it, C, B, !0)
					}
				}
				t: {
					if(p = v ? Oa(v) : window, x = p.nodeName && p.nodeName.toLowerCase(), x === "select" || x === "input" && p.type === "file") var I = Ws;
					else if(Js(p))
						if($s) I = C1;
						else {
							I = _1;
							var O = T1
						}
					else x = p.nodeName,
					!x || x.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? v && ec(v.elementType) && (I = Ws) : I = M1;
					if(I && (I = I(t, v))) {
						ks(S, I, l, y);
						break t
					}
					O && O(t, p, v),
					t === "focusout" && v && p.type === "number" && v.memoizedProps.value != null && tc(p, "number", p.value)
				}
				switch(O = v ? Oa(v) : window, t) {
					case "focusin":
						(Js(O) || O.contentEditable === "true") && (Pl = O, vc = v, Xa = null);
						break;
					case "focusout":
						Xa = vc = Pl = null;
						break;
					case "mousedown":
						pc = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						pc = !1, nf(S, l, y);
						break;
					case "selectionchange":
						if(O1) break;
					case "keydown":
					case "keyup":
						nf(S, l, y)
				}
				var V;
				if(rc) t: {
					switch(t) {
						case "compositionstart":
							var k = "onCompositionStart";
							break t;
						case "compositionend":
							k = "onCompositionEnd";
							break t;
						case "compositionupdate":
							k = "onCompositionUpdate";
							break t
					}
					k = void 0
				}
				else Il ? ws(t, l) && (k = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (k = "onCompositionStart");k && (Zs && l.locale !== "ko" && (Il || k !== "onCompositionStart" ? k === "onCompositionEnd" && Il && (V = Bs()) : (Pe = y, cc = "value" in Pe ? Pe.value : Pe.textContent, Il = !0)), O = Eu(v, k), 0 < O.length && (k = new Qs(k, t, null, l, y), S.push({
					event: k,
					listeners: O
				}), V ? k.data = V : (V = Ks(l), V !== null && (k.data = V)))),
				(V = A1 ? z1(t, l) : N1(t, l)) && (k = Eu(v, "onBeforeInput"), 0 < k.length && (O = new Qs("onBeforeInput", "beforeinput", null, l, y), S.push({
					event: O,
					listeners: k
				}), O.data = V)),
				v0(S, t, v, l, y)
			}
			Or(S, e)
		})
	}

	function hn(t, e, l) {
		return {
			instance: t,
			listener: e,
			currentTarget: l
		}
	}

	function Eu(t, e) {
		for(var l = e + "Capture", a = []; t !== null;) {
			var n = t,
				u = n.stateNode;
			if(n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ua(t, l), n != null && a.unshift(hn(t, n, u)), n = Ua(t, e), n != null && a.push(hn(t, n, u))), t.tag === 3) return a;
			t = t.return
		}
		return []
	}

	function g0(t) {
		if(t === null) return null;
		do t = t.return; while(t && t.tag !== 5 && t.tag !== 27);
		return t || null
	}

	function Hr(t, e, l, a, n) {
		for(var u = e._reactName, c = []; l !== null && l !== a;) {
			var i = l,
				f = i.alternate,
				v = i.stateNode;
			if(i = i.tag, f !== null && f === a) break;
			i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, n ? (v = Ua(l, u), v != null && c.unshift(hn(l, v, f))) : n || (v = Ua(l, u), v != null && c.push(hn(l, v, f)))), l = l.return
		}
		c.length !== 0 && t.push({
			event: e,
			listeners: c
		})
	}
	var b0 = /\r\n?/g,
		S0 = /\u0000|\uFFFD/g;

	function qr(t) {
		return (typeof t == "string" ? t : "" + t).replace(b0, `
`).replace(S0, "")
	}

	function Rr(t, e) {
		return e = qr(e), qr(t) === e
	}

	function ct(t, e, l, a, n, u) {
		switch(l) {
			case "children":
				typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Wl(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Wl(t, "" + a);
				break;
			case "className":
				Cn(t, "class", a);
				break;
			case "tabIndex":
				Cn(t, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Cn(t, l, a);
				break;
			case "style":
				Hs(t, a, u);
				break;
			case "data":
				if(e !== "object") {
					Cn(t, "data", a);
					break
				}
			case "src":
			case "href":
				if(a === "" && (e !== "a" || l !== "href")) {
					t.removeAttribute(l);
					break
				}
				if(a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
					t.removeAttribute(l);
					break
				}
				a = On("" + a), t.setAttribute(l, a);
				break;
			case "action":
			case "formAction":
				if(typeof a == "function") {
					t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break
				} else typeof u == "function" && (l === "formAction" ? (e !== "input" && ct(t, e, "name", n.name, n, null), ct(t, e, "formEncType", n.formEncType, n, null), ct(t, e, "formMethod", n.formMethod, n, null), ct(t, e, "formTarget", n.formTarget, n, null)) : (ct(t, e, "encType", n.encType, n, null), ct(t, e, "method", n.method, n, null), ct(t, e, "target", n.target, n, null)));
				if(a == null || typeof a == "symbol" || typeof a == "boolean") {
					t.removeAttribute(l);
					break
				}
				a = On("" + a), t.setAttribute(l, a);
				break;
			case "onClick":
				a != null && (t.onclick = Ue);
				break;
			case "onScroll":
				a != null && K("scroll", t);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", t);
				break;
			case "dangerouslySetInnerHTML":
				if(a != null) {
					if(typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if(l = a.__html, l != null) {
						if(n.children != null) throw Error(d(60));
						t.innerHTML = l
					}
				}
				break;
			case "multiple":
				t.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				t.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if(a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
					t.removeAttribute("xlink:href");
					break
				}
				l = On("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
				break;
			case "popover":
				K("beforetoggle", t), K("toggle", t), Mn(t, "popover", a);
				break;
			case "xlinkActuate":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Oe(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Oe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Oe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Oe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Mn(t, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Wd.get(l) || l, Mn(t, l, a))
		}
	}

	function Xi(t, e, l, a, n, u) {
		switch(l) {
			case "style":
				Hs(t, a, u);
				break;
			case "dangerouslySetInnerHTML":
				if(a != null) {
					if(typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if(l = a.__html, l != null) {
						if(n.children != null) throw Error(d(60));
						t.innerHTML = l
					}
				}
				break;
			case "children":
				typeof a == "string" ? Wl(t, a) : (typeof a == "number" || typeof a == "bigint") && Wl(t, "" + a);
				break;
			case "onScroll":
				a != null && K("scroll", t);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", t);
				break;
			case "onClick":
				a != null && (t.onclick = Ue);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if(!js.hasOwnProperty(l)) t: {
					if(l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Vt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
						typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
						break t
					}
					l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Mn(t, l, a)
				}
		}
	}

	function Ut(t, e, l) {
		switch(e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				K("error", t), K("load", t);
				var a = !1,
					n = !1,
					u;
				for(u in l)
					if(l.hasOwnProperty(u)) {
						var c = l[u];
						if(c != null) switch(u) {
							case "src":
								a = !0;
								break;
							case "srcSet":
								n = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(d(137, e));
							default:
								ct(t, e, u, c, l, null)
						}
					} n && ct(t, e, "srcSet", l.srcSet, l, null), a && ct(t, e, "src", l.src, l, null);
				return;
			case "input":
				K("invalid", t);
				var i = u = c = n = null,
					f = null,
					v = null;
				for(a in l)
					if(l.hasOwnProperty(a)) {
						var y = l[a];
						if(y != null) switch(a) {
							case "name":
								n = y;
								break;
							case "type":
								c = y;
								break;
							case "checked":
								f = y;
								break;
							case "defaultChecked":
								v = y;
								break;
							case "value":
								u = y;
								break;
							case "defaultValue":
								i = y;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if(y != null) throw Error(d(137, e));
								break;
							default:
								ct(t, e, a, y, l, null)
						}
					} Cs(t, u, i, f, v, c, n, !1);
				return;
			case "select":
				K("invalid", t), a = c = u = null;
				for(n in l)
					if(l.hasOwnProperty(n) && (i = l[n], i != null)) switch(n) {
						case "value":
							u = i;
							break;
						case "defaultValue":
							c = i;
							break;
						case "multiple":
							a = i;
						default:
							ct(t, e, n, i, l, null)
					}
				e = u, l = c, t.multiple = !!a, e != null ? kl(t, !!a, e, !1) : l != null && kl(t, !!a, l, !0);
				return;
			case "textarea":
				K("invalid", t), u = n = a = null;
				for(c in l)
					if(l.hasOwnProperty(c) && (i = l[c], i != null)) switch(c) {
						case "value":
							a = i;
							break;
						case "defaultValue":
							n = i;
							break;
						case "children":
							u = i;
							break;
						case "dangerouslySetInnerHTML":
							if(i != null) throw Error(d(91));
							break;
						default:
							ct(t, e, c, i, l, null)
					}
				Os(t, a, n, u);
				return;
			case "option":
				for(f in l) l.hasOwnProperty(f) && (a = l[f], a != null) && (f === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : ct(t, e, f, a, l, null));
				return;
			case "dialog":
				K("beforetoggle", t), K("toggle", t), K("cancel", t), K("close", t);
				break;
			case "iframe":
			case "object":
				K("load", t);
				break;
			case "video":
			case "audio":
				for(a = 0; a < dn.length; a++) K(dn[a], t);
				break;
			case "image":
				K("error", t), K("load", t);
				break;
			case "details":
				K("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				K("error", t), K("load", t);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for(v in l)
					if(l.hasOwnProperty(v) && (a = l[v], a != null)) switch(v) {
						case "children":
						case "dangerouslySetInnerHTML":
							throw Error(d(137, e));
						default:
							ct(t, e, v, a, l, null)
					}
				return;
			default:
				if(ec(e)) {
					for(y in l) l.hasOwnProperty(y) && (a = l[y], a !== void 0 && Xi(t, e, y, a, l, void 0));
					return
				}
		}
		for(i in l) l.hasOwnProperty(i) && (a = l[i], a != null && ct(t, e, i, a, l, null))
	}

	function A0(t, e, l, a) {
		switch(e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var n = null,
					u = null,
					c = null,
					i = null,
					f = null,
					v = null,
					y = null;
				for(x in l) {
					var S = l[x];
					if(l.hasOwnProperty(x) && S != null) switch(x) {
						case "checked":
							break;
						case "value":
							break;
						case "defaultValue":
							f = S;
						default:
							a.hasOwnProperty(x) || ct(t, e, x, null, a, S)
					}
				}
				for(var p in a) {
					var x = a[p];
					if(S = l[p], a.hasOwnProperty(p) && (x != null || S != null)) switch(p) {
						case "type":
							u = x;
							break;
						case "name":
							n = x;
							break;
						case "checked":
							v = x;
							break;
						case "defaultChecked":
							y = x;
							break;
						case "value":
							c = x;
							break;
						case "defaultValue":
							i = x;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if(x != null) throw Error(d(137, e));
							break;
						default:
							x !== S && ct(t, e, p, x, a, S)
					}
				}
				Pu(t, c, i, f, v, y, u, n);
				return;
			case "select":
				x = c = i = p = null;
				for(u in l)
					if(f = l[u], l.hasOwnProperty(u) && f != null) switch(u) {
						case "value":
							break;
						case "multiple":
							x = f;
						default:
							a.hasOwnProperty(u) || ct(t, e, u, null, a, f)
					}
				for(n in a)
					if(u = a[n], f = l[n], a.hasOwnProperty(n) && (u != null || f != null)) switch(n) {
						case "value":
							p = u;
							break;
						case "defaultValue":
							i = u;
							break;
						case "multiple":
							c = u;
						default:
							u !== f && ct(t, e, n, u, a, f)
					}
				e = i, l = c, a = x, p != null ? kl(t, !!l, p, !1) : !!a != !!l && (e != null ? kl(t, !!l, e, !0) : kl(t, !!l, l ? [] : "", !1));
				return;
			case "textarea":
				x = p = null;
				for(i in l)
					if(n = l[i], l.hasOwnProperty(i) && n != null && !a.hasOwnProperty(i)) switch(i) {
						case "value":
							break;
						case "children":
							break;
						default:
							ct(t, e, i, null, a, n)
					}
				for(c in a)
					if(n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null)) switch(c) {
						case "value":
							p = n;
							break;
						case "defaultValue":
							x = n;
							break;
						case "children":
							break;
						case "dangerouslySetInnerHTML":
							if(n != null) throw Error(d(91));
							break;
						default:
							n !== u && ct(t, e, c, n, a, u)
					}
				Ds(t, p, x);
				return;
			case "option":
				for(var C in l) p = l[C], l.hasOwnProperty(C) && p != null && !a.hasOwnProperty(C) && (C === "selected" ? t.selected = !1 : ct(t, e, C, null, a, p));
				for(f in a) p = a[f], x = l[f], a.hasOwnProperty(f) && p !== x && (p != null || x != null) && (f === "selected" ? t.selected = p && typeof p != "function" && typeof p != "symbol" : ct(t, e, f, p, a, x));
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for(var B in l) p = l[B], l.hasOwnProperty(B) && p != null && !a.hasOwnProperty(B) && ct(t, e, B, null, a, p);
				for(v in a)
					if(p = a[v], x = l[v], a.hasOwnProperty(v) && p !== x && (p != null || x != null)) switch(v) {
						case "children":
						case "dangerouslySetInnerHTML":
							if(p != null) throw Error(d(137, e));
							break;
						default:
							ct(t, e, v, p, a, x)
					}
				return;
			default:
				if(ec(e)) {
					for(var it in l) p = l[it], l.hasOwnProperty(it) && p !== void 0 && !a.hasOwnProperty(it) && Xi(t, e, it, void 0, a, p);
					for(y in a) p = a[y], x = l[y], !a.hasOwnProperty(y) || p === x || p === void 0 && x === void 0 || Xi(t, e, y, p, a, x);
					return
				}
		}
		for(var h in l) p = l[h], l.hasOwnProperty(h) && p != null && !a.hasOwnProperty(h) && ct(t, e, h, null, a, p);
		for(S in a) p = a[S], x = l[S], !a.hasOwnProperty(S) || p === x || p == null && x == null || ct(t, e, S, p, a, x)
	}

	function Br(t) {
		switch(t) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1
		}
	}

	function z0() {
		if(typeof performance.getEntriesByType == "function") {
			for(var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
				var n = l[a],
					u = n.transferSize,
					c = n.initiatorType,
					i = n.duration;
				if(u && i && Br(c)) {
					for(c = 0, i = n.responseEnd, a += 1; a < l.length; a++) {
						var f = l[a],
							v = f.startTime;
						if(v > i) break;
						var y = f.transferSize,
							S = f.initiatorType;
						y && Br(S) && (f = f.responseEnd, c += y * (f < i ? 1 : (i - v) / (f - v)))
					}
					if(--a, e += 8 * (u + c) / (n.duration / 1e3), t++, 10 < t) break
				}
			}
			if(0 < t) return e / t / 1e6
		}
		return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
	}
	var Zi = null,
		Vi = null;

	function Tu(t) {
		return t.nodeType === 9 ? t : t.ownerDocument
	}

	function Yr(t) {
		switch(t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0
		}
	}

	function Gr(t, e) {
		if(t === 0) switch(e) {
			case "svg":
				return 1;
			case "math":
				return 2;
			default:
				return 0
		}
		return t === 1 && e === "foreignObject" ? 0 : t
	}

	function Li(t, e) {
		return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
	}
	var wi = null;

	function N0() {
		var t = window.event;
		return t && t.type === "popstate" ? t === wi ? !1 : (wi = t, !0) : (wi = null, !1)
	}
	var Qr = typeof setTimeout == "function" ? setTimeout : void 0,
		j0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Xr = typeof Promise == "function" ? Promise : void 0,
		E0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xr < "u" ? function(t) {
			return Xr.resolve(null).then(t).catch(T0)
		} : Qr;

	function T0(t) {
		setTimeout(function() {
			throw t
		})
	}

	function pl(t) {
		return t === "head"
	}

	function Zr(t, e) {
		var l = e,
			a = 0;
		do {
			var n = l.nextSibling;
			if(t.removeChild(l), n && n.nodeType === 8)
				if(l = n.data, l === "/$" || l === "/&") {
					if(a === 0) {
						t.removeChild(n), Ea(e);
						return
					}
					a--
				} else if(l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
			else if(l === "html") mn(t.ownerDocument.documentElement);
			else if(l === "head") {
				l = t.ownerDocument.head, mn(l);
				for(var u = l.firstChild; u;) {
					var c = u.nextSibling,
						i = u.nodeName;
					u[Da] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c
				}
			} else l === "body" && mn(t.ownerDocument.body);
			l = n
		} while(l);
		Ea(e)
	}

	function Vr(t, e) {
		var l = t;
		t = 0;
		do {
			var a = l.nextSibling;
			if(l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
				if(l = a.data, l === "/$") {
					if(t === 0) break;
					t--
				} else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
			l = a
		} while(l)
	}

	function Ki(t) {
		var e = t.firstChild;
		for(e && e.nodeType === 10 && (e = e.nextSibling); e;) {
			var l = e;
			switch(e = e.nextSibling, l.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Ki(l), Fu(l);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if(l.rel.toLowerCase() === "stylesheet") continue
			}
			t.removeChild(l)
		}
	}

	function _0(t, e, l, a) {
		for(; t.nodeType === 1;) {
			var n = l;
			if(t.nodeName.toLowerCase() !== e.toLowerCase()) {
				if(!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
			} else if(a) {
				if(!t[Da]) switch(e) {
					case "meta":
						if(!t.hasAttribute("itemprop")) break;
						return t;
					case "link":
						if(u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
						if(u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
						return t;
					case "style":
						if(t.hasAttribute("data-precedence")) break;
						return t;
					case "script":
						if(u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
						return t;
					default:
						return t
				}
			} else if(e === "input" && t.type === "hidden") {
				var u = n.name == null ? null : "" + n.name;
				if(n.type === "hidden" && t.getAttribute("name") === u) return t
			} else return t;
			if(t = xe(t.nextSibling), t === null) break
		}
		return null
	}

	function M0(t, e, l) {
		if(e === "") return null;
		for(; t.nodeType !== 3;)
			if((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = xe(t.nextSibling), t === null)) return null;
		return t
	}

	function Lr(t, e) {
		for(; t.nodeType !== 8;)
			if((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xe(t.nextSibling), t === null)) return null;
		return t
	}

	function Ji(t) {
		return t.data === "$?" || t.data === "$~"
	}

	function ki(t) {
		return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
	}

	function C0(t, e) {
		var l = t.ownerDocument;
		if(t.data === "$~") t._reactRetry = e;
		else if(t.data !== "$?" || l.readyState !== "loading") e();
		else {
			var a = function() {
				e(), l.removeEventListener("DOMContentLoaded", a)
			};
			l.addEventListener("DOMContentLoaded", a), t._reactRetry = a
		}
	}

	function xe(t) {
		for(; t != null; t = t.nextSibling) {
			var e = t.nodeType;
			if(e === 1 || e === 3) break;
			if(e === 8) {
				if(e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
				if(e === "/$" || e === "/&") return null
			}
		}
		return t
	}
	var Wi = null;

	function wr(t) {
		t = t.nextSibling;
		for(var e = 0; t;) {
			if(t.nodeType === 8) {
				var l = t.data;
				if(l === "/$" || l === "/&") {
					if(e === 0) return xe(t.nextSibling);
					e--
				} else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
			}
			t = t.nextSibling
		}
		return null
	}

	function Kr(t) {
		t = t.previousSibling;
		for(var e = 0; t;) {
			if(t.nodeType === 8) {
				var l = t.data;
				if(l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
					if(e === 0) return t;
					e--
				} else l !== "/$" && l !== "/&" || e++
			}
			t = t.previousSibling
		}
		return null
	}

	function Jr(t, e, l) {
		switch(e = Tu(l), t) {
			case "html":
				if(t = e.documentElement, !t) throw Error(d(452));
				return t;
			case "head":
				if(t = e.head, !t) throw Error(d(453));
				return t;
			case "body":
				if(t = e.body, !t) throw Error(d(454));
				return t;
			default:
				throw Error(d(451))
		}
	}

	function mn(t) {
		for(var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
		Fu(t)
	}
	var ye = new Map,
		kr = new Set;

	function _u(t) {
		return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
	}
	var We = T.d;
	T.d = {
		f: D0,
		r: O0,
		D: U0,
		C: H0,
		L: q0,
		m: R0,
		X: Y0,
		S: B0,
		M: G0
	};

	function D0() {
		var t = We.f(),
			e = gu();
		return t || e
	}

	function O0(t) {
		var e = wl(t);
		e !== null && e.tag === 5 && e.type === "form" ? oo(e) : We.r(t)
	}
	var za = typeof document > "u" ? null : document;

	function Wr(t, e, l) {
		var a = za;
		if(a && typeof e == "string" && e) {
			var n = oe(e);
			n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), kr.has(n) || (kr.add(n), t = {
				rel: t,
				crossOrigin: l,
				href: e
			}, a.querySelector(n) === null && (e = a.createElement("link"), Ut(e, "link", t), Tt(e), a.head.appendChild(e)))
		}
	}

	function U0(t) {
		We.D(t), Wr("dns-prefetch", t, null)
	}

	function H0(t, e) {
		We.C(t, e), Wr("preconnect", t, e)
	}

	function q0(t, e, l) {
		We.L(t, e, l);
		var a = za;
		if(a && t && e) {
			var n = 'link[rel="preload"][as="' + oe(e) + '"]';
			e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + oe(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + oe(l.imageSizes) + '"]')) : n += '[href="' + oe(t) + '"]';
			var u = n;
			switch(e) {
				case "style":
					u = Na(t);
					break;
				case "script":
					u = ja(t)
			}
			ye.has(u) || (t = Y({
				rel: "preload",
				href: e === "image" && l && l.imageSrcSet ? void 0 : t,
				as: e
			}, l), ye.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(vn(u)) || e === "script" && a.querySelector(pn(u)) || (e = a.createElement("link"), Ut(e, "link", t), Tt(e), a.head.appendChild(e)))
		}
	}

	function R0(t, e) {
		We.m(t, e);
		var l = za;
		if(l && t) {
			var a = e && typeof e.as == "string" ? e.as : "script",
				n = 'link[rel="modulepreload"][as="' + oe(a) + '"][href="' + oe(t) + '"]',
				u = n;
			switch(a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					u = ja(t)
			}
			if(!ye.has(u) && (t = Y({
					rel: "modulepreload",
					href: t
				}, e), ye.set(u, t), l.querySelector(n) === null)) {
				switch(a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if(l.querySelector(pn(u))) return
				}
				a = l.createElement("link"), Ut(a, "link", t), Tt(a), l.head.appendChild(a)
			}
		}
	}

	function B0(t, e, l) {
		We.S(t, e, l);
		var a = za;
		if(a && t) {
			var n = Kl(a).hoistableStyles,
				u = Na(t);
			e = e || "default";
			var c = n.get(u);
			if(!c) {
				var i = {
					loading: 0,
					preload: null
				};
				if(c = a.querySelector(vn(u))) i.loading = 5;
				else {
					t = Y({
						rel: "stylesheet",
						href: t,
						"data-precedence": e
					}, l), (l = ye.get(u)) && $i(t, l);
					var f = c = a.createElement("link");
					Tt(f), Ut(f, "link", t), f._p = new Promise(function(v, y) {
						f.onload = v, f.onerror = y
					}), f.addEventListener("load", function() {
						i.loading |= 1
					}), f.addEventListener("error", function() {
						i.loading |= 2
					}), i.loading |= 4, Mu(c, e, a)
				}
				c = {
					type: "stylesheet",
					instance: c,
					count: 1,
					state: i
				}, n.set(u, c)
			}
		}
	}

	function Y0(t, e) {
		We.X(t, e);
		var l = za;
		if(l && t) {
			var a = Kl(l).hoistableScripts,
				n = ja(t),
				u = a.get(n);
			u || (u = l.querySelector(pn(n)), u || (t = Y({
				src: t,
				async: !0
			}, e), (e = ye.get(n)) && Fi(t, e), u = l.createElement("script"), Tt(u), Ut(u, "link", t), l.head.appendChild(u)), u = {
				type: "script",
				instance: u,
				count: 1,
				state: null
			}, a.set(n, u))
		}
	}

	function G0(t, e) {
		We.M(t, e);
		var l = za;
		if(l && t) {
			var a = Kl(l).hoistableScripts,
				n = ja(t),
				u = a.get(n);
			u || (u = l.querySelector(pn(n)), u || (t = Y({
				src: t,
				async: !0,
				type: "module"
			}, e), (e = ye.get(n)) && Fi(t, e), u = l.createElement("script"), Tt(u), Ut(u, "link", t), l.head.appendChild(u)), u = {
				type: "script",
				instance: u,
				count: 1,
				state: null
			}, a.set(n, u))
		}
	}

	function $r(t, e, l, a) {
		var n = (n = L.current) ? _u(n) : null;
		if(!n) throw Error(d(446));
		switch(t) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Na(l.href), l = Kl(n).hoistableStyles, a = l.get(e), a || (a = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, l.set(e, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			case "link":
				if(l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
					t = Na(l.href);
					var u = Kl(n).hoistableStyles,
						c = u.get(t);
					if(c || (n = n.ownerDocument || n, c = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: 0,
								preload: null
							}
						}, u.set(t, c), (u = n.querySelector(vn(t))) && !u._p && (c.instance = u, c.state.loading = 5), ye.has(t) || (l = {
							rel: "preload",
							as: "style",
							href: l.href,
							crossOrigin: l.crossOrigin,
							integrity: l.integrity,
							media: l.media,
							hrefLang: l.hrefLang,
							referrerPolicy: l.referrerPolicy
						}, ye.set(t, l), u || Q0(n, t, l, c.state))), e && a === null) throw Error(d(528, ""));
					return c
				}
				if(e && a !== null) throw Error(d(529, ""));
				return null;
			case "script":
				return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ja(l), l = Kl(n).hoistableScripts, a = l.get(e), a || (a = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, l.set(e, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			default:
				throw Error(d(444, t))
		}
	}

	function Na(t) {
		return 'href="' + oe(t) + '"'
	}

	function vn(t) {
		return 'link[rel="stylesheet"][' + t + "]"
	}

	function Fr(t) {
		return Y({}, t, {
			"data-precedence": t.precedence,
			precedence: null
		})
	}

	function Q0(t, e, l, a) {
		t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
			return a.loading |= 1
		}), e.addEventListener("error", function() {
			return a.loading |= 2
		}), Ut(e, "link", l), Tt(e), t.head.appendChild(e))
	}

	function ja(t) {
		return '[src="' + oe(t) + '"]'
	}

	function pn(t) {
		return "script[async]" + t
	}

	function Ir(t, e, l) {
		if(e.count++, e.instance === null) switch(e.type) {
			case "style":
				var a = t.querySelector('style[data-href~="' + oe(l.href) + '"]');
				if(a) return e.instance = a, Tt(a), a;
				var n = Y({}, l, {
					"data-href": l.href,
					"data-precedence": l.precedence,
					href: null,
					precedence: null
				});
				return a = (t.ownerDocument || t).createElement("style"), Tt(a), Ut(a, "style", n), Mu(a, l.precedence, t), e.instance = a;
			case "stylesheet":
				n = Na(l.href);
				var u = t.querySelector(vn(n));
				if(u) return e.state.loading |= 4, e.instance = u, Tt(u), u;
				a = Fr(l), (n = ye.get(n)) && $i(a, n), u = (t.ownerDocument || t).createElement("link"), Tt(u);
				var c = u;
				return c._p = new Promise(function(i, f) {
					c.onload = i, c.onerror = f
				}), Ut(u, "link", a), e.state.loading |= 4, Mu(u, l.precedence, t), e.instance = u;
			case "script":
				return u = ja(l.src), (n = t.querySelector(pn(u))) ? (e.instance = n, Tt(n), n) : (a = l, (n = ye.get(u)) && (a = Y({}, l), Fi(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Tt(n), Ut(n, "link", a), t.head.appendChild(n), e.instance = n);
			case "void":
				return null;
			default:
				throw Error(d(443, e.type))
		} else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Mu(a, l.precedence, t));
		return e.instance
	}

	function Mu(t, e, l) {
		for(var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
			var i = a[c];
			if(i.dataset.precedence === e) u = i;
			else if(u !== n) break
		}
		u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild))
	}

	function $i(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
	}

	function Fi(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
	}
	var Cu = null;

	function Pr(t, e, l) {
		if(Cu === null) {
			var a = new Map,
				n = Cu = new Map;
			n.set(l, a)
		} else n = Cu, a = n.get(l), a || (a = new Map, n.set(l, a));
		if(a.has(t)) return a;
		for(a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
			var u = l[n];
			if(!(u[Da] || u[Mt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
				var c = u.getAttribute(e) || "";
				c = t + c;
				var i = a.get(c);
				i ? i.push(u) : a.set(c, [u])
			}
		}
		return a
	}

	function td(t, e, l) {
		t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
	}

	function X0(t, e, l) {
		if(l === 1 || e.itemProp != null) return !1;
		switch(t) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if(typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
				return !0;
			case "link":
				if(typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
				return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
			case "script":
				if(e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
		}
		return !1
	}

	function ed(t) {
		return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
	}

	function Z0(t, e, l, a) {
		if(l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
			if(l.instance === null) {
				var n = Na(a.href),
					u = e.querySelector(vn(n));
				if(u) {
					e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Du.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Tt(u);
					return
				}
				u = e.ownerDocument || e, a = Fr(a), (n = ye.get(n)) && $i(a, n), u = u.createElement("link"), Tt(u);
				var c = u;
				c._p = new Promise(function(i, f) {
					c.onload = i, c.onerror = f
				}), Ut(u, "link", a), l.instance = u
			}
			t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Du.bind(t), e.addEventListener("load", l), e.addEventListener("error", l))
		}
	}
	var Ii = 0;

	function V0(t, e) {
		return t.stylesheets && t.count === 0 && Uu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
			var a = setTimeout(function() {
				if(t.stylesheets && Uu(t, t.stylesheets), t.unsuspend) {
					var u = t.unsuspend;
					t.unsuspend = null, u()
				}
			}, 6e4 + e);
			0 < t.imgBytes && Ii === 0 && (Ii = 62500 * z0());
			var n = setTimeout(function() {
				if(t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Uu(t, t.stylesheets), t.unsuspend)) {
					var u = t.unsuspend;
					t.unsuspend = null, u()
				}
			}, (t.imgBytes > Ii ? 50 : 800) + e);
			return t.unsuspend = l,
				function() {
					t.unsuspend = null, clearTimeout(a), clearTimeout(n)
				}
		} : null
	}

	function Du() {
		if(this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if(this.stylesheets) Uu(this, this.stylesheets);
			else if(this.unsuspend) {
				var t = this.unsuspend;
				this.unsuspend = null, t()
			}
		}
	}
	var Ou = null;

	function Uu(t, e) {
		t.stylesheets = null, t.unsuspend !== null && (t.count++, Ou = new Map, e.forEach(L0, t), Ou = null, Du.call(t))
	}

	function L0(t, e) {
		if(!(e.state.loading & 4)) {
			var l = Ou.get(t);
			if(l) var a = l.get(null);
			else {
				l = new Map, Ou.set(t, l);
				for(var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
					var c = n[u];
					(c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c)
				}
				a && l.set(null, a)
			}
			n = e.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Du.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4
		}
	}
	var xn = {
		$$typeof: Ht,
		Provider: null,
		Consumer: null,
		_currentValue: G,
		_currentValue2: G,
		_threadCount: 0
	};

	function w0(t, e, l, a, n, u, c, i, f) {
		this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.hiddenUpdates = Ju(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = new Map
	}

	function ld(t, e, l, a, n, u, c, i, f, v, y, S) {
		return t = new w0(t, e, l, c, f, v, y, S, i), e = 1, u === !0 && (e |= 24), u = le(3, null, null, e), t.current = u, u.stateNode = t, e = Dc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
			element: a,
			isDehydrated: l,
			cache: e
		}, qc(u), t
	}

	function ad(t) {
		return t ? (t = la, t) : la
	}

	function nd(t, e, l, a, n, u) {
		n = ad(n), a.context === null ? a.context = n : a.pendingContext = n, a = ul(e), a.payload = {
			element: l
		}, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = cl(t, a, e), l !== null && (Wt(l, t, e), ka(l, t, e))
	}

	function ud(t, e) {
		if(t = t.memoizedState, t !== null && t.dehydrated !== null) {
			var l = t.retryLane;
			t.retryLane = l !== 0 && l < e ? l : e
		}
	}

	function Pi(t, e) {
		ud(t, e), (t = t.alternate) && ud(t, e)
	}

	function cd(t) {
		if(t.tag === 13 || t.tag === 31) {
			var e = Ml(t, 67108864);
			e !== null && Wt(e, t, 67108864), Pi(t, 67108864)
		}
	}

	function id(t) {
		if(t.tag === 13 || t.tag === 31) {
			var e = ie();
			e = ku(e);
			var l = Ml(t, e);
			l !== null && Wt(l, t, e), Pi(t, e)
		}
	}
	var Hu = !0;

	function K0(t, e, l, a) {
		var n = g.T;
		g.T = null;
		var u = T.p;
		try {
			T.p = 2, ts(t, e, l, a)
		} finally {
			T.p = u, g.T = n
		}
	}

	function J0(t, e, l, a) {
		var n = g.T;
		g.T = null;
		var u = T.p;
		try {
			T.p = 8, ts(t, e, l, a)
		} finally {
			T.p = u, g.T = n
		}
	}

	function ts(t, e, l, a) {
		if(Hu) {
			var n = es(a);
			if(n === null) Qi(t, e, a, qu, l), fd(t, a);
			else if(W0(n, t, e, l, a)) a.stopPropagation();
			else if(fd(t, a), e & 4 && -1 < k0.indexOf(t)) {
				for(; n !== null;) {
					var u = wl(n);
					if(u !== null) switch(u.tag) {
						case 3:
							if(u = u.stateNode, u.current.memoizedState.isDehydrated) {
								var c = Nl(u.pendingLanes);
								if(c !== 0) {
									var i = u;
									for(i.pendingLanes |= 2, i.entangledLanes |= 2; c;) {
										var f = 1 << 31 - te(c);
										i.entanglements[1] |= f, c &= ~f
									}
									Me(u), (tt & 6) === 0 && (xu = It() + 500, rn(0))
								}
							}
							break;
						case 31:
						case 13:
							i = Ml(u, 2), i !== null && Wt(i, u, 2), gu(), Pi(u, 2)
					}
					if(u = es(a), u === null && Qi(t, e, a, qu, l), u === n) break;
					n = u
				}
				n !== null && a.stopPropagation()
			} else Qi(t, e, a, null, l)
		}
	}

	function es(t) {
		return t = ac(t), ls(t)
	}
	var qu = null;

	function ls(t) {
		if(qu = null, t = Ll(t), t !== null) {
			var e = M(t);
			if(e === null) t = null;
			else {
				var l = e.tag;
				if(l === 13) {
					if(t = R(e), t !== null) return t;
					t = null
				} else if(l === 31) {
					if(t = st(e), t !== null) return t;
					t = null
				} else if(l === 3) {
					if(e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null
				} else e !== t && (t = null)
			}
		}
		return qu = t, null
	}

	function sd(t) {
		switch(t) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch(Ud()) {
					case ms:
						return 2;
					case vs:
						return 8;
					case Nn:
					case Hd:
						return 32;
					case ps:
						return 268435456;
					default:
						return 32
				}
			default:
				return 32
		}
	}
	var as = !1,
		xl = null,
		yl = null,
		gl = null,
		yn = new Map,
		gn = new Map,
		bl = [],
		k0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

	function fd(t, e) {
		switch(t) {
			case "focusin":
			case "focusout":
				xl = null;
				break;
			case "dragenter":
			case "dragleave":
				yl = null;
				break;
			case "mouseover":
			case "mouseout":
				gl = null;
				break;
			case "pointerover":
			case "pointerout":
				yn.delete(e.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				gn.delete(e.pointerId)
		}
	}

	function bn(t, e, l, a, n, u) {
		return t === null || t.nativeEvent !== u ? (t = {
			blockedOn: e,
			domEventName: l,
			eventSystemFlags: a,
			nativeEvent: u,
			targetContainers: [n]
		}, e !== null && (e = wl(e), e !== null && cd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t)
	}

	function W0(t, e, l, a, n) {
		switch(e) {
			case "focusin":
				return xl = bn(xl, t, e, l, a, n), !0;
			case "dragenter":
				return yl = bn(yl, t, e, l, a, n), !0;
			case "mouseover":
				return gl = bn(gl, t, e, l, a, n), !0;
			case "pointerover":
				var u = n.pointerId;
				return yn.set(u, bn(yn.get(u) || null, t, e, l, a, n)), !0;
			case "gotpointercapture":
				return u = n.pointerId, gn.set(u, bn(gn.get(u) || null, t, e, l, a, n)), !0
		}
		return !1
	}

	function od(t) {
		var e = Ll(t.target);
		if(e !== null) {
			var l = M(e);
			if(l !== null) {
				if(e = l.tag, e === 13) {
					if(e = R(l), e !== null) {
						t.blockedOn = e, As(t.priority, function() {
							id(l)
						});
						return
					}
				} else if(e === 31) {
					if(e = st(l), e !== null) {
						t.blockedOn = e, As(t.priority, function() {
							id(l)
						});
						return
					}
				} else if(e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return
				}
			}
		}
		t.blockedOn = null
	}

	function Ru(t) {
		if(t.blockedOn !== null) return !1;
		for(var e = t.targetContainers; 0 < e.length;) {
			var l = es(t.nativeEvent);
			if(l === null) {
				l = t.nativeEvent;
				var a = new l.constructor(l.type, l);
				lc = a, l.target.dispatchEvent(a), lc = null
			} else return e = wl(l), e !== null && cd(e), t.blockedOn = l, !1;
			e.shift()
		}
		return !0
	}

	function rd(t, e, l) {
		Ru(t) && l.delete(e)
	}

	function $0() {
		as = !1, xl !== null && Ru(xl) && (xl = null), yl !== null && Ru(yl) && (yl = null), gl !== null && Ru(gl) && (gl = null), yn.forEach(rd), gn.forEach(rd)
	}

	function Bu(t, e) {
		t.blockedOn === e && (t.blockedOn = null, as || (as = !0, N.unstable_scheduleCallback(N.unstable_NormalPriority, $0)))
	}
	var Yu = null;

	function dd(t) {
		Yu !== t && (Yu = t, N.unstable_scheduleCallback(N.unstable_NormalPriority, function() {
			Yu === t && (Yu = null);
			for(var e = 0; e < t.length; e += 3) {
				var l = t[e],
					a = t[e + 1],
					n = t[e + 2];
				if(typeof a != "function") {
					if(ls(a || l) === null) continue;
					break
				}
				var u = wl(l);
				u !== null && (t.splice(e, 3), e -= 3, ei(u, {
					pending: !0,
					data: n,
					method: l.method,
					action: a
				}, a, n))
			}
		}))
	}

	function Ea(t) {
		function e(f) {
			return Bu(f, t)
		}
		xl !== null && Bu(xl, t), yl !== null && Bu(yl, t), gl !== null && Bu(gl, t), yn.forEach(e), gn.forEach(e);
		for(var l = 0; l < bl.length; l++) {
			var a = bl[l];
			a.blockedOn === t && (a.blockedOn = null)
		}
		for(; 0 < bl.length && (l = bl[0], l.blockedOn === null);) od(l), l.blockedOn === null && bl.shift();
		if(l = (t.ownerDocument || t).$$reactFormReplay, l != null)
			for(a = 0; a < l.length; a += 3) {
				var n = l[a],
					u = l[a + 1],
					c = n[Vt] || null;
				if(typeof u == "function") c || dd(l);
				else if(c) {
					var i = null;
					if(u && u.hasAttribute("formAction")) {
						if(n = u, c = u[Vt] || null) i = c.formAction;
						else if(ls(n) !== null) continue
					} else i = c.action;
					typeof i == "function" ? l[a + 1] = i : (l.splice(a, 3), a -= 3), dd(l)
				}
			}
	}

	function hd() {
		function t(u) {
			u.canIntercept && u.info === "react-transition" && u.intercept({
				handler: function() {
					return new Promise(function(c) {
						return n = c
					})
				},
				focusReset: "manual",
				scroll: "manual"
			})
		}

		function e() {
			n !== null && (n(), n = null), a || setTimeout(l, 20)
		}

		function l() {
			if(!a && !navigation.transition) {
				var u = navigation.currentEntry;
				u && u.url != null && navigation.navigate(u.url, {
					state: u.getState(),
					info: "react-transition",
					history: "replace"
				})
			}
		}
		if(typeof navigation == "object") {
			var a = !1,
				n = null;
			return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100),
				function() {
					a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null)
				}
		}
	}

	function ns(t) {
		this._internalRoot = t
	}
	Gu.prototype.render = ns.prototype.render = function(t) {
		var e = this._internalRoot;
		if(e === null) throw Error(d(409));
		var l = e.current,
			a = ie();
		nd(l, a, t, e, null, null)
	}, Gu.prototype.unmount = ns.prototype.unmount = function() {
		var t = this._internalRoot;
		if(t !== null) {
			this._internalRoot = null;
			var e = t.containerInfo;
			nd(t.current, 2, null, t, null, null), gu(), e[Vl] = null
		}
	};

	function Gu(t) {
		this._internalRoot = t
	}
	Gu.prototype.unstable_scheduleHydration = function(t) {
		if(t) {
			var e = Ss();
			t = {
				blockedOn: null,
				target: t,
				priority: e
			};
			for(var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++);
			bl.splice(l, 0, t), l === 0 && od(t)
		}
	};
	var md = U.version;
	if(md !== "19.2.3") throw Error(d(527, md, "19.2.3"));
	T.findDOMNode = function(t) {
		var e = t._reactInternals;
		if(e === void 0) throw typeof t.render == "function" ? Error(d(188)) : (t = Object.keys(t).join(","), Error(d(268, t)));
		return t = z(e), t = t !== null ? F(t) : null, t = t === null ? null : t.stateNode, t
	};
	var F0 = {
		bundleType: 0,
		version: "19.2.3",
		rendererPackageName: "react-dom",
		currentDispatcherRef: g,
		reconcilerVersion: "19.2.3"
	};
	if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if(!Qu.isDisabled && Qu.supportsFiber) try {
			_a = Qu.inject(F0), Pt = Qu
		} catch {}
	}
	return An.createRoot = function(t, e) {
		if(!j(t)) throw Error(d(299));
		var l = !1,
			a = "",
			n = So,
			u = Ao,
			c = zo;
		return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = ld(t, 1, !1, null, null, l, a, null, n, u, c, hd), t[Vl] = e.current, Gi(t), new ns(e)
	}, An.hydrateRoot = function(t, e, l) {
		if(!j(t)) throw Error(d(299));
		var a = !1,
			n = "",
			u = So,
			c = Ao,
			i = zo,
			f = null;
		return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.formState !== void 0 && (f = l.formState)), e = ld(t, 1, !0, e, l ?? null, a, n, f, u, c, i, hd), e.context = ad(null), l = e.current, a = ie(), a = ku(a), n = ul(a), n.callback = null, cl(l, n, a), l = a, e.current.lanes = l, Ca(e, l), Me(e), t[Vl] = e.current, Gi(t), new Gu(e)
	}, An.version = "19.2.3", An
}
var Nd;

function ih() {
	if(Nd) return is.exports;
	Nd = 1;

	function N() {
		if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)
		} catch (U) {
			console.error(U)
		}
	}
	return N(), is.exports = ch(), is.exports
}
var sh = ih();
const fh = N => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
	oh = N => N.replace(/^([A-Z])|[\s-_]+(\w)/g, (U, E, d) => d ? d.toUpperCase() : E.toLowerCase()),
	jd = N => {
		const U = oh(N);
		return U.charAt(0).toUpperCase() + U.slice(1)
	},
	Ed = (...N) => N.filter((U, E, d) => !!U && U.trim() !== "" && d.indexOf(U) === E).join(" ").trim(),
	rh = N => {
		for(const U in N)
			if(U.startsWith("aria-") || U === "role" || U === "title") return !0
	};
var dh = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
const hh = yt.forwardRef(({
	color: N = "currentColor",
	size: U = 24,
	strokeWidth: E = 2,
	absoluteStrokeWidth: d,
	className: j = "",
	children: M,
	iconNode: R,
	...st
}, H) => yt.createElement("svg", {
	ref: H,
	...dh,
	width: U,
	height: U,
	stroke: N,
	strokeWidth: d ? Number(E) * 24 / Number(U) : E,
	className: Ed("lucide", j),
	...!M && !rh(st) && {
		"aria-hidden": "true"
	},
	...st
}, [...R.map(([z, F]) => yt.createElement(z, F)), ...Array.isArray(M) ? M : [M]]));
const vt = (N, U) => {
	const E = yt.forwardRef(({
		className: d,
		...j
	}, M) => yt.createElement(hh, {
		ref: M,
		iconNode: U,
		className: Ed(`lucide-${fh(jd(N))}`, `lucide-${N}`, d),
		...j
	}));
	return E.displayName = jd(N), E
};
const mh = [
		["path", {
			d: "M5 12h14",
			key: "1ays0h"
		}],
		["path", {
			d: "m12 5 7 7-7 7",
			key: "xquz4c"
		}]
	],
	vh = vt("arrow-right", mh);
const ph = [
		["path", {
			d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
			key: "1yiouv"
		}],
		["circle", {
			cx: "12",
			cy: "8",
			r: "6",
			key: "1vp47v"
		}]
	],
	xh = vt("award", ph);
const yh = [
		["path", {
			d: "M10 12h4",
			key: "a56b0p"
		}],
		["path", {
			d: "M10 8h4",
			key: "1sr2af"
		}],
		["path", {
			d: "M14 21v-3a2 2 0 0 0-4 0v3",
			key: "1rgiei"
		}],
		["path", {
			d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
			key: "secmi2"
		}],
		["path", {
			d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
			key: "16ra0t"
		}]
	],
	gh = vt("building-2", yh);
const bh = [
		["rect", {
			width: "16",
			height: "20",
			x: "4",
			y: "2",
			rx: "2",
			key: "1nb95v"
		}],
		["line", {
			x1: "8",
			x2: "16",
			y1: "6",
			y2: "6",
			key: "x4nwl0"
		}],
		["line", {
			x1: "16",
			x2: "16",
			y1: "14",
			y2: "18",
			key: "wjye3r"
		}],
		["path", {
			d: "M16 10h.01",
			key: "1m94wz"
		}],
		["path", {
			d: "M12 10h.01",
			key: "1nrarc"
		}],
		["path", {
			d: "M8 10h.01",
			key: "19clt8"
		}],
		["path", {
			d: "M12 14h.01",
			key: "1etili"
		}],
		["path", {
			d: "M8 14h.01",
			key: "6423bh"
		}],
		["path", {
			d: "M12 18h.01",
			key: "mhygvu"
		}],
		["path", {
			d: "M8 18h.01",
			key: "lrp35t"
		}]
	],
	Sh = vt("calculator", bh);
const Ah = [
		["path", {
			d: "M8 2v4",
			key: "1cmpym"
		}],
		["path", {
			d: "M16 2v4",
			key: "4m81vk"
		}],
		["rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "4",
			rx: "2",
			key: "1hopcy"
		}],
		["path", {
			d: "M3 10h18",
			key: "8toen8"
		}]
	],
	zh = vt("calendar", Ah);
const Nh = [
		["path", {
			d: "M20 6 9 17l-5-5",
			key: "1gmf2c"
		}]
	],
	Td = vt("check", Nh);
const jh = [
		["rect", {
			width: "8",
			height: "4",
			x: "8",
			y: "2",
			rx: "1",
			ry: "1",
			key: "tgr4d6"
		}],
		["path", {
			d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
			key: "116196"
		}],
		["path", {
			d: "M12 11h4",
			key: "1jrz19"
		}],
		["path", {
			d: "M12 16h4",
			key: "n85exb"
		}],
		["path", {
			d: "M8 11h.01",
			key: "1dfujw"
		}],
		["path", {
			d: "M8 16h.01",
			key: "18s6g9"
		}]
	],
	Eh = vt("clipboard-list", jh);
const Th = [
		["path", {
			d: "M12 6v6l4 2",
			key: "mmk7yg"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}]
	],
	_h = vt("clock", Th);
const Mh = [
		["path", {
			d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
			key: "1jg4f8"
		}]
	],
	Ch = vt("facebook", Mh);
const Dh = [
		["path", {
			d: "m11 17 2 2a1 1 0 1 0 3-3",
			key: "efffak"
		}],
		["path", {
			d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
			key: "9pr0kb"
		}],
		["path", {
			d: "m21 3 1 11h-2",
			key: "1tisrp"
		}],
		["path", {
			d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
			key: "1uvwmv"
		}],
		["path", {
			d: "M3 4h8",
			key: "1ep09j"
		}]
	],
	Oh = vt("handshake", Dh);
const Uh = [
		["path", {
			d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
			key: "mvr1a0"
		}]
	],
	Hh = vt("heart", Uh);
const qh = [
		["rect", {
			width: "20",
			height: "20",
			x: "2",
			y: "2",
			rx: "5",
			ry: "5",
			key: "2e1cvw"
		}],
		["path", {
			d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
			key: "9exkf1"
		}],
		["line", {
			x1: "17.5",
			x2: "17.51",
			y1: "6.5",
			y2: "6.5",
			key: "r4j83e"
		}]
	],
	Rh = vt("instagram", qh);
const Bh = [
		["path", {
			d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
			key: "1r0f0z"
		}],
		["circle", {
			cx: "12",
			cy: "10",
			r: "3",
			key: "ilqhr7"
		}]
	],
	_d = vt("map-pin", Bh);
const Yh = [
		["path", {
			d: "M4 5h16",
			key: "1tepv9"
		}],
		["path", {
			d: "M4 12h16",
			key: "1lakjw"
		}],
		["path", {
			d: "M4 19h16",
			key: "1djgab"
		}]
	],
	Gh = vt("menu", Yh);
const Qh = [
		["rect", {
			width: "20",
			height: "14",
			x: "2",
			y: "3",
			rx: "2",
			key: "48i651"
		}],
		["line", {
			x1: "8",
			x2: "16",
			y1: "21",
			y2: "21",
			key: "1svkeh"
		}],
		["line", {
			x1: "12",
			x2: "12",
			y1: "17",
			y2: "21",
			key: "vw1qmm"
		}]
	],
	Xh = vt("monitor", Qh);
const Zh = [
		["path", {
			d: "M12 3v18",
			key: "108xh3"
		}],
		["path", {
			d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
			key: "zcdpyk"
		}],
		["path", {
			d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
			key: "1yorad"
		}],
		["path", {
			d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
			key: "eua70x"
		}],
		["path", {
			d: "M7 21h10",
			key: "1b0cd5"
		}]
	],
	Md = vt("scale", Zh);
const Vh = [
		["path", {
			d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
			key: "oel41y"
		}]
	],
	Lh = vt("shield", Vh);
const wh = [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "6",
			key: "1vlfrh"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "2",
			key: "1c9p78"
		}]
	],
	Kh = vt("target", wh);
const Jh = [
		["path", {
			d: "M16 7h6v6",
			key: "box55l"
		}],
		["path", {
			d: "m22 7-8.5 8.5-5-5L2 17",
			key: "1t1m79"
		}]
	],
	kh = vt("trending-up", Jh);
const Wh = [
		["path", {
			d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
			key: "1yyitq"
		}],
		["path", {
			d: "M16 3.128a4 4 0 0 1 0 7.744",
			key: "16gr8j"
		}],
		["path", {
			d: "M22 21v-2a4 4 0 0 0-3-3.87",
			key: "kshegd"
		}],
		["circle", {
			cx: "9",
			cy: "7",
			r: "4",
			key: "nufk8"
		}]
	],
	$h = vt("users", Wh);
const Fh = [
		["path", {
			d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
			key: "ftymec"
		}],
		["rect", {
			x: "2",
			y: "6",
			width: "14",
			height: "12",
			rx: "2",
			key: "158x01"
		}]
	],
	Ih = vt("video", Fh);
const Ph = [
		["path", {
			d: "M18 6 6 18",
			key: "1bl5f8"
		}],
		["path", {
			d: "m6 6 12 12",
			key: "d8bk6v"
		}]
	],
	tm = vt("x", Ph);
const em = [
		["path", {
			d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
			key: "1xq2db"
		}]
	],
	lm = vt("zap", em);

function am() {
	const [N, U] = yt.useState(!1), [E, d] = yt.useState(!1);
	yt.useEffect(() => {
		const R = () => {
			U(window.scrollY > 50)
		};
		return window.addEventListener("scroll", R, {
			passive: !0
		}), () => window.removeEventListener("scroll", R)
	}, []);
	const j = [{
			href: "#home",
			label: "Início"
		}, {
			href: "#sobre",
			label: "Sobre"
		}, {
			href: "#servicos",
			label: "Serviços"
		}, {
			href: "#atuacao",
			label: "Atuação"
		}, {
			href: "#equipe",
			label: "Equipe"
		}],
		M = (R, st) => {
			R.preventDefault();
			const H = document.querySelector(st);
			H && (H.scrollIntoView({
				behavior: "smooth",
				block: "start"
			}), d(!1))
		};
	return s.jsx("nav", {
		"code-path": "src/sections/Navbar.tsx:35:5",
		className: `fixed w-full top-0 z-50 transition-all duration-500 ${N?"py-2 glass shadow-lg":"py-4 bg-transparent"}`,
		children: s.jsxs("div", {
			"code-path": "src/sections/Navbar.tsx:42:7",
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [s.jsxs("div", {
				"code-path": "src/sections/Navbar.tsx:43:9",
				className: "flex justify-between items-center",
				children: [s.jsxs("a", {
					"code-path": "src/sections/Navbar.tsx:45:11",
					href: "#home",
					onClick: R => M(R, "#home"),
					className: "flex items-center gap-3 group",
					children: [s.jsx("img", {
						"code-path": "src/sections/Navbar.tsx:50:13",
						src: "images/logo.png",
						alt: "Barroso & Magnum",
						className: "h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
					}), s.jsx("span", {
						"code-path": "src/sections/Navbar.tsx:55:13",
						className: "hidden sm:block font-['Playfair_Display'] text-lg font-bold text-[#C9A961] tracking-wide",
						children: "Barroso & Magnum"
					})]
				}), s.jsx("ul", {
					"code-path": "src/sections/Navbar.tsx:61:11",
					className: "hidden lg:flex items-center gap-8",
					children: j.map(R => s.jsx("li", {
						"code-path": "src/sections/Navbar.tsx:63:15",
						children: s.jsx("a", {
							"code-path": "src/sections/Navbar.tsx:64:17",
							href: R.href,
							onClick: st => M(st, R.href),
							className: "text-white/90 text-sm font-medium uppercase tracking-wider hover:text-[#C9A961] transition-colors duration-300 underline-animation",
							children: R.label
						})
					}, R.href))
				}), s.jsx("a", {
					"code-path": "src/sections/Navbar.tsx:76:11",
					href: "https://wa.me/5564984047829",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "hidden lg:inline-flex items-center px-6 py-2.5 bg-[#C9A961] text-[#0f1419] text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-transparent hover:text-[#C9A961] border-2 border-[#C9A961] transition-all duration-300 btn-glow",
					children: "Consulta"
				}), s.jsx("button", {
					"code-path": "src/sections/Navbar.tsx:86:11",
					onClick: () => d(!E),
					className: "lg:hidden p-2 text-[#C9A961] hover:text-white transition-colors",
					"aria-label": "Toggle menu",
					children: E ? s.jsx(tm, {
						"code-path": "src/sections/Navbar.tsx:91:33",
						size: 28
					}) : s.jsx(Gh, {
						"code-path": "src/sections/Navbar.tsx:91:51",
						size: 28
					})
				})]
			}), s.jsx("div", {
				"code-path": "src/sections/Navbar.tsx:96:9",
				className: `lg:hidden overflow-hidden transition-all duration-500 ${E?"max-h-96 opacity-100 mt-4":"max-h-0 opacity-0"}`,
				children: s.jsxs("ul", {
					"code-path": "src/sections/Navbar.tsx:101:11",
					className: "flex flex-col gap-4 py-4 border-t border-white/10",
					children: [j.map(R => s.jsx("li", {
						"code-path": "src/sections/Navbar.tsx:103:15",
						children: s.jsx("a", {
							"code-path": "src/sections/Navbar.tsx:104:17",
							href: R.href,
							onClick: st => M(st, R.href),
							className: "block text-white/90 text-sm font-medium uppercase tracking-wider hover:text-[#C9A961] transition-colors duration-300 py-2",
							children: R.label
						})
					}, R.href)), s.jsx("li", {
						"code-path": "src/sections/Navbar.tsx:113:13",
						className: "pt-2",
						children: s.jsx("a", {
							"code-path": "src/sections/Navbar.tsx:114:15",
							href: "https://wa.me/5564984047829",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center px-6 py-2.5 bg-[#C9A961] text-[#0f1419] text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-[#E5D5A8] transition-colors duration-300",
							children: "Agende sua Consulta"
						})
					})]
				})
			})]
		})
	})
}

function nm() {
	const N = yt.useRef(null);
	yt.useEffect(() => {
		const E = new IntersectionObserver(j => {
			j.forEach(M => {
				M.isIntersecting && M.target.classList.add("visible")
			})
		}, {
			threshold: .1
		});
		return N.current?.querySelectorAll(".animate-on-scroll")?.forEach(j => E.observe(j)), () => E.disconnect()
	}, []);
	const U = (E, d) => {
		E.preventDefault();
		const j = document.querySelector(d);
		j && j.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	};
	return s.jsxs("section", {
		"code-path": "src/sections/Hero.tsx:34:5",
		id: "home",
		ref: N,
		className: "relative min-h-screen flex items-center overflow-hidden",
		style: {
			background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%)"
		},
		children: [s.jsx("div", {
			"code-path": "src/sections/Hero.tsx:43:7",
			className: "absolute inset-0 grain"
		}), s.jsxs("div", {
			"code-path": "src/sections/Hero.tsx:46:7",
			className: "absolute inset-0 overflow-hidden",
			children: [s.jsx("div", {
				"code-path": "src/sections/Hero.tsx:47:9",
				className: "absolute top-20 left-10 w-72 h-72 bg-[#C9A961]/5 rounded-full blur-3xl animate-pulse"
			}), s.jsx("div", {
				"code-path": "src/sections/Hero.tsx:48:9",
				className: "absolute bottom-20 right-10 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl animate-pulse",
				style: {
					animationDelay: "1s"
				}
			}), s.jsx("div", {
				"code-path": "src/sections/Hero.tsx:49:9",
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A961]/3 rounded-full blur-3xl"
			})]
		}), s.jsxs("div", {
			"code-path": "src/sections/Hero.tsx:53:7",
			className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
			children: [s.jsx("div", {
				"code-path": "src/sections/Hero.tsx:54:9",
				className: "absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9A961]/20 to-transparent"
			}), s.jsx("div", {
				"code-path": "src/sections/Hero.tsx:55:9",
				className: "absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9A961]/20 to-transparent"
			})]
		}), s.jsx("div", {
			"code-path": "src/sections/Hero.tsx:58:7",
			className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32",
			children: s.jsxs("div", {
				"code-path": "src/sections/Hero.tsx:59:9",
				className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
				children: [s.jsxs("div", {
					"code-path": "src/sections/Hero.tsx:61:11",
					className: "text-center lg:text-left",
					children: [s.jsx("div", {
						"code-path": "src/sections/Hero.tsx:62:13",
						className: "animate-on-scroll fade-in",
						children: s.jsxs("span", {
							"code-path": "src/sections/Hero.tsx:63:15",
							className: "inline-flex items-center gap-2 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-6",
							children: [s.jsx(Md, {
								"code-path": "src/sections/Hero.tsx:64:17",
								size: 16
							}), "Excelência em Direito"]
						})
					}), s.jsxs("h1", {
						"code-path": "src/sections/Hero.tsx:69:13",
						className: "animate-on-scroll fade-in stagger-1 font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",
						children: ["Protegendo seus", " ", s.jsx("span", {
							"code-path": "src/sections/Hero.tsx:71:15",
							className: "gold-text",
							children: "direitos"
						}), " ", "trabalhistas e previdenciários"]
					}), s.jsx("p", {
						"code-path": "src/sections/Hero.tsx:75:13",
						className: "animate-on-scroll fade-in stagger-2 text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0",
						children: "Combinamos conhecimento técnico, vasta experiência e tecnologia de ponta para oferecer soluções jurídicas personalizadas em todo o Brasil."
					}), s.jsxs("div", {
						"code-path": "src/sections/Hero.tsx:79:13",
						className: "animate-on-scroll fade-in stagger-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
						children: [s.jsxs("a", {
							"code-path": "src/sections/Hero.tsx:80:15",
							href: "https://wa.me/5564984047829",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A961] text-[#0f1419] font-semibold uppercase tracking-wider rounded-sm hover:bg-transparent hover:text-[#C9A961] border-2 border-[#C9A961] transition-all duration-300 btn-glow",
							children: ["Agende sua Consulta", s.jsx(vh, {
								"code-path": "src/sections/Hero.tsx:87:17",
								size: 18,
								className: "group-hover:translate-x-1 transition-transform"
							})]
						}), s.jsx("a", {
							"code-path": "src/sections/Hero.tsx:89:15",
							href: "#servicos",
							onClick: E => U(E, "#servicos"),
							className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold uppercase tracking-wider rounded-sm hover:text-[#C9A961] border-2 border-white/30 hover:border-[#C9A961] transition-all duration-300",
							children: "Nossos Serviços"
						})]
					}), s.jsx("div", {
						"code-path": "src/sections/Hero.tsx:99:13",
						className: "animate-on-scroll fade-in stagger-4 mt-12 flex flex-wrap gap-6 justify-center lg:justify-start",
						children: s.jsxs("div", {
							"code-path": "src/sections/Hero.tsx:100:15",
							className: "flex items-center gap-3 text-white/60",
							children: [s.jsx("div", {
								"code-path": "src/sections/Hero.tsx:101:17",
								className: "w-10 h-10 rounded-full bg-[#C9A961]/20 flex items-center justify-center",
								children: s.jsx($h, {
									"code-path": "src/sections/Hero.tsx:102:19",
									size: 18,
									className: "text-[#C9A961]"
								})
							}), s.jsx("span", {
								"code-path": "src/sections/Hero.tsx:104:17",
								className: "text-sm",
								children: "12+ Anos de Experiência"
							})]
						})
					})]
				}), s.jsx("div", {
					"code-path": "src/sections/Hero.tsx:110:11",
					className: "animate-on-scroll fade-in-right stagger-2 relative hidden lg:block",
					children: s.jsxs("div", {
						"code-path": "src/sections/Hero.tsx:111:13",
						className: "relative",
						children: [s.jsxs("div", {
							"code-path": "src/sections/Hero.tsx:113:15",
							className: "relative z-10 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-[#C9A961]/30 rounded-lg overflow-hidden",
							children: [s.jsx("div", {
								"code-path": "src/sections/Hero.tsx:114:17",
								className: "aspect-[4/5] flex items-center justify-center p-8",
								children: s.jsx("img", {
									"code-path": "src/sections/Hero.tsx:115:19",
									src: "images/logo.png",
									alt: "Barroso & Magnum Advocacia",
									className: "w-full h-full object-contain opacity-90"
								})
							}), s.jsx("div", {
								"code-path": "src/sections/Hero.tsx:122:17",
								className: "absolute inset-0 shimmer pointer-events-none"
							})]
						}), s.jsx("div", {
							"code-path": "src/sections/Hero.tsx:126:15",
							className: "absolute -top-4 -right-4 w-full h-full border-2 border-[#C9A961]/40 rounded-lg -z-10"
						}), s.jsx("div", {
							"code-path": "src/sections/Hero.tsx:129:15",
							className: "absolute -bottom-6 -left-6 bg-white rounded-lg shadow-2xl p-6 max-w-[280px] border-l-4 border-[#C9A961]",
							children: s.jsxs("div", {
								"code-path": "src/sections/Hero.tsx:130:17",
								className: "flex items-start gap-4",
								children: [s.jsx("div", {
									"code-path": "src/sections/Hero.tsx:131:19",
									className: "w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0",
									children: s.jsx("span", {
										"code-path": "src/sections/Hero.tsx:132:21",
										className: "text-2xl",
										children: "💻"
									})
								}), s.jsxs("div", {
									"code-path": "src/sections/Hero.tsx:134:19",
									children: [s.jsx("h4", {
										"code-path": "src/sections/Hero.tsx:135:21",
										className: "font-['Playfair_Display'] font-semibold text-[#1a1f2e] mb-1",
										children: "Atendimento Virtual"
									}), s.jsx("p", {
										"code-path": "src/sections/Hero.tsx:138:21",
										className: "text-sm text-[#6b7280]",
										children: "Consultas online para todo o Brasil via videoconferência"
									})]
								})]
							})
						}), s.jsx("div", {
							"code-path": "src/sections/Hero.tsx:146:15",
							className: "absolute -top-4 -left-4 bg-[#C9A961] rounded-lg px-4 py-3 shadow-xl",
							children: s.jsxs("div", {
								"code-path": "src/sections/Hero.tsx:147:17",
								className: "text-center",
								children: [s.jsx("span", {
									"code-path": "src/sections/Hero.tsx:148:19",
									className: "block text-2xl font-bold text-[#0f1419]",
									children: "12+"
								}), s.jsx("span", {
									"code-path": "src/sections/Hero.tsx:149:19",
									className: "text-xs font-medium text-[#0f1419]/80 uppercase tracking-wider",
									children: "Anos"
								})]
							})
						})]
					})
				})]
			})
		}), s.jsx("div", {
			"code-path": "src/sections/Hero.tsx:158:7",
			className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#C9A961] to-transparent"
		})]
	})
}

function um({
	icon: N,
	value: U,
	label: E,
	delay: d
}) {
	const [j, M] = yt.useState(!1), R = yt.useRef(null);
	return yt.useEffect(() => {
		const st = new IntersectionObserver(H => {
			H.forEach(z => {
				z.isIntersecting && setTimeout(() => M(!0), d)
			})
		}, {
			threshold: .3
		});
		return R.current && st.observe(R.current), () => st.disconnect()
	}, [d]), s.jsxs("div", {
		"code-path": "src/sections/Stats.tsx:35:5",
		ref: R,
		className: `flex flex-col items-center text-center transition-all duration-700 ${j?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
		children: [s.jsx("div", {
			"code-path": "src/sections/Stats.tsx:41:7",
			className: "w-14 h-14 rounded-full bg-[#0f1419]/10 flex items-center justify-center mb-4",
			children: N
		}), s.jsx("h3", {
			"code-path": "src/sections/Stats.tsx:44:7",
			className: "font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#0f1419] mb-2",
			children: U
		}), s.jsx("p", {
			"code-path": "src/sections/Stats.tsx:47:7",
			className: "text-[#0f1419]/80 font-semibold uppercase tracking-wider text-sm",
			children: E
		})]
	})
}

function cm() {
	const N = [{
		icon: s.jsx(zh, {
			"code-path": "src/sections/Stats.tsx:57:13",
			size: 28,
			className: "text-[#0f1419]"
		}),
		value: "12+",
		label: "Anos de Experiência"
	}, {
		icon: s.jsx(_d, {
			"code-path": "src/sections/Stats.tsx:62:13",
			size: 28,
			className: "text-[#0f1419]"
		}),
		value: "12",
		label: "Estados de Atuação"
	}, {
		icon: s.jsx(xh, {
			"code-path": "src/sections/Stats.tsx:67:13",
			size: 28,
			className: "text-[#0f1419]"
		}),
		value: "100%",
		label: "Comprometimento"
	}, {
		icon: s.jsx(_h, {
			"code-path": "src/sections/Stats.tsx:72:13",
			size: 28,
			className: "text-[#0f1419]"
		}),
		value: "24h",
		label: "Atendimento Online"
	}];
	return s.jsxs("section", {
		"code-path": "src/sections/Stats.tsx:79:5",
		className: "relative py-16 bg-[#C9A961] overflow-hidden",
		children: [s.jsxs("div", {
			"code-path": "src/sections/Stats.tsx:81:7",
			className: "absolute inset-0",
			children: [s.jsx("div", {
				"code-path": "src/sections/Stats.tsx:82:9",
				className: "absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
			}), s.jsx("div", {
				"code-path": "src/sections/Stats.tsx:83:9",
				className: "absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"
			})]
		}), s.jsx("div", {
			"code-path": "src/sections/Stats.tsx:86:7",
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: s.jsx("div", {
				"code-path": "src/sections/Stats.tsx:87:9",
				className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12",
				children: N.map((U, E) => s.jsx(um, {
					"code-path": "src/sections/Stats.tsx:89:13",
					icon: U.icon,
					value: U.value,
					label: U.label,
					delay: E * 150
				}, U.label))
			})
		})]
	})
}

function im() {
	const N = yt.useRef(null);
	yt.useEffect(() => {
		const d = new IntersectionObserver(M => {
			M.forEach(R => {
				R.isIntersecting && R.target.classList.add("visible")
			})
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		return N.current?.querySelectorAll(".animate-on-scroll")?.forEach(M => d.observe(M)), () => d.disconnect()
	}, []);
	const U = ["Atendimento personalizado e humanizado", "Uso de tecnologia de ponta e IA", "Transparência em todos os processos", "Compromisso com resultados", "Atuação presencial e virtual em todo Brasil"],
		E = [{
			icon: s.jsx(Kh, {
				"code-path": "src/sections/About.tsx:35:13",
				size: 24
			}),
			title: "Missão",
			description: "Proteger os direitos de trabalhadores e segurados com uma advocacia técnica, estratégica e humana. Atuamos de forma diligente em cada fase do processo, da análise inicial à defesa em juízo, garantindo que nossos clientes sejam ouvidos, bem assessorados e tenham seus interesses resguardados com ética, transparência e compromisso com resultados. Nosso foco é oferecer soluções jurídicas que promovam justiça e segurança, construindo relações de confiança duradouras."
		}, {
			icon: s.jsx(kh, {
				"code-path": "src/sections/About.tsx:40:13",
				size: 24
			}),
			title: "Visão",
			description: "Ser reconhecida como uma referência regional em defesa trabalhista e previdenciária, destacando-se pela excelência no atendimento, pela profundidade técnica e pela capacidade de transformar desafios legais em conquistas concretas para nossos clientes. Buscamos consolidar nossa atuação como um escritório que combina experiência, inovação e sensibilidade às necessidades sociais, contribuindo para a construção de um sistema jurídico mais acessível e justo."
		}, {
			icon: s.jsx(Hh, {
				"code-path": "src/sections/About.tsx:45:13",
				size: 24
			}),
			title: "Valores",
			description: "Ética e integridade: conduzir cada caso com total transparência e respeito às normas legais e à dignidade humana. Compromisso com o cliente: colocar as necessidades e objetivos de quem nos procura no centro de nossa atuação, com atendimento personalizado e acolhimento profissional. Excelência técnica: aprimorar continuamente nosso conhecimento jurídico para oferecer soluções precisas, eficazes e estrategicamente fundamentadas. Inovação e eficiência: adotar práticas modernas e ágeis que ampliem a capacidade de resposta e o impacto positivo para nossos clientes. Responsabilidade social: promover o acesso à justiça como parte de nossa contribuição à sociedade, defendendo direitos com dedicação e empatia."
		}];
	return s.jsxs("section", {
		"code-path": "src/sections/About.tsx:52:5",
		id: "sobre",
		ref: N,
		className: "py-24 bg-[#f5f3f0] relative overflow-hidden",
		children: [s.jsx("div", {
			"code-path": "src/sections/About.tsx:54:7",
			className: "absolute inset-0 opacity-30",
			children: s.jsx("div", {
				"code-path": "src/sections/About.tsx:55:9",
				className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A961]/5 to-transparent"
			})
		}), s.jsxs("div", {
			"code-path": "src/sections/About.tsx:58:7",
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [s.jsxs("div", {
				"code-path": "src/sections/About.tsx:60:9",
				className: "animate-on-scroll fade-in text-center mb-16",
				children: [s.jsx("span", {
					"code-path": "src/sections/About.tsx:61:11",
					className: "inline-block text-[#C9A961] text-sm font-semibold uppercase tracking-wider mb-4",
					children: "Quem Somos"
				}), s.jsx("h2", {
					"code-path": "src/sections/About.tsx:64:11",
					className: "font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#1a1f2e] mb-6",
					children: "Sobre Nós"
				}), s.jsx("div", {
					"code-path": "src/sections/About.tsx:67:11",
					className: "w-24 h-1 bg-[#C9A961] mx-auto mb-6"
				}), s.jsx("p", {
					"code-path": "src/sections/About.tsx:68:11",
					className: "text-lg text-[#6b7280] max-w-2xl mx-auto",
					children: "Conheça a história e os valores que nos tornam referência em advocacia trabalhista e previdenciária"
				})]
			}), s.jsxs("div", {
				"code-path": "src/sections/About.tsx:74:9",
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20",
				children: [s.jsx("div", {
					"code-path": "src/sections/About.tsx:76:11",
					className: "animate-on-scroll fade-in-left relative",
					children: s.jsxs("div", {
						"code-path": "src/sections/About.tsx:77:13",
						className: "relative",
						children: [s.jsxs("div", {
							"code-path": "src/sections/About.tsx:79:15",
							className: "relative bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-lg overflow-hidden shadow-2xl",
							children: [s.jsx("div", {
								"code-path": "src/sections/About.tsx:80:17",
								className: "aspect-[4/3] flex items-center justify-center p-8",
								children: s.jsx("img", {
									"code-path": "src/sections/About.tsx:81:19",
									src: "images/logo.png",
									alt: "Barroso & Magnum",
									className: "w-full h-full object-contain opacity-90"
								})
							}), s.jsx("div", {
								"code-path": "src/sections/About.tsx:88:17",
								className: "absolute inset-0 opacity-10",
								children: s.jsx("div", {
									"code-path": "src/sections/About.tsx:89:19",
									className: "absolute inset-0",
									style: {
										backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(201, 169, 97, 0.1) 10px,
                      rgba(201, 169, 97, 0.1) 20px
                    )`
									}
								})
							})]
						}), s.jsxs("div", {
							"code-path": "src/sections/About.tsx:102:15",
							className: "absolute -bottom-8 -right-8 bg-[#C9A961] rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-xl",
							children: [s.jsx("span", {
								"code-path": "src/sections/About.tsx:103:17",
								className: "text-5xl font-bold text-[#0f1419]",
								children: "12"
							}), s.jsxs("span", {
								"code-path": "src/sections/About.tsx:104:17",
								className: "text-sm font-semibold text-[#0f1419]/80 uppercase tracking-wider text-center leading-tight mt-1",
								children: ["Anos de", s.jsx("br", {
									"code-path": "src/sections/About.tsx:105:26"
								}), "Excelência"]
							})]
						}), s.jsx("div", {
							"code-path": "src/sections/About.tsx:110:15",
							className: "absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A961]/30 rounded-lg -z-10"
						})]
					})
				}), s.jsxs("div", {
					"code-path": "src/sections/About.tsx:115:11",
					className: "animate-on-scroll fade-in-right",
					children: [s.jsx("h3", {
						"code-path": "src/sections/About.tsx:116:13",
						className: "font-['Playfair_Display'] text-3xl font-bold text-[#1a1f2e] mb-6",
						children: "Tradição e Inovação em Advocacia"
					}), s.jsxs("div", {
						"code-path": "src/sections/About.tsx:120:13",
						className: "space-y-4 text-[#6b7280] leading-relaxed mb-8",
						children: [s.jsxs("p", {
							{
	"code-path": "src/sections/About.tsx:121:15",
	children: ["Fundado em 2013 em Quirinópolis, Goiás, o escritório ", s.jsx("strong", {
		"code-path": "src/sections/About.tsx:122:70",
		className: "text-[#1a1f2e]",
		children: "Barroso & Magnum"
	}), " nasceu da união de profissionais apaixonados pelo Direito Laboral e Previdenciário."]
}), s.jsxs("p", {
	className: "text-justify",
	"code-path": "src/sections/About.tsx:124:15",
	children: ["Em 2024, expandimos nossa atuação para ", s.jsx("strong", {
		"code-path": "src/sections/About.tsx:125:56",
		className: "text-[#1a1f2e]",
		children: "12 estados da federação"
	}), ", sempre mantendo o compromisso com a excelência técnica, a postura ética e o uso da inteligência artificial para otimizar nossos serviços."]
}), s.jsx("p", {
	className: "text-justify",
	"code-path": "src/sections/About.tsx:127:15",
	children: "Nossa equipe é composta por profissionais altamente qualificados, dedicados a oferecer um atendimento personalizado, seja presencial ou virtual, com total profissionalismo, transparência e eficiência."
})]
					}), s.jsx("ul", {
						"code-path": "src/sections/About.tsx:133:13",
						className: "space-y-3 mb-8",
						children: U.map((d, j) => s.jsxs("li", {
							"code-path": "src/sections/About.tsx:135:17",
							className: "flex items-center gap-3 text-[#1a1f2e] font-medium",
							children: [s.jsx("span", {
								"code-path": "src/sections/About.tsx:139:19",
								className: "w-6 h-6 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0",
								children: s.jsx(Td, {
									"code-path": "src/sections/About.tsx:140:21",
									size: 14,
									className: "text-[#C9A961]"
								})
							}), d]
						}, j))
					}), s.jsxs("a", {
						"code-path": "src/sections/About.tsx:148:13",
						href: "#equipe",
						onClick: d => {
							d.preventDefault(), document.querySelector("#equipe")?.scrollIntoView({
								behavior: "smooth"
							})
						},
						className: "inline-flex items-center gap-2 text-[#C9A961] font-semibold hover:text-[#A68B4B] transition-colors underline-animation",
						children: ["Conheça nossa equipe", s.jsx("span", {
							"code-path": "src/sections/About.tsx:157:15",
							children: "→"
						})]
					})]
				})]
			}), s.jsx("div", {
				"code-path": "src/sections/About.tsx:163:9",
				className: "grid md:grid-cols-3 gap-8",
				children: E.map((d, j) => s.jsxs("div", {
					"code-path": "src/sections/About.tsx:165:13",
					className: `animate-on-scroll fade-in stagger-${j+1} bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#C9A961]`,
					children: [s.jsx("div", {
						"code-path": "src/sections/About.tsx:169:15",
						className: "w-14 h-14 rounded-full bg-[#C9A961]/20 flex items-center justify-center text-[#C9A961] mb-6",
						children: d.icon
					}), s.jsx("h4", {
						"code-path": "src/sections/About.tsx:172:15",
						className: "font-['Playfair_Display'] text-xl font-bold text-[#1a1f2e] mb-3",
						children: d.title
					}), s.jsx("p", {
						"code-path": "src/sections/About.tsx:175:15",
						className: "text-[#6b7280] leading-relaxed text-sm",
						children: d.description
					})]
				}, d.title))
			})]
		})]
	})
}

function sm() {
	const N = yt.useRef(null);
	yt.useEffect(() => {
		const E = new IntersectionObserver(j => {
			j.forEach(M => {
				M.isIntersecting && M.target.classList.add("visible")
			})
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		return N.current?.querySelectorAll(".animate-on-scroll")?.forEach(j => E.observe(j)), () => E.disconnect()
	}, []);
	const U = [{
		icon: s.jsx(Md, {
			"code-path": "src/sections/Services.tsx:34:13",
			size: 40
		}),
		title: "Direito do Trabalho",
		description: "Defesa dos direitos trabalhistas dos trabalhadores, reclamações trabalhistas, rescisão de contrato, horas extras, insalubridade e periculosidade.",
		color: "from-blue-500/20 to-blue-600/10"
	}, {
		icon: s.jsx(Lh, {
			"code-path": "src/sections/Services.tsx:40:13",
			size: 40
		}),
		title: "Direito Previdenciário",
		description: "Aposentadorias, benefícios por incapacidade, pensão por morte, auxílio-doença e revisão de benefícios indevidamente cessados.",
		color: "from-green-500/20 to-green-600/10"
	}, {
		icon: s.jsx(Eh, {
			"code-path": "src/sections/Services.tsx:46:13",
			size: 40
		}),
		title: "Consultoria Empresarial",
		description: "Assessoria preventiva para empresas, compliance trabalhista, auditoria de processos e adequação à legislação vigente.",
		color: "from-purple-500/20 to-purple-600/10"
	}, {
		icon: s.jsx(Oh, {
			"code-path": "src/sections/Services.tsx:52:13",
			size: 40
		}),
		title: "Demais Áreas do Direito",
		description: "Atuação em diversas áreas do direito com profissionais qualificados para cada especialidade, garantindo assessoria jurídica completa e especializada.",
		color: "from-orange-500/20 to-orange-600/10"
	}, {
		icon: s.jsx(Sh, {
			"code-path": "src/sections/Services.tsx:58:13",
			size: 40
		}),
		title: "Planejamento Previdenciário",
		description: "Análise de tempo de contribuição, simulação de aposentadorias e estratégias para maximização de benefícios.",
		color: "from-teal-500/20 to-teal-600/10"
	}, {
		icon: s.jsx(lm, {
			"code-path": "src/sections/Services.tsx:64:13",
			size: 40
		}),
		title: "Atendimento de Urgência",
		description: "Assistência imediata em casos de acidente do trabalho, doença ocupacional e cessação indevida de benefícios.",
		color: "from-red-500/20 to-red-600/10"
	}];
	return s.jsxs("section", {
		"code-path": "src/sections/Services.tsx:72:5",
		id: "servicos",
		ref: N,
		className: "py-24 bg-white relative overflow-hidden",
		children: [s.jsxs("div", {
			"code-path": "src/sections/Services.tsx:74:7",
			className: "absolute inset-0",
			children: [s.jsx("div", {
				"code-path": "src/sections/Services.tsx:75:9",
				className: "absolute top-0 left-1/4 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl"
			}), s.jsx("div", {
				"code-path": "src/sections/Services.tsx:76:9",
				className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl"
			})]
		}), s.jsxs("div", {
			"code-path": "src/sections/Services.tsx:79:7",
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [s.jsxs("div", {
				"code-path": "src/sections/Services.tsx:81:9",
				className: "animate-on-scroll fade-in text-center mb-16",
				children: [s.jsx("span", {
					"code-path": "src/sections/Services.tsx:82:11",
					className: "inline-block text-[#C9A961] text-sm font-semibold uppercase tracking-wider mb-4",
					children: "Nossas Especialidades"
				}), s.jsx("h2", {
					"code-path": "src/sections/Services.tsx:85:11",
					className: "font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#1a1f2e] mb-6",
					children: "Áreas de Atuação"
				}), s.jsx("div", {
					"code-path": "src/sections/Services.tsx:88:11",
					className: "w-24 h-1 bg-[#C9A961] mx-auto mb-6"
				}), s.jsx("p", {
					"code-path": "src/sections/Services.tsx:89:11",
					className: "text-lg text-[#6b7280] max-w-2xl mx-auto",
					children: "Especialistas em proteger seus direitos nas esferas trabalhista e previdenciária"
				})]
			}), s.jsx("div", {
				"code-path": "src/sections/Services.tsx:95:9",
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: U.map((E, d) => s.jsxs("div", {
					"code-path": "src/sections/Services.tsx:97:13",
					className: `animate-on-scroll fade-in stagger-${d+1} group relative bg-[#f5f3f0] rounded-lg p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`,
					children: [s.jsx("div", {
						"code-path": "src/sections/Services.tsx:102:15",
						className: "absolute inset-0 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
					}), s.jsxs("div", {
						"code-path": "src/sections/Services.tsx:105:15",
						className: "relative z-10",
						children: [s.jsx("div", {
							"code-path": "src/sections/Services.tsx:107:17",
							className: `w-16 h-16 rounded-lg bg-gradient-to-br ${E.color} flex items-center justify-center text-[#C9A961] mb-6 group-hover:text-[#C9A961] transition-colors duration-500`,
							children: E.icon
						}), s.jsx("h3", {
							"code-path": "src/sections/Services.tsx:112:17",
							className: "font-['Playfair_Display'] text-xl font-bold text-[#1a1f2e] mb-4 group-hover:text-white transition-colors duration-500",
							children: E.title
						}), s.jsx("p", {
							"code-path": "src/sections/Services.tsx:117:17",
							className: "text-[#6b7280] leading-relaxed group-hover:text-white/80 transition-colors duration-500",
							children: E.description
						}), s.jsx("div", {
							"code-path": "src/sections/Services.tsx:122:17",
							className: "mt-6 pt-6 border-t border-[#1a1f2e]/10 group-hover:border-white/20 transition-colors duration-500",
							children: s.jsxs("a", {
								"code-path": "src/sections/Services.tsx:123:19",
								href: "https://wa.me/5564984047829",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 text-[#C9A961] font-semibold text-sm group-hover:text-[#E5D5A8] transition-colors",
								children: ["Saiba mais", s.jsx("span", {
									"code-path": "src/sections/Services.tsx:130:21",
									className: "group-hover:translate-x-1 transition-transform",
									children: "→"
								})]
							})
						})]
					}), s.jsx("div", {
						"code-path": "src/sections/Services.tsx:136:15",
						className: "absolute bottom-0 left-0 w-full h-1 bg-[#C9A961] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
					})]
				}, E.title))
			}), s.jsx("div", {
				"code-path": "src/sections/Services.tsx:142:9",
				className: "animate-on-scroll fade-in stagger-6 mt-16 text-center",
				children: s.jsxs("div", {
					"code-path": "src/sections/Services.tsx:143:11",
					className: "bg-gradient-to-r from-[#1a1f2e] to-[#0f1419] rounded-lg p-8 sm:p-12 relative overflow-hidden",
					children: [s.jsx("div", {
						"code-path": "src/sections/Services.tsx:145:13",
						className: "absolute inset-0 opacity-10",
						children: s.jsx("div", {
							"code-path": "src/sections/Services.tsx:146:15",
							className: "absolute inset-0",
							style: {
								backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201, 169, 97, 0.3) 1px, transparent 0)"
							}
						})
					}), s.jsxs("div", {
						"code-path": "src/sections/Services.tsx:151:13",
						className: "relative z-10",
						children: [s.jsx("h3", {
							"code-path": "src/sections/Services.tsx:152:15",
							className: "font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-white mb-4",
							children: "Precisa de ajuda com seu caso?"
						}), s.jsx("p", {
							"code-path": "src/sections/Services.tsx:155:15",
							className: "text-white/70 mb-8 max-w-xl mx-auto",
							children: "Entre em contato conosco para uma consulta inicial gratuita e descubra como podemos ajudar você."
						}), s.jsxs("a", {
							"code-path": "src/sections/Services.tsx:158:15",
							href: "https://wa.me/5564984047829",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-[#0f1419] font-semibold uppercase tracking-wider rounded-sm hover:bg-[#E5D5A8] transition-colors duration-300",
							children: ["Agende sua Consulta", s.jsx("span", {
								"code-path": "src/sections/Services.tsx:165:17",
								children: "→"
							})]
						})]
					})]
				})
			})]
		})]
	})
}

function fm() {
	const N = yt.useRef(null);
	yt.useEffect(() => {
		const d = new IntersectionObserver(M => {
			M.forEach(R => {
				R.isIntersecting && R.target.classList.add("visible")
			})
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		return N.current?.querySelectorAll(".animate-on-scroll")?.forEach(M => d.observe(M)), () => d.disconnect()
	}, []);
	const U = [{
			icon: s.jsx(gh, {
				"code-path": "src/sections/Coverage.tsx:27:13",
				size: 24
			}),
			title: "Atendimento Presencial",
			description: "Disponível em Goiás"
		}, {
			icon: s.jsx(Xh, {
				"code-path": "src/sections/Coverage.tsx:32:13",
				size: 24
			}),
			title: "Atendimento Virtual",
			description: "Para todo o Brasil"
		}, {
			icon: s.jsx(Ih, {
				"code-path": "src/sections/Coverage.tsx:37:13",
				size: 24
			}),
			title: "Videoconferência",
			description: "Consultas remotas"
		}],
		E = ["Goiás", "São Paulo", "Minas Gerais", "Rio de Janeiro", "Bahia", "Distrito Federal", "Mato Grosso", "Mato Grosso do Sul", "Paraná", "Santa Catarina", "Rio Grande do Sul", "Espírito Santo"];
	return s.jsxs("section", {
		"code-path": "src/sections/Coverage.tsx:50:5",
		id: "atuacao",
		ref: N,
		className: "py-24 bg-[#1a1f2e] relative overflow-hidden",
		children: [s.jsxs("div", {
			"code-path": "src/sections/Coverage.tsx:52:7",
			className: "absolute inset-0",
			children: [s.jsx("div", {
				"code-path": "src/sections/Coverage.tsx:53:9",
				className: "absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#C9A961]/5 rounded-full blur-3xl"
			}), s.jsx("div", {
				"code-path": "src/sections/Coverage.tsx:54:9",
				className: "absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#C9A961]/5 rounded-full blur-3xl"
			})]
		}), s.jsx("div", {
			"code-path": "src/sections/Coverage.tsx:58:7",
			className: "absolute inset-0 opacity-5",
			children: s.jsx("div", {
				"code-path": "src/sections/Coverage.tsx:59:9",
				className: "absolute inset-0",
				style: {
					backgroundImage: `linear-gradient(rgba(201, 169, 97, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 169, 97, 0.3) 1px, transparent 1px)`,
					backgroundSize: "50px 50px"
				}
			})
		}), s.jsx("div", {
			"code-path": "src/sections/Coverage.tsx:66:7",
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: s.jsxs("div", {
				"code-path": "src/sections/Coverage.tsx:67:9",
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [s.jsxs("div", {
					"code-path": "src/sections/Coverage.tsx:69:11",
					className: "animate-on-scroll fade-in-left",
					children: [s.jsx("span", {
						"code-path": "src/sections/Coverage.tsx:70:13",
						className: "inline-block text-[#C9A961] text-sm font-semibold uppercase tracking-wider mb-4",
						children: "Onde Atuamos"
					}), s.jsxs("h2", {
						"code-path": "src/sections/Coverage.tsx:73:13",
						className: "font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-white mb-6",
						children: ["Atuação ", s.jsx("span", {
							"code-path": "src/sections/Coverage.tsx:74:23",
							className: "gold-text",
							children: "Nacional"
						})]
					}), s.jsx("div", {
						"code-path": "src/sections/Coverage.tsx:76:13",
						className: "w-24 h-1 bg-[#C9A961] mb-8"
					}), s.jsxs("div", {
						"code-path": "src/sections/Coverage.tsx:78:13",
						className: "space-y-4 text-white/70 leading-relaxed mb-10",
						children: [s.jsxs("p", {
							"code-path": "src/sections/Coverage.tsx:79:15",
							children: ["Embora nossa sede esteja em ", s.jsx("strong", {
								"code-path": "src/sections/Coverage.tsx:80:45",
								className: "text-white",
								children: "Quirinópolis, Goiás"
							}), ", atuamos em ", s.jsx("strong", {
								"code-path": "src/sections/Coverage.tsx:80:117",
								className: "text-white",
								children: "12 estados da federação"
							}), ", oferecendo atendimento presencial e virtual para todo o Brasil."]
						}), s.jsx("p", {
							"code-path": "src/sections/Coverage.tsx:82:15",
							children: "Nossa estrutura tecnológica permite acompanhar processos em qualquer comarca do país, garantindo acesso à justiça independente da localização do cliente."
						})]
					}), s.jsx("div", {
						"code-path": "src/sections/Coverage.tsx:88:13",
						className: "grid sm:grid-cols-2 gap-6",
						children: U.map((d, j) => s.jsxs("div", {
							"code-path": "src/sections/Coverage.tsx:90:17",
							className: `animate-on-scroll fade-in stagger-${j+1} flex items-start gap-4`,
							children: [s.jsx("div", {
								"code-path": "src/sections/Coverage.tsx:94:19",
								className: "w-12 h-12 rounded-full bg-[#C9A961]/20 flex items-center justify-center text-[#C9A961] flex-shrink-0",
								children: d.icon
							}), s.jsxs("div", {
								"code-path": "src/sections/Coverage.tsx:97:19",
								children: [s.jsx("h4", {
									"code-path": "src/sections/Coverage.tsx:98:21",
									className: "font-semibold text-white mb-1",
									children: d.title
								}), s.jsx("p", {
									"code-path": "src/sections/Coverage.tsx:99:21",
									className: "text-sm text-white/60",
									children: d.description
								})]
							})]
						}, d.title))
					})]
				}), s.jsx("div", {
					"code-path": "src/sections/Coverage.tsx:107:11",
					className: "animate-on-scroll fade-in-right",
					children: s.jsxs("div", {
						"code-path": "src/sections/Coverage.tsx:108:13",
						className: "bg-white/5 backdrop-blur-sm border border-[#C9A961]/30 rounded-lg p-8",
						children: [s.jsxs("div", {
							"code-path": "src/sections/Coverage.tsx:110:15",
							className: "relative bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/5 rounded-lg p-8 mb-8 text-center",
							children: [s.jsx("div", {
								"code-path": "src/sections/Coverage.tsx:111:17",
								className: "flex items-center justify-center gap-4 mb-4",
								children: s.jsx(_d, {
									"code-path": "src/sections/Coverage.tsx:112:19",
									size: 48,
									className: "text-[#C9A961]"
								})
							}), s.jsx("h3", {
								"code-path": "src/sections/Coverage.tsx:114:17",
								className: "font-['Playfair_Display'] text-2xl font-bold text-[#C9A961] mb-2",
								children: "Brasil"
							}), s.jsx("p", {
								"code-path": "src/sections/Coverage.tsx:117:17",
								className: "text-white/60 text-sm",
								children: "Atuação em 12 estados + Distrito Federal"
							}), s.jsx("div", {
								"code-path": "src/sections/Coverage.tsx:122:17",
								className: "absolute top-4 left-4 w-2 h-2 rounded-full bg-[#C9A961]/50"
							}), s.jsx("div", {
								"code-path": "src/sections/Coverage.tsx:123:17",
								className: "absolute top-8 right-8 w-3 h-3 rounded-full bg-[#C9A961]/30"
							}), s.jsx("div", {
								"code-path": "src/sections/Coverage.tsx:124:17",
								className: "absolute bottom-6 left-8 w-2 h-2 rounded-full bg-[#C9A961]/40"
							})]
						}), s.jsx("h4", {
							"code-path": "src/sections/Coverage.tsx:128:15",
							className: "font-['Playfair_Display'] text-lg font-semibold text-[#C9A961] mb-4 text-center",
							children: "Estados de Atuação"
						}), s.jsx("div", {
							"code-path": "src/sections/Coverage.tsx:131:15",
							className: "flex flex-wrap gap-2 justify-center",
							children: E.map(d => s.jsxs("span", {
								"code-path": "src/sections/Coverage.tsx:133:19",
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A961]/20 text-[#C9A961] rounded-full text-sm font-medium hover:bg-[#C9A961]/30 transition-colors cursor-default",
								children: [s.jsx(Td, {
									"code-path": "src/sections/Coverage.tsx:137:21",
									size: 12
								}), d]
							}, d))
						}), s.jsxs("div", {
							"code-path": "src/sections/Coverage.tsx:144:15",
							className: "mt-8 pt-6 border-t border-white/10 text-center",
							children: [s.jsx("p", {
								"code-path": "src/sections/Coverage.tsx:145:17",
								className: "text-white/60 text-sm mb-4",
								children: "Não está no seu estado? Atendemos virtualmente em todo o Brasil!"
							}), s.jsxs("a", {
								"code-path": "src/sections/Coverage.tsx:148:17",
								href: "https://wa.me/5564984047829",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 px-6 py-3 bg-[#C9A961] text-[#0f1419] font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#E5D5A8] transition-colors",
								children: ["Consulta Virtual", s.jsx("span", {
									"code-path": "src/sections/Coverage.tsx:155:19",
									children: "→"
								})]
							})]
						})]
					})
				})]
			})
		})]
	})
}

function om() {
	const N = yt.useRef(null);
	yt.useEffect(() => {
		const E = new IntersectionObserver(j => {
			j.forEach(M => {
				M.isIntersecting && M.target.classList.add("visible")
			})
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		return N.current?.querySelectorAll(".animate-on-scroll")?.forEach(j => E.observe(j)), () => E.disconnect()
	}, []);
	const U = [{
		name: "Carlos Magnum Inácio Pontes",
		role: "Advogado Sócio",
		image: "images/dr-carlos.jpg",
		whatsapp: "5564984047829",
		description: "Especialista em Direito do Trabalho e Previdenciário com vasta experiência em causas complexas."
	}, {
		name: "Joice Elizabeth da Mota Barroso",
		role: "Advogada Sócia",
		image: "images/dra-joice.png",
		whatsapp: "5564984161950",
		description: "Especialista em Direito Previdenciário e Trabalhista, dedicada à defesa dos direitos dos trabalhadores."
	}];
	return s.jsxs("section", {
		"code-path": "src/sections/Team.tsx:42:5",
		id: "equipe",
		ref: N,
		className: "py-24 bg-[#f5f3f0] relative overflow-hidden",
		children: [s.jsxs("div", {
			"code-path": "src/sections/Team.tsx:44:7",
			className: "absolute inset-0",
			children: [s.jsx("div", {
				"code-path": "src/sections/Team.tsx:45:9",
				className: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A961]/5 to-transparent"
			}), s.jsx("div", {
				"code-path": "src/sections/Team.tsx:46:9",
				className: "absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#C9A961]/5 to-transparent"
			})]
		}), s.jsxs("div", {
			"code-path": "src/sections/Team.tsx:49:7",
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [s.jsxs("div", {
				"code-path": "src/sections/Team.tsx:51:9",
				className: "animate-on-scroll fade-in text-center mb-16",
				children: [s.jsx("span", {
					"code-path": "src/sections/Team.tsx:52:11",
					className: "inline-block text-[#C9A961] text-sm font-semibold uppercase tracking-wider mb-4",
					children: "Nossos Profissionais"
				}), s.jsx("h2", {
					"code-path": "src/sections/Team.tsx:55:11",
					className: "font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#1a1f2e] mb-6",
					children: "Nossa Equipe"
				}), s.jsx("div", {
					"code-path": "src/sections/Team.tsx:58:11",
					className: "w-24 h-1 bg-[#C9A961] mx-auto mb-6"
				}), s.jsx("p", {
					"code-path": "src/sections/Team.tsx:59:11",
					className: "text-lg text-[#6b7280] max-w-2xl mx-auto",
					children: "Profissionais dedicados e altamente qualificados para defender seus direitos"
				})]
			}), s.jsx("div", {
				"code-path": "src/sections/Team.tsx:65:9",
				className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",
				children: U.map((E, d) => s.jsx("div", {
					"code-path": "src/sections/Team.tsx:67:13",
					className: `animate-on-scroll fade-in stagger-${d+1} group`,
					children: s.jsxs("div", {
						"code-path": "src/sections/Team.tsx:71:15",
						className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-lift",
						children: [s.jsxs("div", {
							"code-path": "src/sections/Team.tsx:73:17",
							className: "relative h-80 overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#0f1419]",
							children: [s.jsx("img", {
								"code-path": "src/sections/Team.tsx:74:19",
								src: E.image,
								alt: E.name,
								className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
							}), s.jsx("div", {
								"code-path": "src/sections/Team.tsx:81:19",
								className: "absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"
							}), s.jsx("div", {
								"code-path": "src/sections/Team.tsx:84:19",
								className: "absolute bottom-4 left-4",
								children: s.jsx("span", {
									"code-path": "src/sections/Team.tsx:85:21",
									className: "px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1a1f2e] text-sm font-semibold rounded-full",
									children: E.role
								})
							})]
						}), s.jsxs("div", {
							"code-path": "src/sections/Team.tsx:92:17",
							className: "p-6",
							children: [s.jsx("h3", {
								"code-path": "src/sections/Team.tsx:93:19",
								className: "font-['Playfair_Display'] text-xl font-bold text-[#1a1f2e] mb-2",
								children: E.name
							}), s.jsx("p", {
								"code-path": "src/sections/Team.tsx:96:19",
								className: "text-[#6b7280] text-sm leading-relaxed mb-4",
								children: E.description
							}), s.jsxs("div", {
								"code-path": "src/sections/Team.tsx:101:19",
								className: "flex items-center gap-3 pt-4 border-t border-[#f5f3f0]",
								children: [s.jsx("a", {
									"code-path": "src/sections/Team.tsx:102:21",
									href: `https://wa.me/${E.whatsapp}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#128C7E] transition-all duration-300",
									"aria-label": "WhatsApp",
									children: s.jsx("svg", {
										"code-path": "src/sections/Team.tsx:109:23",
										xmlns: "http://www.w3.org/2000/svg",
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: s.jsx("path", {
											"code-path": "src/sections/Team.tsx:110:25",
											d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
										})
									})
								}), s.jsx("span", {
									"code-path": "src/sections/Team.tsx:113:21",
									className: "text-sm text-[#6b7280] hover:underline cursor-pointer",
									onClick: () => {
  const escolha = window
    .prompt("Digite:\n1 para Dr. Carlos Magnum\n2 para Dra. Joice Elizabeth")
    ?.trim();

  let numero = "";

  if (escolha === "1") {
    numero = "5564984047829";
  } else if (escolha === "2") {
    numero = "5564984161950";
  } else {
    return;
  }

  window.location.href = `https://wa.me/${numero}`;
},
									children: "Fale no WhatsApp"
								})]
							})]
						})]
					})
				}, E.name))
			}), s.jsx("div", {
				"code-path": "src/sections/Team.tsx:122:9",
				className: "animate-on-scroll fade-in stagger-4 mt-16 text-center",
				children: s.jsx("div", {
					"code-path": "src/sections/Team.tsx:123:11",
					className: "inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg",
					children: s.jsxs("div", {
						"code-path": "src/sections/Team.tsx:124:13",
						className: "flex items-center gap-2",
						children: [s.jsx("span", {
							"code-path": "src/sections/Team.tsx:125:15",
							className: "text-2xl font-bold text-[#C9A961]",
							children: "12+"
						}), s.jsx("span", {
							"code-path": "src/sections/Team.tsx:126:15",
							className: "text-sm text-[#6b7280]",
							children: "Anos de Experiência"
						})]
					})
				})
			})]
		})]
	})
}

function rm() {
	const N = new Date().getFullYear(),
		U = [{
			href: "#home",
			label: "Início"
		}, {
			href: "#sobre",
			label: "Sobre Nós"
		}, {
			href: "#servicos",
			label: "Serviços"
		}, {
			href: "#equipe",
			label: "Equipe"
		}],
		E = [{
			href: "#servicos",
			label: "Direito do Trabalho"
		}, {
			href: "#servicos",
			label: "Direito Previdenciário"
		}, {
			href: "#servicos",
			label: "Consultoria Empresarial"
		}, {
			href: "#atuacao",
			label: "Atendimento Virtual"
		}],
		d = (j, M) => {
			j.preventDefault();
			const R = document.querySelector(M);
			R && R.scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		};
	return s.jsxs("footer", {
		"code-path": "src/sections/Footer.tsx:29:5",
		className: "bg-[#0f1419] text-white relative overflow-hidden",
		children: [s.jsx("div", {
			"code-path": "src/sections/Footer.tsx:31:7",
			className: "absolute inset-0 opacity-5",
			children: s.jsx("div", {
				"code-path": "src/sections/Footer.tsx:32:9",
				className: "absolute inset-0",
				style: {
					backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201, 169, 97, 0.3) 1px, transparent 0)"
				}
			})
		}), s.jsxs("div", {
			"code-path": "src/sections/Footer.tsx:37:7",
			className: "relative z-10",
			children: [s.jsx("div", {
				"code-path": "src/sections/Footer.tsx:39:9",
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
				children: s.jsxs("div", {
					"code-path": "src/sections/Footer.tsx:40:11",
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8",
					children: [s.jsxs("div", {
						"code-path": "src/sections/Footer.tsx:42:13",
						className: "lg:col-span-1",
						children: [s.jsx("div", {
							"code-path": "src/sections/Footer.tsx:43:15",
							className: "flex items-center gap-3 mb-6",
							children: s.jsx("img", {
								"code-path": "src/sections/Footer.tsx:44:17",
								src: "images/logo.png",
								alt: "Barroso & Magnum",
								className: "h-12 w-auto object-contain"
							})
						}), s.jsx("p", {
							"code-path": "src/sections/Footer.tsx:50:15",
							className: "text-white/70 leading-relaxed mb-6 text-sm",
							children: "Excelência em advocacia trabalhista e previdenciária. Protegendo seus direitos com tradição, inovação e comprometimento desde 2013."
						}), s.jsxs("div", {
							"code-path": "src/sections/Footer.tsx:55:15",
							className: "flex items-center gap-3",
							children: [s.jsx("a", {
								"code-path": "src/sections/Footer.tsx:56:17",
								href: "https://www.instagram.com/barrosomagnum/",
								onClick: j => j.preventDefault(),
								className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C9A961] hover:text-[#0f1419] transition-all duration-300",
								"aria-label": "Facebook",
								children: s.jsx(Ch, {
									"code-path": "src/sections/Footer.tsx:62:19",
									size: 18
								})
							}), s.jsx("a", {
								"code-path": "src/sections/Footer.tsx:64:17",
								href: "https://www.instagram.com/barrosomagnum/",
								onClick: j => j.preventDefault(),
								className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C9A961] hover:text-[#0f1419] transition-all duration-300",
								"aria-label": "Instagram",
								children: s.jsx(Rh, {
									"code-path": "src/sections/Footer.tsx:70:19",
									size: 18
								})
							}), s.jsx("a", {
								"code-path": "src/sections/Footer.tsx:72:17",
								href: "https://wa.me/5564984047829",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#128C7E] transition-all duration-300",
								"aria-label": "WhatsApp",
								children: s.jsx("svg", {
									"code-path": "src/sections/Footer.tsx:79:19",
									xmlns: "http://www.w3.org/2000/svg",
									width: 18,
									height: 18,
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: s.jsx("path", {
										"code-path": "src/sections/Footer.tsx:80:21",
										d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
									})
								})
							})]
						})]
					}), s.jsxs("div", {
						"code-path": "src/sections/Footer.tsx:87:13",
						children: [s.jsx("h4", {
							"code-path": "src/sections/Footer.tsx:88:15",
							className: "font-['Playfair_Display'] text-lg font-semibold text-[#C9A961] mb-6",
							children: "Links Rápidos"
						}), s.jsx("ul", {
							"code-path": "src/sections/Footer.tsx:91:15",
							className: "space-y-3",
							children: U.map(j => s.jsx("li", {
								"code-path": "src/sections/Footer.tsx:93:19",
								children: s.jsx("a", {
									"code-path": "src/sections/Footer.tsx:94:21",
									href: j.href,
									onClick: M => d(M, j.href),
									className: "text-white/70 hover:text-[#C9A961] transition-colors duration-300 text-sm",
									children: j.label
								})
							}, j.label))
						})]
					}), s.jsxs("div", {
						"code-path": "src/sections/Footer.tsx:107:13",
						children: [s.jsx("h4", {
							"code-path": "src/sections/Footer.tsx:108:15",
							className: "font-['Playfair_Display'] text-lg font-semibold text-[#C9A961] mb-6",
							children: "Serviços"
						}), s.jsx("ul", {
							"code-path": "src/sections/Footer.tsx:111:15",
							className: "space-y-3",
							children: E.map(j => s.jsx("li", {
								"code-path": "src/sections/Footer.tsx:113:19",
								children: s.jsx("a", {
									"code-path": "src/sections/Footer.tsx:114:21",
									href: j.href,
									onClick: M => d(M, j.href),
									className: "text-white/70 hover:text-[#C9A961] transition-colors duration-300 text-sm",
									children: j.label
								})
							}, j.label))
						})]
					}), s.jsxs("div", {
						"code-path": "src/sections/Footer.tsx:127:13",
						children: [s.jsx("h4", {
							"code-path": "src/sections/Footer.tsx:128:15",
							className: "font-['Playfair_Display'] text-lg font-semibold text-[#C9A961] mb-6",
							children: "Contato"
						}), s.jsxs("ul", {
							"code-path": "src/sections/Footer.tsx:131:15",
							className: "space-y-4",
							children: [s.jsxs("li", {
								"code-path": "src/sections/Footer.tsx:132:17",
								className: "text-white/70 text-sm",
								children: [s.jsx("span", {
									"code-path": "src/sections/Footer.tsx:133:19",
									className: "block text-white/50 text-xs uppercase tracking-wider mb-1",
									children: "Endereço"
								}), "Av. Brasil, 271 - Quirinópolis/GO"]
							}), s.jsxs("li", {
								"code-path": "src/sections/Footer.tsx:136:17",
								className: "text-white/70 text-sm",
								children: [s.jsx("span", {
									"code-path": "src/sections/Footer.tsx:137:19",
									className: "block text-white/50 text-xs uppercase tracking-wider mb-1",
									children: "E-mail"
								}), "adv.trabalhadores@gmail.com"]
							}), s.jsxs("li", {
								"code-path": "src/sections/Footer.tsx:140:17",
								className: "text-white/70 text-sm",
								children: [s.jsx("span", {
									"code-path": "src/sections/Footer.tsx:141:19",
									className: "block text-white/50 text-xs uppercase tracking-wider mb-1",
									children: "WhatsApp"
								}), s.jsx("a", {
									"code-path": "src/sections/Footer.tsx:142:19",
									href: "https://wa.me/5564984047829",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-[#C9A961] transition-colors",
									children: "CLIQUE AQUI"
								})]
							})]
						})]
					})]
				})
			}), s.jsx("div", {
				"code-path": "src/sections/Footer.tsx:157:9",
				className: "border-t border-white/10",
				children: s.jsx("div", {
					"code-path": "src/sections/Footer.tsx:158:11",
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
					children: s.jsxs("div", {
						"code-path": "src/sections/Footer.tsx:159:13",
						className: "flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
						children: [s.jsxs("p", {
							"code-path": "src/sections/Footer.tsx:160:15",
							className: "text-white/50 text-sm",
							children: ["© ", N, " Barroso & Magnum Assessoria Empresarial LTDA. Todos os direitos reservados."]
						}), s.jsx("p", {
							"code-path": "src/sections/Footer.tsx:163:15",
							className: "text-white/40 text-xs",
							children: "CNPJ: 18.749.993/0001-64"
						})]
					})
				})
			})]
		})]
	})
}

function dm() {
	return s.jsxs("div", {
		"code-path": "src/App.tsx:12:5",
		className: "min-h-screen bg-white",
		children: [s.jsx(am, {
			"code-path": "src/App.tsx:13:7"
		}), s.jsxs("main", {
			"code-path": "src/App.tsx:14:7",
			children: [s.jsx(nm, {
				"code-path": "src/App.tsx:15:9"
			}), s.jsx(cm, {
				"code-path": "src/App.tsx:16:9"
			}), s.jsx(im, {
				"code-path": "src/App.tsx:17:9"
			}), s.jsx(sm, {
				"code-path": "src/App.tsx:18:9"
			}), s.jsx(fm, {
				"code-path": "src/App.tsx:19:9"
			}), s.jsx(om, {
				"code-path": "src/App.tsx:20:9"
			})]
		}), s.jsx(rm, {
			"code-path": "src/App.tsx:22:7"
		})]
	})
}
sh.createRoot(document.getElementById("root")).render(s.jsx(yt.StrictMode, {
	"code-path": "src/main.tsx:7:3",
	children: s.jsx(dm, {
		"code-path": "src/main.tsx:8:5"
	})
}));
