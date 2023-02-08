function kNumbers(array) {

    let kNumb = array.shift()
    

        let slicedNumb = array.slice(0, kNumb)
        let slicedNumbLastEl = array.slice(-kNumb)
        

    return `${slicedNumb.join(` `)}\n${slicedNumbLastEl.join(` `)}`

}
let result = kNumbers([3, 6, 7, 8, 9])

console.log(result);