import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input  id="city"type="text" name="city" placeholder="City..."/>
		<input id ="country" type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;