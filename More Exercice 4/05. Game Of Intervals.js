/* function gameOfIntervals(input){
let index = 0;
let countOfMoves = Number(input[index]);
index++;

let from0to9 = 0;
let from10to19 = 0;
let from20to29 = 0;
let from30to39 = 0;
let from40to50 = 0;
let invalidNumbers = 0;

let tempResult = 0;
let result = 0;

for(let i = 0; i < countOfMoves; i++);
let number = Number(input[index]);
index++;
result += tempResult;

if (number >= 0 && number <= 9){
    result = tempResult + number * 0.2; 
    from0to9++;
} else if (number >= 10 && number <= 19){
    result = result + number * 0.3; 
    from10to19++;
} else if (number >= 20 && number <= 29){
    result = number * 0.4; 
    from20to29++;
} else if (number >= 30 && number <= 39){
    result = result + 50;
    from30to39++;
} else if (number >= 40 && number <= 50){
    result = result + 100;
    from40to50++; 
} else if (number < 0 && number > 50){
    result = result / 2;
    invalidNumbers++;
} 

console.log(result);
}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);
/* 
................................................................