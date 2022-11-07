// Write your code here!
const mainNode = document.getElementById('main');
mainNode.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Noor is the champion";
document.body.append(newHeader);