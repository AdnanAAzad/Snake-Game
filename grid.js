const GRID_SIZE = 40;
export function randomGridPosition(){
    // this function generates and returns a new random position on the grid
    return{
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y:Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position){
    return (
        position.x <1 || position.x > GRID_SIZE ||
        position.y <1 || position.y > GRID_SIZE
    )
}