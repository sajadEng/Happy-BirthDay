let celebrationText1 = 'Happy BirthDay JAAJI JAAN :) :) :) :) :)';
let celebrationText2 = "it's always nice to see You !";
let celebrationText3 = "i'm realy happy you are here <3";
let celebrationText4 = "I hope I always stay your friend )";
let textsList = [celebrationText1, celebrationText2 , celebrationText3 ,celebrationText4];

function change() {
	for (let i = 0; i < document.querySelectorAll('div.teller').length; i++) {
		document.querySelector(`.teller-${i+1}`).style.top = `${Math.floor(Math.random() * 90)}%`;
		document.querySelector(`.teller-${i+1}`).style.left = `${Math.floor(Math.random() * 90)}%`
	}
}

function BgColor() {
	document.querySelector('body').style.background = `rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 10)})`
	document.querySelectorAll('div.teller')[Math.floor(Math.random()*(document.querySelectorAll('div.teller').length))].style.background = `rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 10)})`;
}
setInterval(BgColor, 100)
setInterval(change, 6000)
var time = 0;
var clicked = false;
var randomText;
var animationed = 0;
for (let i = 0; i < document.querySelectorAll('div.teller').length; i++) {
	document.querySelectorAll('div.teller')[i].addEventListener('click', event => {
		document.querySelector('.letter p').innerHTML = '';
		document.querySelector('.letter').style.display = 'flex';
		randomText = textsList[Math.floor(Math.random() * 4)];
		addText();
		clicked = true;
	})
}
document.querySelector('.letter button').addEventListener('click', event => {
	document.querySelector('.letter').style.display = 'none';
	clicked = false;
	time = 0;
})
function addText() {
	if (clicked) {
		document.querySelector('.letter p').innerHTML += randomText[time];
		time++
	}
	if (randomText.length === time) {
		clicked = false;
		time = 0;
	} 
	setTimeout(addText, 200);
}


setTimeout(showAssistant, 6000)
setTimeout(hideAssistant, 20000)
function showAssistant() {
	document.querySelector('.assistant').innerHTML = 'click any Bubble please!';
	document.querySelector('.assistant').style.bottom = '0';
}
function hideAssistant() {
	document.querySelector('.assistant').style.bottom = '100%';
}
document.querySelectorAll('div.animation-box-2 p')[4].onanimationend = event => {

	animationed++
	if (animationed == 2) {
		for ( let i = 0; i < document.querySelectorAll('div.teller').length; i++) {
			document.querySelectorAll('div.teller')[i].style.opacity = '1';
			console.log('finished')
		}
	}
	console.log(animationed)
}

// 	for ( let i = 0; i < document.querySelectorAll('div.teller').teller; i++) {
// 		// document.querySelectorAll('div.teller')[i].style.opacity = '1';
// 		console.log('finished')
// 	}

// })
