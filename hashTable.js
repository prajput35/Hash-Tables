class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; ++i){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this._hash(key);
        console.log(address);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data;        
    }

    get(key){
        let hash = this._hash(key);
        const bucket = this.data[hash];
        if(bucket){
            for( let i = 0; i< bucket.length; ++i){
                if(bucket[i][0] === key){
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        const keysArr = [];
        for(let i = 0; i < this.data.length; ++i){
            if(this.data[i]){
                if(this.data[i].length>0){
                    for(let j = 0 ; j < this.data[i].length; ++j){
                        keysArr.push(this.data[i][j][0])
                    }
                }else{
                    keysArr.push(this.data[i][0][0])
                }
            }
        }
        return keysArr;
    }
}

const hashtable = new HashTable(3);
//console.log(hashtable._hash('grapes')); 

hashtable.set('grapes',10000);
hashtable.set('apples',20000);
hashtable.set('tomato',30000);
console.log(hashtable.data);
console.log(hashtable.get('grapes'));
console.log('-------------------')
console.log(hashtable.keys());