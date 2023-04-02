// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// first way
function summarizeUser(userName, userAge, userHasHobby){
    return ('Name is '+userName)
}

// second way -> course would only  use arrow function.
// const summarizeUser = (userName, userAge, userHasHobby) =>{
//     this 
// }

// const add = (a,b) => a+b  //only returbn statement
// // one argument only,
// const addOne = a => a+1

// console.log(addOne(1))



const hobbies = ['sports','cookings'];
// console.log(hobbies.map(hobby => "Hobby: "+ hobby));
// const copiedArray = hobbies.slice();
// hobbies.push('Programming');
// const copiedArray = [...hobbies]
// console.log(copiedArray);

const toArray =(...args)=> args

console.log(toArray(1,2,3,4,5,6));

