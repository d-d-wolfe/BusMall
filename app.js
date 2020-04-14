'use strict';

var allPics = [];
var totalClicks = 0;
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
function renderPics(picOne, picTwo, picThree) {
  var target = document.getElementById('itemlist');
  var newLi1 = document.createElement('li');
  var newLi2 = document.createElement('li');
  var newLi3 = document.createElement('li');


  var clickInfo = document.createElement('p');
  clickInfo.textContent = 'Selected ' + picOne.clickCount + ' times';

  var newImg = document.createElement('img');
  newImg.src = picOne.imageSrc;
  newImg.id = picOne.imageSrc;

  newLi1.appendChild(newImg);
  newLi1.appendChild(clickInfo);
console.log('newLi1', newLi1);
  target.appendChild(newLi1);
  newLi1.addEventListener('click', imageClick);

  var clickInfo2 = document.createElement('p');
  clickInfo2.textContent = 'Selected ' + picTwo.clickCount + ' times';

  var newImg2 = document.createElement('img');
  newImg2.src = picTwo.imageSrc;
  newImg2.id = picTwo.imageSrc;

  newLi2.appendChild(newImg2);
  newLi2.appendChild(clickInfo2);
console.log('newLi2', newLi2);
  target.appendChild(newLi2);
  newLi2.addEventListener('click', imageClick);

  var clickInfo3 = document.createElement('p');
  clickInfo3.textContent = 'Selected ' + picThree.clickCount + ' times';

  var newImg3 = document.createElement('img');
  newImg3.src = picThree.imageSrc;
  newImg3.id = picThree.imageSrc;

  newLi3.appendChild(newImg3);
  newLi3.appendChild(clickInfo3);
console.log('newLi3', newLi3);
  target.appendChild(newLi3);
  newLi3.addEventListener('click', imageClick);

};

  function imageClick (event){
   // console.log('image clicked ', event.target.src);
    var tempSrc = event.target.src.split('/').pop();
    var index
    //console.log('TempSrc', tempSrc.pop());
    
    var fileName = tempSrc.split('.');
    //console.log('filename', fileName[0]);
    for (var i = 0; i < allPics.length; i++){
     // console.log(allPics[i].nameOfProduct);
      if (allPics[i].nameOfProduct == fileName[0]){
        index = i;
      }
    }
    //console.log(allPics[0].clickCount)
    //console.log(index);
    allPics[index].clickCount++;
  }

function getRandomPics(){
    var returnArr = [];  
    var randomPic = Math.floor(Math.random() * allPics.length);
    returnArr.push(randomPic);

    randomPic = Math.floor(Math.random() * allPics.length);
    returnArr.push(randomPic);

    randomPic = Math.floor(Math.random() * allPics.length);
    returnArr.push(randomPic);

    return returnArr;
  }
  //console.log(putPicsOnPage);

new ItemPics('bag', 'pictures/bag.jpg');
new ItemPics('banana', 'pictures/banana.jpg');
new ItemPics('bathroom', 'pictures/bathroom.jpg');
new ItemPics('boots', 'pictures/boots.jpg');

//function 

var randomPics = getRandomPics();
renderPics(allPics[randomPics[0]], allPics[randomPics[1]], allPics[randomPics[2]]);
console.log(allPics);



var ctx = document.getElementById('buschart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});