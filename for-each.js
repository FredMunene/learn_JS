function forEach(array,func) {
    for (var element of array){
        return func(element)
    }
}