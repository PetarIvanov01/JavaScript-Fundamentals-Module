function solve(password) {
    if (lengthValidator(password) && isLetterDigit(password) && numCountMinimum(password)) {
        console.log('Password is valid');
    } else {
        if (!lengthValidator(password)) {
            console.log('Password must be between 6 and 10 characters')
        }
        if (!isLetterDigit(password)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!numCountMinimum(password)) {
            console.log(`Password must have at least 2 digits`);
        }
    }

    function isDigit(num) {
        return num >= 48 && num <= 57;
    }

    function numCountMinimum(password) {
        let count = 0;
        // let isDigit = (x) => x >= 48 && x <= 57;

        for (let char of password) {
            let charValue = char.charCodeAt(0);
            if (isDigit(charValue)) {
                count++;
            }
        }

        return count >= 2;
    }

    function lengthValidator(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isLetterDigit(password) {
        let isLowerLetter = (x) => x >= 87 && x <= 122;
        let isUpperLetter = (x) => x >= 65 && x <= 90;

        for (let char of password) {
            let charValue = char.charCodeAt(0);
            if (!isDigit(charValue) && !isLowerLetter(charValue) && !isUpperLetter(charValue)) {
                return false;
            }
        }

        return true;
    }
}
solve(`login12`)