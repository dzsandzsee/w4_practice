console.log("loaded");
console.log(document.querySelector("div")

)
const rootElement = document.querySelector("div");
console.log(rootElement);

const logClicked = () => console.log("clicked")

rootElement.addEventListener("click", logClicked)
console.log("script end")