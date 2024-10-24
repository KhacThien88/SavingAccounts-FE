import React from "react";
import { useNavigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate(PathConstant.userWallet);
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
			<h1 className="mb-4 text-6xl font-bold text-blue-700">Oops!</h1>
			<p className="mb-2 text-xl font-semibold text-gray-800">404 - Page Not Found</p>
			<p className="mb-6 text-center text-gray-600">
				The page you are looking for might have been removed <br />
				had its name changed or is temporarily unavailable.
			</p>
			<button
				onClick={handleGoHome}
				className="rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				Go to Homepage
			</button>
		</div>
	);
};

export default NotFound;
