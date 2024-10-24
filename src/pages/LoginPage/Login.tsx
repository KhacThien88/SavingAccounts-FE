import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ email, password });
	};

	const goToForgotPassword = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate(PathConstant.forgotPasswordPage);
	};

	const goToSignUp = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate(PathConstant.signUpPage);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
				<h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Hi, Welcome Back Fellas!</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="mb-2 block font-medium text-gray-700"
						>
							Email or username
						</label>
						<input
							type="text"
							id="email"
							placeholder="Email or username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="mb-2 block flex justify-between font-medium text-gray-700"
						>
							Password
							<a
								onClick={goToForgotPassword}
								className="cursor-pointer text-sm text-yellow-500 hover:text-yellow-700"
							>
								Forgot Password?
							</a>
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<span
								className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
								onClick={handleTogglePasswordVisibility}
							>
								{showPassword ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-gray-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M10 3.5C5.755 3.5 2.144 6.225 1 10c1.144 3.775 4.755 6.5 9 6.5s7.856-2.725 9-6.5c-1.144-3.775-4.755-6.5-9-6.5zm0 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-gray-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M2.293 9.707a1 1 0 011.414 0A7.968 7.968 0 0110 8c1.978 0 3.825.722 5.293 1.707a1 1 0 011.414-1.414A9.968 9.968 0 0010 6c-2.695 0-5.2 1.029-7.293 2.707a1 1 0 010 1.414zM10 12a4.978 4.978 0 01-1.979-.402 1 1 0 00-1.581 1.219A6.978 6.978 0 0010 14a6.978 6.978 0 003.56-.943 1 1 0 00-1.058-1.651A4.978 4.978 0 0110 12zM4.293 4.293a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-10-10a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</span>
						</div>
					</div>
					<button
						type="submit"
						className="mb-6 w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
					>
						Sign In
					</button>
				</form>
				<div className="mb-4 flex items-center">
					<div className="flex-grow border-t border-gray-300"></div>
					<span className="mx-2 text-sm text-gray-400">Or sign in with</span>
					<div className="flex-grow border-t border-gray-300"></div>
				</div>
				<button className="mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">
					Another Method
				</button>
				<div className="text-center">
					<span className="text-sm text-gray-500">You dont Have an Account? </span>
					<a
						onClick={goToSignUp}
						className="cursor-pointer text-sm font-medium text-yellow-500 hover:text-yellow-700"
					>
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
