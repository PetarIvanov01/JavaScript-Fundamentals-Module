function addressBook(input) {
    let addressBook = {}

    for (let el of input) {
        let [name , address] = el.split(`:`)
        if (addressBook.hasOwnProperty(address)) {
            addressBook[name] = address
        }else{
            addressBook[name] = address
        }
    }

    let sorted = Object.entries(addressBook).sort((a,b) =>{
        let keyA = a[0]
        let keyB = b[0]
        return keyA.localeCompare(keyB)
    })
    for (let [name,address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
    
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])