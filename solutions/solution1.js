'use strict'

function buildList () {
  for (let i = 0; i < iceCreamFlavors.length; i++) {
    const iceCreamList = document.getElementsByClassName('ice-cream-list')[0];
    const li = document.createElement('li');
    li.textContent = iceCreamFlavors[i];
    iceCreamList.appendChild(li);
  }
}

buildList();