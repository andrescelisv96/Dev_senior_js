const valor2: number = 42;

const StringValue: string = "Hello, TypeScript!";

console.log(`The value of valor2 is: ${valor2}`);
console.log(`The string value is: ${StringValue}`);


if (valor2 > 50) {
    console.log("valor2 is greater than 50.");
}else if (valor2 === 42) {
    console.log("valor2 is exactly 42.");
}else {
    console.log("valor2 is not greater than 50.");
}

for(let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}: valor2 is ${valor2}`);
}

let valor1 = ["apple", "banana", "cherry"];


for(let val of valor1) {
    console.log(`Current fruit: ${val}`);
}   

let rule =[
    {"name": "rule1", "value": 10},
]

console.log("tipo de dato de rule: ", typeof rule);


let rule2=[
    {"name": "rule2", "value": 20},
]
rule.join("rule2"); // This line is incorrect because rule[0] is an object, not an array.

console.log("tipo de dato de rule despues de join: ", rule);


rule.push(...rule2); // This line correctly adds the elements of rule2 to rule.

console.log("tipo de dato de rule despues de push: ", rule);    


rule.pop(); // This line removes the last element from the rule array.

console.log("tipo de dato de rule despues de pop: ", rule); 

rule.shift(); // This line removes the first element from the rule array.
console.log("tipo de dato de rule despues de shift: ", rule);
rule =[
    {"name": "rule1", "value": 10},
]
rule.slice(0, 1); // This line creates a shallow copy of a portion of the rule array.

console.log("tipo de dato de rule despues de slice: ", rule);


rule[0]={"name": "rule3", "value": 30}; // This line modifies the first element of the rule array.

console.log("tipo de dato de rule despues de modificar el primer elemento: ", rule);


for(let i = 0; i < rule.length; i++) {
    console.log(`Rule ${i}: name = ${rule[i].name}, value = ${rule[i].value}`);
}   

for(let val of rule) {
    console.log(`Current rule: name = ${val.name}, value = ${val.value}`);
}


let val = {"name": "rule4", "value": 4, "description": "This is rule 4"};

console.log("tipo de dato de val: ", typeof val); 

val.description = "This is the updated description for rule 4"; // This line modifies the description property of the val object.

console.log("tipo de dato de val despues de modificar la descripcion: ", val);  



function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}   


console.log(saludar("Juan")); // This line calls the saludar function with the argument "Juan".

class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }


    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

let persona1 = new Persona("Carlos", 30);
console.log(persona1.saludar()); // This line calls the saludar method of the persona1 object.


Persona.prototype.saludar = function() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
}

console.log(Persona.length); // This line calls the saludar function with the argument "Juan".