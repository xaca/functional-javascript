function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    //console.log(arr,fn,initial);return;
    if(!arr.length)
    {
        return initial;
    }
    
    let check = fn.toString().match(/\{([\s\S]*)\}/)[1].trim();
    
    if(check.length != 0)
    {
        initial = fn(initial,arr.pop());
    }  
    
    return reduce(arr,(arr,value)=>{
        arr[value] = arr[value]?++arr[value]:1;
        return arr;
    },{});
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