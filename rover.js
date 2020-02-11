
let grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
  [" ", " ", " ", "a", " ", "a", " ", " ", " ", " "],
]
const rover1 = {
  direction: "N",
  position: {
    x: 0,
    y: 0,
  },
  travellog: []
}
const rover2 = {
  direction: "N",
  position: {
    x: 10,
    y: 0,
  },
  travellog: []
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`); // adiciona posição no travellog
      break;
    case "W":
      rover.direction = "S";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
    case "S":
      rover.direction = "E";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
    case "E":
      rover.direction = "N";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
  }
}
//console.log(turnLeft(rover)); => teste se imprime a nova direção certa.

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
    case "E":
      rover.direction = "S";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
    case "S":
      rover.direction = "W";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
    case "W":
      rover.direction = "N";
      console.log(rover.direction);
      rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
      break;
  }
}
function moveForward(grid, rover, otherRover){
  console.log("moveForward was called");
//  console.log('=====>', grid[rover.position.y][rover.position.x]);
//  console.log(rover.position.y, rover.position.x + 1 === otherRover.position.y, otherRover.position.x);
    switch(rover.direction){
      case "N":
        if ((rover.position.y - 1) >= 0){
          if (grid[rover.position.y - 1][rover.position.x] === " "){
            if (rover.position.y - 1 !== otherRover.position.y || rover.position.x !== otherRover.position.x){
              rover.position.y -= 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          } else{
            console.log(`Obstáculo!`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
        } 
        break;
      case "E":
        if ((rover.position.x + 1) <= 9){
          if (grid[rover.position.y][rover.position.x + 1] === " "){
            if (rover.position.y !== otherRover.position.y || rover.position.x + 1 !== otherRover.position.x){
              rover.position.x +=1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }    
          } else {
            console.log(`Obstáculo!`);
            } 
        } else {
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
          } 
        break;
      case "S":
        if ((rover.position.y + 1) <=9){
          if (grid[rover.position.y + 1][rover.position.x] === " "){
            if (rover.position.y + 1 !== otherRover.position.y || rover.position.x !== otherRover.position.x){
              rover.position.y += 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          }else {
            console.log(`Obstáculo`);
          }
        } else {
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
          } 
        break;
      case "W":
        if ((rover.position.x - 1) >=0){
          if (grid[rover.position.y][rover.position.x -1] === " "){
            if (rover.position.y !== otherRover.position.y || rover.position.x - 1 !== otherRover.position.x){
              rover.position.x -= 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }            
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
          } 
        break;
    }
}
function moveBackwars(grid, rover, otherRover){
  console.log("moveBackwards was called for");
//  console.log(rover.position.y + 1, rover.position.x);
//  console.log(otherRover.position.y, otherRover.position.x);  
//  console.log(rover.position.y + 1 !== otherRover.position.y || rover.position.x !== otherRover.position.x);
    switch(rover.direction){
      case "N":
        if ((rover.position.y + 1) <= 9){
          if (grid[rover.position.y + 1][rover.position.x] === " "){
            if (rover.position.y + 1 !== otherRover.position.y || rover.position.x !== otherRover.position.x){
              rover.position.y += 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          } else {
            console.log(`Obstáculo`);
          }          
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "E":
        if ((rover.position.x - 1) >= 0){
          if (grid[rover.position.y][rover.position.x - 1] === " "){
            if (rover.position.y !== otherRover.position.y || rover.position.x - 1 !== otherRover.position.x){
              rover.position.x -= 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "S":
        if ((rover.position.y - 1) >= 0){
          if (grid[rover.position.y - 1][rover.position.x] === " "){
            if (rover.position.y - 1 !== otherRover.position.y || rover.position.x !== otherRover.position.x){
              rover.position.y -= 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "W":
        if ((rover.position.x + 1) <= 9){
          if (grid[rover.position.y][rover.position.x + 1] === " "){
            if (rover.position.y !== otherRover.position.y || rover.position.x + 1 !== otherRover.position.x){
              rover.position.x += 1;
              console.log(rover.position.x + ", " + rover.position.y);
              rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
            } else {
              console.log("Ops! You ran into another rover.")
            }
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
    }
}
function command(order, grid, movingRover, stoppedRover){
  let commands = order;
  for (let i=0; i < commands.length; i++){
      switch(commands[i]){
        case "f":
          moveForward(grid, movingRover, stoppedRover);
          break;
        case "b":
          moveBackwars(grid, movingRover, stoppedRover);
          break;
        case "r":
          turnRight(movingRover, stoppedRover);
          break;
        case "l":
          turnLeft(movingRover, stoppedRover);
          break;
        default:
          console.log(`Inputs must be "f", "b", "r" or "l"`);
      }      
    }
  }
command("rffffffffff", grid, rover1, rover2);
//command("", rover2);

console.log(rover1.travellog);
console.log(rover2.travellog);
