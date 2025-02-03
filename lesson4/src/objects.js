const candidate = {
    name: 'Olena',
    age: 28,
    address: {
        city: 'Wroclaw',
        country: 'Poland'
    },
    skills: ['QA', 'BA', 'JS'],
    func: function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address.city);
        console.log(this.address.country);
        console.log(this.skills);
    }
};

candidate.func();

//or these ways to show values
console.log(Object.values(candidate));
console.log('-------------------------');
console.log(Object.values(candidate.address));
console.log('-------------------------');
console.log(Object.entries(candidate));
