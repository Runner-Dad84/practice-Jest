let calculator = {

    add(x,y){
        
        if ((typeof x !== "number") || (typeof y !== "number")){
            return TypeError
        }
        
        return x + y
    },
    
    subtract(x,y){

        if ((typeof x !== "number") || (typeof y !== "number")){
            return TypeError
        }

        return x - y
    },

    multiply(x,y){

        if ((typeof x !== "number") || (typeof y !== "number")){
            return TypeError
        }

        return x * y
    },

    divide(x,y){

        if ((typeof x !== "number") || (typeof y !== "number")){
            return TypeError
        }
        
        if (y === 0){
            return TypeError
        }
        return x / y
    }

};


module.exports = calculator