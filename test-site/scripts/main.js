var myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/profile1.jpg'){
		myImage.setAttribute('src', 'images/profile2.jpg');
	} else {
		myImage.setAttribute('src', 'images/profile1.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('請輸入您的大名');
	if(!myName || myName === null){
		setUserName();
	} else {
	    localStorage.setItem('name', myName);
	    myHeading.innerHTML = '歡迎來到我的部落格' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = '歡迎來到我的部落格,' + storedName;
}

myButton.onclick = function(){
	setUserName();
}