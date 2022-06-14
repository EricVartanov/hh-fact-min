"use strict";
var DocWidth = document.documentElement.clientWidth;

let cards = document.querySelectorAll(".idc-pluse");

if (DocWidth > 1340) {
    for (let card of cards) {
        card.addEventListener("mouseover", function () {
            document
                .querySelector(".idc-pluse.hover")
                .classList.remove("hover");
        });
    }
}

if (DocWidth < 1340) {
    for (let card of cards) {
        card.addEventListener("click", function (e) {
            const target = e.target;
            if (target.closest(".idc-pluse.hover")) {
                card.classList.toggle("hover");
            } else if (
                !target.closest(".idc-pluse.hover") &&
                document.querySelector(".idc-pluse.hover")
            ) {
                document
                    .querySelector(".idc-pluse.hover")
                    .classList.remove("hover");
                card.classList.add("hover");
            } else {
                card.classList.add("hover");
            }
        });
    }
    window.addEventListener("click", (e) => {
        // при клике в любом месте окна браузера
        let card = document.querySelector(".idc-pluse.hover");
        const target = e.target; // находим элемент, на котором был клик
        if (!target.closest(".idc-pluse") && card.classList.contains("hover")) {
            card.classList.remove("hover");
        }
    });
}
