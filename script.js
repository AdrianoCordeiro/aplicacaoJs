/*Criando uma função */ 


const convertButton = document.querySelector (".convert-button")  
const currencySelect = document.querySelector("currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value /*Criação de variavél*/
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //outras Moedas

    const dolarToday = 5.2 /*Criação de variavél*/
    const euroToday = 6.2


    if(currencySelect.value == "Dolar" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"  
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "Euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"  
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"  
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValues) /* ouvinte de Eventos*/