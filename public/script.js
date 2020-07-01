var hour = document.getElementById('hour');
var mintue = document.getElementById('minute');

for (let i = 1; i <= 12; i++){
	hour.innerHTML += `<option>${i}</option>`
}
for (let i = 1; i <= 60; i++){
	let ti = i;
	if (i < 10) ti = '0' + ti;
	mintue.innerHTML += `<option>${ti}</option>`
}