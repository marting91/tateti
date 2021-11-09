import React from 'react'

const Button = ({ tableState, setTableState, index, playerX, setPlayerX, calculateWinner }) => {
	const clickBtn = () => {
		if (calculateWinner(tableState)) {
			return;
		}
		const tempTable = [...tableState];
		tempTable[index] = playerX ? "X" : "O";
		setPlayerX(!playerX);
		setTableState(tempTable);
	}

	return (
		<button
			onClick={clickBtn}
		>{tableState[index]}</button>
	);
}

export default Button;