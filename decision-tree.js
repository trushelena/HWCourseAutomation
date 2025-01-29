let experience = 7;
let isQaAutomation = false;
let isQaManual = true;

//using if else
if (experience < 2) {
    console.log("You are junior");
} else {
    console.log("You are not 1junior :)");
}

console.log("---------------------");

if (experience >= 0 && experience <= 1) {
    console.log("You are Trainee");
}else if (experience > 1 && experience <= 2) {
    console.log("You are junior :)");
}else if (experience > 2 && experience <= 4) {
    console.log("You are middle :)");
}else {
    console.log("You are senior :)");
}

if (isQaAutomation && experience < 1) {
    console.log("You have time to study QA Automation");
} else if (isQaManual || isQaAutomation) {
    console.log("You are QA Automation or QA Manual");
} else {
    console.log("You are waiting too long to study QA Automation");
}
