N = [];
function sub(){
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var n3= document.getElementById("n3").value;
    var n4= document.getElementById("n4").value;
    N.push(n1);
    N.push(n2);
    N.push(n3);
    N.push(n4);
    console.log(N);
    document.getElementById("out").innerHTML=N;
    document.getElementById("sub").style.display="none";
    document.getElementById("sor").style.display="inline-block";
}
function sor(){
    N.sort();
    console.log(N);
    document.getElementById("out").innerHTML=N;
}
