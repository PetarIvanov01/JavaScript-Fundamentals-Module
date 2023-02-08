function solve(word, text) {
  
    let arr = text.split(` `)
    arr = arr.map(el => el.toLowerCase())
  
    if (arr.includes(word.toLowerCase())) {
      console.log(word);
      return
    }
    console.log(`${word} not found!`);
  
  
  }
  solve('Javascript',
  'JavaScript is the best programming language')