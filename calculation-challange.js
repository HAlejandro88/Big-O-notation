// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // is just O(1)
    a = 50 + 3; // is O(1)

    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    } // all the loop is O(n) where n is equal to input O(input)
    return a; // is O(1)
}


/* Explication
*  a is constan number so in BigO notation is like said that is O(1) I mean that thism value never change or change each time
* loops always is linear time so its said like O(n) where n is the length of the input
* the function inside the loops is teh same case of the loops
* that's equal BIG O(3 + 4n)
*
* */

