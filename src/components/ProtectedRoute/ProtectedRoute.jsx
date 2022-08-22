import { useState } from "react"
import { ProtectedRouteForm } from "./ProtectedRouteForm";

export const ProtectedRoute = ({ children }) => {
	const [showPage, setShowPage] = useState(false);

	if (showPage) return children;

	const handleAccessGranted = () => {
		setShowPage(true);
	}

	return (
		<ProtectedRouteForm onAccessGranted={handleAccessGranted} />
	)
}