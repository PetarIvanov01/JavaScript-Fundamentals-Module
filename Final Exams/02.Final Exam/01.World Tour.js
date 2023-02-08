function worldTour(input) {

    let stops = input.shift()
    let currentRow = input.shift()

    while (currentRow !== `Travel`) {
        let commands = currentRow.split(`:`)

        switch (commands[0]) {
            case `Add Stop`:
                let index = Number(commands[1])
                let string = commands[2]

                if (index < stops.length) {
                    let firstPart = stops.substring(0, index)
                    let lastPart = stops.substring(index)
                    stops = firstPart + string + lastPart
                }
                console.log(stops);
                break;
            case `Remove Stop`:
                let startIndex = Number(commands[1])
                let endIndex = Number(commands[2])
                if (startIndex < stops.length && endIndex < stops.length) {
                    let firstPart = stops.substring(0, startIndex)
                    let lastPart = stops.substring(endIndex + 1)
                    stops = firstPart + lastPart
                }
                console.log(stops);
                break;
            case `Switch`:
                let oldString = commands[1]
                let newString = commands[2]
                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString)
                }
                console.log(stops);
                break;
        }

        currentRow = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
