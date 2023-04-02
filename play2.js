const person = {
    name:'Max',
    age:'29',
    greet(){
        console.log('Hii, I am  '+ this.name); 
    }
}

// destructing obj and array
const printName = ({ name }) =>{
    console.log(name)
}

printName(person);

const { name, age } = person;
console.log(name,age);

const hobbies = ['sports','cookings'];
const [h1,h2] = hobbies;
console.log(h1,h2)

