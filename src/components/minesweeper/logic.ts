
import { GridLocation } from "./values";

export const createBoard = (rows: number, cols: number): GridLocation[][] => {
    return new Array(rows).fill(null).map(() =>
      new Array(cols).fill(null).map(() => ({
        isRevealed: false,
        isFlagged: false,
        count: 0,
      }))
    );
  };

export const generateMines = (grid: GridLocation[][], mines: number) => {
    const rows = grid.length;
    const columns = grid[0].length;

    let count = 0;
    while (count < mines) {
        let x = Math.floor(Math.random() * rows);
        let y = Math.floor(Math.random() * columns);

        if (grid[x][y].count != 9) {
            count++;
            grid[x][y].count = 9;
            for (let i = x-1; i <= x+1; i++){
                for (let j = y-1; j <= y+1; j++){
                    if (inBound(grid,i,j) && grid[i][j].count != 9) {
                        grid[i][j].count++;
                    }
                }
            }
        }
    }
    return grid;
}

export const inBound = (grid: GridLocation[][], x: number, y:number) => {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}