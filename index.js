var num = Math.random() ; 
num = num*6 ;
num = Math.floor(num)+1;
var num1 = Math.random();
num1 = num1*6;
num1 = Math.floor(num1)+1;




document.querySelector(" .img1 ").src="dice"+num+".png";
document.querySelector(".img2").src="dice"+num1+".png";
if(num > num1){
    document.querySelector(".container #fl ").innerHTML="<h1><img src='red-flag(1).png' class='flag'> Player 1 Wins</h1>";
}else if(num<num1){
    document.querySelector(".container #fl ").innerHTML="<h1>Player 2 Wins<img src='red-flag(1).png' class='flag'></h1>";
}else{
    document.querySelector("div h1 ").innerText="Draw !!";
}


