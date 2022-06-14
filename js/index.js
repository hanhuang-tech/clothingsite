//render selectSize
const small = document.querySelector("#s")
const medium = document.querySelector("#m")
const large = document.querySelector("#l")
const chosenSize = document.querySelector("#chosensize")
let sizeSelected = [false, false, false];

function renderSize(a) {
    chosenSize.innerHTML = a
}

//change size when selected
small.addEventListener("click", function () {
    renderSize("S");
    small.style.color = "var(--clr-fonta)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderdg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderlg)";
    sizeSelected = [true, false, false]
});
medium.addEventListener("click", function () {
    renderSize("M");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fonta)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderdg)";
    large.style.borderColor = "var(--clr-borderlg)";
    sizeSelected = [false, true, false]
});

large.addEventListener("click", function () {
    renderSize("L");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fonta)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderdg)";
    sizeSelected = [false, false, true]
});

//add to cart
const cartAddedItems = document.querySelector("span.cart")
const addToCart = document.querySelector("#addtocart")
let sizeTotal = 0
let sizesCount = [0, 0, 0]

function sizeNotSelected() {
    alert("Please select a size first")
}

function cartEmpty() {
    alert("Please add an item to your cart")
}

addToCart.addEventListener("click", function () {
    //check for sizeSelected
    for (let i = 0; i < sizeSelected.length; i++) {
        if (sizeSelected[i] == true) {
            var hasSelected = true
            cartAddedItems.innerHTML = `( ` + ++sizeTotal + ` )`
            sizesCount[i]++
            collateSpoil(spoilSmall(), spoilMed(), spoilLarge())
            break
        }
    }
    //if item has been selected, return; otherwise display alert
    if (hasSelected == true) { return }
    sizeNotSelected()
});


//renderCart
let skipSize = [false, false, false]
let addSize = false
let spoiler = document.querySelector("#spoiler")
let spoilerItems = spoiler.cloneNode(true)
spoiler.remove()    //remove intial spoiler content
const cartSpoil = document.querySelector("#spoil")
let noOfPrice = document.querySelector("#noPrice")

var cartSmall = spoilerItems.cloneNode(true);
var cartMed = spoilerItems.cloneNode(true);
var cartLarge = spoilerItems.cloneNode(true);

//check if any chosen sizes are not in cart
function checkEmpty() {
    for (let i = 0; i < sizesCount.length; i++) {
        if (sizesCount[i] == 0 && spoilSize.innerHTML == "S") { skipSize[0] = true }
        else if (sizesCount[i] == 0 && spoilSize.innerHTML == "M") { skipSize[1] = true }
        else if (sizesCount[i] == 0 && spoilSize.innerHTML == "L") { skipSize[2] = true }
    }
}

function spoilSmall() {
    if (sizesCount[0] > 0) {
        cartSmall.id = "small";
        cartSmall.querySelector("#spoilSize").innerHTML = "S"
        cartSmall.querySelector("#noPrice").innerHTML = sizesCount[0] + "x"
        console.log("cartSmall")
    }
    return cartSmall
}

function spoilMed() {
    if (sizesCount[1] > 0) {
        cartMed.id = "med";
        cartMed.querySelector("#spoilSize").innerHTML = "M"
        cartMed.querySelector("#noPrice").innerHTML = sizesCount[1] + "x"
        console.log("cartMed")
    }
    return cartMed
}

function spoilLarge() {
    if (sizesCount[2] > 0) {
        cartLarge.id = "large";
        cartLarge.appendChild(spoilerItems)
        cartLarge.querySelector("#spoilSize").innerHTML = "L"
        cartLarge.querySelector("#noPrice").innerHTML = sizesCount[2] + "x"
        console.log("cartLarge")
    }
    return cartLarge
}

function collateSpoil(small, med, large,) {
    cartSpoil.appendChild(small);
    cartSpoil.appendChild(med);
    cartSpoil.appendChild(large);
}


//spoiler
const cartButton = document.querySelector("#cart")
const cartOpacity = document.querySelector("img.cart")
const body = document.querySelector("body")
let spoilerToggle = false


function spoilerClickOn() {
    cartSpoil.classList.replace('hide', 'reveal')
    cartOpacity.style.opacity = "1"
    body.style.color = "var(--clr-fonta)"
    cartButton.style.background = "white"
    cartButton.style.borderColor = "var(--clr-borderlg) var(--clr-borderlg) white"
}

function spoilerClickOff() {
    cartSpoil.classList.replace('reveal', 'hide')
    cartOpacity.style.opacity = "0.4"
    body.style.color = "var(--clr-fontb)"
    cartButton.style.background = "var(--clr-header)"
    cartButton.style.borderColor = "transparent transparent white"
}

cartButton.addEventListener("click", function () {
    if (sizeTotal == 0) {
        cartEmpty()
    }
    else if (spoilerToggle == false) {
        spoilerToggle = true
        spoilerClickOn()
    } else {
        spoilerToggle = false
        spoilerClickOff()
    }
});

//cart items
function clickOnOff() {
    let cartItems = cartSpoil.cloneNode(true)
    cartItems.id = 'cart2'
    cartItems.classList.add('test')
    //add vers 2 after spoiler
    document.body.appendChild(cartItems);
}

