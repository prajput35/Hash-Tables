function firstRecurringChar(data){
    let obj = {};

    for( let i = 0; i < data.length; ++i){
        
        if(obj[data[i]] !== undefined){
            return data[i];
        }else{
            obj[data[i]] = i;
        }
        console.log(obj);
    }

    return undefined;
}

let arr = [1,2,3,4,3,1,3,1]
arr = [1,2,3,4];//,3,1,3,1]
let recurringChar = firstRecurringChar(arr);
console.log('First recurring character::', recurringChar);