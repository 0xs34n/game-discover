import React from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
	boxStyle: {
		background: "rgba(40,43,48,.8)",
		borderTopRightRadius: "5px",
		borderBottomRightRadius: "5px",
	},
	TextFieldStyle: {
		marginLeft: "40px",
		marginRight: "40px",
		marginTop: "10px",
	},
	underlineStyle: {
		borderColor: "#7f8c8d"
	},
	underlineFocusStyle: {
		borderColor: "#ecf0f1"
	},
	floatingLabelStyle: {
		fontFamily: 'Unisans',
		color: "#87909c",

	},
	inputStyle: {
		color: "#ecf0f1",
		fontFamily: "Unisans"
	},
	buttonStyle: {
		backgroundColor: "#7289DA",
	    border: "none",
	    borderRadius: "2px",
	    color: "white",
	    padding: "15px 90px",
	    textAlign: "center",
	    textDecoration: "none",
	    display: "block",
	    fontSize: "16px",
	    fontFamily: "Unisans",
	    fontColor: "#ecf0f1",
	    marginLeft: "auto",
	    marginRight: "auto",
	    marginTop: "50px",
	    marginBottom: "30px",
	    paddingBottom: "0.7em"
	}
}

function InputBox(props) {
	return (
		<div style={style.boxStyle}>
			<TextField
				style={style.TextFieldStyle}
				floatingLabelText="steam ID"
				floatingLabelFixed={true}
				underlineStyle={style.underlineStyle}
				underlineFocusStyle={style.underlineFocusStyle}
				floatingLabelStyle={style.floatingLabelStyle}
      			floatingLabelFocusStyle={style.floatingLabelFocusStyle}
      			inputStyle={style.inputStyle}
    		/>
    		<button type="submit" style={style.buttonStyle}>
    			Discover
    		</button>

		</div>
	)
}

export default InputBox;