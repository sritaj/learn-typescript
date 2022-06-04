"use strict";
const paragraph = document.querySelector("p");
paragraph.innerHTML = "Hello ";
const paragraphWithIDFirstApproach = (document.getElementById("message"));
paragraphWithIDFirstApproach.innerHTML = "Hello Once";
const paragraphWithIDSecondApproach = document.getElementById("message");
paragraphWithIDSecondApproach.innerHTML = "Hello Once Again";
const paragraphdemo = document.getElementById("message");
if (paragraphdemo) {
    paragraphdemo.innerHTML = "Hello Once Again Again";
}
