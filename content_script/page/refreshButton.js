var a = document.createElement("button");
a.textContent="刷新";
a.setAttribute("onclick", "window.location.reload()");
a.style.position = "fixed";
a.style.left = "0.5cm";
document.body.insertBefore(a, document.body.firstElementChild);
var placeholder = document.createElement("div");
document.body.insertBefore(placeholder, a.nextSibling);
placeholder.style.height = a.clientHeight + "px";
