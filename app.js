'use strict';

var allPics = [];
var totalClicks = 0;
var maxClicks = 25;
//create constructor function 
//  name of product
//  image-filepath
function ItemPics(nameOfProduct){
  this.nameOfProduct = nameOfProduct;
  this.imageSrc = 'pictures/' + nameOfProduct;
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
    if (Number(localStorage.totalClicks) >= maxClicks){
      generateChart();
      return
    }
    
   // console.log('image clicked ', event.target.src);
    var tempSrc = event.target.src.split('/');
    var index
    console.log('TempSrc', tempSrc);
    
    var fileName = tempSrc[4];
    //console.log('filename', fileName[0]);
    for (var i = 0; i < allPics.length; i++){
     // console.log(allPics[i].nameOfProduct);
      if (allPics[i].nameOfProduct == fileName){
        index = i;
      }
    }
    //console.log(allPics[0].clickCount)
    //console.log(index);
    allPics[index].clickCount++; // clicks are being counted in the array 'index'
    totalClicks++;
    localStorage.totalClicks = totalClicks;
    //===================Rerendering=====================
    // remove pics
    // re-render (call the render function)
    var target = document.getElementById('itemlist');
    target.innerHTML = ''; // removes the pics from the page
    var newPics = getRandomPics();
    renderPics(newPics[0], newPics[1], newPics[2]);
  }

function getRandomPics(){
    var returnArr = [];  
    //
    var randomPicIndex = Math.floor(Math.random() * allPics.length); //creates a random index
    var randomPic = allPics[randomPicIndex]; //pulls an object out of the allpix array using the random index I calculated.
    allPics[randomPicIndex].viewed++;
    localStorage.allPics = JSON.stringify(allPics); // Add local storage
    returnArr.push(randomPic); //pushes the random pic into the returnArr
    
     //stops it from picking the same pic as the first time
    randomPicIndex = Math.floor(Math.random() * allPics.length);
    while (allPics[randomPicIndex] === returnArr[0]){
      randomPicIndex = Math.floor(Math.random() * allPics.length);
      }
      randomPic = allPics[randomPicIndex];
      allPics[randomPicIndex].viewed++;
      localStorage.allPics = JSON.stringify(allPics); // Add local storage
    returnArr.push(randomPic);

    //stops it from picking the same pic as the first 2 times
    randomPicIndex = Math.floor(Math.random() * allPics.length); 
    while (allPics[randomPicIndex] === returnArr[0] || allPics[randomPicIndex] === returnArr[1]){
      randomPicIndex = Math.floor(Math.random() * allPics.length);
      }
      randomPic = allPics[randomPicIndex];
      allPics[randomPicIndex].viewed++;
      localStorage.allPics = JSON.stringify(allPics); // Add local storage
    returnArr.push(randomPic);
    

    return returnArr;
  }
  //console.log(putPicsOnPage);
  // create a function to initialize the page and check local storage
  // if nothing is in local storage, run the page through the constructor
  // otherwise pull from local storage

function initializePage(){
  if (!localStorage.allPics){
    new ItemPics('bag.jpg');
    new ItemPics('banana.jpg');
    new ItemPics('bathroom.jpg');
    new ItemPics('boots.jpg');
    new ItemPics('breakfast.jpg');
    new ItemPics('bubblegum.jpg');
    new ItemPics('chair.jpg');
    new ItemPics('cthulhu.jpg');
    new ItemPics('dog-duck.jpg');
    new ItemPics('dragon.jpg');
    new ItemPics('pen.jpg');
    new ItemPics('scissors.jpg');
    new ItemPics('shark.jpg');
    new ItemPics('sweep.png');
    new ItemPics('tauntaun.jpg');
    new ItemPics('unicorn.jpg');
    new ItemPics('usb.gif');
    new ItemPics('water-can.jpg');
    new ItemPics('wine-glass.jpg');

    localStorage.allPics = JSON.stringify(allPics); // Add local storage
    var randomPics = getRandomPics();
    renderPics(randomPics[0], randomPics[1], randomPics[2]);
    } else {
      //console.log(JSON.parse(localStorage.allPics));
      allPics = JSON.parse(localStorage.allPics);
    }
    if (Number(localStorage.totalClicks) >= maxClicks) { // Add local storage
      generateChart();
    }
}

initializePage();
//function 


//console.log();


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

function generateChart(){
  var ImageBox = document.getElementById('itemlist');
  var main = document.getElementsByTagName('main')[0];
  var resetButton = document.createElement('button');
  resetButton.setAttribute('id', 'reset');
  resetButton.innerText = 'Reset';
  main.appendChild(resetButton);
  resetButton.addEventListener('click', function (){
    localStorage.clear();
    window.location.reload();
  });
  var canvas = document.createElement('canvas');
  canvas.setAttribute('id','buschart');
  canvas.style.height = '200px';
  canvas.style.width = '200px';
  canvas.style.backgroundColor = 'darkgrey'
  main.appendChild(canvas); 

  ImageBox.innerHTML = '';


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
            backgroundColor: 'black',
            borderColor: 'black',
              
            borderWidth: 1
          }, 
        {
            label: 'total views',
            data: getViews(),
            backgroundColor: 'rgb(100, 125, 125)', 
            borderColor: 'rgb(150, 150, 100)',
            borderWidth: 1,

        }]
        
          },
          

    // Configuration options go here
    options: {
        // responsive: true,
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true
        //     }
        //   }]
        // }
       
      }
    
});
}

