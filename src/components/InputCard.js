import React from 'react';
import Header from './Header';
import InputBox from './InputBox'

const cardStyle = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
}


function InputCard(props) {

	return (
		<div style={cardStyle}>
			<Header />
			<InputBox />
		</div>
	)
}

export default InputCard;