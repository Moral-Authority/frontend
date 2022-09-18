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
		
		<h1>JUSTCORPZ</h1>
		<div className="center">
			<input
				type="password"
				placeholder="Password"
				ref={passwordInputRef}
			/>
			</div>
			<div className="center">
			<button type="submit" >
				Submit
			</button>
			</div>
		</form>
		</div>
	)
}