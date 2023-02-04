function Class(num) {
    isPrime = true
    if (num > 1) {
        for(i = 2; i <= num - 1 ; i++)
        if (num % i == 0) {
            isPrime = false;
            break;
        }   
    }
    if (isPrime) {
        console.log('true');
    }else{
        console.log(`false`);
    }
}
Class(7)