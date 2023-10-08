const convertButton = document.querySelector("#separator");
const currencyBase = document.querySelector("#amounts-base");
const currencyDestiny = document.querySelector("#amounts-destiny");

//Flags das Moedas
const flagBase = document.querySelector("#currency-base-flag");
const flagDestiny = document.querySelector("#currency-destiny-flag");

// Valores das moedas
const dollarToday = 5.14;
const euroToday = 5.44;
const libraToday = 6.29;
const realToday = 1.0;

//Valores para referência
const referenceBase = document.querySelector("#amount-select-selected");
const referenceBaseValueConverted = document.querySelector(
	"#amount-to-convert-today"
);
const referenceDestinyFlag = document.querySelector("#amount-to-convert");

//Funções

function convertValues() {
	const amountToConvert = document.querySelector("#amount-value");
	const amountConverted = document.querySelector("#amount-value-converted");

    let amountFormated = amountToConvert.value;
    const amountBeforeFormated = amountFormated

    
	if (currencyBase.value == "brl" || currencyBase.value == "eur" || currencyBase.value == "usd" || currencyBase.value == "gbp") {

        //BRL
        if(currencyDestiny.value == "brl"){
            console.log("Entrou no IF do destino BRL")
            if(currencyBase.value == "usd"){
                amountConverted.value = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(amountFormated * dollarToday);
            }
            if(currencyBase.value == "eur"){
                amountConverted.value = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(amountFormated * euroToday);
            }
            if(currencyBase.value == "gbp"){
                amountConverted.value = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(amountFormated * libraToday);
            }
            if(currencyBase.value == "brl"){
                amountConverted.value = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(amountFormated * realToday);
            }
        }

        //USD
        if(currencyDestiny.value == "usd"){
            console.log("Entrou no IF do destino USD")
            if(currencyBase.value == "usd"){
                amountConverted.value = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amountFormated);
            }
            if(currencyBase.value == "eur"){
                amountConverted.value = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amountFormated / euroToday);
            }
            if(currencyBase.value == "gbp"){
                amountConverted.value = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amountFormated / libraToday);
            }
            if(currencyBase.value == "brl"){
                amountConverted.value = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amountFormated / dollarToday);
            }
        }
	
        //EUR
        if(currencyDestiny.value == "eur"){
            console.log("Entrou no IF do destino EUR")
            if(currencyBase.value == "usd"){
                amountConverted.value = new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                }).format(amountFormated * euroToday / dollarToday);
            }
            if(currencyBase.value == "eur"){
                amountConverted.value = new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                }).format(amountFormated);
            }
            if(currencyBase.value == "gbp"){
                amountConverted.value = new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                }).format(amountFormated * euroToday / libraToday);
            }
            if(currencyBase.value == "brl"){
                amountConverted.value = new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                }).format(amountFormated / euroToday);
            }
        }

        //GBP
        if(currencyDestiny.value == "gbp"){
            console.log("Entrou no IF do destino GBP")
            if(currencyBase.value == "usd"){
                amountConverted.value = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP",
                }).format(amountFormated * libraToday / dollarToday);
            }
            if(currencyBase.value == "eur"){
                amountConverted.value = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP",
                }).format(amountFormated * libraToday / euroToday);
            }
            if(currencyBase.value == "gbp"){
                amountConverted.value = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP",
                }).format(amountFormated);
            }
            if(currencyBase.value == "brl"){
                amountConverted.value = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP",
                }).format(amountFormated / libraToday);
            }
        }
    
    
    }

    // amountToConvert.value = new Intl.NumberFormat("pt-BR", {
    //     currency: "BRL"
    // }).format(amountBeforeFormated);


}

function flagUpdate() {
	if (currencyBase.value == "brl") {
		flagBase.src = "./assets/flags/brl.svg";
	}
	if (currencyBase.value == "eur") {
		flagBase.src = "./assets/flags/eur.svg";
	}
	if (currencyBase.value == "gbp") {
		flagBase.src = "./assets/flags/gbp.svg";
	}
	if (currencyBase.value == "usd") {
		flagBase.src = "./assets/flags/usd.svg";
	}
	if (currencyDestiny.value == "brl") {
		flagDestiny.src = "./assets/flags/brl.svg";
	}
	if (currencyDestiny.value == "eur") {
		flagDestiny.src = "./assets/flags/eur.svg";
	}
	if (currencyDestiny.value == "gbp") {
		flagDestiny.src = "./assets/flags/gbp.svg";
	}
	if (currencyDestiny.value == "usd") {
		flagDestiny.src = "./assets/flags/usd.svg";
	}
}
function referenceUpdate() {
	flagUpdate();

	//BRL
	if (currencyBase.value == "brl" && currencyDestiny.value == "usd") {
		referenceBase.innerHTML = "BRL";
		referenceBaseValueConverted.innerHTML = (1 / dollarToday).toFixed(2);
		referenceDestinyFlag.innerHTML = "USD";
	}
	if (currencyBase.value == "brl" && currencyDestiny.value == "eur") {
		referenceBase.innerHTML = "BRL";
		referenceBaseValueConverted.innerHTML = (1 / euroToday).toFixed(2);
		referenceDestinyFlag.innerHTML = "EUR";
	}
	if (currencyBase.value == "brl" && currencyDestiny.value == "gbp") {
		referenceBase.innerHTML = "BRL";
		referenceBaseValueConverted.innerHTML = (1 / libraToday).toFixed(2);
		referenceDestinyFlag.innerHTML = "GBP";
	}
	if (currencyBase.value == "brl" && currencyDestiny.value == "brl") {
		referenceBase.innerHTML = "BRL";
		referenceBaseValueConverted.innerHTML = (1 / realToday).toFixed(2);
		referenceDestinyFlag.innerHTML = "BRL";
	}

	//USD
	if (currencyBase.value == "usd" && currencyDestiny.value == "usd") {
		referenceBase.innerHTML = "USD";
		referenceBaseValueConverted.innerHTML = (
			dollarToday / dollarToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "USD";
	}
	if (currencyBase.value == "usd" && currencyDestiny.value == "eur") {
		referenceBase.innerHTML = "USD";
		referenceBaseValueConverted.innerHTML = (
			dollarToday / euroToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "EUR";
	}
	if (currencyBase.value == "usd" && currencyDestiny.value == "gbp") {
		referenceBase.innerHTML = "USD";
		referenceBaseValueConverted.innerHTML = (
			dollarToday / libraToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "GBP";
	}
	if (currencyBase.value == "usd" && currencyDestiny.value == "brl") {
		referenceBase.innerHTML = "USD";
		referenceBaseValueConverted.innerHTML = (
			dollarToday / realToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "BRL";
	}

	//EUR
	if (currencyBase.value == "eur" && currencyDestiny.value == "usd") {
		referenceBase.innerHTML = "EUR";
		referenceBaseValueConverted.innerHTML = (
			euroToday / dollarToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "USD";
	}
	if (currencyBase.value == "eur" && currencyDestiny.value == "eur") {
		referenceBase.innerHTML = "EUR";
		referenceBaseValueConverted.innerHTML = (euroToday / euroToday).toFixed(
			2
		);
		referenceDestinyFlag.innerHTML = "EUR";
	}
	if (currencyBase.value == "eur" && currencyDestiny.value == "gbp") {
		referenceBase.innerHTML = "EUR";
		referenceBaseValueConverted.innerHTML = (
			euroToday / libraToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "GBP";
	}
	if (currencyBase.value == "eur" && currencyDestiny.value == "brl") {
		referenceBase.innerHTML = "EUR";
		referenceBaseValueConverted.innerHTML = (euroToday / realToday).toFixed(
			2
		);
		referenceDestinyFlag.innerHTML = "BRL";
	}

	//GBP
	if (currencyBase.value == "gbp" && currencyDestiny.value == "usd") {
		referenceBase.innerHTML = "GBP";
		referenceBaseValueConverted.innerHTML = (
			libraToday / dollarToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "USD";
	}
	if (currencyBase.value == "gbp" && currencyDestiny.value == "eur") {
		referenceBase.innerHTML = "GBP";
		referenceBaseValueConverted.innerHTML = (
			libraToday / euroToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "EUR";
	}
	if (currencyBase.value == "gbp" && currencyDestiny.value == "gbp") {
		referenceBase.innerHTML = "GBP";
		referenceBaseValueConverted.innerHTML = (
			libraToday / libraToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "GBP";
	}
	if (currencyBase.value == "gbp" && currencyDestiny.value == "brl") {
		referenceBase.innerHTML = "GBP";
		referenceBaseValueConverted.innerHTML = (
			libraToday / realToday
		).toFixed(2);
		referenceDestinyFlag.innerHTML = "BRL";
	}
    convertValues()
}

convertButton.addEventListener("click", convertValues);
currencyBase.addEventListener("change", referenceUpdate);
currencyDestiny.addEventListener("change", referenceUpdate);
