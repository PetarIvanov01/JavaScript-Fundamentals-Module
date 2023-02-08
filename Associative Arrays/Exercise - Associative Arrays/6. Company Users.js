function companyUsers(input) {

    let obj = {}
    for (const el of input) {
        let [companyName, id] = el.split(` -> `)

        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = []
        }
            obj[companyName].push(id)
    }
    let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))
    sorted.forEach(el =>{

        console.log(el[0]);

        let uniqueId = new Set(el[1])
        for (const id of uniqueId) {
            console.log(`-- ${id}`);
        } 
    })
}
companyUsers(
    ['SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345']
)