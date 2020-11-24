import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

export const EXPANSION_RATE = 2 // rate at which snake grows per 1 food
let food = getRandomFoodPosition();

export function update(){
    // if the food is on the snake at same tile
    if (onSnake(food)){
        // if food and snake on same tile, grow the snake
        expandSnake(EXPANSION_RATE);
        // and drop new food at random locaiton
        food = getRandomFoodPosition();
    }
}

// this function is used to render the game board to show movement and changes
export function draw(gameBoard){
    
    const foodElement = document.createElement('div');
    // give style attributes to snake
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    // adding color to the snake
    foodElement.classList.add('food'); 
    // add snake element onto the gameboard
    gameBoard.appendChild(foodElement);
        
    
}


function getRandomFoodPosition(){
    // this func changes food position on grid after being eaten
    let newFoodPosition;
    // while not on snake
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}