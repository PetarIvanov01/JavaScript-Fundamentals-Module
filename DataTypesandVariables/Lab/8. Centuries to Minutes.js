function Class(centure) {
    let years = centure * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let min = hours * 60;
    console.log(`${centure} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}
Class(1)