import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
	return (
		<ProtectedRoute>
			<div>Access granted</div>
		</ProtectedRoute>
	)
}