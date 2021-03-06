// Rover Object Goes Here
// ======================
var kata = {
  name : "Kata",
  direction : "S",
  row: 0,
  col: 0,
  travelLog: []
}
var bot1 = {
  name : "Bob",
  direction : "S",
  row: 0,
  col: 9
}
var bot2 = {
  name : "Mel",
  direction : "N",
  row: 9,
  col: 0
}
var bot3 = {
  name : "Yol",
  direction : "N",
  row: 9,
  col: 9
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

console.log("\nCall the functions moveForward(), moveBackwards(), turnLeft(), turnRight() or send a command, for example: commands(\"flffffffrfffffrfbbbb\") to move Kata.\nBot rovers move after you\nThe directions each rover is facing is shown on the grid\n\"###\" stands for obstacle.")
// ==================================================

//Print grid.
function print(){

  for (var i = 0; i < grid.length; i++){

    console.log(grid[i]);

  }
}
// ==================================================

// Bot movements.
function moveBot(rover){

  var rnd = Math.floor(Math.random()*4)

  switch (rnd){

    case 0: forward(rover);break;
    case 1: backwards(rover);break;
    case 2: rotateL(rover);break;
    case 3: rotateR(rover);break;

  }
}

function moveAllBots(){

  moveBot(bot1);
  moveBot(bot2);
  moveBot(bot3);

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

function commands(string){

  for (var i = 0; i < string.length; i++){

    switch (string[i]){

      case "f": forward(kata);moveAllBots();kata.travelLog.push(kata.row, kata.col + ", ");break;
      case "r": rotateR(kata);moveAllBots();break;
      case "b": backwards(kata);moveAllBots();kata.travelLog.push(kata.row, kata.col + ", ");break;
      case "l": rotateL(kata);moveAllBots();break;
      default: console.log("(" + string[i] + "), command not found!");
    }
  }

  print();
  console.log("\nCoordinates our rover has been so far: " + kata.travelLog);
}

// ==================================================

// Main user movement functions.
function moveForward(){

  forward(kata);
  moveAllBots();

  print();

}

function moveBackwards(){

  backwards(kata);
  moveAllBots();

  print();

}

function turnLeft(){

  rotateL(kata);
  moveAllBots();

  print();

}

function turnRight(){

  rotateR(kata);
  moveAllBots();

  print();

}