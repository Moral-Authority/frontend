import { useRef } from "react";


const PASSWORD = 'qwerty';

export const ProtectedRouteForm = ({ onAccessGranted }) => {
	const passwordInputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const password = passwordInputRef.current?.value;

		if (onAccessGranted && password === PASSWORD) {
			onAccessGranted();
		}
		else {
			alert("password is incorrect!!!")
		}
	}

	return (
		<div className="protectiveRoute">
	
		<form onSubmit={handleSubmit}>
		
			<h1>MORAL AUTHORITY</h1>

			<div className="center">

				<input
					type="password"
					className="formInput"
					placeholder="Password"
					ref={passwordInputRef}
				/>

			</div>

			<div className="center">

				<button className="btn submit">Submit</button>

			</div>

		</form>
		</div>
	)
}