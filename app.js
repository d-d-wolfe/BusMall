'use strict';

var allPics = [];
//create constructor function 
//  name of product
//  image-filepath
function ItemPics(nameOfProduct, imageSrc){
  this.nameOfProduct = nameOfProduct;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

allPics.push(this);
}

//render to page the list items and pictures
ItemPics.prototype.render = function() {
  var target = document.getElementById('itemlist');
  var newLi = document.createElement('li');

  var clickInfo = document.createElement('p');
  clickInfo.textContent = 'Selected ' + this.clickCount + ' times';

  var newImg = document.createElement('img');
  newImg.src = this.imageSrc;
  newImg.id = this.imageSrc;

  newLi.appendChild(newImg);
  newLi.appendChild(clickInfo);

  target.appendChild(newLi);

};
