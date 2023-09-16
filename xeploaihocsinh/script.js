function myFunction(){
    var a =document.getElementById("input1").value;
    a=parseInt(a);
    var b =document.getElementById("input2").value;
    b=parseInt(b);
    var c = document.getElementById("select");
    var value =c.options[c.selectedIndex].value;
    value=parseInt(value);
    var k;
    switch (value){
        case 1 : {
            k = (a+ b*2)/3;
            k=parseFloat(k);
            document.getElementById("input3").value=k;
            break;
        }
        case 2 : {
            k = (a*2+ b*3)/5;
            k=parseFloat(k);
            document.getElementById("input3").value=k;
            break;
        }
        case 3 : {
            k = (a*3+ b*4)/7;
            k=parseFloat(k);
            document.getElementById("input3").value=k;
            break;
        }
    }
    if (k>=8){
        document.getElementById("xeploai").innerHTML="Hoc sinh Gioi";
        document.getElementById("xeploai").style.color="red";
    }
    else if (k<8 && k>=6.5){
        document.getElementById("xeploai").innerHTML="Hoc sinh Kha";
        document.getElementById("xeploai").style.color="Green";
    }
    else{
        document.getElementById("xeploai").innerHTML="Hoc sinh trung binh";
        document.getElementById("xeploai").style.color="yellow";
    }
    document.getElementById("xeploai").style.opacity=1;

}
function myFunction1(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("xeploai").style.opacity=0;

}