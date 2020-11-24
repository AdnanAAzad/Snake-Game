import {update as updateSnake, getSnakeHead, snakeIntersection, draw as drawSnake,SNAKE_SPEED, SCORE} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let gameOver = false;
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime){ 
    if(gameOver){
        // if game over show message
        if (confirm('You Lost! Press OK to restart.\nScore: '+SCORE)){
            window.location = '/';
        }       
        return
    }

    // loop through main to keep rendering the game using clock and snake speed as render speed parameters
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime )/ 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    // update snake position
    update();
    // render the new snake onto board
    draw();
}
// initial render
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    // no trailing snake from previous frames
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    // this function checks to see if players has died
    // by going out of bounds or intersecting with itself
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}