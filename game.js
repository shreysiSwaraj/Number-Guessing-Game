let maximum = parseInt(prompt("Enter the maximum limit!"));
while(!maximum){
    maximum = parseInt(prompt("Please enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess =parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if(guess ==='q'){
        break;
    }
    attempts++;
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
    }else {
        guess = prompt("Too low! ENter a new guess");
    }
}
if(guess === 'q'){
    console.log("OK! YOU QUIT");
}else{
    console.log("CONGRATS YOU WIN!");
    console.log(`YOU GOT IT!. It took you ${attempts} guesses`);
}

