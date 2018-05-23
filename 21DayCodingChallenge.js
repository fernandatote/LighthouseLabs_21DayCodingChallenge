/* 
"The Lighthouse Labs 21-Day Coding Challenge is your chance to be the operator of the Lighthouse9000™ 
- the system that powers the Lighthouse Labs Lighthouse. It is your job to ensure that 
the Lighthouse runs properly. Mapping out grid locations and guiding ships to safety, 
this challenge has it all!"
*/

/*
GRID
         A   B   C   D   E   F   G   H   I   J
       +---+---+---+---+---+---+---+---+---+---+
    1  |   |   |   | ^ |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    2  |   |   |   |   | ~ |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    3  |   |   |   |   | ^ | ^ |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    4  |   |   |   |   | ^ | ^ |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    5  |   |   |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    6  |   |   |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    7  |   |   |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    8  |   | ^ | ~ | ~ |   |   |   | ^ |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    9  |   | ^ |   | ~ | ~ |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
    10 |   | ^ |   |   | ~ | ~ |   |   |   |   |
       +---+---+---+---+---+---+---+---+---+---+
  
    
GRID code:

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];
*/


/*
## Challenge #1
Different lighthouse operators are given different size grids based on their skills. Every lighthouse operator likes to be able to boast about how large their grid is. Grids always start at A on the X-axis and never go above Z. They can have any number of rows. Let's figure out how large yours is!

Up above you have access to the printed-out grid, and the JS code for the grid. This is your grid, for your lighthouse.

Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string "10 x 10". But you have to make sure that you figure that string out by actually measuring your grid!
*/

function gridSize() {
    let height = GRID.length;
    let width = 0;
    
    if(height === 0) {
      width = 0;
    } else {
      width = GRID[0].length;
    }
    
    return `${width} x ${height}`;
  }
  
/*
## Challenge #2
Awesome job! Other lighthouse operators are jealous of your grid, and your code skills. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.
*/

function totalCells() {
  let height = GRID.length;
  let width = 0;

  if(height === 0) {
    width = 0;
  } else {
    width = GRID[0].length;
  }

  return width*height;
}

/*
## Challenge #3
Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")
*/

function lightCell(cell) {
  let letter = cell.substring(0,1);
  let x = letter.charCodeAt(0) - 65;
  let y = (cell.substring(1,3) ) - 1;

  return GRID[y][x];
}

/*
## Challenge #4
In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the ^ symbol on the grid.

Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)
*/

function isRock(cell) {
  if(lightCell(cell) == "^") {
    return true;
  } else {
    return false;
  }
}

/*
## Challenge #5
There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ symbol.

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: isCurrent('E2'); would return true)
*/

function isCurrent(cell) {
  if(lightCell(cell) == "~") {
    return true;
  } else {
    return false;
  }
}

/*
## Challenge #6
Your next job is have your lighthouse sweep a whole row of cells.

To do this, write a function named lightRow() that takes in the number of the row and returns the contents. (Example: lightRow(2); would return ["", "", "", "", "~", "", "", "", "", ""])
*/

function lightRow(row) {
  return GRID[row];
}

/*
## Challenge #7
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "", "", "", "", "", "", "~", "", ""])
*/

function lightColumn(col) {
  let x = col.charCodeAt(0) - 65;
  let column = [];

  for (let i = 0; i < GRID.length; i++) {
    column.push(GRID[i][x]);
  }

  return column;
}

/*
## Challenge #8
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); would return false as would lightCell('A11');)
*/

function lightCell(cell) {
  let letter = cell.substring(0,1);
  let x = letter.charCodeAt(0) - 65;
  let y = (cell.substring(1,3) ) - 1;

  if(x > GRID[1].length || y > GRID.length) {
    return false;
  } else {
    return GRID[y][x];
  }
}

/*
## Challenge #9
The other lighthouse operators are impressed that you figured out how to find rocks and currents, but they also need a method to identify safe cells. A cell is safe if there is no rock or strong current in that cell.

Write a function called isSafe() which will take in a coordinate in the form of 'H2' and return a true or a false boolean. The isSafe() function should check to see if there is a rock or current or not in that cell. (Example: isSafe('D7'); would return true)
*/

function isSafe(cell) {
  if(! isRock(cell) && ! isCurrent(cell)) {
    return true;
  } else {
    return false;
  }
}

/*
## Challenge #10
Environment Canada has called and wants a report sent to them of all the rocks in your grid, for use in their latest map.

Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid. (Example: allRocks() should return ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"])
*/

function allRocks() {
  let rocksArray = [];
  let width = "";
  let length = 0;
  let cell = "";

  for (let y = 0; y < GRID.length; y++) {
    for (let x = 0; x < GRID[y].length; x++) {
      width = String.fromCharCode(65 + x);
      let length = y + 1;
      cell = `${width}${length}`;
      
      if(isRock(cell)) {
        rocksArray.push(cell);
      }
    }
  }

  return rocksArray;
}

/*
## Challenge #11
Since you were so impressive with the finding of rocks, Environment Canada wants you to do the same thing for strong currents. Again, they're going to use your function, so you have to write code that goes through the grid and finds the cells with strong currents.

Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: allCurrents() should return ["E2", "C8", "D8", "D9", "E9", "E10", "F10"])
*/

function allCurrents() {
  let currentsArray = [];
  let width = "";
  let length = 0;
  let cell = "";

  for (let y = 0; y < GRID.length; y++) {
    for (let x = 0; x < GRID[y].length; x++) {
    width = String.fromCharCode(65 + x);
    let length = y + 1;
    cell = `${width}${length}`;
    
    if(isCurrent(cell)) {
      currentsArray.push(cell);
    }
    }
  }

  return currentsArray;
}

/*
## Challenge #12
Here is an opportunity to prove how powerful your lighthouse-powering skills are! Look at the code for Challenge #10, and write a function called firstRock() which will return the coordinates of the first rock in your grid.
*/

function firstRock() {
  let rocksArray = allRocks();

  return rocksArray[0];
}

/*
## Challenge #13
That was outstanding! Now do the same thing with firstCurrent(). Don't reinvent the wheel here. Re-use existing code from Challenge #11. This is one of the most important skills you can build as a coder...er, uh, I mean lighthouse operator.
*/

function firstCurrent() {
  let currentsArray = allCurrents();

  return currentsArray[0];
}

/*
## Challenge #14
Ship captains are really starting to rely on you to plot their routes through your area. Your name is being sung in pubs and taverns up and down the coast. And this time, it's for the right reasons! The ship captains are starting to be curious about some of the cells in your grid, and what they want is to know if a cell is dangerous. They know if ones are safe, but sometimes, they are willing to accept a bit of danger so that they can get a faster delivery time.

A cell is considered dangerous if there is a rock or a strong current in it, OR in the cells immediately above, below, left, or right of it. Write a function called isDangerous() that will take a cell in the format 'G7' and return a true or a false value. (Example: isDangerous('E4') would return true, because there is a rock there. Similarly, isDangerous('C9') would return true, because there are rocks and currents AROUND the cell. However, isDangerous('I6') would return false because it is open water.)
*/

function isDangerous(cell) {
  if (isSafe(cell)) {
    let letter = cell.substring(0,1);
    let x = letter.charCodeAt(0) - 65;
    let y = (cell.substring(1,3) ) - 1;
    let above = `${String.fromCharCode(65 + x)}${y}`;
    let right = `${String.fromCharCode(65 + x + 1)}${y + 1}`;
    let bottom = `${String.fromCharCode(65 + x)}${y + 2}`;
    let left = `${String.fromCharCode(65 + x - 1)}${y + 1}`;

    if (isSafe(above) && isSafe(right) && isSafe(bottom) && isSafe(left)) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}

/*
## Challenge #15
HELP! A ship is in trouble and is firing off a distress beacon, with their coordinates. You need to look at all the cells beside, above, and below the ship and decide which cell is the best one for them to go to.

Rules:

Target cell should not be dangerous.
Target cell should be adjacent to the given coordinates (beside, above or below).
Write a function called distressBeacon() that takes a coordinate in the format 'H2' and returns a different coordinate in the same format. (Example: distressBeacon('E8') should return 'F8'.)
*/

function distressBeacon(cell) {
  let letter = cell.substring(0,1);
  let x = letter.charCodeAt(0) - 65;
  let y = (cell.substring(1,3) ) - 1;
  
  let above = `${String.fromCharCode(65 + x)}${y}`;
  let right = `${String.fromCharCode(65 + x + 1)}${y + 1}`;
  let bottom = `${String.fromCharCode(65 + x)}${y + 2}`;
  let left = `${String.fromCharCode(65 + x - 1)}${y + 1}`;
  
  if(! isDangerous(above)) {
    return above;
  } else if(! isDangerous(right)) {
    return right;
  } else if(! isDangerous(bottom)) {
    return bottom;
  } else if(! isDangerous(left)) {
    return left;
  } else {
    return "";
  }
}

/*
## Challenge #16
The only constant is change around here! The diving society has sunk a wreck in your grid to give divers a great place to scuba and swim around. Add a rock to your grid in cell J9.
*/

GRID[8][9] = "^";


/*
## Challenge #17
It's time for monthly reporting to Lighthouse HQ. Your supervisor calls you and tells you that they need a report of what percentage of your grid is rocks and what percentage has strong currents. This data should be sent as an array of two values, in that order.

Write a function percentageReport() that returns the right percentages. (Example: calling percentageReport() should return the following array: [10, 7])
*/

function percentageRocks() {
  var rocksPer = allRocks().length / totalCells() * 100;
  rocksPer = parseFloat(rocksPer.toFixed(2));
  return rocksPer;
}

function percentageCurrents() {
  var currPer = allCurrents().length / totalCells() * 100;
  currPer = parseFloat(currPer.toFixed(2));
  return currPer;
}

function percentageReport() {
  var percentage = [];
  percentage[0] = percentageRocks();
  percentage[1] = percentageCurrents();
  
  return percentage;
}
  

/*
## Challenge #18
Apparently, HQ can't count. They want you to re-do your report, but this time send back three values. The first should be the number of open water cells, the second should be the number of rock cells, and the third should be the number of strong current cells. This is why we have software!
*/

function allOpenWater() {
  let openArray = [];
  let width = "";
  let length = 0;
  let cell = "";
  
  for (let y = 0; y < GRID.length; y++) {
    for (let x = 0; x < GRID[y].length; x++) {
      width = String.fromCharCode(65 + x);
      let length = y + 1;
      cell = `${width}${length}`;
      
      if(isSafe(cell)) {
        openArray.push(cell);
      }
    }
  }
  
  return openArray;
}
  
function percentageReport() {
  var percentage = [];
  percentage[0] = allOpenWater().length;
  percentage[1] = allRocks().length;
  percentage[2] = allCurrents().length;
  
  return percentage;
}

/*
## Challenge #19
Lighthouse HQ also wants a report of the safety of your GRID. Write another function called safetyReport(), which returns the percentage of your grid that contains calm waters. Calm waters do not contain a rock or a strong current. Lighthouse HQ sent further instructions. They said that due to system limitations in the Lighthouse 9000&trade, you must use the reduce() function in your code.

The return value should be a string in the form "##%". If there are any decimals, it should be rounded to 1 decimal point.
*/

function percentageOpenWater() {
  var openPer = allOpenWater().length / totalCells() * 100;
  openPer = parseFloat(openPer.toFixed(1));
  return openPer;
}

function safetyReport() {
  return `${percentageOpenWater()}%`;
}

/*
## Challenge #20
Ship captains have heard of your prowess and want to know the length of their routes through your grid.

Write a function called calcDistance() which will take two coordinates in the form of 'A3' and calculate the distance between the two points. (Example: calling calcDistance('A1', 'C3') should return 2.83
*/

function calcDistance(cell1, cell2) {
  let letter1 = cell1.substring(0,1);
  let x1 = letter1.charCodeAt(0) - 65;
  let y1 = (cell1.substring(1,3) ) - 1;
  
  let letter2 = cell2.substring(0,1);
  let x2 = letter2.charCodeAt(0) - 65;
  let y2 = (cell2.substring(1,3) ) - 1;
  
  let distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
  distance = parseFloat(distance.toFixed(2));
  
  return distance;
}

/*
## Challenge #21
This is it, the last challenge! Is that inspirational music in the background?

You have worked hard to get to this point and now you are about to be rewarded. First, there’s the satisfaction of coding for 21 days in a row (yay!). But, once you finish the 21-Day Coding Challenge you will be entered to win one of many great prizes including: a Macbook Pro, a Sphero, and a Rasberry Pi.

Given that you can do all sorts of fancy analysis on your grid, we're going to give you the final challenge for your Lighthouse9000™ system. Ship captains are going to send you a series of cells that they want to travel through, not just their start and end cells. You need to let them know if they should use that route or not.

Write a function evaluateRoute() which will take an array of cells in the form: ["A1", "B2", "C3", "D4"] (there could be any number of cells), and return a boolean true or false according to the following rules:

-If any cells have rocks, it should return false.
-If more than two cells have strong currents, it should return false.
-Otherwise, it should return true.
*/

function evaluateRoute(cells) {
  let currents = 0;
  
  for(let cell of cells) {
    if(isRock(cell)) {
      return false;
    } else if(currents === 2) {
      return false;
    } else if(isCurrent(cell)) {
      currents++;
    } else {
      return true;
    }
  }
}