import React from 'react';
import Background from './Background'
import InputCard from './InputCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
	backgroundImage: `url(${Background})`,
 	backgroundSize: "cover",
 	position: "fixed",
 	width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function App(props) {
	return (
		<MuiThemeProvider>
			<div style={style}>
				<InputCard />
			</div>
		</MuiThemeProvider>
	);
}

export default App;