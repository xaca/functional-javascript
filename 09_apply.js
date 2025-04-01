var slice = Array.prototype.slice
function logger(namespace){
    //console.log(slice.call(arguments,1,arguments.length).join(""));
    
    return (...data)=>{
        console.log(namespace,slice.apply(data,[0,data.length]).join(" "));
    }
    //console.log(namespace,slice.call(arguments,1,arguments.length).join(""))
    /*if(arguments.length)
    {
        console.log(namespace,slice.call(arguments,1,arguments.length).join(""));
    }
    else
    {
        return logger(namespace);
    }*/
   
}
// INFO: this is an info message

//var warn = logger('WARN:')
//warn('this is a warning message', 'with more info')

//logger('foo', 'bar', 'baz');
module.exports = logger