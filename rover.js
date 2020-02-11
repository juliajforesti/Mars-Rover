
let grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["a", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
    x: 5,
    y: 5 
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
function moveForward(rover){
  console.log("moveForward was called");
    switch(rover.direction){
      case "N":
        if ((rover.position.y - 1) >= 0){
          if (grid[rover.position.y - 1][rover.position.x] === " "){
            rover.position.y -= 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
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
            rover.position.x +=1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
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
            rover.position.y += 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
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
            rover.position.x -= 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
          } 
        break;
    }
}
function moveBackwars(rover){
  console.log("moveBackwards was called");
    switch(rover.direction){
      case "N":
        if ((rover.position.y + 1) <= 9){
          if (grid[rover.position.y + 1][rover.position.x] === " "){
            rover.position.y += 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
          } else {
            console.log(`Obstáculo`);
          }          
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "E":
        if ((rover.position.x - 1) >= 0){
          if (grid[rover.position.y][rover.position.x - 1] === " "){
            rover.position.x -= 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "S":
        if ((rover.position.y - 1) >= 0){
          if (grid[rover.position.y - 1][rover.position.x] === " "){
            rover.position.y -= 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
      case "W":
        if ((rover.position.x + 1) <= 9){
          if (grid[rover.position.y][rover.position.x + 1] === " "){
            rover.position.x += 1;
            console.log(rover.position.x + ", " + rover.position.y);
            rover.travellog.push(`${rover.position.x}, ${rover.position.y}`);
          } else {
            console.log(`Obstáculo`);
          }
        } else{
          console.log(`"You can't move forward to this direction, your rover can't go outside of the map!"`)
      } break;
    }
}
function command(order){
  let commands = order;
  for (let i=0; i < commands.length; i++){
      switch(commands[i]){
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackwars(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        default:
          console.log(`Inputs must be "f", "b", "r" or "l"`);
      }      
    }
  }
command("blf");

console.log(rover.travellog);
