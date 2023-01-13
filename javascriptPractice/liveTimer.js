var s ;
function timer(){
   s = parseInt(document.Timer.Seconds)
    
}
function recursion()
{
    if(s>=0)
    {
        console.log("1")
        document.getElementById("display").innerHTML=s;
        setTimeout(recursion, 1000);
        return recursion(s-1);
    }
    else 
    {
        document.getElementById("display").innerHTML="TIMES UP!!!!!!"    
    }
    
}
