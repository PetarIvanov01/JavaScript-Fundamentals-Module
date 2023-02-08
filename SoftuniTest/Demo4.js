function Class(input) {
    let days = Number(input[0]);
    let rakia = 0
    let gradus = 0
    let kolichestvo = 0
    let obshtokolichestvo = 0
    let obshtorakia = 0
    let index = 1
    for (let i = 0; i < days; i++) {
        rakia = Number(input[index]);
        index++
        gradus = Number(input[index])

        obshtorakia += rakia;
        kolichestvo = rakia * gradus;
        obshtokolichestvo += kolichestvo
        index++
    }
    let srednaGradus = obshtokolichestvo / obshtorakia

    console.log(`Liter: ${obshtorakia.toFixed(2)}`);
    console.log(`Degrees: ${srednaGradus.toFixed(2)}`);

    if (srednaGradus < 38) {
        console.log(`Not good, you should baking!`);
    }
    else if (srednaGradus >= 38 && srednaGradus < 42) {
        console.log(`Super!`);
    }
    else {
        console.log(`Dilution with distilled water!`);
    }
}
Class(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
