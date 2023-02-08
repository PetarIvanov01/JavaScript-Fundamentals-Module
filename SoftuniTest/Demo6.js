function Class(input) {
    /*•	Първата цифра на първото число е в интервала от цифрата K до 8, включително.
 •	Втората цифра на първото число е в интервала от 9 до L, включително.
 •	Първата цифра на второто число е в интервала от цифрата M до 8, включително.
 •	Втората цифра на второто число е в интервала от 9 до N, включително.
 */

    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let hasEnded = false;
    let counterSmeni = 0;

    for (let i = K; i <= 8; i++) {
        for (let j = 9; j >= L; j--) {
            for (let k = M; k <= 8 ; k++) {
                for (let l = 9; l >= N; l--) {
                     isPossible = i % 2 == 0 && k % 2 == 0 && l % 2 != 0 && j % 2 != 0;

                    let firstNum = i * 10 + j;
                    let secondNum = k * 10 + l;

                    if(isPossible && firstNum == secondNum){
                        console.log(`Cannot change the same player.`);
                    }
                    else if(isPossible && firstNum != secondNum){
                        console.log(`${i}${j} - ${k}${l}`);
                        counterSmeni++;
                    }
                    if(counterSmeni >= 6){
                        has 
                    }
                    if(hasEnded){
                        break;
                    }
                }
                if(hasEnded){
                    break;
                }
            }
            if(hasEnded){
                break;
            }
        }
        if(hasEnded){
            break;
        }
    }
}
Class(["7",
"6",
"8",
"5"])


