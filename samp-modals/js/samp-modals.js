/*
    Modals - SA:MP Dialogs

    * Autor: Zume (02/02/2017)
    * Contact: http://forum.sa-mp.com/member.php?u=146395;

*/

"use strict";
var Dialog;
Dialog = function() {
    function q(a, b) {
        b = b.replace(/\\t/g, '<p class="tabbulateLine"></p>'), "DIALOG_STYLE_LIST" !== a && "DIALOG_STYLE_TABLIST" !== a && (b = b.replace(/\\n/g, "<br />"));
        for (var c = 0; c < b.length; c++) {
            var d = c,
                e = c + 7;
            if ("{" == b.charAt(d) && "}" == b.charAt(e)) {
                var f = b.substring(d, e + 1),
                    g = f.substring(1, f.length - 1);
                b = b.replace(f, '<span style="color: #' + g + ';">')
            }
        }
        return b
    }

    function r(a, b) {
        var c = document.createElement(b);
        for (var d in arguments[2]) c.setAttribute(d, arguments[2][d]);
        return a.appendChild(c)
    }
    var a = null,
        b = arguments[0],
        c = r(document.body, "div", {
            class: "_sampDialog"
        }),
        d = r(c, "div", {
            class: "sampDialog"
        }),
        e = r(d, "div", {
            class: "sampDialogHeader"
        });
    e.innerHTML = b.title, e = r(d, "div", {
        class: "sampBody"
    });
    var f = r(e, "div", {
            class: b.type
        }),
        g = "DIALOG_STYLE_LIST" == b.type ? "ul" : "DIALOG_STYLE_TABLIST" == b.type ? "table" : "div",
        h = r(f, g, {
            class: "render"
        });
    if ("DIALOG_STYLE_LIST" == b.type)
        for (var i in b.body) {
            var j = r(h, "li");
            j.innerHTML = b.body[i]
        } else if ("DIALOG_STYLE_TABLIST" == b.type)
            for (var i in b.body) {
                var k = b.body[i],
                    j = r(h, "tr", {
                        id: i
                    });
                for (var l in k) {
                    var m = r(j, "td");
                    m.innerHTML = k[l]
                }
            } else h.innerHTML = q(b.type, b.body);
        "DIALOG_STYLE_INPUT" != b.type && "DIALOG_STYLE_PASSWORD" != b.type || (e = r(f, "input", {
        type: "DIALOG_STYLE_PASSWORD" == b.type ? "password" : "text",
        maxlength: "128",
        autocapitalize: "off"
    }));
    var n = r(f, "div", {
        class: "sampDialogButtons"
    });
    for (var o in b.button) {
        var p = r(n, "a", {
            class: "sampDialogButton",
            type: "confirmButton" == o ? "true" : "false"
        });
        p.innerHTML = b.button[o]
    }
    return c.addEventListener("click", function(d) {
        if ("DIALOG_STYLE_LIST" == b.type || "DIALOG_STYLE_TABLIST" == b.type) {
            var e = d.target;
            "TD" == d.target.tagName && (e = e.parentNode), "LI" != d.target.tagName && "TD" != d.target.tagName || (null != a && a.removeAttribute("class"), e.setAttribute("class", "active"), a = e)
        }
        var f = null;
        if ("DIALOG_STYLE_INPUT" == b.type || "DIALOG_STYLE_PASSWORD" == b.type ? f = c.getElementsByTagName("input")[0].value : "DIALOG_STYLE_LIST" == b.type ? f = null != a ? a.innerHTML : null : "DIALOG_STYLE_TABLIST" == b.type && (f = a.getAttribute("id")), "sampDialogButton" == d.target.className) switch (void 0 != b.closeOnResponse && 1 != b.closeOnResponse || c.parentElement.removeChild(c), d.target.getAttribute("type")) {
            case "true":
                if (void 0 == b.responseConfirm) break;
                b.responseConfirm(f);
                break;
            case "false":
                if (void 0 == b.responseDeny) break;
                b.responseDeny(f)
        }
    }), 1
};