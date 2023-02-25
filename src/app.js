/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = function() {
  //write your code here
  change();
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", change);
};

function change() {
  const suites = ["♦", "♥", "♠", "♣"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const randomCardIndex = Math.floor(Math.random() * cards.length);
  const randomCardValue = cards[randomCardIndex];

  const center = document.querySelector("#number");
  center.innerText = randomCardValue;

  const randomSuiteIndex = Math.floor(Math.random() * suites.length);
  const randomSuiteValue = suites[randomSuiteIndex];

  const topSuite = document.querySelector("#topsuite");
  const bottomSuite = document.querySelector("#bottomsuite");

  topSuite.innerText = randomSuiteValue;
  bottomSuite.innerText = randomSuiteValue;
  if (randomSuiteIndex <= 1) {
    topSuite.style.color = "red";
    bottomSuite.style.color = "red";
  } else {
    topSuite.style.color = "black";
    bottomSuite.style.color = "black";
  }
}
