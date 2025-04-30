const product = [
    {
        id: 0,
        image: 'image/1.png',
        title: 'Creeper Backpack Minecraft',
        price: 59.99,
    },
    {
        id: 1,
        image: 'image/2.png',
        title: 'Spider Cave Plush',
        price: 17.99,
    },
    {
        id: 2,
        image: 'image/3.png',
        title: 'Ghast Cup',
        price: 8.99,
    },
    {
        id: 3,
        image: 'image/4.png',
        title: 'Lego Lama Minecraft',
        price: 59.99,
    },
    {
        id: 4,
        image: 'image/5.png',
        title: 'Survival Book Minecraft',
        price: 39.99,
    },
    {
        id: 5,
        image: 'image/6.png',
        title: 'Echanted Book Minecraft',
        price: 39.99,
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
        <p style='font-weight:bold;'>${title}</p>
        <h2>$ ${price}</h2>`+
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
        document.getElementById("total").innerHTML = "$ "+0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:18px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}