function matchDates(input) {

    let dates = input[0]

    let pattern = /\b(?<day>\d{2})(.|-|\/)(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g

    let matchedDates = pattern.exec(dates)

    while (matchedDates !== null) {

        let day = matchedDates.groups.day
        let month = matchedDates.groups.month
        let year = matchedDates.groups.year

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        matchedDates = pattern.exec(dates)
    
    }

}
matchDates([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
])