//render selectSize
const small = document.querySelector("#s")
const medium = document.querySelector("#m")
const large = document.querySelector("#l")
const chosenSize = document.querySelector("#chosensize")
let sizeSelected = [0, 0, 0];

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
    sizeSelected[0]++
});
medium.addEventListener("click", function () {
    renderSize("M");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fonta)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderdg)";
    large.style.borderColor = "var(--clr-borderlg)";
    sizeSelected[1]++
});

large.addEventListener("click", function () {
    renderSize("L");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fonta)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderdg)";
    sizeSelected[2]++
});

//add to cart
let size = new Array(3) //s,m,l
let sizeTotal = 0
const addToCart = document.querySelector("#addtocart")
let cartItems = document.querySelector("span.cart")
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

addToCart.addEventListener("click", function () {
    //check for sizeSelected
    for (let i = 0; i < sizeSelected.length; i++) {
        if (sizeSelected[i] > 0) {
            console.log(i + " inside")
            cartItems.innerHTML = `( ` + ++sizeTotal + ` )`
            var hasSelected = true
            break
        }
    }
    //if item has been selected, return; otherwise display alert
    if (hasSelected == true) { return }
    alert("Please select a size first")
});

//spoiler
const cartButton = document.querySelector("#cart")
const cartSpoil = document.querySelector("#spoil")
const cartOpacity = document.querySelector("img.cart")
const body = document.querySelector("body")
let clickToggle = false
let spoiler = document.querySelector("spoiler")

function clickOn() {
    cartSpoil.classList.replace('hide', 'reveal')
    cartOpacity.style.opacity = "1"
    body.style.color = "var(--clr-fonta)"
    cartButton.style.background = "white"
    cartButton.style.borderColor = "var(--clr-borderlg) var(--clr-borderlg) white"
}

function clickOff() {
    cartSpoil.classList.replace('reveal', 'hide')
    cartOpacity.style.opacity = "0.4"
    body.style.color = "var(--clr-fontb)"
    cartButton.style.background = "var(--clr-header)"
    cartButton.style.borderColor = "transparent transparent white"
}

cartButton.addEventListener("click", function () {
    if (clickToggle == false) {
        clickToggle = true
        clickOn()
    } else {
        clickToggle = false
        clickOff()
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

