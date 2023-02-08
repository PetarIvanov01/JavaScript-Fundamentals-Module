function employees(input) {

    class Employees {
        constructor(name, personalNumber) {
            this.name = name
            this.number = personalNumber
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`)
        }
    }
    for (const el of input) {
        let nameEmployee = el
        let personalNumber = el.length
        let employee = new Employees(nameEmployee, personalNumber)

        employee.print()
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])