function midExam(input) {


    let budget = Number(input.shift());
    let students = Number(input.shift());
    let copyStudents = students;

    let priceForFlour = Number(input.shift());
    let priceSingleEgg = Number(input.shift());
    let priceSingleApron = Number(input.shift());

    
    //For one student: 1- packaeFl , 10-eggs, 1-apron;

    let freeFlour = 0

    while (copyStudents !== 0) {

        if (copyStudents % 5 === 0 && copyStudents !== 0) {
            freeFlour++;
        }
        copyStudents--
    }

    let priceForAllStudents = priceSingleApron * (Math.ceil(students * 0.2) + students) + priceSingleEgg * 10 * (students) + priceForFlour * (students - freeFlour);

    if (budget >= priceForAllStudents) {
        console.log(`Items purchased for ${priceForAllStudents.toFixed(2)}$.`);
    }
    else{
        let diff = priceForAllStudents - budget
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
midExam([50,
    2,
    1.0,
    0.10,
    10.0])
