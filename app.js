var grid = $(".grid");
console.log(grid);
var scoreDisplay = $("#score");

scoreDisplay.text(0);
const width = 28; //28 x28 = 784 square
let score = 0;

// Creates the grid
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
    4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1,
];

const squares = [];
// Legend
//0: Pac dot
//1: Wall
//2: Ghost Nest
//3: Power Pellet
//4: Empty Space

//Render Grid
function renderGrid() {
    layout.forEach((l) => {
        const square = $("<div></div>");
        square.appendTo(grid);
        squares.push(square);

        //add layout the the board
        if (l === 0) {
            square.addClass("pac-dot");
        } else if (l === 1) {
            square.addClass("wall");
        } else if (l === 3) {
            square.addClass("power-pellet");
        } else if (l === 2) {
            square.addClass("ghost-nest");
        }
    });
}
renderGrid();

//Pac-man starting position
let pacmanCurrentIndex = 490;

squares[pacmanCurrentIndex].addClass("pac-man");

//move pac-man
function movePacman(e) {
    squares[pacmanCurrentIndex].removeClass("pac-man");

    switch (e.keyCode) {
        //Up
        case 38:
            if (
                pacmanCurrentIndex - width >= 0 &&
                !squares[pacmanCurrentIndex - width].hasClass("wall") &&
                !squares[pacmanCurrentIndex - width].hasClass("ghost-nest")
            ) {
                pacmanCurrentIndex -= width;
            }
            break;

        //Down
        case 40:
            if (
                pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex + width].hasClass("wall") &&
                !squares[pacmanCurrentIndex + width].hasClass("ghost-nest")
            ) {
                pacmanCurrentIndex += width;
            }
            break;

        //Left
        case 37:
            if (
                pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].hasClass("wall") &&
                !squares[pacmanCurrentIndex - 1].hasClass("ghost-nest")
            ) {
                pacmanCurrentIndex -= 1;

                //check if pacman is in the left exit
                if (pacmanCurrentIndex - 1 === 363) {
                    pacmanCurrentIndex = 391;
                }
            }
            break;

        //Right
        case 39:
            if (
                pacmanCurrentIndex % width < width - 1 &&
                !squares[pacmanCurrentIndex + 1].hasClass("wall") &&
                !squares[pacmanCurrentIndex + 1].hasClass("ghost-nest")
            ) {
                pacmanCurrentIndex += 1;

                //check if pacman is in the right exit
                if (pacmanCurrentIndex + 1 === 392) {
                    pacmanCurrentIndex = 364;
                }
            }
            break;
    }
    squares[pacmanCurrentIndex].addClass("pac-man");
    pacDotEaten();
    powerPelletEaten();
    //checkForWin
}

$(document).keyup(movePacman);
$(document).keyup(() => console.log(pacmanCurrentIndex));

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].hasClass("pac-dot")) {
        score++;
        scoreDisplay.html(score);
        squares[pacmanCurrentIndex].removeClass("pac-dot");
    }
}

//power pellet function
function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].hasClass('power-pellet')) {
        score += 10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].removeClass('pqwer-pellet')
    }
}

//make the ghosts stop appearing as aqua
function unScareGhosts() {
    ghosts.forEach(ghost => {
        ghost.isScared = false;
    })
}

//Ghost class
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.timerId = NaN;
        this.isScared = false;
    }
}

const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500),
];
// create the ghosts in the grid
ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].addClass(ghost.className);
    squares[ghost.currentIndex].addClass("ghost");
});

//move ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

//
function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
        //if the the next square your ghost is going to go in does not contain a wall and a ghost, you can go there
        if (
            !squares[ghost.currentIndex + direction].hasClass("wall") &&
            !squares[ghost.currentIndex + direction].hasClass("ghost")
        ) {
            //remove all ghost classes
            squares[ghost.currentIndex].removeClass(`${ghost.className} ghost scared-ghost`);
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].addClass(`${ghost.className} ghost`);
            //else find a new direction to try
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        if (ghost.isScared) {
            squares[ghost.currentIndex].addClass('scared-ghost');
        }

        if (ghost.isScared && squares[ghost.currentIndex].hasClass('pac-man')) {
            squares[ghost.currentIndex].removeClass(`${ghost.className} ghost scared-ghost`)
            ghost.currentIndex = ghost.startIndex;
            score += 100;
            squares[ghost.currentIndex].addClass(`${ghost.className} ghost`)
        }

    }, ghost.speed);
}
