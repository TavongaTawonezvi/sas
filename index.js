
//reveal divs
function showcol1(){
    document.getElementById("col1").style.visibility="visible";
}setTimeout("showcol1()", 1500);
function showcol2(){
    document.getElementById("col2").style.visibility="visible";
}setTimeout("showcol2()", 2500);
function showcol3(){
    document.getElementById("col3").style.visibility="visible";
}setTimeout("showcol3()", 4000);

// hide all divs
function hideDivs(){
    document.getElementById("col1").style.visibility="hidden";
    document.getElementById("col2").style.visibility="hidden";
    document.getElementById("col3").style.visibility="hidden";
}setTimeout("hideDivs()", 5400);
    
