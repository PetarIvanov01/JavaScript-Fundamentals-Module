function matchedPhone(input) {
    
    let phonNumber = input[0]
    let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g

    let matched = pattern.exec(phonNumber)

    let validNumb = []
    while (matched !== null) {
        
       validNumb.push(matched[0]);

        matched = pattern.exec(phonNumber)
    }
    console.log(validNumb.join(`,`).trim());

}
matchedPhone([
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222"
])

matchedPhone([
    `+359 2 357 3351, +359 2 173 3408, +359-2-789-2584, +359 2 193 3953, +359-2-961-0248, +359-2-789-2584, +359 2 727 9740, +359-2-854-2280, +359 2 193 3953, +359 2 357 3351, +359 2 558 8560`
])