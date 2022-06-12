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
const cartItems = document.querySelector("span.cart")
const addToCart = document.querySelector("#addtocart")
let sizeTotal = 0
let sizeCount = new Array(0, 0, 0)

/*function sizeMatch(sizeSelected) {
    var result = new Array();
    for (var i = 0; i < sizeSelected.length; i++) {
        // If match found push the match to the result array.
        if (checkboxValues.indexOf(sizeSelected[i]) != -1) {
            result.push(carType[i])
        }
    }
    return result;
}

searchMatch(sizeSelected)
*/

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
            cartItems.innerHTML = `( ` + ++sizeTotal + ` )`
            var hasSelected = true
            sizeCount[i]++
            break
        }
    }
    //if item has been selected, return; otherwise display alert
    if (hasSelected == true) { return }
    sizeNotSelected()
});

//spoiler
const cartButton = document.querySelector("#cart")
const cartSpoil = document.querySelector("#spoil")
const cartOpacity = document.querySelector("img.cart")
const body = document.querySelector("body")
let spoilerToggle = false
let spoiler = document.querySelector("#spoiler")

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

