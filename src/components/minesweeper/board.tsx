import { Grid, Button, ButtonProps } from "@chakra-ui/react";
import { FaFlag } from "react-icons/fa";
import { createBoard, generateMines, inBound } from "./logic";
import { useEffect, useState } from "react";
import { GridLocation } from "./values";

const ROWS = 9;
const COLUMNS = 16;
const MINES = 20;

export const Board = () => {
  const init = () => {
    let grid = createBoard(ROWS, COLUMNS);
    grid = generateMines(grid, MINES);
    // console.log(grid);
    return grid;
  };

  const [grid, setGrid] = useState<GridLocation[][]>(init());

  const reveal = (x: number, y: number) => {
    if (grid[x][y].isFlagged || grid[x][y].isRevealed) {
      return;
    }

    if (grid[x][y].count == 9) {
      alert("Game Over)");
      setGrid(init());
      return;
    }

    const zeroStack = [{ x, y }];

    while (zeroStack.length > 0) {
      const { x, y } = zeroStack.pop()!;

      const cell = grid[x][y];
      if (!cell.isRevealed) {
        cell.isRevealed = true;

        if (cell.count === 0) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const dx = x + i;
              const dy = y + j;

              if (inBound(grid, dx, dy) && !grid[dx][dy].isRevealed) {
                zeroStack.push({ x: dx, y: dy });
              }
            }
          }
        }
      }
    }
    setGrid([...grid]);
  };

  const setFlag = (
    e: React.MouseEvent<HTMLButtonElement>,
    x: number,
    y: number
  ) => {
    e.preventDefault();
    if (grid[x][y].isRevealed) {
      return;
    }

    grid[x][y].isFlagged = !grid[x][y].isFlagged;

    setGrid([...grid]);
  };

  const getButtonStyle = (x: number, y: number): ButtonProps => {
    if (grid[x][y].isRevealed) {
      return {
        colorScheme: "teal",
        width: 20,
        height: 20,
        variant: "solid",
        rounded: "0",
      };
    }
    return {
      colorScheme: "green",
      width: 20,
      height: 20,
      variant: "solid",
      rounded: "0",
    };
  };

  useEffect(() => {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        if (grid[x][y].count != 9 && !grid[x][y].isRevealed) {
          return;
        }
      }
    }
    alert("You Win!");
    setGrid(init());
    return;
  }, [grid]);

  return (
    <Grid>
      {grid.map((row, x) => (
        <div key={x}>
          {row.map((square, y) => (
            <Button
              key={y}
              {...getButtonStyle(x, y)}
              data-value={square.count}
              onClick={() => reveal(x, y)}
              onContextMenu={(e) => setFlag(e, x, y)}
            >
              {square.isRevealed && square.count !== 0 ? square.count : ""}

              {square.isFlagged ? <FaFlag /> : ""}
            </Button>
          ))}
        </div>
      ))}
    </Grid>
  );
};
