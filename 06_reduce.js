function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce((x,value)=>{
        x[value] = x[value]?x[value]+1:1;
        return x;
    },{})
  }

  //var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
  //console.log(countWords(inputWords))

  module.exports = countWords