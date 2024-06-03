const data = ["one", "two", "three", "four", "five", "six", "seven"]
// DO NOT HAVE RETURN VALUE ---> undifined
/* data.forEach((element, index, array) => {
    console.log(`The ${index}. element of the "${array}" array is: ${element}`)
}) */
/* data.forEach((element) => {
    console.log(element)
}) */
// MAP ALWAYS HAS RETURN VALUE -----> ARRAY WITH SAME LENGHTH AS ORIGINAL 
/* data.map((element) => {
    return `new${element}`

})
console.log(result) */

//FILTER

/* const result = data.filter((element) => element.length > 3)
console.log(result) */

//REDUCE 
/* 1. prev értéke "jéghidegmitiszol"
curr : one
Cb: prev+ curr = jeghidegmitiszol + one 

2. prev értéke "jéghidegmitiszolone"
curr : two
cb: prev + curr = jeghidegmitiszolone + two
*/
//console.log(result)
//const result = data.reduce((prev, curr) => prev + curr, "jeghidegmitiszol")

/*
ha nincs initialvalue
1. prev = első elem = "one"
current a 2. eleme = "two"






*/
const result = data.find(element => element.length > 3)
console.log(result)