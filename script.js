//your code here
function myfunc(event) {
	const text = event.target.value;
	const len = text.length;
	if(text === ""){
		document.getElementById("letterCount").innerText = 0;	
	}else{
		document.getElementById("letterCount").innerText = len;
	}
	
}
const input = document.getElementById("evaluatedText");
input.addEventListener("input", (event) => {
	myfunc(event);
});