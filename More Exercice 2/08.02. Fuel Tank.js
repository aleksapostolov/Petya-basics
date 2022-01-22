...................




function fuelTank(input){

let typeOfFuel = input[0];
let litersOfFuel = Number(input[1]);
let havingDiscount = input[2];

let gasolinePrice = 2.22;
let dieselPrice = 2.33;
let gasPrice = 0.93;

let price = 0
let totalPrice = 0

switch (typeOfFuel){
        case "Diesel": price = dieselPrice; break;
        case "Gasoline": price = gasolinePrice; break;
        case "Gas": price = gasPrice; break;
}

if (havingDiscount === "Yes"){
        gasolinePrice = gasolinePrice - 0.18;
        dieselPrice = dieselPrice - 0.12;
        gasPrice = gasPrice - 0.08;
}

if (litersOfFuel >= 20 && litersOfFuel <= 25){
       totalPrice = (litersOfFuel * price) * 0.92;
} else if (litersOfFuel > 25){
        totalPrice = (litersOfFuel * price) * 0.90;
        }
        console.log (totalPrice)
}
fuelTank (["Gas","30","Yes"]);