function employees(input) {
    
    let listOfObj = {}

    for (const el of input) {
        listOfObj.name = el
        listOfObj.number = el.length
        console.log(`Name: ${listOfObj.name} -- Personal Number: ${listOfObj.number}`);
    }


}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])