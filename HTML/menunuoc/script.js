function myFunction(){
    let money=0;
    let name;
    let e = document.getElementById("drink");
    let giaTri = e.options[e.selectedIndex].text;
    
    switch (giaTri){
        case "Coca cola":
            money = 17000;
            name="Coca cola";
            alert(money);
            break;
        case "Nước suối":
            money=10000;
            name="Nước suối";
            break;
        case "7Up":
            money=17000;
            name="7Up";
            break;
        case "Pessi":
            money=17000;
            name="Pessi";
            break;
        case "Cam ép":
            money=17000;
            name="Cam ép";
            break;
        case "Sting":
            money=17000;
            name="Sting";
            break;
        case "Bò Húc":
            name="Bò Húc";
            money=20000;
            break;
        default: name="none";
        break;
    }
    //cài đặt cho thằng opt2
    // let namefruit;
    // let eat = document.getElementById("eat");
    // let select = eat.options[eat.selectedIndex].text;
    // switch (select){
    //     case "Trái cây nhỏ":
    //         money+=99000;
    //         namefruit="Trái cây nhỏ";
    //         break;
    //     case "Trái cây lón":
    //         money+=129000;
    //         namefruit="trái cây lớn";
    //         break;
    //     case "Bưởi":
    //         money+=189000;
    //         namefruit="Bưởi";
    //         break;
    //     default :namefruit="không có loại nào"
    // }

    // let input =document.getElementById("money").value;
    // let total = input-money;
    // if (total<0){
    //     document.getElementById("here").innerHTML="Số dư của bạn chưa đủ";
    //     document.getElementById("here").style.color='red'
    // }
    // else{
    //     document.getElementById("first").innerHTML = "bạn chọn nước:"+ name;
    //     document.getElementById("second").innerHTML = "bạn chọn trái cây" +namefruit;
    //     document.getElementById("here").innerHTML="So tiền còn lại của bạn là: "+total;
    // }


    
}