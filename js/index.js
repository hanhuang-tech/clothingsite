//render selectSize
const small = document.querySelector("#s")
const medium = document.querySelector("#m")
const large = document.querySelector("#l")
let selectSize = document.querySelector("#select")

function renderSize(a) {
    selectSize.innerHTML = a
}

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

//My Cart
const cartButton = document.querySelector("#cart")
const cartSpoil = document.querySelector("#spoil")

cartButton.addEventListener("click", function () {
    cartSpoil.classList.contains('hide')
        ? cartSpoil.classList.replace('hide', 'reveal')
        : cartSpoil.classList.replace('reveal', 'hide')
})