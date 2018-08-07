/* Enter the code to remove the main node element under this comment */
<<<<<<< HEAD
document.body.remove(document.getElementById("main"));
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.innerText="Pippi is the champion";
document.body.appendChild(newHeader);
=======

document.body.removeChild(document.getElementById("main"));
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.innerHTML = "Pippi is the champion!";
>>>>>>> e5ab292be915eaaf80927ef153d41c331ccd0ffe
