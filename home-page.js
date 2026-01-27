const buttonInstruction = document.querySelector("#instructions")
const cyberSecurityIMG = document.querySelector(".cyber-security img");
const progammerIMG = document.querySelector(".programmer img");
const accessibilityIMG = document.querySelector(".accessibility-tester img");

function imageBigger (){
    console.log("hello")
}
cyberSecurityIMG.addEventListener("mouseover", imageBigger)
progammerIMG.addEventListener("mouseover", imageBigger)
accessibilityIMG.addEventListener("mouseover", imageBigger)


/*
I am going to create a button in where 
a js function is going to direct you to another
html page. In that page it's going to show instructions
*/

buttonInstruction.addEventListener("mouseenter", () =>{
    buttonInstruction.style.backgroundColor = "red";
});