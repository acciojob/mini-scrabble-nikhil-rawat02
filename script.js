//your code here
function myfunc(event) {
	const text = event.target.value;
	const len = text.length;
	document.getElementById("letterCount").innerText = len;
}
const input = document.getElementById("evaluatedText");
input.addEventListener("input", (event) => {
	myfunc(event);
});