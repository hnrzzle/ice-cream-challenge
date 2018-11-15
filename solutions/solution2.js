'use strict'

const buildList = () => {
  iceCreamFlavors.forEach((flavor) => {
    $('.ice-cream-list').append($('<li>').text(flavor));
  });
}

buildList();
