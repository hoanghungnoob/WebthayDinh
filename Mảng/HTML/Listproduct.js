
var man = [
    {
        "id":"1",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/tải xuống.jfif"
    },
    {
        "id":"2",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/images (1).jfif"
    },
    {
        "id":"3",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/images.jfif"
    },
    {
        "id":"4",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/tải xuống (1).jfif"
    },
]
var woman = [
    {
        "id":"1",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/tải xuống.jfif"
    },
    {
        "id":"2",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/images (1).jfif"
    },
    {
        "id":"3",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/images.jfif"
    },
    {
        "id":"4",
        "name":"T-shirt",
        "code": "TC1323",
        "price": "250000",
        "image": "../image/tải xuống (1).jfif"
    },
]

function listProduct(){
    for (let i=0; i<man.length;i++){
        var demoo='<div class="col-3">';
        demoo += '<div class="card" style="width: 18rem;">';
        demoo += '<p>'+man[i].id+'</p>'
        demoo += '<img src="'+man[i].image +'" class="card-img-top" style="height:400px; width=300px">';
        demoo += '<div class="card-body">';
        demoo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demoo += '<p class="card-text">'+man [i].price+'</p>';
        demoo+='<button>dat mua</button>';
        demoo += '</div>';
        demoo += '</div>';
        demoo += '</div>';

        document.getElementById("men").innerHTML +=demoo;
    }

    for (let i=0; i<woman.length;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<p>'+woman[i].id+'</p>'
        demo += '<img src="'+woman[i].image +'" class="card-img-top" style="height:400px; width=300px">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woman[i].name+ '</h5>';
        demo += '<p class="card-text">'+woman [i].price+'</p>';
       demo+='<button>dat mua</button>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        document.getElementById("women").innerHTML +=demo;
    }
    
}
