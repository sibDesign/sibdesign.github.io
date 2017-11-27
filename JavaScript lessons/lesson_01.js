/**
 * Created by Андрей on 25.11.2017.
 */
"use strict";
var chessWrap = document.querySelector('.ch-wrap');

var i = 0, count = 0;

while (count < 8 * 8) {
    var item = document.createElement('div');
    chessWrap.appendChild(item);
    item.classList.add('ch-item');
    if (i && i % 2)
        item.classList.add('ch-black')
    i += ((i + 2) % 9) ? 1 : 2;
    count++;
}
