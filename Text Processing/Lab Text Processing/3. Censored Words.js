function solve(text, word) {

    console.log(text.split(word).join(`*`.repeat(word.length)));

}
solve('A small sentence with some words small', 'small')