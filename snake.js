import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; // control how fast game updates by this speed
export const snakeBody = [{x:20,y:20}];
export let SCORE = 0;
let newSegments = 0 ; // initially our snake isnt growing
export function update(){

    // function call to check to see if food has been eaten
    addSegments();

    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i>=0; i--){
        snakeBody[i+1] ={ ...snakeBody[i] };
    }
    // set snake head coordinates to input directions given by user
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

// this function is used to render the game board to show movement and changes
export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        // give style attributes to snake
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        // adding color to the snake
        snakeElement.classList.add('snake'); 
        // add snake element onto the gameboard
        gameBoard.appendChild(snakeElement);
        
    })
}


export function expandSnake( amount){
    // function used to expand the snake (eating food) by some value
    newSegments += amount;
}

export function onSnake(position, {ignoreHead = false} = {}){
    // this function checks to see if snake and food are on same tile
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) {return false;} // ignore if head is on head
        return equalPositions(segment, position);
    })
}

function equalPositions(pos1,pos2){
    // this function will return true if food and snake are on same tile
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){
    // this func. adds new segments after eating food
    for (let i = 0; i< newSegments; i++){
        snakeBody.push({ ... snakeBody[snakeBody.length -1]});
        SCORE += 1;
    }


    newSegments = 0;
}

export function getSnakeHead(){
    // this func. returns the location of the snake head
    return snakeBody[0];
}


export function snakeIntersection(){
    // this fun, is used to return true if snake has interescted with itself
    return onSnake(snakeBody[0], {ignoreHead: true});
}