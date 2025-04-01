var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE 
    //console.log(slice.call(arguments, 0));
    return console.log.apply(namespace, slice.call(arguments, 0));
}

//logger('foo', 'bar', 'baz');
module.exports = logger