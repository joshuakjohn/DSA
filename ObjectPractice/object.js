//1. Basic Object Example
/*
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};

console.log(person.name); // Accessing property: 'John Doe'
console.log(person.age);  // 30
*/

//2. Object with Functions (Methods)
/*
const person = {
    name: 'Jane Doe',
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // 'Hello, my name is Jane Doe'
*/

//3. Nested Objects
const company = {
    name: 'Tech Corp',
    location: 'New York',
    departments: {
        engineering: {
            manager: 'Alice',
            employees: 30
        },
        marketing: {
            manager: 'Bob',
            employees: 20
        }
    }
};

console.log(company.departments.engineering.manager); // 'Alice'
console.log(company.departments.marketing.employees); // 20
