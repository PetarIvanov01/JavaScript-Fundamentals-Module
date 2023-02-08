function reception(array) {

    let copyArr = array.map(Number)
    let studentsCount = copyArr.pop()

    let answeredStudentsPerHour = copyArr.reduce((a, b) => a + b)
    
    let hours = 0

    while (studentsCount > 0) {

        studentsCount -= answeredStudentsPerHour
        hours++
        
        if (hours % 4 === 0) {
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`);

}
reception(['3','2','5','40'])
