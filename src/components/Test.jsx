//RCC выбрать структуру
import React from 'react'
import styled from "styled-components"

const Button = styled.button`
	font-size: 18px;
	width: 100%;
	padding: 8px;
	margin: 10px;
	background-color: black;
	color: white;
`;

const Input = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #FF0000;
  };
`;

const Test = () => {
	return (
		<>

			<h1>Test PAGE</h1>

			<div class="container">
				<div className="row">
					<div className="col-12">
						<h2>Оформление через styled-components: </h2>
					</div>
					<div className="col-4">
						<Input type="text" placeholder="Name" />
					</div>
					<div className="col-4">
						<Input type="text" placeholder="Last Name" />
					</div>
					<div className="col-4">
						<Button> button </Button>
					</div>

				</div>

			</div>

		</>
	);
}

export default Test;