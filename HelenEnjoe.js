function buttonCup() {
    let firstName = prompt("What is you name ?");
    let age = prompt("How old are you ?");
    if (age >= 18) {
        alert("Hi " + firstName + " , We will contact you when the cappuccino is ready");
    } else {
        alert("Soory " + firstName + " , but you're too young for coffee");
    }
}

let buttonCoffee = document.querySelector(".buttonCup");
buttonCoffee.addEventListener("click", buttonCup);