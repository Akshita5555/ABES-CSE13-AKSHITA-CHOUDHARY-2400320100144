function addNumbers(){
    let a=Number(document.getElementById("n1").value);
    let b=Number(document.getElementById("n2").value);
    let sum=a+b;
    document.getElementById("Sum").innerHTML="Sum is: "+sum;

}

function makeRed(){
    document.getElementById("output").style.Color="red";
}

function sayHello(){
    alert("Hello! Jvascript is fun.");
}

function textLength() {
    let val=document.getElementById("box").value;
    document.getElementById("output").innerHTML="Length is: "+val.length;
}

function  reverseText() {
    let val=document.getElementById("box").value;
    let rev= val .split("").reverse().join("") ;
    document.getElementById("output").innerHTML="Reversed Text is: "+rev;
}