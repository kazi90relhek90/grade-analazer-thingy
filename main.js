// STUDENT GRADES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let grades = [60, 70, 45, 20, 40, 90, 100, 30, 45, 75, 40, 80];
let max = 100; // grade values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / grades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < grades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = grades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'first40') {
        grades.splice(0 , 1, 40)
        outputEl.innerHTML = 'First grade to 40';
    } else if (selection == 'last50') {
        grades.splice(grades.length, 1, 50)
        outputEl.innerHTML = 'Last grade to 50';
    } else if (selection == 'random100') {
        grades.splice(Math.floor(Math.random()*13), 1, 100)
        outputEl.innerHTML = 'Random grade to 100';
    } else if (selection == 'addRandom') {
        let grade1 = grades.length + Math.floor(Math.random()*100)
        grades.splice(grades.length, 0, grade1)
        outputEl.innerHTML = 'Add random grade';
    } else if (selection == 'removeLast') {
        grades.pop()
        outputEl.innerHTML = 'Remove the last grade';
    } else if (selection == 'count50') {
        var g = 0
        for (let n = 0 ; n < grades.length ; n++)
        if (grades[n]  < 50){
        g++
        outputEl.innerHTML = 'The number of grades below 50 is ' + g ;}
    } else if (selection == 'change50') {
        for (let x = 0 ; x < grades.length ; x++)
        if (grades[x]  < 50){
            grades[x] = 50
        outputEl.innerHTML = 'Change low grades to 50';}
    } else if (selection == 'increase10') {
        for (let v = 0 ; v < grades.length ; v++){
         let per = grades[v]/10
         grades[v] += per
        outputEl.innerHTML = 'Increase all grades by 10%'};
    } else if (selection == 'decrease10') {
        for (let v = 0 ; v < grades.length ; v++){
            let per = grades[v]/10
            grades[v] -= per
        }
        outputEl.innerHTML = 'Decrease all grades by 10%';
    } else if (selection == 'remove50') {
        for (let v = 0 ; v < grades.length ; v++)
        if (grades[v] < 50){
            grades.splice(v, 1)
            v--
        outputEl.innerHTML = 'Remove grades below 50';}
    } 
}
