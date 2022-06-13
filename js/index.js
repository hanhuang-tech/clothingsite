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
            break
        }
    }
    //if item has been selected, return; otherwise display alert
    if (hasSelected == true) { return }
    sizeNotSelected()
});


//renderCart
let spoilSize = document.querySelector("#spoilSize")
let skipSize = [false, false, false]
let addSize = false
let spoiler = document.querySelector("#spoiler")
let spoilerItems = spoiler.cloneNode(true)
//spoiler.style.visibility = "hidden";
const cartSpoil = document.querySelector("#spoil")
let noOfPrice = document.querySelector("#noPrice")

//check if any chosen sizes are not in cart
function checkEmpty() {
    for (let i = 0; i < sizesCount.length; i++) {
        if (sizesCount[i] == 0 && spoilSize.innerHTML == "S") { skipSize[0] = true; console.log("z") }
        else if (sizesCount[i] == 0 && spoilSize.innerHTML == "M") { skipSize[1] = true }
        else if (sizesCount[i] == 0 && spoilSize.innerHTML == "L") { skipSize[2] = true }
    }
}
/*
function renderCart() {
    for (let i = 0; i < sizesCount.length; i++) {
        if (i == 0) {
            spoilSize.innerHTML = "S"; noOfPrice.innerHTML = sizesCount[i] + "x";
            spoilerItems.style.borderColor = "white var(--clr-borderlg) var(--clr-borderlg) var(--clr-borderlg)"
            spoilerItems.appendChild(spoiler)
        }
        else if (i == 1) {
            spoilSize.innerHTML = "M"; noOfPrice.innerHTML = sizesCount[i] + "x";
            spoilerItems.style.borderColor = "white var(--clr-borderlg) var(--clr-borderlg) var(--clr-borderlg)"
            spoilerItems.appendChild(spoiler)
        }
        else {
            spoilSize.innerHTML = "L"; noOfPrice.innerHTML = sizesCount[i] + "x";
            //spoilerItems.style.transform = "translate(14px,125px)"
            spoilerItems.style.borderColor = "white var(--clr-borderlg) var(--clr-borderlg) var(--clr-borderlg)"
            spoilerItems.appendChild(spoiler)
        }
        console.log(i)
    }
}
*/

function myFunction() {
    // Create an "li" node:
    //const node = document.createElement("li");

    // Create a text node:
    //const textnode = document.createTextNode("spoiler");

    // Append the text node to the "li" node:
    //node.appendChild(textnode);

    for (let i = 0; i < sizesCount.length; i++) {
        if (sizesCount[i] == 0) {
            document.getElementById("#spoil").appendChild(spoilerItems);
            spoilSize = "Z"
            console.log("z")
        }
    }
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
    myFunction()
}

function spoilerClickOff() {
    cartSpoil.classList.replace('reveal', 'hide')
    cartOpacity.style.opacity = "0.4"
    body.style.color = "var(--clr-fontb)"
    cartButton.style.background = "var(--clr-header)"
    cartButton.style.borderColor = "transparent transparent white"
    myFunction()
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

