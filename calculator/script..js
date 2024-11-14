var containerString="";
var containerNumber=0;
var symbol="";

function clearall(){
    containerString="";
    document.getElementById("output").value=0;
}
function seven(){
    var button =document.getElementById("seven").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;

}
function eight(){
    var button =document.getElementById("eight").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function nine(){
    var button =document.getElementById("nine").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function time(){
    containerNumber=+containerString;
    symbol="*";
    containerString="";
    document.getElementById("output").value =0;
}
function extraOfDivided(){
    containerNumber=+containerString;
    symbol="%";
    containerString="";
    document.getElementById("output").value =0;
}
function divided(){
    containerNumber=+containerString;
    symbol="/";
    containerString="";
    document.getElementById("output").value =0;
}
function four(){
    var button =document.getElementById("four").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function five(){
    var button =document.getElementById("five").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function six(){
    var button =document.getElementById("six").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function minus(){
    containerNumber=+containerString;
    symbol="-";
    containerString="";
    document.getElementById("output").value =0;
}
function one(){
    var button =document.getElementById("one").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function two(){
    var button =document.getElementById("two").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function three(){
    var button =document.getElementById("three").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function plus(){
    containerNumber=+containerString;
    symbol="+";
    containerString="";
    document.getElementById("output").value =0;
}
function zero(){
    var button =document.getElementById("zero").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function dot(){
    var button =document.getElementById("dot").value;
    containerString=containerString+button;
    document.getElementById("output").value=containerString;
}
function equal(){
    if(symbol =="+"){
        res =containerNumber+Number(containerString);
        document.getElementById("output").value = res;
    }else if(symbol =="-"){
        res =containerNumber-Number(containerString);
        document.getElementById("output").value = res;
    }else if(symbol =="*"){
        res =containerNumber*Number(containerString);
        document.getElementById("output").value = res;
    }else if(symbol =="/"){
        res =containerNumber/Number(containerString);
        document.getElementById("output").value = res;
    }else if(symbol =="%"){
        res =containerNumber%Number(containerString);
        document.getElementById("output").value = res;
    }
}
