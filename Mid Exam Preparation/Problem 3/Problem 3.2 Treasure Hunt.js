function treasureHunt(arr) {
    let array = arr.slice();
    let initialChests = array.shift().split("|");
    let isYohohoThere = false;
    for (let element of array) {
        if (isYohohoThere) {
            break;
        }
        let currentLine = element.split(" ");
        let currentCommand = currentLine.shift();
        switch (currentCommand) {
            case "Loot":
                for (let element of currentLine) {
                    if (!(initialChests.includes(element))) {
                        initialChests.unshift(element);
                    }
                }
                break;
            case "Drop":
                let index = Number(currentLine.shift());
                if (index < 0) {
                    break;
                } else {
                    if (initialChests.length >= index) {
                      let removedChest = initialChests.splice(index, 1).join(` `) 
                                                                              ;
                        initialChests.push(removedChest);
                    } else {
                        break;
                    }
                }
                break;
            case "Steal":
                let deletingCount = Number(currentLine.shift());
                let stealArr = initialChests.splice(-deletingCount, deletingCount);
                console.log(stealArr.join(", "));
                break;
            case "Yohoho!":
                isYohohoThere = true;
                break;
        }
    }
    if (initialChests.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        let elementSumLength = 0;
        let elementsCount = 0;
        for (let i = 0; i < initialChests.length; i++) {
            elementSumLength += initialChests[i].length;
            elementsCount++;
        }
        let result = elementSumLength / elementsCount;
        console.log(`Average treasure gain: ${(result).toFixed(2)} pirate credits.`);
    }
}