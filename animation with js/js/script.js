"use strict";

const btn = document.querySelector("#btn");

function animation() {
    const box = document.querySelector(".box");
    let position = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (position === 294) {
            clearInterval(id);
        } else {
            position++;
            box.style.top = `${position}px`;
            box.style.left = `${position}px`;
        }
    }
}

btn.addEventListener("click", animation)