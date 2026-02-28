import React from "react";
import { ThemeProvider } from "styled-components";

import { Placeholder, GlobalStyle, lightTheme } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет 8-й поток!" />
			</main>
		</ThemeProvider>
	);
}

export default App;
