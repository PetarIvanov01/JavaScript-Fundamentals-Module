function astra(input) {

    let patter = /(\||#)(?<itemName>[A-Z a-z]+)\1(?<days>[\d]{2})\/(?<month>[\d]{2})\/(?<year>\d{2})\1(?<calories>[0-9]+)\1/g
    
    let yourCalories = 2000 
    let totalCalories = 0
    let cl = patter.exec(input)

    while (cl !== null) {
        let calories = Number(cl.groups.calories)
        totalCalories += calories
        cl = patter.exec(input)
    }
    let daysLive = totalCalories / yourCalories
    console.log(`You have food to last you for: ${Math.trunc(daysLive)} days!`);

    let data = patter.exec(input)
    while (data !== null) {
        
        let itemName = data.groups.itemName
        let expirationData = `${data.groups.days}/${data.groups.month}/${data.groups.year}`
        let calories = Number(data.groups.calories) 

        console.log(`Item: ${itemName}, Best before: ${expirationData}, Nutrition: ${calories}`);
        
        data = patter.exec(input)
    }
}
astra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])

console.log(`-------------------------`);

astra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])