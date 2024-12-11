// log all pairs of the array
// determine the Big O notation of this function

const boxes = ['a', 'b', 'c', 'd', 'e', 'f']

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes) // result [(a,a) (a,b) ... ]
/*
* Big O notation
* when you have a nested loops, all loops that you have inside the firts loop it was considered a multiplication
* It means that the operation would be O(n^(a)) where a is the number of the loops that you have
* in this case is O(n^2)
*
* */