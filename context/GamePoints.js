import React, { useState } from "react";
const GamePointContext = React.createContext();

const GamePointProvider = ({ children }) => {
	const [gamePoint, setGamePoint] = useState(0);

	return (
		<GamePointContext.Provider
			value={{
				gamePoint,
				setGamePoint
			}}
		>
			{children}
		</GamePointContext.Provider>
	);
};
export { GamePointProvider };
export default GamePointContext;