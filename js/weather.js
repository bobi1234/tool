// 天气预报插件
(function(T, h, i, n, k, P, a, g, e) {
    g = function() {
        P = h.createElement(i);
        a = h.getElementsByTagName(i)[0];
        P.src = k;
        P.charset = "utf-8";
        P.async = 1;
        a.parentNode.insertBefore(P, a)
    };
    T["ThinkPageWeatherWidgetObject"] = n;
    T[n] || (T[n] = function() {
        (T[n].q = T[n].q || []).push(arguments)
    });
    T[n].l = +new Date();
    if (T.attachEvent) {
        T.attachEvent("onload", g)
    } else {
        T.addEventListener("load", g, false)
    }
}(window, document, "script", "tpwidget", "//widget.seniverse.com/widget/chameleon.js"))
tpwidget("init", {
    "flavor": "bubble",
    "location": "WX4FBXXFKE4F",
    "geolocation": "enabled",
    "position": "top-right",
    "margin": "10px 10px",
    "language": "zh-chs",
    "unit": "c",
    "theme": "chameleon",
    "uid": "U3414DB4A9",
    "hash": "91ff44d1248d72fc847c6177474e1533"
});
tpwidget("show");
