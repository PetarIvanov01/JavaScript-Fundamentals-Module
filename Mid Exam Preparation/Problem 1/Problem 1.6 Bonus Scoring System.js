function bonusScoringSystem(input) {

    let numberStudents = Number(input.shift())
    let totalLectures = Number(input.shift())
    let additionalBonus = Number(input.shift())

    let maxAtt = 0;
    let maxBonus = 0;

    for (let attendances of input) {

        attendances = Number(attendances);
        let bonus = (attendances / totalLectures) * (5 + additionalBonus);
        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAtt = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])