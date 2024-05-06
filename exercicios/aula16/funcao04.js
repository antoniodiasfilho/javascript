function fatorial(x){
    let fat = 1
    for(let n = x; n > 1; n--){
        fat *= n
    }
    return fat
}

console.log(fatorial(5))