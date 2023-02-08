function Class(string) {
    let numbers = 0
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        numbers = Number(string[i])
        if (numbers % 2 === 0) {
            sum += numbers
        }
        
    }console.log(sum);
}
Class(['1','2','3','4','5','6'])
Class(['2','4','6','8','10'])