
//reveal divs
function showcol1(){
    document.getElementById("col1").style.visibility="visible";
}
function showcol2(){
    document.getElementById("col2").style.visibility="visible";
}
function showcol3(){
    document.getElementById("col3").style.visibility="visible";
}
setTimeout("showcol1()", 2000);
setTimeout("showcol2()", 3000);
setTimeout("showcol3()", 4800);

// hide all divs
function hideDivs(){
    document.getElementById("col1").style.visibility="hidden";
    document.getElementById("col2").style.visibility="hidden";
    document.getElementById("col3").style.visibility="hidden";
}setTimeout("hideDivs()", 5900);
    
 
setTimeout(() => document.querySelector("body").style.background = `url(wit1.jpg)`, 6000);