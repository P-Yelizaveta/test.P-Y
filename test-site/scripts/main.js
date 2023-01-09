
 

/*document.querySelector('html').onclick = function() {
    alert('Не зли енота!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/W6QB-DZc_400x400.png') {
      myImage.setAttribute ('src','images/enot.jpg');
    } else {
      myImage.setAttribute ('src','images/W6QB-DZc_400x400.png');
    }
} 


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Твое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Енот Еноцкий и ' + myName;
}


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Енот Еноцкий и ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }