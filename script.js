confetti.maxCount = 300;
confetti.alpha = 0.7;

let data = location.href.split("#")[1]

if (!data) {
	data = ""
}
else {
	data = JSON.parse(atob(data));
}

let to = data.t || '';
let from = data.f || '';
let message = `Happy Birthday ${to}!`;

if (to === "") {
	message = `Happy Birthday!`;
}

document.getElementById("from").innerText = from;
let text = document.getElementById("text");

confetti.start();
document.title = message;
text.innerText = message;
document.getElementsByClassName("hov")[0].innerText = '🎁';
document.getElementsByClassName("hov")[1].innerText = '🍰';
document.getElementsByClassName("hov")[2].innerText = '🎉';

Array.from(document.getElementsByClassName("hov")).forEach(elem => {
	elem.classList.add("expand-icons");
})

text.classList.add("expand-title");