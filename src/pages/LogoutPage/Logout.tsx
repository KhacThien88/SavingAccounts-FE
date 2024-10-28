import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem("token");
		navigate("/login");
	}, [navigate]);

	return (
		<div className="flex h-screen items-center justify-center">
			<p>Logging out...</p>
		</div>
	);
};

export default Logout;
