function solve(grade) {

    let formatGrade = () => {
        let gradeType
        if (grade < 3.00) {
            gradeType = `Fail`
            grade = 2;
            console.log(`${gradeType} (${grade})`)
        } else {
            if (grade < 3.50) {
                gradeType = `Poor`
            } else if (grade < 4.50) {
                gradeType = `Good`
            } else if (grade < 5.50) {
                gradeType = `Very good`
            } else {
                gradeType = `Excellent`
            }
            console.log(`${gradeType} (${grade.toFixed(2)})`);
        }
        
    }
    formatGrade(grade)

} solve(2.99)