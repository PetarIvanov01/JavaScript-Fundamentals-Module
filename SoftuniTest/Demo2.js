function Class(input) {
    let priceShirt = Number(input[0])
    let nujniPari = Number(input[1]);

    let shortiPrice = priceShirt * 0.75;
    let chorapi = shortiPrice * 0.20
    let cenaButonki = (priceShirt + shortiPrice) * 2

    let sum = priceShirt + shortiPrice + chorapi + cenaButonki;
    let disscountSum = sum * 0.85

    if (disscountSum >= nujniPari) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${disscountSum.toFixed(2)} lv.`);
    }
    else {
        let diff = nujniPari - disscountSum
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }

}
Class(["55",
"310"])

