import SudokuGame from "../components/SudokuGame";
import { solveSudoku } from "../lib/sudoku-util";
export default function Sudoku() {
  console.log(solveSudoku([[1, 5, 0, 0, 0, 0, 0, 0, 2],
                           [0, 0, 0, 0, 5, 0, 0, 4, 0],
                           [0, 0, 0, 0, 0, 7, 0, 0, 3],
                           [4, 0, 2, 3, 0, 0, 0, 0, 0],
                           [8, 0, 0, 4, 0, 0, 0, 0, 0],
                           [0, 0, 0, 6, 7, 9, 0, 0, 0],
                           [0, 0, 9, 0, 0, 0, 0, 0, 0],
                           [0, 0, 6, 0, 3, 0, 7, 0, 0],
                           [0, 4, 0, 0, 0, 0, 6, 9, 0]]))
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SudokuGame />
      <button className="btn">Button</button>
    </main>
  );
}
