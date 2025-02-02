const candidate = {
    name: 'Olena',
    age: 28,
    address: {
        city: 'Wroclaw',
        country: 'Poland'
    },
    skills: ['QA', 'BA', 'JS']
};

console.log(Object.values(candidate));
console.log('-------------------------');

console.log(Object.values(candidate.address));

console.log('-------------------------');
console.log(Object.entries(candidate));
