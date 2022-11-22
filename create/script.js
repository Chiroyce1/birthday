let to = document.getElementById('to');
let from = document.getElementById('from');
let link = document.querySelector('a');

function generate() {
	if (to.value === "") {
		link.href = "";
		link.innerText = "";
		return;
	}

	let json = {
		t: to.value,
		f: from.value
	}

	let url = btoa(JSON.stringify(json)).replaceAll("=", "");
	// remove = in base64 as it doesnt seem to affect the output

	link.href = `/#${url}`;
	link.innerText = `Send this link to the person`

}

to.addEventListener("input", generate)
from.addEventListener("input", generate)