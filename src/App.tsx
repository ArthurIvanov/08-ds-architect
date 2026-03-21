import React from "react";
import { ThemeProvider } from "styled-components";

import {
	Card,
	GlobalStyle,
	lightTheme,
	darkTheme,
	Badge,
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
				<Card
					textSize="large"
					appearance="blue"
					badgeText="Новое"
					newsData="Сегодня"
				>
					<div>
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
					</div>
					<div>
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
						<Badge text="hello" />
					</div>
				</Card>
			</main>
		</ThemeProvider>
	);
}

export default App;
