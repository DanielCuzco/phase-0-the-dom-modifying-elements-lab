// Write your code here!
document.querySelector("#main").remove();
// This selects a first main ID to remove 

const newHeader = document.createElement("h1")
// This creates a new header in the document in the DOM

newHeader.id = "victory";
// Giving the new header an ID

newHeader.innerHTML = "YOUR-NAME is the champion"
// 