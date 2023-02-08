function cutReverse(input) {
    
    let firstHalf = input.substring(0,input.length/2)
    let secondHalf = input.substring(input.length/2)
    
    console.log(firstHalf.split(``).reverse().join(``));
    console.log(secondHalf.split(``).reverse().join(``));
    
}
cutReverse(`tluciffiDsIsihTgnizamAoSsIsihT`)