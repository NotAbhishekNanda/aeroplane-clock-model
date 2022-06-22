const moveToRecord = (selector, percentage) => {
	const recAng = recordCompletionAngle(percentage, 0, 360);
	
	document.querySelector(selector).setAttribute(`transform`, `rotate(${recAng} 100 100)`);
};


//reverse engineer to get the value given the percentage
const normalize = (val, min, max) => {
	return (val - min) / (max - min);
};

// give back the angle value
const recordCompletionAngle = (percentage, min, max) => {
	return 1 * ((percentage / 100) * (max - min) + min);
};


let secTimer = setInterval(() => {
	
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	let ms = today.getMilliseconds();
	let time = hours + ":" + minutes + ":" + seconds;
	
	moveToRecord('#hour', (hours/12) * 100);
	moveToRecord('#minute', (minutes/60) * 100);
	moveToRecord('#second', (seconds/60) * 100);
	moveToRecord('#ms', (ms/1000) * 100);

	document.querySelector("#timeMs").innerHTML = ms;
	document.querySelector("#timeSeconds").innerHTML = seconds;
	document.querySelector("#timeMin").innerHTML = minutes;
	document.querySelector("#timeHour").innerHTML = hours % 12;

}, 20);
