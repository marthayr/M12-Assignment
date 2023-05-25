// STEP 1
function Cat(){}

const Dog = function(){}

// STEP 2
const cat1 = new Cat();
const dog1 = new Dog();

// STEP 3
/*
class Animal{
    constructor(){
        console.log('The Animal has been created');
    }
}
const animal1 = new Animal();
*/

// STEP 4
/*
class Animal{
    constructor(name){
        this._name = name;
        console.log(`${this._name} has been created`);
    }
}
const animal2 = new Animal('Luna');
*/

// STEP 5
/*
class Animal{
    constructor(type, breed, color, height, length){
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
        console.log(`${this._type} has been created. ${this._color}, ${this._breed}, ${this._height} tall, ${this._length} long`);
    }
}
const duke = new Animal('dog','pitbull','tan','18 inches','20 inches');
*/

// STEP 6
/*
class Animal{
    constructor(type, breed, color, height, length){
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
        console.log(`A ${this._type} has been created.`);

        for (let x in Animal) {
            console.log(`${property}: ${Animal[x]}`);
        }
    } 
}
const duke = new Animal('dog','pitbull','tan','18 inches','20 inches');
*/

// STEP 7
/*
class Animal {
    constructor(type, breed, color, height, length){
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
    }
    speak = function(){
        if(this._type === 'dog'){
            console.log(`The ${this._color} dog is barking!`)
        }
        if(this._type === 'cat'){
            console.log(`The ${this._color} cat is meowing!`)
        }
    }
}
const duke = new Animal('dog','pitbull','tan','18 inches','20 inches');
duke.speak();
*/

// STEP 8
/*
function Animal(type, breed, color, height, length) {
        let _type = type;
        let _breed = breed;
        let _color = color;
        let _height = height;
        let _length = length;

        let checkType = function(){

           return _type;
        }
        this.speak = function(){
            console.log(`The ${checkType()} has made a noise!`);           
        } 
}
const duke = new Animal('dog','pitbull','tan','18 inches','20 inches');
duke.speak();
*/

// STEP 9