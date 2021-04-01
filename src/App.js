import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawers from "./components/Drawers";
import IconTabBar from "./components/IconTabBar";
import NavBar from "./components/NavBar";
function App() {
	const [open, setOpen] = React.useState(false);
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
	const setDrawer = () => {
		setOpen(!open);
		console.log(open);
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar onOpen={setDrawer} />
			<div className="container mt-3">
				{open && <Drawers open={open} />}
				<IconTabBar />
			</div>
		</ThemeProvider>
	);
}

export default App;
