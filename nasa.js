function nasa(N) {

    let res = []
    for (let i = 1; i <= N;i++){
        if ( i % 15 === 0){
            res.push('NASA');
        } else if ( i % 5 === 0){
            res.push("SA");
        } else if (i % 3 === 0){
            res.push("NA");
        } else{
            res.push(i.toString());
        }
    }
    return res.join(" ")
}