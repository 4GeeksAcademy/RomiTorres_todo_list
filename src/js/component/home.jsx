import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NewTodo } from "./NewTodo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NewTodo/>
		</div>
	);
};

export default Home;
