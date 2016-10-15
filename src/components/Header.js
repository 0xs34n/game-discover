import React from 'react';

const style = {
	container: {
		fontFamily: 'Unisans',
		color: '#7289DA',
		background: "rgba(255,255,255,.9)",
		borderTopLeftRadius: "5px",
		borderBottomLeftRadius: "5px",
	},
	header: {
		fontSize: "90px",
		textAlign: "center",
		marginTop: "30px",
	},
	subheader: {
		fontSize: "15px",
		textAlign: "center",
		marginLeft: "40px",
		marginRight: "40px",
	}
}

function Header(props) {
	return (
		<div style={style.container}>
			<div style={style.header}>
				n²
			</div>
			<div style={style.subheader}>
				neural network <br /> game recommender
			</div>
		</div>
	)
}

export default Header;