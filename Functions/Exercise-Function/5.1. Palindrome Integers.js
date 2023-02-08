function palindrome(input) {

    for (const el of input) {
        let current = String(el)
        let reversed = String(el).split(``).reverse().join(``)

        if (current === reversed) {
            console.log(`true`);
        }else{
            console.log(`false`);
        }
    }

}

palindrome([123, 323, 421, 121])





