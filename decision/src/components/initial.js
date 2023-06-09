import '../assests/App.css';
import {useRef,React, useState, useContext} from 'react';
import {MyContext} from '../context/context';


const Initial = () => {
	//store the question value in state
	const textInput = useRef(null);
	//store in state
	const [showNext, setShowNext] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const contextUpdate = useContext(MyContext);
	
	const handleChange = () => {
		if (textInput.current.value.length >= 5)
			setShowNext(true);
		else
			setShowNext(false);
	}

	const handleSubmit = () => {
		const inputVal = textInput.current.value;
		if ( inputVal.length > 30)
		{
			//alert("Please enter a question less than 30 characters");
			setErrorMessage(true);
			return false;
		}
		
		//Change to next Component : Confirm 
			//change screen value in context to 2
			//pass data to next Component
		contextUpdate.handleScreenChange(1);
		contextUpdate.handleQuestionChange(inputVal);
	}
	

	return (
		<div>
			{/*basic html form*/}
			<h1>Ask a Question</h1>
			<input 
				className="form-control"
				ref = {textInput}
				onChange = {handleChange}
				name = "question"
				type="text" 
				placeholder="Type your question here"
			/>
			{
				showNext && 
			// button is displayed only if ques.len >= 5 
				<button
					className="btn animate__animated animate__fadeIn"
					onClick = {handleSubmit}
					type='button'>
						Next
					</button>
				}

			{
				errorMessage && 
				<div className="error">
					Please enter a question less than 30 characters
				</div>
			}
		</div>
	);
}

export default Initial;