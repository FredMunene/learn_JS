// is object

const is = {
    num :(num) => (typeof num) === 'number' ? true : false,
    nan :(num) => (typeof num) === 'Nam' ? true : false,
    str :(num) => (typeof num) === 'string' ? true : false,
    bool :(num) => (typeof num) === 'boolean' ? true : false,
    undef :(num) => (typeof num) === 'undefined' ? true : false,
    def :(num) => (typeof num) === 'defined' ? true : false,
    arr :(num) => (typeof num) === 'array' ? true : false,
    obj :(num) => (typeof num) === 'object' ? true : false,
    fun :(num) => (typeof num) === 'fucntion' ? true : false,
    truthy :(num) => (typeof num) === 'truthy' ? true : false,
    falsy :(num) => (typeof num) === 'falsy' ? true : false,
}

console.log(is.str(8))


