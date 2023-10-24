
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

var removeCartItemButtons = document.getElementsByClassName('removebutton')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

var addToCartBtns = document.getElementsByClassName("addtocart");
for(var i =0; i<addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCartClicked)
} 

var quantityInputs = document.getElementsByClassName('cartQuantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
}

document.getElementsByClassName('purchase')[0].addEventListener('click', purchaseClicked)
    
}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCart(item_title, price, imageSrc){
    var cart_row = document.createElement("div");
    var cartlist = document.getElementsByClassName("cart")[0];
    var cart_row_content = `<div class="cartItemsBox">
                                <img src="${imageSrc}" class="cartImage">
                                <div class="cartTitle">${item_title}</div>
                                <span class="cartPrice">Rs ${price}</span>
                                <input class = "cartQuantity" type="number" value = 1>
                                <button  class ="removebutton" >REMOVE</button>
                            </div><br>` ;
    cart_row.innerHTML = cart_row_content;
    console.log("clicked "+ cart_row);
    cartlist.appendChild(cart_row);
    //check Remove Button
    cart_row.getElementsByClassName('removebutton')[0].addEventListener('click', removeCartButton);
    cart_row.getElementsByClassName('cartQuantity')[0].addEventListener('change', quantityChanged );

}


function addToCartClicked(event) {
    var button = event.target;
    console.log(button);
    var item = button.parentElement; 
    console.log(item);
    var item_title = item.getElementsByClassName("itemTitle")[0].innerText;
    console.log(item_title);
    var price = item.getElementsByClassName("big")[0].innerText;
    price = (Math.round(price*100)/100).toFixed(2);
    var imageSrc = item.getElementsByClassName("images")[0].src;
    addToCart(item_title, price, imageSrc);
    updateCartTotal();
}  



function removeCartButton(event){
    var remButton = event.target;
    remButton.parentElement.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cartItemsBox')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        console.log(cartRow);
        var priceElement = cartRow.getElementsByClassName('cartPrice')[0]
        var quantityElement = cartRow.getElementsByClassName('cartQuantity')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs ', ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        console.log(total);
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total')[0].innerText = 'Total : Rs ' + total;
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
