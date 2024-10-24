import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState(""); // Thêm biến trạng thái cho số điện thoại
	const [resetMethod, setResetMethod] = useState<"email" | "sms">("email");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Logic for sending reset link
		if (resetMethod === "email") {
			console.log(`Reset via: ${resetMethod}, Email: ${email}`);
		} else {
			console.log(`Reset via: ${resetMethod}, Phone: ${phone}`);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
				<h2 className="mb-2 text-center text-2xl font-bold text-gray-800">Forgot Password</h2>
				<p className="mb-6 text-center text-gray-600">Please select option to send link reset password</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<div
							onClick={() => setResetMethod("email")}
							className={`mb-3 flex cursor-pointer items-center rounded-lg border p-4 ${
								resetMethod === "email" ? "border-blue-500" : "border-gray-300"
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-3 h-6 w-6 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 12l-4-4m0 0l-4 4m4-4v12"
								/>
							</svg>
							<div>
								<p className="font-medium text-gray-800">Reset via Email</p>
								<p className="text-sm text-gray-500">We will send a link to reset your password</p>
							</div>
						</div>

						<div
							onClick={() => setResetMethod("sms")}
							className={`flex cursor-pointer items-center rounded-lg border p-4 ${
								resetMethod === "sms" ? "border-blue-500" : "border-gray-300"
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-3 h-6 w-6 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M2 8l6 4 6-4-6-4-6 4zm0 6v5a1 1 0 001 1h6.3l.7.7 3-3-3-3H3a1 1 0 00-1 1z"
								/>
							</svg>
							<div>
								<p className="font-medium text-gray-800">Reset via SMS</p>
								<p className="text-sm text-gray-500">We will send a link to reset your phone</p>
							</div>
						</div>
					</div>

					{resetMethod === "email" && (
						<div className="mb-6">
							<input
								type="email"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					)}

					{resetMethod === "sms" && (
						<div className="mb-6">
							<input
								type="tel"
								placeholder="Phone Number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					)}

					<button
						type="submit"
						className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
					>
						Send Link Reset Password
					</button>
				</form>
				<div className="mt-4 text-center">
					<a
						href="./Login.tsx"
						className="text-sm text-gray-500 hover:text-gray-700"
					>
						&#x2190; Back to sign in
					</a>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
