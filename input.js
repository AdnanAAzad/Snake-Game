let inputDirection = {x:0,y:0};
let lastInputDirection = {x:0,y:0};
// NOTE DIRECTIONS:
// like a plane, directions are inverted (eg. - is up, + is down)
// use input keys to modify direction attribute via user
window.addEventListener('keydown', e => {
    switch (e.key){
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break; // if we are moving up or down, dont consider this command cause this movement is on the same plane
            inputDirection = {x:0,y:-1} // -1 moves upwards
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break; // if we are moving up or down, dont consider this command cause this movement is on the same plane    
            inputDirection = {x:0,y:1} // 1 moves down
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break; // ignore command if on the same plane    
            inputDirection = {x:-1,y:0} // -1 moves left
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break; // ignore command if on the same plane    
            inputDirection = {x:1,y:0} // 1 moves right
            break;
    }
})

// return the input direction
export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}