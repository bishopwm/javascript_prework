// Rover Object Goes Here
// ======================

const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  }
  
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called!");
    switch(rover.direction){
      case "N":
        rover.direction = "W";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "S":
        rover.direction = "E";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "W":
        rover.direction = "S";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "E":
        rover.direction = "N";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
    }
  }
  
  //turnLeft(rover);
  
  function turnRight(rover){
    console.log("turnRight was called!");
      switch(rover.direction){
      case "N":
        rover.direction = "E";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "S":
        rover.direction = "W";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "W":
        rover.direction = "N";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      case "E":
        rover.direction = "S";
         console.log("Rover is now facing direction: " + rover.direction);
        break;
      }
  }
  //turnRight(rover);
  
  // -- First iteration of moveForward function --> REMOVE
  // function moveForward(rover){
  //   console.log("moveForward was called")
  //   if (rover.direction === "N"){
  //     rover.y--;
  //   }
  //   console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
  //   if (rover.direction === "S"){
  //     rover.y++;
  //   }
  //   console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
  //   if (rover.direction === "E"){
  //     rover.x++;
  //   }
  //   console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
  //   if (rover.direction === "W"){
  //     rover.x--;
  //   }
  //   console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
  // }
  
  //moveForward(rover);
  
  function moveForward(rover){
    console.log("moveForward was called")
      switch(rover.direction){
        case "N":
          rover.travelLog.push("|-->" + rover.x + "," + rover.y + "<--|");
          //console.log(rover.travelLog);
          rover.y--;
          console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
            break;
        case "S":
          rover.travelLog.push("|-->" + rover.x + "," + rover.y + "<--|");
          rover.y++;
          console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
            break;
        case "E":
          rover.travelLog.push("|-->" + rover.x + "," + rover.y + "<--|");
          rover.x++;
          console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
            break;
        case "W":
          rover.travelLog.push("|-->" + rover.x + "," + rover.y + "<--|");
          rover.x--;
          console.log("Rover current position is X: " + rover.x + ", Y: " + rover.y);
            break;
     }
  }
  
  //moveForward(rover);
  
  function receiveCommands(commands){
    let commandsArray = [];
    for (let i=0; i < commands.length; i++){
      let individualCommands = commands.charAt(i);
      commandsArray.push(individualCommands);
      switch(commandsArray[i]){
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "f":
          moveForward(rover);
          break;
      }
     }
    console.log("Travel Log -- Previous positions: " + rover.travelLog);
    }
    
  receiveCommands("rffrfflfrff");