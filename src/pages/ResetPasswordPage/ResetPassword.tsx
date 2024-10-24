import React, { useState } from "react";

const ResetPassword: React.FC = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleToggleNewPasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const handleToggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle reset password logic here
		console.log({ email, newPassword, confirmPassword });
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
				<h2 className="mb-2 text-center text-2xl font-bold text-gray-800">Reset Password</h2>
				<p className="mb-6 text-center text-gray-600">Create your new password</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="mb-2 block font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="new-password"
							className="mb-2 block font-medium text-gray-700"
						>
							New Password
						</label>
						<div className="relative">
							<input
								type={showNewPassword ? "text" : "password"}
								id="new-password"
								placeholder="New Password"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<span
								className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
								onClick={handleToggleNewPasswordVisibility}
							>
								{showNewPassword ? (
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
					<div className="mb-6">
						<label
							htmlFor="confirm-password"
							className="mb-2 block font-medium text-gray-700"
						>
							Confirm New Password
						</label>
						<div className="relative">
							<input
								type={showConfirmPassword ? "text" : "password"}
								id="confirm-password"
								placeholder="Confirm New Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<span
								className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
								onClick={handleToggleConfirmPasswordVisibility}
							>
								{showConfirmPassword ? (
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
						className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
					>
						Reset Password
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
