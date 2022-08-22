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
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="password"
				placeholder="Password"
				ref={passwordInputRef}
			/>
			<button type="submit">
				Submit
			</button>
		</form>
	)
}