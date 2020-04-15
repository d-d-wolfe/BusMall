'use strict';

var allPics = [];
var totalClicks = 0;
var maxClicks = 25;
//create constructor function 
//  name of product
//  image-filepath
function ItemPics(nameOfProduct, imageSrc){
  this.nameOfProduct = nameOfProduct;
  this.imageSrc = imageSrc;
  this.clickCount = 0;
  this.viewed = 0;

allPics.push(this);
}

//render to page the list items and pictures
function renderPics(picOne, picTwo, picThree) {
  console.log('In renderPics ', picOne);
  var target = document.getElementById('itemlist');
  var newLi1 = document.createElement('li');
  var newLi2 = document.createElement('li');
  var newLi3 = document.createElement('li');


  var clickInfo = document.createElement('p');
  clickInfo.textContent = 'Selected ' + picOne.clickCount + ' times';

  var newImg = document.createElement('img');
  newImg.src = picOne.imageSrc;
  newImg.id = picOne.imageSrc;
  //console.log(picOne);



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
    if (totalClicks >= maxClicks){
      return 
    }
     
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
    allPics[index].clickCount++; // clicks are being counted in the array 'index'
    totalClicks++;
    //===================Rerendering=====================
    // remove pics
    // re-render (call the render function)
    var target = document.getElementById('itemlist');
    target.innerHTML = '';
    var newPics = getRandomPics();
    renderPics(newPics[0], newPics[1], newPics[2]);
  }

function getRandomPics(){
    var returnArr = [];  
    //
    var randomPicIndex = Math.floor(Math.random() * allPics.length); //creates a random index
    var randomPic = allPics[randomPicIndex]; //pulls an object out of the allpix array using the random index I calculated.
    allPics[randomPicIndex].viewed++;
    returnArr.push(randomPic); //pushes the random pic into the returnArr
    
     //stops it from picking the same pic as the first time
    randomPicIndex = Math.floor(Math.random() * allPics.length);
    while (allPics[randomPicIndex] === returnArr[0]){
      randomPicIndex = Math.floor(Math.random() * allPics.length);
      }
      randomPic = allPics[randomPicIndex];
      allPics[randomPicIndex].viewed++;
    returnArr.push(randomPic);

    //stops it from picking the same pic as the first 2 times
    randomPicIndex = Math.floor(Math.random() * allPics.length); 
    while (allPics[randomPicIndex] === returnArr[0] || allPics[randomPicIndex] === returnArr[1]){
      randomPicIndex = Math.floor(Math.random() * allPics.length);
      }
      randomPic = allPics[randomPicIndex];
      allPics[randomPicIndex].viewed++;
    returnArr.push(randomPic);
    

    return returnArr;
  }
  //console.log(putPicsOnPage);

new ItemPics('bag', 'pictures/bag.jpg');
new ItemPics('banana', 'pictures/banana.jpg');
new ItemPics('bathroom', 'pictures/bathroom.jpg');
new ItemPics('boots', 'pictures/boots.jpg');
new ItemPics('breakfast', 'pictures/breakfast.jpg');
new ItemPics('bubblegum', 'pictures/bubblegum.jpg');
new ItemPics('chair', 'pictures/chair.jpg');
new ItemPics('cthulhu', 'pictures/cthulhu.jpg');
new ItemPics('dog-duck', 'pictures/dog-duck.jpg');
new ItemPics('dragon', 'pictures/dragon.jpg');
new ItemPics('pen', 'pictures/pen.jpg');
new ItemPics('scissors', 'pictures/scissors.jpg');
new ItemPics('shark', 'pictures/shark.jpg');
new ItemPics('sweep', 'pictures/sweep.png');
new ItemPics('tauntaun', 'pictures/tauntaun.jpg');
new ItemPics('unicorn', 'pictures/unicorn.jpg');
new ItemPics('usb', 'pictures/usb.gif');
new ItemPics('water-can', 'pictures/water-can.jpg');
new ItemPics('wine-glass', 'pictures/wine-glass.jpg');

//function 

var randomPics = getRandomPics();
renderPics(randomPics[0], randomPics[1], randomPics[2]);
console.log();

// Add local storage
//localStorage.setItem('totalClicks', totalClicks);
//

function getProductNames(){
  var nameArr = [];
  for (var i = 0; i < allPics.length; i++)
    nameArr.push(allPics[i].nameOfProduct);
  return nameArr;
}

function getClickCounts(){
  var clickArr = [];
  for (var i = 0; i < allPics.length; i++)
    clickArr.push(allPics[i].clickCount);
  return clickArr;
}

function getViews(){
  var viewArr = [];
  for (var i = 0; i < allPics.length; i++)
    viewArr.push(allPics[i].viewed);
  return viewArr;
}

var ctx = document.getElementById('buschart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: getProductNames(),
        datasets: [{
            label: 'click count',
            data: getClickCounts(),
            backgroundColor: [
              'rgb(104, 99, 99)',
              'rgba(1, 1, 1, 0.4)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          }, 
        {
            label: 'total views',
            data: getViews(),
            backgroundColor: [
                'rgb(100, 125, 125)', 
                'rgb(255, 200, 150)',
              ],
            borderColor: [
                'rgb(150, 150, 100)',
            ],
            borderWidth: 1

        }]
        
          },
          

    // Configuration options go here
    options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
       
      }
    
});