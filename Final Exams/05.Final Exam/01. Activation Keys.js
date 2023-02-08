function activationKeys(input) {

    let string = input.shift()

    let currentRow = input.shift()

    while (currentRow !== `Generate`) {
        let [type, ...rest] = currentRow.split(`>>>`)

        switch (type) {
            case `Contains`: contains(rest[0])
                break;
            case `Flip`: flip(rest[0], Number(rest[1]), Number(rest[2]))
                break;
            case `Slice`: slice(Number(rest[0]), Number(rest[1]))
                break;
        }
        currentRow = input.shift()
    }

    console.log(`Your activation key is: ${string}`);

    function contains(substring) {
        if (string.includes(substring)) {
            console.log(`${string} contains ${substring}`);
        }
        else{
            console.log(`Substring not found!`);
        }
    }
    function flip(type, startIndex, endIndex) {
        if (type == `Upper`) {
            let firstPart = string.substring(startIndex,endIndex)
            string = string.split(firstPart).join(firstPart.toUpperCase())
            console.log(string);
        } else if (type == `Lower`) {
            let firstPart = string.substring(startIndex,endIndex)
            string = string.split(firstPart).join(firstPart.toLowerCase())
            console.log(string);
        }
    }
    function slice(startIndex, endIndex) {
        let firstPart = string.substring(0,startIndex)
        let lastPart = string.substring(endIndex,)
        string = firstPart + lastPart
        console.log(string);
    }

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
