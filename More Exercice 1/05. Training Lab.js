function 





trainingLab (input){
    const dyljinaMetri = Number(input[0]);
    const shirinaMetri = Number(input[1]);
    const dyljinaSantimetri = dyljinaMetri * 100;
    const shirinaSantimetri = shirinaMetri * 100;
    const shirinaBezKoridor = shirinaSantimetri - 100;
    const broiMasiShirina = shirinaBezKoridor / 70;
    const broiMasiDyljina = dyljinaSantimetri / 120;
    
console.log (broiMasiShirina(Math.floor) + broiMasiDyljina(Math.floor)); 
}

trainingLab (["15", "8.9"]);