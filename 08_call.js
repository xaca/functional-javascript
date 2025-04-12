function duckCount() {
    // SOLUTION GOES HERE
    //Object.prototype.hasOwnProperty.call(this,arguments);
    let sln = [];
    const slice = Function.prototype.call.bind(Array.prototype.slice);
    slice(arguments).map((obj)=>{
        if(Object.prototype.hasOwnProperty.call(obj, 'quack')){
            sln.push(obj);
        }
    });
    return sln.length;
    /*for(i in arguments)
    {
        let temp = Object.prototype.hasOwnProperty.call(arguments[i], 'quack');
        console.log(temp);
    }*/
}

module.exports = duckCount
