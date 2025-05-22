//your JS code here. If required.
const inputfield=document.getElementById("fname");
inputfield.addEventListener("blur", function() {
	this.value=this.value.toUpperCase();
})