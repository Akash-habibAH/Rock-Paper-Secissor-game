let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
console.log(userScore);
console.log(compScore);
let userWinner=true;
let clickOnImages=document.querySelectorAll(".images");
clickOnImages.forEach(image =>{
    image.addEventListener("click", ()=>{
        console.log("image is clicked!");
    });   
});
let userTurn=true;
