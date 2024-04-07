var randomNumber1 = Math.random();
var randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomimage1="images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
var randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomimage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);


if (randomNumber1 > randomNumber2)
{   
    document.querySelector("h1").innerHTML="🚩Player 1 wins ";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}

if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}