function reduce(arr, fn, initial) {
    /*return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step  
    })(0, initial) // IIFE. kick off recursion with initial values*/
    //let index = initial
    //console.log(typeof initial === "object",initial=={});return;
    if(initial.contador == undefined)
    {
        initial.contador = 0;
        initial.ans = {};
    }
    else
    {
        initial.contador++;
    }    
    //console.log(arr[initial.contador],initial.contador);
    //initial.ans = fn(arr[initial.contador],initial.contador);
    //console.log(initial.contador,arr.length);
    //return;
    let value = arr[initial.contador];
    initial.ans[value] = initial.ans[value]?++initial.ans[value]:1;

    if(initial.contador+1 == arr.length)
    {
        return initial.ans;
    }
    return reduce(arr,fn,initial);
}
/*a = [
    'ut',      'deserunt', 'labore',
    'dolore',  'dolore',   'ea',
    'elit',    'esse',     'commodo',
    'mollit',  'fugiat',   'exercitation',
    'duis',    'sint',     'est',
    'id',      'sint',     'tempor',
    'cillum',  'dolor',    'sit',
    'aliqua',  'quis',     'incididunt',
    'laboris', 'dolore',   'culpa',
    'sint',    'ex',       'sint',
    'non',     'laboris',  'fugiat'
  ]
b = reduce(a,(arr,value)=>{
    arr[value] = arr[value]?++arr[value]:1;
    return arr;
},{});
console.log(b);*/
module.exports = reduce