var randomNum;
const min=1;
const max=6;
document.getElementById("roll").onclick=function(){
    randomNum=Math.floor(Math.random()*(max))+min;
    document.getElementById("random-number").textContent=randomNum;
}