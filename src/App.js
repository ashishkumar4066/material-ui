import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawers from "./components/Drawers";
import IconTabBar from "./components/IconTabBar";
function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="container mt-3">
				<Drawers />
				<IconTabBar />
			</div>
		</ThemeProvider>
	);
}

export default App;
