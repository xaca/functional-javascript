module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce((anterior,actual,indice,arr)=>{
        //console.log(anterior,actual,indice,arr)
        anterior[indice] = fn(actual)
        return anterior;
    },[])
}