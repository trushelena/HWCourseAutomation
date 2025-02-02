import { isQaAutomation } from "./arifmetics";

const experience = 7;
const isQaManual = true;

//using if else
if (experience < 2) {
    console.log("You are junior");
} else {
    console.log("You are middle or senior)");
}

console.log("---------------------");

//using if else if
if (experience >= 0 && experience <= 1) {
    console.log("You are Trainee");
}else if (experience > 1 && experience <= 2) {
    console.log("You are junior :)");
}else if (experience > 2 && experience <= 4) {
    console.log("You are middle :)");
}else {
    console.log("You are senior :)");
}

//Using logical operations
if (isQaAutomation && experience < 1) {
    console.log("You have time to study QA Automation");
} else if (isQaManual || isQaAutomation) {
    console.log("You are QA Automation or QA Manual");
} else {
    console.log("You should consider studying QA Automation");
}
