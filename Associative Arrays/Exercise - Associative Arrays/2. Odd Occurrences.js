function oddOccurrences(param) {
    let occurrences = param.split(` `).map(w => w.toLowerCase())
    let resultObj = {}
    
    for (const words of occurrences) {
        if (!resultObj.hasOwnProperty(words)) {
            resultObj[words] = 1
        }
        else{
          resultObj[words]++  
        }
    }
    
    let result = ``
    for (let el of occurrences) {
        if (resultObj[el] % 2 === 1) {
            result += `${el} `;

            delete resultObj[el];
        }
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')