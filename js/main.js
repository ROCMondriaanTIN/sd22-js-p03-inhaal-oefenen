console.log('main loaded');

const pizzaName = 'Pizza Salami';
const pizzaToppings = ['Cheese', 'Tomato sauce', 'Salami', 'Champignon', 'Onion rings'];
const pizzaName1 = 'Pizza Margaritha';
const pizzaToppings1 = ['Cheese', 'Tomato sauce'];

const resultElement = document.querySelector('.result');
const addPizzaButton = document.querySelector('.add-pizza-button');
const addPizzaToppingButton = document.querySelector('.add-pizza-topping-button');
const toppingInputElement = document.querySelector('.pizza-topping-name');
const pizzaToppingResultElement = document.querySelector('.pizza-toppings-result-list');
const pizzaNameInputElement = document.querySelector('.pizza-name');
let pizzaArray = [];
let toppingInputArray = [];

addPizzaButton.addEventListener('click', function(){
    console.log('Add pizza button clicked');
    console.log(pizzaNameInputElement.value);

    //pizza naam moet minstens 12 letters hebben en aantal toppings tenminste 2
    if(pizzaNameInputElement.value.length > 11 && toppingInputArray.length > 1){
        pizzaNameInputElement.classList.remove('error');
        const pizza = makePizza(pizzaNameInputElement.value, toppingInputArray);
        pizzaArray.push(pizza);
        showPizzas();

        resetInput();
    }
    else{
        pizzaNameInputElement.classList.add('error');
    }
});

//gooi alle invoer velden leeg
function resetInput(){
    pizzaNameInputElement.value = '';
    toppingInputElement.value = '';
    toppingInputArray = [];
    pizzaToppingResultElement.innerHTML = '';
}

addPizzaToppingButton.addEventListener('click', function(){
    console.log('Add pizza topping button clicked');
    console.log(toppingInputElement.value);
    //topping moet tenminste 4 letters hebben
    if(toppingInputElement.value.length > 3){
        //haal de rode rand weg om het invoer veld
        toppingInputElement.classList.remove('error');
        toppingInputArray.push(toppingInputElement.value);

        pizzaToppingResultElement.innerHTML = '';
        for (let i = 0; i < toppingInputArray.length; i++) {
            pizzaToppingResultElement.innerHTML += '<li>' + toppingInputArray[i] + '</li>';
        }
        toppingInputElement.value = '';
    }
    else{
        //toon rode rand om het invoer veld
        toppingInputElement.classList.add('error');
    }
});

pizzaArray.push(makePizza(pizzaName, pizzaToppings));
pizzaArray.push(makePizza(pizzaName1, pizzaToppings1));
pizzaArray.push(makePizza('Pizza Chorizo', ['Cheese', 'Tomato sauce', 'Chorizo', 'Onion rings']));

showPizzas();

function showPizzas(){
    resultElement.innerHTML = '';
    for (let i = 0; i < pizzaArray.length; i++) {
        const pizza = pizzaArray[i];
        showPizza(pizza);
        
    }
}

//showPizza(pizza);

//showPizza('Pizza Chorizo', ['Cheese', 'Tomato sauce', 'Chorizo', 'Onion rings']);

function makePizza(name, toppings){
    return {
        name : name,
        toppings : toppings,
        price : 10,

        calculatePrice : function(){
            this.price = 10;
            let nrOfToppings = this.toppings.length;
            this.price = this.price + nrOfToppings * 0.5;
            return this.price;
        }
    }
}

//Onderstaande functie toont de pizza op het scherm.
function showPizza(pizza){
    const pizzaPrice = pizza.calculatePrice();
    resultElement.innerHTML += '<strong>' + pizza.name + ' (' + pizzaPrice + ' EURO)</strong><br>';

    resultElement.innerHTML += '<lu>';
    for(let i = 0; i < pizza.toppings.length; i++){
    
        resultElement.innerHTML += '<li>' + pizza.toppings[i] + '</li>';
    }
    resultElement.innerHTML += '</lu>';
}

//prijs pizza = 10 euro + 50 cent per topping.
/*function calculatePrice(toppings){
    let price = 10;
    let nrOfToppings = toppings.length;
    price = price + nrOfToppings * 0.5;
    return price;

}*/