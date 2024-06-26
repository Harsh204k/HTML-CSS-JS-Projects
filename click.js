let count=0;

document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("p").textContent=count;
}

document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("p").textContent=count;
}

document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("p").textContent=count;
}

document.getElementById("submit").onclick=function(){
    count=document.getElementById("input").value;
    document.getElementById("p").textContent=count;
}

