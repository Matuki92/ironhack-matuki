// Rover Object Goes Here
// ======================
var kata = {
  name : "Kata",
  direction : "S",
  row: 0,
  col: 0,
}
var bot1 = {
  name : "Bob",
  direction : "S",
  row: 0,
  col: 9,
}
var bot2 = {
  name : "Mel",
  direction : "N",
  row: 9,
  col: 0,
}
var bot3 = {
  name : "Yol",
  direction : "N",
  row: 9,
  col: 9,
}
// ======================

// 10x10 starting grid.

var grid = [
  [null,null,null,null,"###",null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,"###",null,null,null,null,"###",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,"###",null,null,null,null,null],
  [null,null,null,null,"###",null,null,null,null,"###"],
  [null,"###",null,null,"###",null,null,null,null,"###"],
  [null,"###",null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,"###",null,null,null,null]
]
// ==================================================


//Places the position of the rover in the grid.
function place(rover){

  grid[rover.row][rover.col] = rover.name + " (" + rover.direction + ")";

}
// first position.
place(kata);
place(bot1);
place(bot2);
place(bot3);

for (var i = 0; i < grid.length; i++){

  console.log(grid[i]);

}

console.log("\nCall the functions moveForward(), moveBackwards(), turnLeft(), turnRight() to move Kata.\nBot rovers move after you\nThe directions each rover is facing is shown on the grid\n\"###\" stands for obstacle.")
// ==================================================

//Print grid and movements
function print(){

  for (var i = 0; i < grid.length; i++){

    console.log(grid[i]);

  }
}
// ==================================================

// Bot movement pick.
function moveBot(rover){

  var rnd = Math.floor(Math.random()*4)

  switch (rnd){

    case 0: forward(rover);break;
    case 1: backwards(rover);break;
    case 2: rotateL(rover);break;
    case 3: rotateR(rover);break;

  }
}
// ==================================================

// General movement functions.

function forward(rover){

  switch (rover.direction){

    case "N": if(rover.row-1 >= 0 && grid[rover.row-1][rover.col] === null){grid[rover.row][rover.col] = null; rover.row--;};break;
    case "E": if(rover.col+1 <= 9 && grid[rover.row][rover.col+1] === null){grid[rover.row][rover.col] = null; rover.col++;};break;
    case "S": if(rover.row+1 <= 9 && grid[rover.row+1][rover.col] === null){grid[rover.row][rover.col] = null; rover.row++;};break;
    case "W": if(rover.col-1 >= 0 && grid[rover.row][rover.col-1] === null){grid[rover.row][rover.col] = null; rover.col--;};break;

  }

  place(rover);

}

function backwards(rover){

  switch (rover.direction){

    case "S": if(rover.row-1 >= 0 && grid[rover.row-1][rover.col] === null){grid[rover.row][rover.col] = null; rover.row--;};break;
    case "W": if(rover.col+1 <= 9 && grid[rover.row][rover.col+1] === null){grid[rover.row][rover.col] = null; rover.col++;};break;
    case "N": if(rover.row+1 <= 9 && grid[rover.row+1][rover.col] === null){grid[rover.row][rover.col] = null; rover.row++;};break;
    case "E": if(rover.col-1 >= 0 && grid[rover.row][rover.col-1] === null){grid[rover.row][rover.col] = null; rover.col--;};break;

  }

  place(rover);

}

function rotateR(rover){

  switch (rover.direction){

    case "N": rover.direction = "E";break;
    case "E": rover.direction = "S";break;
    case "S": rover.direction = "W";break;
    case "W": rover.direction = "N";break;

  }

  place(rover);

}

function rotateL(rover){                   

  switch (rover.direction){

    case "N": rover.direction = "W";break;
    case "W": rover.direction = "S";break;
    case "S": rover.direction = "E";break;
    case "E": rover.direction = "N";break;

  }

  place(rover);

}
// ==================================================

// Main user movement functions.
function moveForward(){

  forward(kata);
  moveBot(bot1);
  moveBot(bot2);
  moveBot(bot3);

  print();

}

function moveBackwards(){

  backwards(kata);
  moveBot(bot1);
  moveBot(bot2);
  moveBot(bot3);

  print();

}

function turnLeft(){

  rotateL(kata);
  moveBot(bot1);
  moveBot(bot2);
  moveBot(bot3);

  print();

}

function turnRight(){

  rotateR(kata);
  moveBot(bot1);
  moveBot(bot2);
  moveBot(bot3);

  print();

}