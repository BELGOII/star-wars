const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput  = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
    msg.innerHTML = 'Please enter name and email';
    setTimeout(() => msg.remove(), 3000 );
    }
    else {
        console.log('success');
    }
    // console.log(nameInput.value);
}

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=> {
// e.preventDefault();
// console.log(e.target.className);
// document.querySelector('#my-form').style.background='#ccc';
// btn.style.background=' #ccc';
// document.querySelector('body').classList.add('bg-dark')
// })

// const ul = document.querySelector('.items')

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'brad'
// ul.lastElementChild.innerHTML = '<h1>Hello<h1>'

// btn.style.background = 'red'
//  single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'))
// muliple element selector
// console.log(document.querySelectorAll('.item')) 

// class Person {
//     constructor(firstname, lastname,dob) {
// this.firstname= firstname;
// this.lastname = lastname;
// this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstname} ${this.lastname} `;
//     }
// }

// const person1 = new Person('john', 'doe', '4-3-1980');
// const person2 = new Person('mary', 'smith', '12-13-1970');
// console.log(person1.firstname);
// console.log(person2.dob);
// console.log(person1.getBirthYear())
// console.log(person2.getFullName())
// const addnums = (num1=1, num2=1) =>num1 + num2;

// console.log(addnums(5,5))

// const x = 10;
// const color = x> 10 ? 'red' : 'blue';

// switch(color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue': 
// console.log('color is blue');
// break;
// default: ;
// console.log('color is NOT blue or red');
// break;
// }
// const todos = [
// {
//     id: 1,
//     text:'take out trash',
//     iscompleted: true,
// },
//     {
//         id: 2,
//         text:'meeting with boss',
//         iscompleted: true,
//     },
    
//     {
//         id: 3,
//         text: 'dentist appt',
//         iscompleted: false,
//     }
// ];


// const todoJSON =JSON.stringify(todos);
// const todocompleted = todos.filter(function(todo) {
//     return todo.iscompleted === true;
// }).map(function(todo){
//     return todo.text
// })
// console.log(todos)

// for(let todo of todos)
// {
//     console.log(todo.text)
// }
// todos.forEach(function(todo){
//     console.log(todo.text);
// })
// const todotext = todos.filter(function(todo){
//     return todo.id
    
// })
// console.log(todocompleted)
// const person = {
//     firstname:'john',
//     lastname: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', ' sports'],
//     addres:{
//         street:'50 main st',
//         city:'Boston',
//         state: 'MA',
//     }
// }
// person.email='john@gmail.com'
// console.log(person.firstname, person.lastname, person.hobbies[0], person.addres.city);
// const {firstname, lastname, addres: { city }}= person;
// console.log(firstname, lastname, city);
// console.log(person);
// const fruits= ['apples', 'oranges/*-+','pears', 10 , true];
// fruits[5]='grapes';
// fruits.push('mangos'); // last
// fruits.unshift('strawberries'); // first
// fruits.pop(); // deletes the last var in aray
// console.log(fruits.indexOf('oranges'))
// console.log(Array.isArray(fruits)); // checks if it is an array or not
// console.log(fruits);
// const s = 'Tecnology, computer, it , code!'
// console.log(s.split(', '))
// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.toUpperCase())
// console.log(s.length)
// console.log('My name is ' + name + ' and I am ' + age);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello)
// const name= 'giga';
// const age = 30;
// const rating = 4.5;
// const iscool= true;
// const x= null;
// const y= undefined
// let z;  also undefined
// console.log(typeof x);