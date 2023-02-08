function cats(input) {
    
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        Meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

   let data = input.join(` `).split(` `)
   

   for (let i = 0; i < data.length; i++) {
    let catName = data[i]
    let catAge = data[i+=1]
    
    let myCat = new Cat (catName,catAge)

    myCat.Meow()
   }
}
cats(['Mellow 2', 'Tom 5'])