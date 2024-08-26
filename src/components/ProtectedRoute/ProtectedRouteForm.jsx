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
	
		<form className="form" onSubmit={handleSubmit}>
		    <p>Impact-Site-Verification: affa2d2f-c13f-4606-aef4-eb5c08f7e6fe</p>
			<h1 className="heading">COMING SOON</h1>

			<div className="center">

				<input
					type="password"
					className="formInput"
					placeholder="Password"
					ref={passwordInputRef}
				/>

			</div>

			<div className="center">

				<button className="btn submit">Hop In</button>

			</div>

		</form>
		</div>
	)
}