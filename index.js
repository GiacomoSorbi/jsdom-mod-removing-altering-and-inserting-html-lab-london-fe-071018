/* Enter the code to remove the main node element under this comment */
document.body.remove(document.getElementById("main"));
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.innerText="Pippi is the champion";
document.body.appendChild(newHeader);