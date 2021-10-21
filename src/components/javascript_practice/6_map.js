const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

// 1. Push instructor names only into new array
let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

// 2. Sleeker way to do the same thing using "Map"
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

const instructorInfo = instructors.map(i => (`${i.name}: ${i.specialty}`);
console.log(instructorInfo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});