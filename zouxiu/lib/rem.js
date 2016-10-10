/**
 * Created by Administrator on 2016/9/26 0026.
 */
var autoSetRem = (function(doc, win) {
    var docEl = doc.documentElement,
        done = false,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        set = function(paper) {
            if(paper==null){
                paper=640;
            }
            var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / paper) + 'px';
            done = true;
            return done;
        };
    return {
        set:set
    };
    //AbortifbrowserdoesnotsupportaddEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, set, false);
    doc.addEventListener('DOMContentLoaded', set, false);
})(document, window);
autoSetRem.set(640);