//render selectSize
const small = document.querySelector("#s")
const medium = document.querySelector("#m")
const large = document.querySelector("#l")
let selectSize = document.querySelector("#select")

function renderSize(a) {
    selectSize.innerHTML = a
}

//change size based on which size is selected
small.addEventListener("click", function () {
    renderSize("S");
    small.style.color = "var(--clr-fonta)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderdg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderlg)";
});
medium.addEventListener("click", function () {
    renderSize("M");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fonta)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderdg)";
    large.style.borderColor = "var(--clr-borderlg)";
});
large.addEventListener("click", function () {
    renderSize("L");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fonta)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderdg)";
});
//spoiler
const cartButton = document.querySelector("#cart")
const cartSpoil = document.querySelector("#spoil")
const cartOpacity = document.querySelector("img.cart")
const totalOpacity = document.querySelector("span.cart")
const body = document.querySelector("body")
let clickToggle = false
let spoiler = document.querySelector("#spoil2")

function clickOn() {
    cartSpoil.classList.replace('hide', 'reveal')
    cartOpacity.style.opacity = "1"
    body.style.color = "var(--clr-fonta)"
    cartButton.style.background = "white"
    cartButton.style.borderColor = "var(--clr-borderlg) var(--clr-borderlg) white"
    clickOnOff()
}

function clickOff() {
    cartSpoil.classList.replace('reveal', 'hide')
    cartOpacity.style.opacity = "0.4"
    body.style.color = "var(--clr-fontb)"
    cartButton.style.background = "var(--clr-header)"
    cartButton.style.borderColor = "transparent transparent white"
    clickOnOff()
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
    let cartItems = spoiler.cloneNode(true)
    cartItems.id = 'cart2'
    cartItems.classList.add('test')
    //add vers 2 after spoiler
    document.body.appendChild(cartItems);
}




////////////////////
var s = document.querySelector("#spoil2")

function clicka() {
    let s2 = s.cloneNode(true)
    s2.id = 'cart2'
    s2.classList.add('test')
    //add vers 2 after spoiler
    s.after(s2)
}
function clickb() {
    let s2 = s.cloneNode(true)
    s2.id = 'cart2'
    s2.classList.add('test')
    //add vers 2 after spoiler
    s.after(s2)
}



cartButton.addEventListener("click", function () {
    if (clickToggle == false) {
        clickToggle = true
        clicka()
    } else {
        clickToggle = false
        clickb()
    }
});