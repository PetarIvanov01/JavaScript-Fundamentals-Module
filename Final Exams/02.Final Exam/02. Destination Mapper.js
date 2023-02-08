function mapper(input) {
    let pattern = /(=|\/)(?<country>[A-Z][A-Za-z]{2,})\1/g

    let travelPoints = 0

    let execution = pattern.exec(input)
    let destination = []
    while (execution !== null) {
        
        let match = execution.groups.country
        destination.push(match)
        travelPoints += match.length
        execution = pattern.exec(input)
    }
    console.log(`Destinations: ${destination.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);

}
mapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))