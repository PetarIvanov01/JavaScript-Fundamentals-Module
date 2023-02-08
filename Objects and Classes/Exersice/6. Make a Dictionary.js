function solve(arr) {
    let copy = [];
    let obj = {};
    for (let element of arr) {
        let converted = JSON.parse(element);
        for (let key in converted) {
            obj[key] = converted[key];
            
        }
        
   }
    for (let key in obj) {
        copy.push(`Term: ${key} => Definition: ${obj[key]}`)
    }
    console.log(copy.sort().join('\n'))
}
solve([
    '{"Coffee":"huisbgsbkjgbkjg."}',
    '{"Coffee":"fee beans) of a tropical shrub."}',
    '{"Bus":" one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating ."}',
    '{"Tape":"A narrow strip of material, typically used to hold ."}',
    '{"Microphone":"which may then be amplified, transmitted, or recorded."}'
])