const check=document.getElementById("check");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const paypal=document.getElementById("paypal");
const result=document.getElementById("result");
const submit=document.getElementById("submit");
const sresult=document.getElementById("sresult");

submit.onclick=function(){
    if(check.checked){
        sresult.textContent=`You have subscribed.`
    }
    else{
        sresult.textContent=`You have NOT subscribed.`
    }
    if(visa.checked){
        result.textContent=`You have chosen Visa.`
    }
    else if(master.checked){
        result.textContent=`You have chosen Mastercard.`
    }
    else if(paypal.checked){
        result.textContent=`You have chosen PayPal.`
    }
}
