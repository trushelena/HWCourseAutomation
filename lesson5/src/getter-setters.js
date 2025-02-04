const computer = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2021,
    specs: {
        processor: "Intel i7",
        ram: 16,
        storage: 512
    },

    get fullInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    },

    set fullInfo(info) {
        const [brand, model, year] = info.split(" ");
        this.brand = brand;
        this.model = model;
        this.year = parseInt(year);
    },

    updateYear(newYear) {
        this.year = newYear;
        console.log(`Year updated to: ${this.year}`);
    }
};

console.log(computer.fullInfo); // returns: "Apple MacBook Pro (2021)"
computer.fullInfo = "Dell XPS 2022";
console.log(computer.fullInfo); // returns: "Dell XPS 2022"

computer.updateYear(2023); // returns: "Year updated to: 2023"
