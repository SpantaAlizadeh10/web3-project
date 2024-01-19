const calcAge = function(birthyeah){
    return 2081-birthyeah;
}

const yearEqual = function(birthyeah, firstname){
    const age= calcAge(birthyeah);
    const retirement = 65-age;

    if(retirement >0){
        console.log(`${firstname} retires in ${retirement}years`);
        return retirement;
        
    }
    else{
        console.log(`${firstname} has already retired`);
        return -1;
    
    }
    
}

console.log(yearEqual(1991, 'sepanta'));