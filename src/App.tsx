import React from "react";
import { ThemeProvider } from "styled-components";

import {
	Placeholder,
	GlobalStyle,
	lightTheme,
	darkTheme,
	Button,
	ButtonLink,
	Icon,
} from "./lib";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<ButtonLink iconAfter="user" />
			</main>
		</ThemeProvider>
	);
}

export default App;
