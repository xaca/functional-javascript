  function repeat(operation, num) {

    let cont = 0;

    while( cont < num){
        operation();
        cont++;
    }
    
  }

  // Do not remove the line below
  module.exports = repeat