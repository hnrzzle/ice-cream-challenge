'use strict'

const buildList = () => {
  const listItems = iceCreamFlavors.map(flavor => $('<li>').text(flavor));
  $('.ice-cream-list').append(listItems);
}

buildList();