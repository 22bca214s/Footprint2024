const product = [
    {
        id: 0,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACPdqeDlBb1Lvc2uHTHxR6bgE9aO1Tp7-mGy9HX-rFFA7vP9ZDr1PVJ5J5RdV0Ot2mXxC3iNxJil1I43RCFvj6Ukzb38QuaLxoBk_UKlzEPii7cR_d7nv57JhNBI-IEKcyFNAUfe-CFgVcV4R0cDMIi2rKDkD_tmsEjJg1mVuvtGvpMx-4xID1YxkK2Q7alFEkZ5bm1oV3fEAdteAkJt8xKFQUfR_qXZQ-qwSeeOWsYfOu7353EabfviyfY34oph9ZMu4r1876awNyDykzybvRDio0MUM6QJseBgsjBtCn6kdzGJpjxLOtcuPgX-o2YLqaEA7YtzBvJ8h1bTEA8fU5nXQBowp5G7bUL727phBlSV0PLtNwcqfZYYvL2jQE24D5J9yHvbKKATChEEcwxLBcAo/p.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACP07kymVcgKaNgxVTd5fa8oYYciMJL3MxiSd6b5ROVLcaERE3gsfeitlyRancs4XS5tLIwoW8MWnXhnZ6RzAzaaEttPeSOqL-naxdFubAhVNxDG3Gf0VehpV9GeA6rGY7aVoH5GjJFVgiVubm8c7VbYZACtgJQJRPJhbITtCWhOsVefunwdwiahgqByAOS3lHotgFhe_3O9OuVztKg8NMKJNXeGZ874GcVNn8IRcVsZayLmpczb-MeIliDWowzbk-NsydClJKuvQXiMM3B7U2CT9usFvmyYFqmiTh-y66xj5TENoPOBXBE5iF02DJH4Ebllr_LsMzZ-ku_dBWYafqcZ37FcNTsZFn8Oq9BIa72nN79y6IBqALMoJMGBiha23z3xmGjIrvL8f18WQSr5tfQ4/p.jpeg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACPWfankgudtkHAmx5devT09sstxRzdfXVfrY_vj3PcYsb-SOtNp6pYacBmCqp8mTSMsOIWdMJsdW_alXxDpuL_JzxV1VB6RHh638ePfUjbLSR3BtFHr1YoMuuBNFrA1dqq-drgdHwIv_y4VUnhqULZWazCJtRPGGnMdfS-ExRvvhIrbQasQjALe11ga9oPDaHuL36Hgx-MRmDiyxmrDxNVNSMAqhc6bywzzwdRv1jccfBtMCUunenW4h6eTSm41GzLEnVrjIvleC5-APMBVlIQqoTbIhNy3qacrn5aEnv4zqnClbwkcj8-LNrUq1B3yQd6JzfJYEWiczD0kwlxZuUMsDPQOHIY4jIromxMd4pcHeZlPiCRJjpGfDM00zMWrhkx74-Iy5qdkomsCnO9xGdsV/p.jpeg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACP5FeBCtmfgNj_VOENthDoObSDmqGS5osL0l5r7-_x-y-509IOKrIWTBJXrZ6zBy5VgmlnkbwZP1EkNYp9Lx1QoEIZGbng-mB0GBWE-Cwb-FU1U6ooy1puWTeFmX-L5ILikpZOw2U7qTcrbwS5Exkp91PnzLyHas62Nx6X_DgbkY8v99JaZ0C9YJjQlxjTFNG8xtPXfB95_QOv4lX8FvQXTpuN_supxrhgBsUYBFDEHXbkgyl4JMPPJZk3BNqWOFosN-eJpI-VxQXsDULaYcCZX7rw26pB3sV91pEywn60i7RlryMrJJQM7rdcj2WN2S-dfkW5c769SQy1JIpT80qrRsjjFjZ5mDv7nUNTVdHif1vpGfNDEC5zSHnGc_5uDpXgn5G9dVocV3pweSDCZ7xXo/p.jpeg',
        title: 'Head Phones',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}