import Button from "./components/Button";
import React, { useState } from "react";


function App() {
	const table = Array(9).fill(null);
	const [tableState, setTableState] = useState(table);
	const [playerX, setPlayerX] = useState(true);

	function calculateWinner(table) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (table[a] && table[a] === table[b] && table[a] === table[c]) {
				return table[a];
			}
		}
		return null;
	}
	const winner = calculateWinner(tableState);

	return (
		<>
			<div>
				<h2>Ta-Te-Ti</h2>
			</div>
			<div>
				<div className="tablero">
					{table.map((button, index) => (
						<div>
							<Button
								index={index}
								tableState={tableState}
								setTableState={setTableState}
								playerX={playerX}
								setPlayerX={setPlayerX}
								calculateWinner={calculateWinner}
							/>
						</div>
					))}
				</div>
				<div>
					<h2>
						{
							winner
								?
								`El ganador es: ${winner}`
								:
								`Es el turno de ${playerX ? "X" : "O"}`
						}
					</h2>
				</div>
			</div>
		</>
	);
}

export default App;
