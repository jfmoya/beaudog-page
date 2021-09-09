


let myImage = document.querySelector('img')   

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'https://shop.twobadmice.com/wp-content/uploads/2016/01/m201.gif') {
        myImage.setAttribute('src', 'https://shop.twobadmice.com/wp-content/uploads/2015/06/ia38.gif')
    } else {
        myImage.setAttribute('src', 'https://shop.twobadmice.com/wp-content/uploads/2016/01/m201.gif')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let userName = prompt('Please enter your name.');
    if(!userName){
        setUserName()   // RECURSIVE else statement needed to avoid reseting username at last exit.
    } else {
        localStorage.setItem('name', userName);
        myHeading.textContent = 'A beautifil Dog!!! Isn\'t it ' + userName +'?';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    let userName = localStorage.getItem('name');
    myHeading.textContent = 'A beautifil Dog!!! Isn\'t it ' + userName +'?';
} 

// myButton.onclick = setUserName; // Works as well
myButton.onclick = function() {
    setUserName();
}