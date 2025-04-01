function duckCount() {
// SOLUTION GOES HERE
    const slice = Function.prototype.call.bind(Array.prototype.slice);
    let ans = [];
    
    slice(arguments).map(function(param){
        if(Object.prototype.hasOwnProperty.call(param, 'quack'))
        {
            ans.push(param);
        }
    })
    return ans.length;
}

module.exports = duckCount;