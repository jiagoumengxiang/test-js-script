// ==UserScript==
// @name         2_point_move
// @namespace    http://tampermonkey.net/
// @version      2024-12-23
// @description  try to take over the world!
// @author       You
// @match        https://echizen.github.io/tech/2014/12-23-touch-vs-click
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let startX ,startY;
    //touchstart事件
//touchmove事件，这个事件无法获取坐标
function touchMoveFunc(evt) {
    try{
        console.log("touch-moving")
        if(evt.touches!=null && evt.touches.length == 2){
            evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
            var touch1 = evt.touches[0]; //获取第一个触点
            var touch2 = evt.touches[1];
            console.log(touch1);
            console.log(touch2);
        }
    }catch(e){
        console('touchMoveFunc：' + e.message);
    }
}
    // Your code here...
})();
