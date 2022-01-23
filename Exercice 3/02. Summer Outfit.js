function summerOutfit(input){

    let degrees = Number(input[0]);
    let timeOfDay = input[1];

switch (timeOfDay) {
case "Morning":
if (degrees >= 10 && degrees <= 18){
    console.log (`It's ${degrees} degrees, get your Sweatshirts and Sneakers.`);
} else if (degrees > 18 && degrees <= 24){
    console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`);
} else if (degrees >= 25) {
    console.log (`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
}
break;

case "Afternoon":
if (degrees >= 10 && degrees <= 18){
    console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`);
} else if (degrees > 18 && degrees <= 24){
    console.log (`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
} else if (degrees >= 25) {
    console.log (`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
}
break;

case "Evening":
    console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`);
break;
    }
}

summerOutfit (["16","Morning"]);

малка грешка............