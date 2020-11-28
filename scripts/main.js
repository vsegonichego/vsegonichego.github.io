var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tarot-5511610-1280.jpg') {
      myImage.setAttribute ('src','images/tarot2.png');
    } else {
      myImage.setAttribute ('src','images/tarot-5511610-1280.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Изучение карт Таро - это увлекательно, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Изучение карт Таро - это увлекательно, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
