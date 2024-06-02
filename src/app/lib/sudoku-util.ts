const isValid = (board: number[][], row: number, col: number, num: number): boolean => {
	for (let i = 0; i < 9; i++) {
		if (board[row][i] === num || board[i][col] === num) {
			return false
		}
	}
	const startRow = row - row % 3
	const startCol = col - col % 3
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i + startRow][j + startCol] === num) {
				return false
			}
		}
	}
	return true

}
const solveSudokuHelper = (board: number[][], r = 0, c = 0): boolean => {
	if (r === 9) {
		return true
	}
	else if (c === 9) {
		return solveSudokuHelper(board, r + 1, 0)
	}
	else if (board[r][c] !== 0) {
		return solveSudokuHelper(board, r, c + 1)
	}
	else {
		for (let i = 1; i <= 9; i++) {
			if (isValid(board, r, c, i)) {
				board[r][c] = i
				if (solveSudokuHelper(board, r, c + 1)) {
					return true
				}
				board[r][c] = 0
			}
		}
		return false
	}


}
export const solveSudoku = (board: number[][]): number[][] => {
	solveSudokuHelper(board)
	return board
}

export const generateSudoku = (difficulty: number): number[][] => {
	return [[]]
}
