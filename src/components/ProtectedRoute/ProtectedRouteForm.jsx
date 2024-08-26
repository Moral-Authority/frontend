// import { useRef } from "react";


// const PASSWORD = 'qwerty';

// export const ProtectedRouteForm = ({ onAccessGranted }) => {
// 	const passwordInputRef = useRef(null);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const password = passwordInputRef.current?.value;

// 		if (onAccessGranted && password === PASSWORD) {
// 			onAccessGranted();
// 		}
// 		else {
// 			alert("password is incorrect!!!")
// 		}
// 	}

// 	return (
// 		<div className="protectiveRoute">
	
// 		<form className="form" onSubmit={handleSubmit}>
// 		    <p>Impact-Site-Verification: 870ae376-312b-4b18-af52-a879c0e27bfc</p>
// 			<h1 className="heading">COMING SOON</h1>

// 			<div className="center">

// 				<input
// 					type="password"
// 					className="formInput"
// 					placeholder="Password"
// 					ref={passwordInputRef}
// 				/>

// 			</div>

// 			<div className="center">

// 				<button className="btn submit">Hop In</button>

// 			</div>

// 		</form>
// 		</div>
// 	)
// }